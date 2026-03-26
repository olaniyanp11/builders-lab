export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Soft gold radial glow behind logo */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
          animation: "pulse-glow 3s ease-in-out infinite",
        }}
      />

      {/* Logo */}
      <div
        style={{
          animation: "logo-in 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          opacity: 0,
          transform: "scale(0.88) translateY(12px)",
        }}
      >
        <img
          src="/career-logo.PNG"
          alt="Builders Core Academy"
          className="w-32 h-32 object-contain"
          style={{ filter: "drop-shadow(0 0 24px rgba(201,168,76,0.25))" }}
        />
      </div>

      {/* Wordmark */}
      <div
        className="mt-6 flex flex-col items-center gap-0.5"
        style={{
          animation: "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards",
          opacity: 0,
          transform: "translateY(8px)",
        }}
      >
        <span
          className="text-white tracking-[0.3em] uppercase text-sm font-semibold"
          style={{
            fontFamily: "'Cormorant Garamond', 'Georgia', serif",
            letterSpacing: "0.35em",
          }}
        >
          BUILDERS CORE
        </span>
        <span
          className="tracking-[0.5em] uppercase text-[10px] font-light"
          style={{
            color: "#C9A84C",
            fontFamily: "'Cormorant Garamond', 'Georgia', serif",
          }}
        >
          ACADEMY
        </span>
      </div>

      {/* Progress bar */}
      <div
        className="mt-10 w-32 h-[1px] bg-white/5 overflow-hidden relative"
        style={{
          animation: "fade-up 0.6s ease 0.6s forwards",
          opacity: 0,
        }}
      >
        <div
          className="absolute inset-y-0 left-0 w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, #C9A84C, transparent)",
            animation: "shimmer 1.8s ease-in-out infinite",
          }}
        />
      </div>

      {/* Keyframes injected via style tag */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&display=swap');

        @keyframes logo-in {
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fade-up {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.08); }
        }
      `}</style>
    </div>
  );
}
