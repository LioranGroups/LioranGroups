import Link from "next/link";

const products = [
  {
    slug: "hushar-spreadsheet",
    link: "/companies/lioran-tech/products/hushar-spreadsheet",
    name: "Hushar Spreadsheet",
    status: "Alpha · Restricted Access",
    description:
      "Agent-driven spreadsheet system designed for users who dislike traditional spreadsheets.",
    badgeColor: "text-sky-400",
  },
  {
    slug: "hostel-buddy",
    link: "/companies/lioran-tech/products/hostel-buddy",
    name: "Hostel Buddy",
    status: "R&D · Under Development",
    description:
      "Digital companion for simplifying hostel operations and student coordination.",
    badgeColor: "text-yellow-400",
  },
];

export default function ProductsPage() {
  return (
    <section className="bg-black px-6 py-16 max-w-6xl mx-auto">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Products
        </h1>
        <p className="text-slate-400 mt-3 max-w-2xl">
          Products built under Lioran Tech, focused on practical systems and
          real-world usability.
        </p>
      </header>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {products.map((p) => (
          <Link
            key={p.slug}
            href={p.link}
            className="group bg-black border border-slate-800 rounded-2xl p-6 transition hover:border-slate-700"
          >
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-white">
                {p.name}
              </h2>

              <p className="text-slate-400 text-sm leading-relaxed">
                {p.description}
              </p>

              <div className="flex items-center justify-between pt-2">
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full bg-slate-900 ${p.badgeColor}`}
                >
                  {p.status}
                </span>

                <span className="text-sky-400 text-sm group-hover:underline">
                  View details →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
