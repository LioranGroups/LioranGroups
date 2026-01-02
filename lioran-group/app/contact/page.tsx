import ContactCard from "@/components/ContactCard";

export default function ContactPage() {
  return (
    <section className="bg-black px-6 py-16 max-w-6xl mx-auto space-y-14">
      {/* Header */}
      <header className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Contact
        </h1>
        <p className="text-slate-400 max-w-2xl">
          Get in touch with Lioran Group for support, partnerships, or official
          communication.
        </p>
      </header>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <ContactCard
          title="Phone / WhatsApp"
          value="+91 8010182409"
          link="https://wa.me/918010182409"
        />
        <ContactCard
          title="Support Email"
          value="support@lioran.group"
          link="mailto:support@lioran.group"
        />
        <ContactCard
          title="Leadership"
          value={`ceo@lioran.group\ncfo@lioran.group\ncto@lioran.group\ncoo@lioran.group`}
        />
      </div>

      {/* Address + Map */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Address */}
        <div className="bg-black border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-semibold text-white">
            Office Address
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Chandrapur,<br />
            Maharashtra, India
          </p>

          <p className="text-sm text-slate-500">
            Visits by prior appointment only.
          </p>
        </div>

        {/* Map */}
        <div className="bg-black border border-slate-800 rounded-2xl overflow-hidden">
          <iframe
            title="Lioran Group Location"
            src="https://www.google.com/maps?q=Chandrapur%20Maharashtra%20India&output=embed"
            className="w-full h-64 md:h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Working Hours */}
      <div className="bg-black border border-slate-800 rounded-2xl p-6 max-w-md">
        <h2 className="text-xl font-semibold text-white mb-2">
          Working Hours
        </h2>
        <p className="text-slate-400">
          Monday – Friday<br />
          9:00 AM – 5:00 PM (IST)
        </p>
      </div>
    </section>
  );
}
