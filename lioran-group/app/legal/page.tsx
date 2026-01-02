import Link from "next/link";

export default function LegalPage() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold">Legal</h1>
      <p className="text-slate-300">
        Policies and terms governing use of Lioran Groups products and properties.
      </p>
      <ul className="space-y-3">
        <li>
          <Link href="/legal/privacy" className="text-blue-400 hover:underline">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link href="/legal/terms" className="text-blue-400 hover:underline">
            Terms of Use
          </Link>
        </li>
        <li>
          <Link href="/legal/refund" className="text-blue-400 hover:underline">
            Refund Policy
          </Link>
        </li>
      </ul>
    </section>
  );
}

