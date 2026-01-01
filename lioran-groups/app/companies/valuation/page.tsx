import type { Metadata } from "next";

/* -------------------- METADATA -------------------- */
export const metadata: Metadata = {
  title: "Company Valuation | Lioran Groups",
  description:
    "Current valuation and equity distribution of Lioran Groups, including founder ownership and share value.",
};

/* -------------------- PAGE -------------------- */
export default function ValuationPage() {
  return (
    <section className="px-6 py-16 max-w-5xl mx-auto space-y-10">
      {/* Header */}
      <header>
        <h1 className="text-3xl md:text-4xl font-bold">
          Company Valuation
        </h1>
        <p className="text-slate-400 mt-3 max-w-2xl">
          An overview of Lioran Groups’ current valuation and founder equity
          distribution.
        </p>
      </header>

      {/* Valuation Summary */}
      <section className="bg-black border border-slate-800 rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">Valuation Summary</h2>

        <table className="w-full text-left border-collapse">
          <tbody>
            <tr className="border-b border-slate-800">
              <th className="py-3 text-slate-400 font-medium">
                Total Company Valuation
              </th>
              <td className="py-3 text-slate-200 font-semibold">
                ₹7,350
              </td>
            </tr>
            <tr>
              <th className="py-3 text-slate-400 font-medium">
                Currency
              </th>
              <td className="py-3 text-slate-200">
                Indian Rupees (INR)
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
                  Share Value (₹)
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t border-slate-800">
                <td className="px-4 py-3 text-slate-200">
                  Swaraj Puppalwar
                </td>
                <td className="px-4 py-3 text-slate-400">
                  Co-Founder & CTO
                </td>
                <td className="px-4 py-3 text-slate-200">
                  34%
                </td>
                <td className="px-4 py-3 text-slate-200 font-semibold">
                  ₹2,499
                </td>
              </tr>

              <tr className="border-t border-slate-800">
                <td className="px-4 py-3 text-slate-200">
                  Shreyash Raipure
                </td>
                <td className="px-4 py-3 text-slate-400">
                  Co-Founder, CEO & CFO
                </td>
                <td className="px-4 py-3 text-slate-200">
                  33%
                </td>
                <td className="px-4 py-3 text-slate-200 font-semibold">
                  ₹2,425.50
                </td>
              </tr>

              <tr className="border-t border-slate-800">
                <td className="px-4 py-3 text-slate-200">
                  Pranay Kumeriya
                </td>
                <td className="px-4 py-3 text-slate-400">
                  Co-Founder & COO
                </td>
                <td className="px-4 py-3 text-slate-200">
                  33%
                </td>
                <td className="px-4 py-3 text-slate-200 font-semibold">
                  ₹2,425.50
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Note */}
      <section className="text-sm text-slate-400">
        <p>
          This valuation reflects the current internal assessment of Lioran
          Groups and may change as products, revenue, and market conditions
          evolve.
        </p>
      </section>
    </section>
  );
}
