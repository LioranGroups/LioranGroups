export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-800/60 bg-black">
      <div className="h-px w-full" />

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        {/* Left */}
        <div>
          Working Hours{" "}<br></br>
          <span className="text-slate-300">9:00 AM – 5:00 PM</span> · Monday to Friday
        </div>

        {/* Right */}
        <div>
          Contact{" "}<br></br>
          <a
            href="mailto:contact@lioran.group"
            className="text-sky-400 hover:text-sky-300 transition"
          >
            contact@lioran.group
          </a>
        </div>
      </div>

      <div className="pb-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Lioran Groups. All rights reserved.
      </div>
    </footer>
  );
}
