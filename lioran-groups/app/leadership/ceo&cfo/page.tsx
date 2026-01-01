import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

/* -------------------- METADATA -------------------- */
export const metadata: Metadata = {
  title: "CEO & CFO | Shreyash Raipura | Lioran Groups",
  description:
    "Shreyash Raipura is the Co-Founder, CEO & CFO of Lioran Groups, leading company vision, finance, and long-term business strategy.",
  keywords: [
    "Shreyash Raipura",
    "CEO Lioran Groups",
    "CFO Lioran Groups",
    "Startup CEO",
    "Business Strategy",
  ],
  openGraph: {
    title: "Shreyash Raipura | Co-Founder, CEO & CFO | Lioran Groups",
    description:
      "Co-Founder, CEO & CFO of Lioran Groups, driving vision, financial strategy, and long-term growth.",
    type: "profile",
  },
};

/* -------------------- PAGE -------------------- */
export default function CEOCFOPage() {
  return (
    <section className="px-4 sm:px-6 py-16 max-w-5xl mx-auto">
      {/* Header */}
      <header className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
        <Image
          src="/founders/shreyash-f.jpeg"
          alt="Shreyash Raipura"
          width={160}
          height={160}
          className="rounded-2xl border border-slate-800 object-cover"
          priority
        />

        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">
            Shreyash Raipura
          </h1>
          <p className="text-sky-400 mt-2 text-lg">
            Co-Founder, Chief Executive Officer & Chief Financial Officer
          </p>

          <p className="text-slate-300 mt-4 leading-relaxed">
            Strategic leader responsible for defining the long-term direction
            of Lioran Groups. As CEO & CFO, Shreyash oversees company vision,
            financial planning, capital allocation, and partnerships — ensuring
            sustainable growth with disciplined execution.
          </p>

          {/* Social */}
          <div className="flex justify-center sm:justify-start gap-5 mt-5">
            <Link
              href="https://www.instagram.com/shreyash_ak31/"
              target="_blank"
              aria-label="Instagram"
              className="text-slate-400 hover:text-sky-400 transition"
            >
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="mt-14 space-y-12">
        {/* Role */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Leadership Role</h2>
          <p className="text-slate-300 leading-relaxed">
            Shreyash leads overall company strategy and financial governance at
            Lioran Groups. His role bridges long-term vision with short-term
            execution, ensuring the company grows responsibly while maintaining
            operational and financial discipline.
          </p>
        </section>

        {/* Focus Areas */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Core Focus Areas</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300">
            <li>Company vision & direction</li>
            <li>Financial planning & budgeting</li>
            <li>Capital allocation</li>
            <li>Business strategy</li>
            <li>Partnerships & negotiations</li>
            <li>Long-term growth planning</li>
          </ul>
        </section>

        {/* Philosophy */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Leadership Philosophy</h2>
          <p className="text-slate-300 leading-relaxed">
            Shreyash believes sustainable companies are built through clear
            vision, financial discipline, and strong teams. His leadership
            approach prioritizes long-term value creation over short-term wins,
            ensuring Lioran Groups scales with stability and purpose.
          </p>
        </section>

        {/* Impact */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Impact at Lioran Groups</h2>
          <p className="text-slate-300 leading-relaxed">
            By aligning strategy, finance, and execution, Shreyash ensures
            Lioran Groups operates with clarity and direction — empowering
            teams to innovate while maintaining strong financial foundations.
          </p>
        </section>
      </div>
    </section>
  );
}
