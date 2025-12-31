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
    { text: " LioranGroups", color: "text-emerald-400" },
    { text: " {", color: "text-orange-400" },
  ],
  [
    { text: "  mission", color: "text-purple-400" },
    { text: ": ", color: "text-white/70" },
    { text: "\"Long-term ventures\"", color: "text-amber-400" },
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
  [],
  [
    { text: "fn", color: "text-sky-400" },
    { text: " execute", color: "text-emerald-400" },
    { text: "()", color: "text-orange-400" },
    { text: " {", color: "text-orange-400" },
  ],
  [
    { text: "  println!", color: "text-sky-400" },
    { text: "(", color: "text-orange-400" },
    { text: "\"Building the future.\"", color: "text-amber-400" },
    { text: ")", color: "text-orange-400" },
    { text: ";", color: "text-orange-400" },
  ],
  [{ text: "}", color: "text-orange-400" }],
];

const TERMINAL_OUTPUT = [
  "[ OK ] Initializing Lioran Groups",
  "[ OK ] Loading ventures",
  "[ OK ] Verifying foundations",
  "[ OK ] Executing long-term vision",
  "[ DONE ] System running",
  "[ LOG ] Building the future.",
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
          }, (5000 / CODE_LINES.length) * i)
        );
      });

      timers.push(
        setTimeout(() => {
          setPhase("output");
          TERMINAL_OUTPUT.forEach((line, i) => {
            timers.push(
              setTimeout(() => {
                setOutputLines((p) => [...p, line]);
              }, (3000 / TERMINAL_OUTPUT.length) * i)
            );
          });
        }, 5000)
      );

      timers.push(setTimeout(start, 13000));
    };

    start();
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="px-6 py-24 max-w-7xl mx-auto space-y-32">
      {/* Hero */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Lioran Groups
        </h1>

        <p className="text-white/70 max-w-2xl mx-auto">
          Technology-driven ventures focused on long-term, scalable products.
          Built with strong foundations and sustainable growth in mind.
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
    </section>
  );
}
