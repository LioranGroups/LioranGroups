import ContactCard from "@/components/ContactCard";

export default function ContactPage() {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Contact</h1>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <ContactCard
          title="Phone & WhatsApp"
          value="+91 8010182409"
          link="https://wa.me/918010182409"
        />
        <ContactCard
          title="Support Email"
          value="support@lioran.group"
          link="mailto:support@lioran.group"
        />
        <ContactCard
          title="Leadership Emails"
          value={`ceo@lioran.group
cfo@lioran.group
cto@lioran.group
coo@lioran.group`}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-3">Office Address</h2>
          <p className="text-slate-400">
            Chandrapur, Maharashtra, India
          </p>
          <a
            href="https://maps.app.goo.gl/7qeb7QK1e22DQASL6"
            target="_blank"
            className="inline-block mt-3 text-blue-400 hover:underline"
          >
            View on Google Maps
          </a>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-3">Working Hours</h2>
          <p className="text-slate-400">
            Monday – Friday
            <br />
            9:00 AM – 5:00 PM
          </p>
        </div>
      </div>
    </section>
  );
}

