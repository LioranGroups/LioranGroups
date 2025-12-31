export default function HostelBuddyPage() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold">Hostel Buddy</h1>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Problem</h2>
        <p className="text-slate-300">
          Hostel operations need structured tooling for booking, coordination, and reporting.
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Solution</h2>
        <p className="text-slate-300">
          A reliable, clear system for managing hostel workflows, aligned with practical needs.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold">Who it’s for</h3>
          <p className="text-slate-300">Hostel operators and managers.</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold">Status</h3>
          <p className="text-slate-300">R&D</p>
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

