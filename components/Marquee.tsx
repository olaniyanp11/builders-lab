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
  return (
    <div className="border-y border-white/5 bg-zinc-900/50 py-4 overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap w-max">
        {/* First set of items */}
        <div className="flex gap-14 pr-14">
          {items.map((item, i) => (
            <div key={`item-1-${i}`} className="flex items-center gap-5 shrink-0">
              <div className="w-1.5 h-1.5 bg-gold rotate-45 shrink-0" />
              <span className="font-mono text-[11px] tracking-[0.2em] hover:text-accent uppercase text-zinc-500">
                {item}
              </span>
            </div>
          ))}
        </div>
        {/* Second set of items for seamless loop */}
        <div className="flex gap-14 pr-14">
          {items.map((item, i) => (
            <div key={`item-2-${i}`} className="flex items-center gap-5 shrink-0">
              <div className="w-1.5 h-1.5 bg-gold rotate-45 shrink-0" />
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-zinc-500">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
