import { FaBookOpen, FaFlask, FaSearch, FaUsers } from "react-icons/fa";
import ScrollAnimation from "./ScrollAnimation";
const steps = [
  {
    num: "01",
    icon: <FaBookOpen />,
    title: "Learn",
    desc: "Weekly structured sessions covering real, applicable content. No fluff — only what you can actually use.",
  },
  {
    num: "02",
    icon: <FaFlask />,
    title: "Lab Work",
    desc: "Every session has practical assignments. You don't just hear it — you execute it.",
  },
  {
    num: "03",
    icon: <FaSearch />,
    title: "Review",
    desc: "Dedicated feedback sessions where your work is reviewed, refined, and improved with clear direction.",
  },
  {
    num: "04",
    icon: <FaUsers />,
    title: "Collaborate",
    desc: "Builders work together, share outputs, and elevate each other across all departments.",
  },
];

export default function Structure() {
  return (
    <section id="structure" className="py-24 lg:py-36 bg-zinc-950">
      <ScrollAnimation>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8 bg-gold" />
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-gold">How It Works</span>
        </div>

        <h2 className="font-display font-extrabold text-[clamp(36px,5vw,72px)] leading-[0.93] tracking-tight text-white mb-16">
          THE WEEKLY<br />
          <span className="text-gold">CYCLE</span>
        </h2>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.num} className="relative group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%+12px)] w-[calc(100%-24px)] h-px bg-gradient-to-r from-gold/30 to-transparent z-10" />
              )}

              <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 hover:border-gold/20 hover:bg-zinc-900/70 transition-all duration-300 h-full">
                {/* Step number + icon */}
                <div className="flex items-start justify-between mb-5">
                  <span className="text-2xl">{step.icon}</span>
                  <span className="font-mono text-[10px] tracking-widest text-zinc-600 bg-zinc-900 px-2 py-1 rounded">
                    /{step.num}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-white mb-3">{step.title}</h3>
                <p className="text-zinc-400 text-[14px] font-light leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Expectation row */}
        <div className="mt-12 bg-zinc-900/30 border border-white/5 rounded-2xl p-8">
          <p className="font-mono text-[11px] tracking-widest uppercase text-zinc-500 mb-4">
            Every Builder Is Expected To:
          </p>
          <div className="flex flex-wrap gap-4">
            {["Learn", "Execute", "Improve"].map((word) => (
              <div
                key={word}
                className="flex items-center gap-3 bg-zinc-900 border border-white/5 rounded-full px-5 py-2.5"
              >
                <div className="w-1.5 h-1.5 bg-gold rotate-45 shrink-0" />
                <span className="font-display font-bold text-sm text-white tracking-wide">{word}</span>
              </div>
            ))}
          </div>
          </div>
          </div>
      </ScrollAnimation>
    </section>
  );
}
