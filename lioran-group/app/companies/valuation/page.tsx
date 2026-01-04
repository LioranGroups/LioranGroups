import type { Metadata } from "next";

/* -------------------- METADATA -------------------- */
export const metadata: Metadata = {
  title: "Company Valuation | Lioran Group",
  description:
    "Current valuation, total shares, per-share value, and founder equity distribution of Lioran Group.",
};

/* -------------------- VALUATION DATA -------------------- */
const valuationData = {
  totalValuation: 7_337, // INR
  totalShares: 3_000_000, // 3 million shares
  currency: "INR",
  founders: [
    {
      name: "Swaraj Puppalwar",
      role: "Co-Founder & CTO",
      equity: 34,
    },
    {
      name: "Shreyash Raipure",
      role: "Co-Founder, CEO & CFO",
      equity: 33,
    },
    {
      name: "Pranay Kumeriya",
      role: "Co-Founder & COO",
      equity: 33,
    },
  ],
};

/* -------------------- HELPERS -------------------- */
function formatINR(value: number): string {
  if (value >= 1e7) return `₹${(value / 1e7).toFixed(2)}C`;
  if (value >= 1e5) return `₹${(value / 1e5).toFixed(2)}L`;
  if (value >= 1e3) return `₹${(value / 1e3).toFixed(2)}K`;
  return `₹${value.toFixed(2)}`;
}

/* -------------------- PAGE -------------------- */
export default function ValuationPage() {
  const valuePerShare =
    valuationData.totalValuation / valuationData.totalShares;

  return (
    <section className="px-6 py-16 max-w-5xl mx-auto space-y-10">
      {/* Header */}
      <header>
        <h1 className="text-3xl md:text-4xl font-bold">
          Company Valuation
        </h1>
        <p className="text-slate-400 mt-3 max-w-2xl">
          An overview of Lioran Group’ current valuation, total shares,
          and founder equity distribution.
        </p>
      </header>

      {/* Valuation Summary */}
      <section className="bg-black border border-slate-800 rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">
          Valuation Summary
        </h2>

        <table className="w-full text-left border-collapse">
          <tbody>
            <tr className="border-b border-slate-800">
              <th className="py-3 text-slate-400 font-medium">
                Total Company Valuation
              </th>
              <td className="py-3 text-slate-200 font-semibold">
                {formatINR(valuationData.totalValuation)}
              </td>
            </tr>

            <tr className="border-b border-slate-800">
              <th className="py-3 text-slate-400 font-medium">
                Total Shares
              </th>
              <td className="py-3 text-slate-200">
                {valuationData.totalShares.toLocaleString()} shares
              </td>
            </tr>

            <tr>
              <th className="py-3 text-slate-400 font-medium">
                Value per Share
              </th>
              <td className="py-3 text-slate-200 font-semibold">
                {formatINR(valuePerShare)}
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Equity Distribution */}
      <section>
        <h2 className="text-xl font-semibold mb-4">
          Founder Equity Distribution
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-slate-800 rounded-xl overflow-hidden">
            <thead className="bg-slate-900">
              <tr>
                <th className="px-4 py-3 text-left text-slate-300 font-medium">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-slate-300 font-medium">
                  Role
                </th>
                <th className="px-4 py-3 text-left text-slate-300 font-medium">
                  Equity %
                </th>
                <th className="px-4 py-3 text-left text-slate-300 font-medium">
                  Shares
                </th>
                <th className="px-4 py-3 text-left text-slate-300 font-medium">
                  Share Value
                </th>
              </tr>
            </thead>

            <tbody>
              {valuationData.founders.map((founder) => {
                const sharesOwned =
                  (valuationData.totalShares * founder.equity) / 100;

                const shareValue =
                  (valuationData.totalValuation * founder.equity) / 100;

                return (
                  <tr
                    key={founder.name}
                    className="border-t border-slate-800"
                  >
                    <td className="px-4 py-3 text-slate-200">
                      {founder.name}
                    </td>
                    <td className="px-4 py-3 text-slate-400">
                      {founder.role}
                    </td>
                    <td className="px-4 py-3 text-slate-200">
                      {founder.equity}%
                    </td>
                    <td className="px-4 py-3 text-slate-200">
                      {sharesOwned.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-slate-200 font-semibold">
                      {formatINR(shareValue)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Note */}
      <section className="text-sm text-slate-400">
        <p>
          This valuation is an internal assessment of Lioran Group.
          Share value and ownership may change based on future funding,
          revenue, and market conditions.
        </p>
      </section>
    </section>
  );
}
