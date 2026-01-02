export default function AboutPage() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold">About Lioran Group</h1>
      <p className="text-slate-300">
        Lioran Group was formed to build durable, technology-driven ventures with
        a focus on slow, sustainable growth. We prioritize strong foundations,
        pragmatic execution, and long-term value creation.
      </p>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Vision</h2>
        <p className="text-slate-300">
          We are rooted in India with a global outlook. Our philosophy emphasizes
          disciplined product development, ethical business practices, and steady expansion.
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Ethics & Principles</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2">
          <li>Sustainable growth over short-term gains</li>
          <li>Transparency and accountability</li>
          <li>User-centric design and engineering</li>
          <li>Thoughtful stewardship of technology</li>
        </ul>
      </div>
    </section>
  );
}

