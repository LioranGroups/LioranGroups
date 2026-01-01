export default function HusharSpreadsheetBranchPage() {
  return (
    <section className="space-y-10 max-w-4xl">
      {/* Title */}
      <header className="space-y-3">
        <h2 className="text-3xl font-semibold">Hushar Spreadsheet</h2>
        <p className="text-slate-300 max-w-2xl">
          A modern, agent-driven spreadsheet system designed for people who
          hate traditional spreadsheets but still need powerful results.
        </p>
      </header>

      {/* What it is */}
      <section className="space-y-3">
        <h3 className="text-xl font-medium">What is Hushar Spreadsheet?</h3>
        <p className="text-slate-300">
          Hushar Spreadsheet is an agentic spreadsheet platform that replaces
          manual formulas, complex tables, and repetitive data work with simple
          instructions and structured actions.
        </p>
        <p className="text-slate-300">
          Instead of learning spreadsheet logic, users describe what they want
          to achieve — and the system handles the structure, placement, and
          consistency automatically.
        </p>
      </section>

      {/* Problem */}
      <section className="space-y-3">
        <h3 className="text-xl font-medium">The Problem</h3>
        <p className="text-slate-300">
          Traditional spreadsheet tools are powerful, but they are built for
          experts. Most people struggle with formulas, formatting rules,
          references, and error-prone manual entry.
        </p>
        <p className="text-slate-300">
          This leads to wasted time, mistakes, and frustration — especially for
          teachers, administrators, small teams, and non-technical users.
        </p>
      </section>

      {/* Solution */}
      <section className="space-y-3">
        <h3 className="text-xl font-medium">The Solution</h3>
        <p className="text-slate-300">
          Hushar Spreadsheet introduces an agent-based approach where the system
          understands intent and performs spreadsheet tasks on the user’s
          behalf.
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-2">
          <li>Fill data without touching rows or columns</li>
          <li>Automatically structure tables from plain instructions</li>
          <li>Reduce repetitive entry and formatting work</li>
          <li>Maintain consistency across large datasets</li>
        </ul>
      </section>

      {/* Who it's for */}
      <section className="space-y-3">
        <h3 className="text-xl font-medium">Who It’s For</h3>
        <ul className="list-disc list-inside text-slate-300 space-y-2">
          <li>People who dislike Excel but still need spreadsheets</li>
          <li>Teachers and administrators handling large data sets</li>
          <li>Small teams managing records, reports, or logs</li>
          <li>Global users who prefer simplicity over complexity</li>
        </ul>
      </section>

      {/* Positioning */}
      <section className="space-y-3">
        <h3 className="text-xl font-medium">Positioning</h3>
        <p className="text-slate-300">
          Hushar Spreadsheet is not just another spreadsheet tool.
          It is a productivity system that shifts the focus from
          <span className="text-slate-100"> how spreadsheets work </span>
          to
          <span className="text-slate-100"> what users want to achieve</span>.
        </p>
      </section>

      {/* Footer note */}
      <footer className="pt-4 text-sm text-slate-400">
        Hushar Spreadsheet is a product under <strong>Lioran Tech</strong>,
        built for global use with simplicity, speed, and clarity at its core.
      </footer>
    </section>
  );
}
