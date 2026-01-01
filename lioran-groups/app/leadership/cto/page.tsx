import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Youtube,
  Instagram,
  Twitter,
  Globe,
} from "lucide-react";

/* -------------------- METADATA -------------------- */
export const metadata: Metadata = {
  title: "CTO | Swaraj Puppalwar | Lioran Groups",
  description:
    "Swaraj Puppalwar is the Founder & CTO of Lioran Groups, leading system architecture, backend platforms, and long-term technical vision.",
  keywords: [
    "Swaraj Puppalwar",
    "CTO Lioran Groups",
    "Founder CTO",
    "Full Stack Developer",
    "System Architect",
  ],
  openGraph: {
    title: "Swaraj Puppalwar | Founder & CTO | Lioran Groups",
    description:
      "Founder & CTO of Lioran Groups, focused on scalable systems, backend architecture, and real-world product engineering.",
    type: "profile",
    images: [
      {
        url: "/founders/swaraj-f.jpeg",
        width: 768,
        height: 949,
        alt: "Swaraj Puppalwar",
      },
    ],
  },
};

/* -------------------- PAGE -------------------- */
export default function CTOPage() {
  return (
    <section className="px-4 sm:px-6 py-16 max-w-5xl mx-auto">
      {/* Header */}
      <header className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
        <Image
          src="/founders/swaraj-f.jpeg"
          alt="Swaraj Puppalwar"
          width={160}
          height={160}
          className="rounded-2xl border border-slate-800 object-cover"
          priority
        />

        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">
            Swaraj Puppalwar
          </h1>
          <p className="text-sky-400 mt-2 text-lg">
            Founder & Chief Technology Officer — Lioran Groups
          </p>

          <p className="text-slate-300 mt-4 leading-relaxed">
            Full-Stack Web Developer and system architect who began building
            software at the age of 11. Driven by curiosity, clean engineering,
            and real-world problem solving, Swaraj leads the technical vision
            and architecture of Lioran Groups.
          </p>

          {/* Social Links */}
          <div className="flex justify-center sm:justify-start gap-5 mt-5">
            <Link
              href="https://github.com/UltronTheAI"
              target="_blank"
              aria-label="GitHub"
              className="text-slate-400 hover:text-sky-400 transition"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://youtube.com/@proepiccoder"
              target="_blank"
              aria-label="YouTube"
              className="text-slate-400 hover:text-sky-400 transition"
            >
              <Youtube className="w-5 h-5" />
            </Link>
            <Link
              href="https://instagram.com/pro_epic_programmer"
              target="_blank"
              aria-label="Instagram"
              className="text-slate-400 hover:text-sky-400 transition"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://twitter.com/PuppalwarSwaraj"
              target="_blank"
              aria-label="Twitter"
              className="text-slate-400 hover:text-sky-400 transition"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="https://ultron-the-ai.vercel.app/"
              target="_blank"
              aria-label="Portfolio"
              className="text-slate-400 hover:text-sky-400 transition"
            >
              <Globe className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Content Sections */}
      <div className="mt-14 space-y-12">
        {/* Role & Focus */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Role & Focus</h2>
          <p className="text-slate-300 leading-relaxed">
            As CTO of Lioran Groups, Swaraj is responsible for system design,
            backend architecture, engineering standards, and long-term technical
            strategy. His work focuses on building scalable platforms, cloud-
            native services, and production-ready systems that can grow over
            time without complexity.
          </p>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Technical Expertise</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300">
            <li><span className="text-slate-200">Frontend:</span> React, Next.js, React Native</li>
            <li><span className="text-slate-200">Backend:</span> Node.js, Express.js, Python</li>
            <li><span className="text-slate-200">Databases:</span> MongoDB, PostgreSQL</li>
            <li><span className="text-slate-200">APIs:</span> REST, GraphQL</li>
            <li><span className="text-slate-200">AI & Data:</span> NumPy, Pandas, TensorFlow, LangChain</li>
            <li><span className="text-slate-200">DevOps:</span> Docker, Kubernetes, CI/CD, Nginx</li>
          </ul>
        </section>

        {/* Philosophy */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Engineering Philosophy</h2>
          <p className="text-slate-300 leading-relaxed">
            Swaraj believes in writing clean, understandable code instead of
            over-engineering. He focuses on building real products, shipping
            fast, learning from iteration, and designing systems that remain
            simple today while scaling reliably tomorrow.
          </p>
        </section>

        {/* Systems Leadership */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Systems & Infrastructure Leadership</h2>
          <p className="text-slate-300 leading-relaxed">
            He architects and leads development for Lioran’s internal platforms
            including authentication, databases, deployment pipelines, storage,
            and cloud infrastructure — ensuring reliability, security, and
            scalability across all products.
          </p>
        </section>
      </div>
    </section>
  );
}
