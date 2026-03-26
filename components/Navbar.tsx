"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const links = [
  { label: "About", href: "#about" },
  { label: "Departments", href: "#departments" },
  { label: "Structure", href: "#structure" },
  { label: "Levels", href: "#levels" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            width={100}
            height={100}
            alt="logo"
            src={"/images/career-logo.png"}
          />
          {/* <div className="w-7 h-7 border border-gold/60 rotate-45 flex items-center justify-center group-hover:border-gold transition-colors">
            <div className="w-2.5 h-2.5 bg-gold rotate-0" />
          </div> */}
          <span className="font-display font-700 text-sm tracking-widest uppercase text-white">
            Builders <span className="text-gold">Core</span> Academy
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-mono hover:text-accent text-[11px] tracking-widest uppercase text-zinc-400 hover:text-gold transition-colors duration-200"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#join"
            className="font-mono text-[11px] tracking-widest uppercase bg-gold text-zinc-950 px-5 py-2.5 font-medium hover:bg-gold-light transition-all duration-200 hover:-translate-y-px"
          >
            Join the Lab <FaArrowRight />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-6 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-px w-6 bg-white transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-zinc-900 border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono text-xs tracking-widest uppercase text-zinc-300 hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#join"
            onClick={() => setOpen(false)}
            className="font-mono text-xs tracking-widest uppercase bg-gold text-zinc-950 px-5 py-3 text-center font-medium"
          >
            Join the Lab →
          </Link>
        </div>
      )}
    </header>
  );
}
