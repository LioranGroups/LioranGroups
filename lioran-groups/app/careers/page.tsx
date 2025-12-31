export default function CareersPage() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold">Careers</h1>
      <p className="text-slate-300">
        We are not hiring actively. If you are interested in collaborating,
        contributing, or exploring internships, reach out with context and work
        samples.
      </p>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Culture & Expectations</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2">
          <li>Ownership and craftsmanship</li>
          <li>Disciplined execution and reliability</li>
          <li>Clear communication</li>
          <li>Builder mindset</li>
        </ul>
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Opportunities</h2>
        <p className="text-slate-300">
          Internships and contributor roles may be available within specific
          products or branches. Contact us with details.
        </p>
      </div>
    </section>
  );
}

