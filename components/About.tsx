import { FaBolt, FaBullseye, FaChartLine, FaCog } from "react-icons/fa";
import ScrollAnimation from "./ScrollAnimation";


export default function About() {
  return (
    <section id="about" className="py-24 lg:py-36 bg-zinc-950">
      <ScrollAnimation>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-accent" />
                <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-accent">
                  What Is This
                </span>
              </div>

              <h2 className="font-display font-extrabold text-[clamp(40px,5vw,72px)] leading-[0.93] tracking-tight text-white mb-8">
                NOT A CLASS.
                <br />
                <span className="text-accent">A LAB.</span>
              </h2>

              <div className="space-y-5 text-zinc-400 font-light text-[15px] leading-relaxed">
                <p>
                  Many people learn.{" "}
                  <span className="text-white font-medium">
                    Very few actually build.
                  </span>{" "}
                  The Builders Lab exists to bridge that gap.
                </p>
                <p>
                  This is the practical execution arm of CareerBuild Studio — a
                  structured system where learning is applied, skills are
                  developed through real output, and growth is measurable.
                </p>
                <p>
                  This is not a lecture room. It&apos;s a construction site for
                  your future.
                </p>
              </div>

              {/* Pillars */}
              <div className="grid grid-cols-3 gap-4 mt-10">
                {[
                  {
                    icon: <FaBolt className="text-accent" />,
                    label: "Practical",
                  },
                  {
                    icon: <FaBullseye className="text-accent" />,
                    label: "Applied",
                  },
                  {
                    icon: <FaChartLine className="text-accent" />,
                    label: "Measurable",
                  },
                ].map((p) => (
                  <div
                    key={p.label}
                    className="border border-accent/5 hover:border-accent bg-zinc-900/50 rounded-lg p-4 flex flex-col items-center gap-2 text-center:borderold2 transition-colors transition-2"  
                  >
                    <span className="text-2xl">{p.icon}</span>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-400">
                      {p.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — visual */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative w-72 h-72 lg:w-80 lg:h-80">
                {/* Outer ring */}
                <div
                  className="absolute inset-0 border border-accent/20 rounded-full animate-spin"
                  style={{ animationDuration: "20s" }}
                />
                {/* Middle ring */}
                <div
                  className="absolute inset-6 border border-dashed border-gold/10 rounded-full animate-spin"
                  style={{
                    animationDuration: "15s",
                    animationDirection: "reverse",
                  }}
                />
                {/* Inner square */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 border border-accent/30 rotate-45 flex items-center justify-center">
                    <div className="w-28 h-28 bg-zinc-900 flex flex-col items-center justify-center -rotate-45 gap-1">
                      <div className="text-3xl text-accent">
                        <FaCog />
                      </div>
                      <span className="font-display font-bold text-xs tracking-widest text-accent uppercase">
                        THE LAB
                      </span>
                      <span className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase">
                        Est. {new Date().toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Corner dots */}
                {[
                  "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
                  "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
                  "left-0 top-1/2 -translate-y-1/2 -translate-x-1/2",
                  "right-0 top-1/2 -translate-y-1/2 translate-x-1/2",
                ].map((pos, i) => (
                  <div
                    key={i}
                    className={`absolute w-2.5 h-2.5 bg-accent rotate-45 ${pos}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
