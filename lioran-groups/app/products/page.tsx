import Link from "next/link";

const products = [
  {
    slug: "hushar-spreadsheet",
    name: "Hushar Spreadsheet",
    status: "Alpha",
  },
  {
    slug: "hostel-buddy",
    name: "Hostel Buddy",
    status: "R&D",
  },
];

export default function ProductsPage() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Products</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {products.map((p) => (
          <Link
            key={p.slug}
            href={`/products/${p.slug}`}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700"
          >
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-slate-400 mt-2">Status: {p.status}</p>
            <span className="text-blue-400 mt-3 inline-block">View</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

