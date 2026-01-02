import Link from "next/link";

export default function LioranTechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">Lioran Tech</h1>
        <p className="text-slate-300">
          Overview, products, and team information for Lioran Tech.
        </p>
      </div>
      <nav className="flex flex-wrap gap-4">
        <Link
          href="/companies/lioran-tech"
          className="text-blue-400 hover:underline"
        >
          Overview
        </Link>
        <Link
          href="/companies/lioran-tech/products"
          className="text-blue-400 hover:underline"
        >
          Products
        </Link>
        <Link
          href="/companies/lioran-tech/team"
          className="text-blue-400 hover:underline"
        >
          Team
        </Link>
      </nav>
      {children}
    </section>
  );
}

