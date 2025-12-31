import Link from "next/link";

export default function LcsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">LCS</h1>
        <p className="text-slate-300">
          Overview, products, technology, roadmap, and contact.
        </p>
      </div>
      <nav className="flex flex-wrap gap-4">
        <Link href="/companies/lcs" className="text-blue-400 hover:underline">
          Overview
        </Link>
        <Link
          href="/companies/lcs/products"
          className="text-blue-400 hover:underline"
        >
          Products
        </Link>
        <Link
          href="/companies/lcs/technology"
          className="text-blue-400 hover:underline"
        >
          Technology
        </Link>
        <Link
          href="/companies/lcs/roadmap"
          className="text-blue-400 hover:underline"
        >
          Roadmap
        </Link>
        <Link
          href="/companies/lcs/contact"
          className="text-blue-400 hover:underline"
        >
          Contact
        </Link>
      </nav>
      {children}
    </section>
  );
}

