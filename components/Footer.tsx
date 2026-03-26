import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "About", href: "#about" },
  { label: "Departments", href: "#departments" },
  { label: "Structure", href: "#structure" },
  { label: "Levels", href: "#levels" },
  { label: "Join", href: "#join" },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2  group">
            <div className="relative w-10 h-10">
              <Image
                fill
                alt="logo"
                src={"/images/career-logo.PNG"}
                className="object-contain"
              />
            </div>
            {/* <div className="w-7 h-7 border border-gold/60 rotate-45 flex items-center justify-center group-hover:border-gold transition-colors">
            <div className="w-2.5 h-2.5 bg-gold rotate-0" />
          </div> */}
            <span className="font-display font-700 text-sm tracking-widest uppercase text-white">
              Builders <span className="text-gold">Core</span> Academy
            </span>
          </Link>

          {/* Nav */}
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-mono text-[10px] tracking-widest uppercase text-zinc-500 hover:text-gold transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Copy */}
          <p className="font-mono text-[10px] tracking-wide text-zinc-600 text-center md:text-right">
            © {new Date().getFullYear()} CareerBuild Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
