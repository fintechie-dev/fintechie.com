
import type { CSSProperties } from "react";
import { ArrowRight, Cpu } from "lucide-react";
import { useTilt } from "../hooks/useTilt";

export function Hero() {

  const entries: [string, string][] = [
    ["Financial reporting", "React & Vite"],
    ["Cost control", "Node.js & Express"],
    ["Budgeting", "PostgreSQL, MySQL, MongoDB"],
    ["Operations management", "ERP & billing systems"],
    ["Process optimisation", "POS & payment integration"],
  ];

const stackRef = useTilt<HTMLDivElement>(12);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#080c14]">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(45,125,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(45,125,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blobs */}
      <div
        className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #2d7dff 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-8 blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #00c8ff 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 grid md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(45,125,255,0.3)] bg-[rgba(45,125,255,0.08)] mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00c8ff] animate-pulse" />
            <span
              className="text-[#00c8ff]"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", fontWeight: 500 }}
            >
              Finance Meets Technology
            </span>
          </div>

          <h1
            className="text-[#e8edf5] leading-[1.1] mb-6"
            style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 4rem)" }}
          >
            FINTECHIE
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #2d7dff 0%, #00c8ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Finance Professional <br />
              Full-Stack Developer <br />
              ERP & Business Systems Builder
            </span>
          </h1>

          <p
            className="text-[#7a8ba8] mb-10 max-w-xl leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.05rem", fontWeight: 400 }}
          >
            Helping businesses transform operations through finance-driven software, ERP systems, POS solutions, and modern web applications.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2d7dff] text-white hover:bg-[#1a6be8] transition-all duration-200 hover:gap-3"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
            >
              Start a Project <ArrowRight size={16} />
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[rgba(45,125,255,0.3)] text-[#e8edf5] hover:border-[#2d7dff] hover:bg-[rgba(45,125,255,0.08)] transition-all duration-200"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              Explore Solutions
            </a>
          </div>

          {/* <div className="mt-12 flex flex-wrap gap-6">
            {[
              { icon: Shield, label: "SOC 2 Certified" },
              { icon: Cpu, label: "99.9% Uptime SLA" },
              { icon: Globe, label: "Global Infrastructure" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={14} className="text-[#2d7dff]" />
                <span
                  className="text-[#7a8ba8]"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", fontWeight: 500 }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div> */}
        </div>

        {/* Right — visual card stack */}
        {/* Right — 3D Finance & Tech Ledger */}
<div className="relative hidden md:flex items-center justify-center">
  <div className="ft-stage w-full max-w-md">

    <div
      ref={stackRef}
      className="ft-stack relative"
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.15s ease-out",
      }}
    >
      {/* Background sheets */}
      <div
        className="absolute inset-0 rounded-2xl border border-[#2d7dff]/20 bg-[#101c30]"
        style={{ transform: "translateZ(-35px) translate(18px, 18px)" }}
      />

      <div
        className="absolute inset-0 rounded-2xl border border-[#2d7dff]/30 bg-[#14233a]"
        style={{ transform: "translateZ(-18px) translate(9px, 9px)" }}
      />

      {/* Main Ledger Card */}
      <div
        className="relative rounded-2xl overflow-hidden border border-[rgba(45,125,255,0.35)] bg-[#0e1420] shadow-[0_25px_80px_rgba(0,0,0,0.5)]"
        style={{
          transform: "translateZ(0)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Card Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#2d7dff]/20">
          <span
            className="text-[#e8edf5] font-bold tracking-widest text-sm"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            FINTECHIE
          </span>

          <span
            className="text-[#00c8ff] text-[10px] tracking-wider"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            FINANCE × TECHNOLOGY
          </span>
        </div>

        {/* Column Headers */}
        <div className="grid grid-cols-2 px-6 py-4 bg-[rgba(45,125,255,0.06)]">
          <span className="text-[#00c8ff] text-xs font-semibold uppercase tracking-widest">
            Finance
          </span>

          <span className="text-[#2d7dff] text-xs font-semibold uppercase tracking-widest">
            Technology
          </span>
        </div>

        {/* Finance & Tech Entries */}
        <div className="px-6">
          {entries.map(([finance, code], i) => (
            <div
              key={finance}
              className="grid grid-cols-2 gap-3 py-4 border-b border-[rgba(45,125,255,0.12)]"
              style={{
                "--i": i,
                transform: "translateZ(10px)",
              } as CSSProperties}
            >
              <span className="text-[#aab8ce] text-xs">
                {finance}
              </span>

              <span className="text-[#7aabff] text-xs">
                {code}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-5 bg-[rgba(45,125,255,0.05)]">
          <span className="text-[#7a8ba8] text-xs">
            Where business meets innovation
          </span>

          <span className="text-[#00c8ff] text-xs font-semibold">
            ✓ Balanced
          </span>
        </div>
      </div>

      {/* Floating Stamp */}
      <div
        className="absolute -right-5 -top-5 px-4 py-2 rounded-lg border border-[#00c8ff]/40 bg-[#0e2235] shadow-lg"
        style={{ transform: "translateZ(45px)" }}
      >
        <span
          className="text-[#00c8ff] text-xs font-bold tracking-widest"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          BALANCED
        </span>
      </div>
    </div>
  </div>
</div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
