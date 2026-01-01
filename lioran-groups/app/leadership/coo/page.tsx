import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

/* -------------------- METADATA -------------------- */
export const metadata: Metadata = {
  title: "COO | Pranay Kumeriya | Lioran Groups",
  description:
    "Pranay Kumeriya is the Co-Founder & COO of Lioran Groups, leading operations, execution, and delivery across all products.",
  keywords: [
    "Pranay Kumeriya",
    "COO Lioran Groups",
    "Operations Lead",
    "Startup COO",
  ],
  openGraph: {
    title: "Pranay Kumeriya | Co-Founder & COO | Lioran Groups",
    description:
      "Co-Founder & COO at Lioran Groups, responsible for execution, operations, and process optimization.",
    type: "profile",
    images: [
      {
        url: "/founders/pranay-f.jpeg",
        width: 160,
        height: 160,
        alt: "Pranay Kumeriya",
      },
    ],
  },
};

/* -------------------- PAGE -------------------- */
export default function COOPage() {
  return (
    <section className="px-4 sm:px-6 py-16 max-w-5xl mx-auto">
      {/* Header */}
      <header className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
        <Image
          src="/founders/pranay-f.jpeg"
          alt="Pranay Kumeriya"
          width={160}
          height={160}
          className="rounded-2xl border border-slate-800 object-cover"
          priority
        />

        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">
            Pranay Kumeriya
          </h1>
          <p className="text-sky-400 mt-2 text-lg">
            Co-Founder & Chief Operating Officer — Lioran Groups
          </p>

          <p className="text-slate-300 mt-4 leading-relaxed">
            Execution-focused leader responsible for turning strategy into
            reality. As COO of Lioran Groups, Pranay oversees operations,
            delivery pipelines, and internal coordination to ensure products
            move from planning to production smoothly.
          </p>

          {/* Social */}
          <div className="flex justify-center sm:justify-start gap-5 mt-5">
            <Link
              href="https://www.instagram.com/pranay_kumeriya_11/"
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
          <h2 className="text-xl font-semibold mb-3">Role & Responsibilities</h2>
          <p className="text-slate-300 leading-relaxed">
            Pranay leads day-to-day operations at Lioran Groups, ensuring teams,
            timelines, and execution remain aligned with company goals. He
            focuses on operational clarity, accountability, and delivery across
            all verticals.
          </p>
        </section>

        {/* Focus Areas */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Operational Focus</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300">
            <li>Product execution & delivery</li>
            <li>Process optimization</li>
            <li>Cross-team coordination</li>
            <li>Operational planning</li>
            <li>Workflow efficiency</li>
            <li>Scaling internal operations</li>
          </ul>
        </section>

        {/* Philosophy */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Operating Philosophy</h2>
          <p className="text-slate-300 leading-relaxed">
            Pranay believes strong execution is the foundation of any successful
            company. His approach emphasizes clear processes, disciplined
            follow-through, and consistent improvement — ensuring ideas turn
            into reliable, scalable outcomes.
          </p>
        </section>

        {/* Impact */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Impact at Lioran Groups</h2>
          <p className="text-slate-300 leading-relaxed">
            By bridging strategy and execution, Pranay plays a critical role in
            maintaining operational stability as Lioran Groups grows, enabling
            teams to move faster without losing structure or quality.
          </p>
        </section>
      </div>
    </section>
  );
}
