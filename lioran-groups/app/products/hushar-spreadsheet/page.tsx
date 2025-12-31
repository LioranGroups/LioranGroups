export default function HusharSpreadsheetPage() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold">Hushar Spreadsheet</h1>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Problem</h2>
        <p className="text-slate-300">
          Many teams need structured spreadsheets with workflow and collaboration
          features without complexity.
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Solution</h2>
        <p className="text-slate-300">
          A pragmatic spreadsheet with opinionated features for clarity, reliability,
          and team workflows.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold">Who it’s for</h3>
          <p className="text-slate-300">
            Teams and operators who value simplicity and consistent workflows.
          </p>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold">Status</h3>
          <p className="text-slate-300">Alpha</p>
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Contact / Early Access</h2>
        <p className="text-slate-300">
          Reach out for early access or collaboration.
        </p>
      </div>
    </section>
  );
}

