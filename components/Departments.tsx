import { FaBuilding, FaPaintBrush, FaCode, FaMagic } from "react-icons/fa";
import ScrollAnimation from "./ScrollAnimation";

const departments = [
  {
    num: "01",
    icon: <FaBuilding />,
    title: "Business &\nEntrepreneurship",
    items: ["Idea validation", "Business models", "Structure & systems"],
    accent: "from-amber-500/5",
  },
  {
    num: "02",
    icon: <FaPaintBrush />,
    title: "Branding &\nDesign",
    items: ["Visual identity", "Brand positioning", "Graphic design execution"],
    accent: "from-yellow-500/5",
  },
  {
    num: "03",
    icon: <FaCode />,
    title: "Tech &\nDigital",
    items: ["Website development", "Digital tools", "AI for productivity"],
    accent: "from-gold/5",
  },
];

export default function Departments() {
  return (
    <section id="departments" className="py-24 lg:py-36 bg-[#0F0F10]">
      <ScrollAnimation>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gold" />
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-gold">What We Build</span>
            </div>
            <h2 className="font-display font-extrabold text-[clamp(36px,5vw,72px)] leading-[0.93] tracking-tight text-white">
              CORE<br />
              <span className="text-gold">DEPARTMENTS</span>
            </h2>
          </div>
          <p className="text-zinc-400 font-light text-[15px] leading-relaxed max-w-xs">
            Pick your track. More departments will be added as The Lab grows.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {departments.map((dept) => (
            <div
              key={dept.num}
              className={`relative bg-zinc-950 p-8 lg:p-10 group hover:bg-zinc-900/80 transition-colors duration-300`}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Number watermark */}
              <span className="absolute top-6 right-8 font-display font-extrabold text-6xl text-white/[0.03] group-hover:text-white/[0.06] transition-colors select-none">
                {dept.num}
              </span>

              <span className="text-3xl mb-5 block">{dept.icon}</span>

              <h3 className="font-display font-bold text-2xl text-white leading-tight mb-5 whitespace-pre-line">
                {dept.title}
              </h3>

              <ul className="space-y-3">
                {dept.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-zinc-400 font-light">
                    <div className="w-1.5 h-1.5 bg-gold/60 rotate-45 shrink-0 group-hover:bg-gold transition-colors" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Coming soon */}
        <div className="mt-px bg-zinc-900/30 border border-dashed border-white/5 rounded-xl p-8 text-center mt-6">
          <div className="text-2xl text-gold"><FaMagic /></div>
          <p className="font-mono text-[11px] tracking-widest uppercase text-zinc-500">
            More departments coming soon
          </p>
          </div>
          </div>
      </ScrollAnimation>
    </section>
  );
}
