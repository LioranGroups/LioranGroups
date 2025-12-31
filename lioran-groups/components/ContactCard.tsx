type Props = {
  title: string;
  value: string;
  link?: string;
};

export default function ContactCard({ title, value, link }: Props) {
  return (
    <div className="group relative bg-black border border-white/10 rounded-2xl p-6 transition-all hover:border-white/20">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />

      <h3 className="mb-2 font-semibold text-white">{title}</h3>

      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block whitespace-pre-line text-white/80 transition-colors group-hover:text-sky-400"
        >
          {value}
        </a>
      ) : (
        <p className="whitespace-pre-line text-white/70">
          {value}
        </p>
      )}
    </div>
  );
}
