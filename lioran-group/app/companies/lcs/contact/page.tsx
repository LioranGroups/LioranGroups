import ContactCard from "@/components/ContactCard";

export default function LcsContactPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <div className="grid md:grid-cols-3 gap-6">
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
    </div>
  );
}

