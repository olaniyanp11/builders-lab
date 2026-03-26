const items = [
  "Business & Entrepreneurship",
  "Branding & Design",
  "Tech & Digital",
  "Weekly Sessions",
  "Practical Assignments",
  "Real Execution",
  "Builders — Not Students",
  "CareerBuild Studio",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="border-y border-white/5 bg-zinc-900/50 py-4 overflow-hidden">
      <div className="flex gap-14 animate-marquee whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-5 shrink-0">
            <div className="w-1.5 h-1.5 bg-gold rotate-45 shrink-0" />
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-zinc-500">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
