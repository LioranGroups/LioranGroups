export default function HostelBuddyBranchPage() {
  return (
    <section className="space-y-10 max-w-4xl">
      {/* Header */}
      <header className="space-y-3">
        <h2 className="text-2xl font-semibold">Hostel Buddy</h2>
        <p className="text-slate-300 leading-relaxed">
          Hostel Buddy is a digital companion designed to simplify everyday hostel
          life for students and reduce operational friction for hostel management.
          It focuses on clarity, coordination, and accountability — without complexity.
        </p>
      </header>

      {/* Problem */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">The Problem</h3>
        <p className="text-slate-400 leading-relaxed">
          Hostel environments often suffer from scattered communication, manual
          record-keeping, delayed issue resolution, and lack of transparency.
          Students struggle to raise concerns, while wardens and administrators
          manage everything through paperwork, calls, or informal channels.
        </p>
      </div>

      {/* Solution */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">The Solution</h3>
        <p className="text-slate-400 leading-relaxed">
          Hostel Buddy centralizes hostel operations into a single, easy-to-use
          system. From student requests to notices and daily coordination, it
          creates a structured flow of information between students and management.
        </p>
      </div>

      {/* Key Capabilities */}
      <div className="space-y-3">
        <h3 className="text-lg font-medium">Core Capabilities</h3>
        <ul className="list-disc list-inside text-slate-400 space-y-2">
          <li>Student issue and request submission with clear tracking</li>
          <li>Central notice and announcement distribution</li>
          <li>Digital records for hostel-related activities</li>
          <li>Reduced dependency on manual registers and verbal communication</li>
          <li>Simple workflows designed for real hostel conditions</li>
        </ul>
      </div>

      {/* Design Philosophy */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Design Philosophy</h3>
        <p className="text-slate-400 leading-relaxed">
          Hostel Buddy is built using a design-thinking approach. Every feature
          starts from a real pain point observed in hostel life — not assumptions.
          The product prioritizes simplicity, low learning curve, and practical
          usefulness over feature overload.
        </p>
      </div>

      {/* Who It’s For */}
      <div className="space-y-3">
        <h3 className="text-lg font-medium">Who It’s For</h3>
        <ul className="list-disc list-inside text-slate-400 space-y-2">
          <li>Students living in hostels</li>
          <li>Hostel wardens and supervisors</li>
          <li>Educational institutions managing residential facilities</li>
        </ul>
      </div>

      {/* Status */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Product Status</h3>
        <p className="text-slate-400 leading-relaxed">
          Hostel Buddy is an evolving product under Lioran Tech. The current focus
          is on validating real-world usability, refining workflows, and building
          a reliable foundation before large-scale rollout.
        </p>
      </div>
    </section>
  );
}
