"use client";
import { useState } from "react";
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
          <span className="text-accent">CYCLE</span>
        </h2>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div 
              key={step.num} 
              className="relative group"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%+12px)] w-[calc(100%-24px)] h-px bg-linear-to-r from-gold/30 to-transparent z-10" />
              )}

              <div className={`transition-all duration-500 h-full rounded-2xl p-6 border ${
                hoveredIndex === null 
                  ? "bg-zinc-900/40 border-white/5" 
                  : hoveredIndex === i 
                    ? "bg-zinc-900/80 border-accent/40 shadow-[0_0_30px_rgba(212,175,55,0.1)] scale-[1.02]" 
                    : "bg-zinc-900/20 border-white/5 opacity-40 grayscale-[0.5] scale-[0.98]"
              }`}>
                {/* Step number + icon */}
                <div className="flex items-start justify-between mb-5">
                  <span className={`text-2xl transition-colors duration-500 ${hoveredIndex === i ? "text-accent" : "text-white"}`}>{step.icon}</span>
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
                <div className="w-1.5 h-1.5 bg-accent rotate-45 shrink-0" />
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
