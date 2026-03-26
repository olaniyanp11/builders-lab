import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function CTA() {
  return (
    <section id="join" className="py-24 lg:py-36 bg-[#0F0F10] relative overflow-hidden">
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {/* Bg glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-accent/5 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">

        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-8 bg-accent" />
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-accent">Ready?</span>
          <div className="h-px w-8 bg-accent" />
        </div>

        <h2 className="font-display font-extrabold text-[clamp(48px,8vw,96px)] leading-[0.9] tracking-tight text-white mb-6">
          WE DON&apos;T<br />JUST{" "}
          <span className="text-accent">TEACH.</span><br />
          WE BUILD.
        </h2>

        <p className="text-zinc-400 font-light text-lg leading-relaxed max-w-xl mx-auto mb-12">
          Join the lab. Show up. Do the work. Build something real. Become who you&apos;re capable of being.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <Link
            href="#"
            className="font-mono text-[12px] tracking-widest uppercase bg-accent text-zinc-950 px-10 py-4 font-medium hover:bg-accent-light transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(201,168,76,0.35)] flex justify-between items-center gap-2"
          >
            Join The Lab <FaArrowRight />
          </Link>
          <Link
            href="#departments"
            className="font-mono text-[12px] tracking-widest uppercase border border-white/10 text-white px-10 py-4 hover:border-accent/30 hover:bg-white/[0.03] transition-all"
          >
            Explore Departments
          </Link>
        </div>

        <p className="font-mono text-[11px] tracking-widest text-zinc-600">
          CareerBuildStudio.com/<span className="text-accent">builderslab</span>
        </p>
      </div>
    </section>
  );
}
