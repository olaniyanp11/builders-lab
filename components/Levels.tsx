import { FaKey, FaBolt, FaTrophy, FaStar } from "react-icons/fa";
import ScrollAnimation from "./ScrollAnimation";


const levels = [
  {
    icon: <FaKey />,
    title: "Entry Builder",
    sub: "General Members",
    perks: [
      "Access to weekly sessions",
      "Community participation",
      "Introductory lab assignments",
      "Foundation curriculum",
    ],
    featured: false,
  },
  {
    icon: <FaBolt />,
    title: "Active Builder",
    sub: "Progress Through Execution",
    perks: [
      "Everything in Entry",
      "Advanced lab assignments",
      "Feedback & review sessions",
      "Cross-department collaboration",
      "Visible output portfolio",
    ],
    featured: true,
  },
  {
    icon: <FaTrophy />,
    title: "Advanced Builder",
    sub: "Earned Through Output",
    perks: [
      "Everything in Active",
      "Premium mentorship access",
      "Leadership opportunities",
      "First access to paid cohorts",
      "CareerBuild Studio recognition",
    ],
    featured: false,
  },
];

export default function Levels() {
  return (
    <section id="levels" className="py-24 lg:py-36 bg-[#0F0F10]">
      <ScrollAnimation>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8 bg-accent" />
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-accent">Community Structure</span>
        </div>

        <h2 className="font-display font-extrabold text-[clamp(36px,5vw,72px)] leading-[0.93] tracking-tight text-white mb-4">
          YOU&apos;RE NOT A <span className="text-accent">STUDENT.</span><br />
          YOU&apos;RE A BUILDER.
        </h2>

        <p className="text-zinc-400 font-light text-[15px] leading-relaxed max-w-lg mb-16">
          Progression is based on participation, execution, and output — not time spent or payments made.
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {levels.map((level) => (
            <div
              key={level.title}
              className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                level.featured
                  ? "bg-gradient-to-b from-zinc-800/80 to-zinc-900 border-accent/30 shadow-[0_0_40px_rgba(201,168,76,0.08)]"
                  : "bg-zinc-900/40 border-white/5 hover:border-white/10"
              }`}
            >
              {level.featured && (
                <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
              )}

              {level.featured && (
                <div className="absolute top-4 right-4">
                  <span className="font-mono text-[9px] tracking-widest uppercase bg-accent text-zinc-950 px-2.5 py-1 font-medium">
                    Most Active
                  </span>
                </div>
              )}

              <span className="text-3xl block mb-5">{level.icon}</span>

              <h3 className={`font-display font-bold text-2xl mb-1 ${level.featured ? "text-white" : "text-white"}`}>
                {level.title}
              </h3>
              <p className="font-mono text-[10px] tracking-widest uppercase text-accent mb-7">
                {level.sub}
              </p>

              <ul className="space-y-3.5">
                {level.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-sm text-zinc-400 font-light">
                    <span className={`mt-1 shrink-0 font-mono text-xs ${level.featured ? "text-accent" : "text-zinc-600"}`}>
                      <FaStar />
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="font-mono text-[11px] tracking-widest uppercase text-zinc-500">
            Progression Based On:{" "}
            <span className="text-accent">Participation · Execution · Output</span>
          </p>
          </div>
          </div>
      </ScrollAnimation>
    </section>
  );
}
