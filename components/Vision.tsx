import ScrollAnimation from "./ScrollAnimation";
import { FaDesktop, FaBuilding, FaPaintBrush } from "react-icons/fa";

const visionItems = [
  { icon: <FaDesktop />, label: "Digital Learning Platform" },
  { icon: <FaBuilding />, label: "Physical Training Hub" },
  { icon: <FaPaintBrush />, label: "Creative Dev Center" },
];

export default function Vision() {
  return (
    <section className="py-24 lg:py-40 bg-zinc-950 relative overflow-hidden">
      <ScrollAnimation>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-gold/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center">

        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-8 bg-gold" />
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-gold">Long-Term Vision</span>
          <div className="h-px w-8 bg-gold" />
        </div>

        <h2 className="font-display font-extrabold text-[clamp(48px,8vw,110px)] leading-[0.9] tracking-tight text-white mb-6">
          IDEAS BUILT<br />INTO{" "}
          <span className="text-gold">REAL</span><br />
          SYSTEMS.
        </h2>

        <p className="text-zinc-400 font-light text-lg leading-relaxed max-w-xl mx-auto mb-14">
          A place where ideas become real businesses, individuals become professionals, and structure replaces confusion.
        </p>

        {/* Vision pillars */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {visionItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 bg-zinc-900/60 border border-white/5 rounded-full px-6 py-3 hover:border-gold/20 transition-colors"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-mono text-[11px] tracking-widest uppercase text-zinc-300">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="border-t border-white/5 pt-14">
          <blockquote className="font-display font-extrabold text-[clamp(28px,4vw,52px)] text-white leading-tight">
            &ldquo;We don&apos;t just teach.
            <br />
            <span className="text-gold">We build.&rdquo;</span>
          </blockquote>
          <p className="font-mono text-[11px] tracking-widest uppercase text-zinc-500 mt-5">
            — CareerBuild Studio
          </p>
        </div>
      </div>
      </ScrollAnimation>
    </section>
  );
}
