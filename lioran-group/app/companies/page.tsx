import Link from "next/link";

const branches = [
  {
    slug: "lcs",
    name: "LCS",
    summary: "R&D and systems for coordination and services.",
  },
  {
    slug: "lioran-tech",
    name: "Lioran Tech",
    summary: "Product engineering and software ventures.",
  },
  {
    slug: "future",
    name: "Future Ventures",
    summary: "Exploratory initiatives and future projects.",
  },
];

export default function CompaniesPage() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Companies</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {branches.map((b) => (
          <Link
            key={b.slug}
            href={`/companies/${b.slug}`}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700"
          >
            <h2 className="text-xl font-semibold">{b.name}</h2>
            <p className="text-slate-400 mt-2">{b.summary}</p>
            <span className="text-blue-400 mt-3 inline-block">Explore</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

