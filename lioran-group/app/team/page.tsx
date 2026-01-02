type Member = {
  name: string;
  role: string;
  branch: string;
};

const members: Member[] = [
  {
    name: "Swaraj Puppalwar",
    role: "Chief Technology Officer (CTO)",
    branch: "Lioran Tech & Lioran Cloud Services",
  },
  {
    name: "Pranay Kumeriya",
    role: "Chief Operating Officer (COO)",
    branch: "Lioran Tech & Lioran Cloud Services",
  },
  {
    name: "Pratik Pandit",
    role: "Full Stack Developer",
    branch: "Lioran Tech",
  },
  {
    name: "Jayesh Mude",
    role: "Full Stack Developer",
    branch: "Lioran Cloud Services",
  },
];

export default function TeamPage() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Team</h1>

      <p className="text-slate-300 mb-6">
        Our leadership and engineering team works closely across branches.
        The COO and CTO jointly manage operations and technology for Lioran
        Tech and Lioran Cloud Services.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((m) => (
          <div
            key={`${m.name}-${m.branch}`}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6"
          >
            <h2 className="text-xl font-semibold">{m.name}</h2>
            <p className="text-slate-300">{m.role}</p>
            <p className="text-slate-400">{m.branch}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
