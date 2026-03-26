"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const children = el.querySelectorAll("[data-reveal]");
    children.forEach((child, i) => {
      setTimeout(
        () => {
          (child as HTMLElement).style.opacity = "1";
          (child as HTMLElement).style.transform = "translateY(0)";
        },
        150 + i * 120,
      );
    });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial gradient glow — shifted left to complement text side */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      {/* Right-side image glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.07] blur-[100px] pointer-events-none" />

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-20 w-full"
      >
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* ── LEFT: Text Content ── */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <div
              data-reveal
              className="flex items-center gap-3 mb-8 opacity-0 translate-y-5 transition-all duration-700 ease-out"
            >
              <div className="h-px w-10 bg-gold" />
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-gold">
                By CareerBuild Studio
              </span>
            </div>

            {/* Main headline */}
            <h1
              data-reveal
              className="font-display font-extrabold text-[clamp(48px,7vw,108px)] leading-[0.92] tracking-tight opacity-0 translate-y-6 transition-all duration-700 ease-out mb-6"
            >
              <span className="block text-white">THE</span>
              <span className="block text-gold">BUILDERS</span>
              <span className="block text-white">LAB.</span>
            </h1>

            {/* Subline */}
            <p
              data-reveal
              className="font-body font-light text-lg lg:text-xl text-zinc-400 max-w-xl leading-relaxed opacity-0 translate-y-5 transition-all duration-700 ease-out mb-10"
            >
              Where knowledge meets execution. Not a class — a{" "}
              <span className="text-white font-medium">
                structured environment
              </span>{" "}
              where you build real skills, real systems, and real ventures.
            </p>

            {/* CTAs */}
            <div
              data-reveal
              className="flex flex-wrap items-center gap-4 opacity-0 translate-y-4 transition-all duration-700 ease-out"
            >
              <Link
                href="#join"
                className="inline-flex items-center gap-2 font-mono text-[12px] tracking-widest uppercase bg-gold text-zinc-950 px-8 py-4 font-medium hover:bg-gold-light transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(201,168,76,0.35)]"
              >
                Start Building <FaArrowRight />
              </Link>
              <Link
                href="#departments"
                className="font-mono text-[12px] tracking-widest uppercase border border-white/10 text-white px-8 py-4 hover:border-gold/40 hover:bg-white/[0.03] transition-all duration-200"
              >
                Explore Departments
              </Link>
            </div>

            {/* Stats row */}
            <div
              data-reveal
              className="flex flex-wrap gap-10 mt-14 pt-10 border-t border-white/5 opacity-0 translate-y-4 transition-all duration-700 ease-out"
            >
              {[
                { num: "3", label: "Core Departments" },
                { num: "3", label: "Builder Levels" },
                { num: "∞", label: "Execution Potential" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="font-display font-extrabold text-4xl text-gold leading-none">
                    {s.num}
                  </span>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-500">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Image Panel ── */}
          <div
            data-reveal
            className="relative opacity-0 translate-y-6 transition-all duration-700 ease-out flex items-center justify-center"
          >
            {/* Decorative frame lines */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t border-l border-accent pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b border-r border-accent pointer-events-none" />
            
            {/* Gold accent bar */}
            <div className="absolute left-0 top-8 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-accent to-transparent" />

            {/* Image container */}
            <div className="relative w-full aspect-[4/5] lg:aspect-[4/5] max-h-[400px] lg:max-h-[620px] overflow-hidden">
              {/* Replace src with your actual image */}
              <Image
                src="/images/build.jpg"
                fill
                alt="Builders Lab — real people building real skills"
                className="w-full h-full object-cover object-center grayscale contrast-[1.1] brightness-90"
                style={{
                  filter: "grayscale(30%) contrast(1.1) brightness(0.88)",
                }}
              />

              {/* Gold tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/60 via-transparent to-gold/10 mix-blend-multiply pointer-events-none" />

              {/* Bottom caption badge */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="flex flex-col gap-0.5">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-gold">
                    Cohort 2025
                  </span>
                  <span className="font-display font-bold text-white text-sm leading-tight">
                    Build. Ship. Scale.
                  </span>
                </div>
                <div className="w-8 h-8 border border-gold/50 flex items-center justify-center">
                  <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
    </section>
  );
}
