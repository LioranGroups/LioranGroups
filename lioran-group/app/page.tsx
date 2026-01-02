"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Token = {
  text: string;
  color: string;
};

type CodeLine = Token[];

const CODE_LINES: CodeLine[] = [
  [
    { text: "struct", color: "text-sky-400" },
    { text: " LioranGroup", color: "text-emerald-400" },
    { text: " {", color: "text-orange-400" },
  ],
  [
    { text: "  founded", color: "text-purple-400" },
    { text: ": ", color: "text-white/70" },
    { text: "2025", color: "text-amber-400" },
    { text: ",", color: "text-orange-400" },
  ],
  [
    { text: "  origin", color: "text-purple-400" },
    { text: ": ", color: "text-white/70" },
    { text: "\"An idea that grew into a startup\"", color: "text-amber-400" },
    { text: ",", color: "text-orange-400" },
  ],
  [
    { text: "  mission", color: "text-purple-400" },
    { text: ": ", color: "text-white/70" },
    { text: "\"Build long-term systems\"", color: "text-amber-400" },
    { text: ",", color: "text-orange-400" },
  ],
  [
    { text: "  focus", color: "text-purple-400" },
    { text: ": ", color: "text-white/70" },
    { text: "vec!", color: "text-sky-400" },
    { text: "[", color: "text-orange-400" },
  ],
  [
    { text: "    ", color: "" },
    { text: "\"Technology\"", color: "text-amber-400" },
    { text: ",", color: "text-orange-400" },
  ],
  [
    { text: "    ", color: "" },
    { text: "\"Scalability\"", color: "text-amber-400" },
    { text: ",", color: "text-orange-400" },
  ],
  [
    { text: "    ", color: "" },
    { text: "\"Strong foundations\"", color: "text-amber-400" },
    { text: ",", color: "text-orange-400" },
  ],
  [
    { text: "  ]", color: "text-orange-400" },
    { text: ",", color: "text-orange-400" },
  ],
  [{ text: "}", color: "text-orange-400" }],
];

const TERMINAL_OUTPUT = [
  "$ initializing Lioran-Group",
  "[ OK ] registering idea (2025)",
  "[ OK ] forming core team",
  "[ OK ] building first systems",
  "[ OK ] launching early products",
  "[ NEXT ] scaling responsibly",
  "[ RUNNING ] long-term execution mode",
];

export default function HomePage() {
  const [typedLines, setTypedLines] = useState<CodeLine[]>([]);
  const [outputLines, setOutputLines] = useState<string[]>([]);
  const [phase, setPhase] = useState<"typing" | "output">("typing");

  useEffect(() => {
    let timers: NodeJS.Timeout[] = [];

    const start = () => {
      setTypedLines([]);
      setOutputLines([]);
      setPhase("typing");

      CODE_LINES.forEach((line, i) => {
        timers.push(
          setTimeout(() => {
            setTypedLines((p) => [...p, line]);
          }, 120 * i)
        );
      });

      timers.push(
        setTimeout(() => {
          setPhase("output");
          TERMINAL_OUTPUT.forEach((line, i) => {
            timers.push(
              setTimeout(() => {
                setOutputLines((p) => [...p, line]);
              }, 220 * i)
            );
          });
        }, 2500)
      );
    };

    start();
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="px-6 py-24 max-w-7xl mx-auto space-y-32">
      {/* Hero */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Lioran Group
        </h1>

        <p className="text-white/70 max-w-2xl mx-auto">
          A technology group focused on building long-term, scalable products.
          We design systems meant to last — not chase trends.
        </p>

        <div className="flex justify-center gap-3">
          <a
            href="/companies"
            className="h-10 px-5 rounded-lg bg-white text-black text-sm font-medium inline-flex items-center"
          >
            Explore Companies
          </a>
          <a
            href="/careers"
            className="h-10 px-5 rounded-lg border border-white/15 text-white text-sm font-medium inline-flex items-center"
          >
            View Careers
          </a>
        </div>
      </div>

      {/* Explanation */}
      <div className="grid md:grid-cols-3 gap-10 text-sm text-slate-400">
        <div>
          <h3 className="text-white font-semibold mb-2">Why Lioran</h3>
          <p>
            We started Lioran to build systems that solve real operational
            problems, not short-lived tools. Longevity and clarity come first.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">What We Offer</h3>
          <p>
            Infrastructure-driven products, internal platforms, and focused
            software built for reliability, scale, and simplicity.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">How It Started</h3>
          <p>
            In 2025, Lioran began as an idea. Through consistent execution, it
            evolved into a structured startup with clear long-term direction.
          </p>
        </div>
      </div>

      {/* Code + Terminal */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Code */}
        <motion.pre className="bg-[#0b0f14] h-[420px] rounded-xl p-6 border border-white/10 font-mono text-sm overflow-y-auto">
          {typedLines.map((line, i) => (
            <div key={i} className="whitespace-pre">
              {line.map((token, j) => (
                <span key={j} className={token.color}>
                  {token.text}
                </span>
              ))}
            </div>
          ))}
          {phase === "typing" && (
            <span className="inline-block w-2 h-4 bg-white/60 ml-1 animate-pulse" />
          )}
        </motion.pre>

        {/* Terminal */}
        <motion.div className="bg-black h-[420px] rounded-xl border border-white/10 p-6 font-mono text-sm overflow-y-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 bg-red-500 rounded-full" />
            <span className="w-3 h-3 bg-yellow-500 rounded-full" />
            <span className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="ml-3 text-white/60">lioran@system</span>
          </div>

          {outputLines.map((line, i) => (
            <div key={i} className="text-emerald-400">
              {line}
            </div>
          ))}

          {phase === "output" && (
            <span className="inline-block w-2 h-4 bg-emerald-400 ml-1 animate-pulse" />
          )}
        </motion.div>
      </div>

      {/* Roadmap */}
      <div className="max-w-3xl space-y-6">
        <h2 className="text-2xl font-semibold text-white">Roadmap</h2>
        <ul className="space-y-3 text-slate-400 text-sm">
          <li>• 2025 — Concept, foundation, early internal builds</li>
          <li>• 2026 — Product stabilization and limited public access</li>
          <li>• 2027 — Scaling core platforms and infrastructure</li>
          <li>• Long-term — Multi-sector expansion with strong fundamentals</li>
        </ul>
      </div>
    </section>
  );
}
