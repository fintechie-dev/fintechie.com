import React from "react";
import { ArrowRight, Shield, Cpu, Globe } from "lucide-react";

export function Hero() {
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
        <div className="relative hidden md:block">
          <div className="relative w-full aspect-square max-w-md ml-auto">
            {/* Outer ring */}
            <div
              className="absolute inset-0 rounded-3xl border border-[rgba(45,125,255,0.2)] bg-[rgba(45,125,255,0.03)]"
              style={{ animation: "spin 20s linear infinite" }}
            />
            {/* Center card */}
            <div className="absolute inset-8 rounded-2xl bg-[#0e1420] border border-[rgba(45,125,255,0.25)] flex flex-col items-center justify-center gap-6 p-8">
              <img
                src="/image/TransparentLogo.png"
                alt="Fintechie Logo"
                className="w-32 h-32 object-contain"
                style={{ animation: "spin 20s linear infinite"}}
              />
              <div className="text-center">
                <p
                  className="text-[#e8edf5] mb-1"
                  style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.4rem" }}
                >
                  Finance × Tech
                </p>
                <p
                  className="text-[#7a8ba8]"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
                >
                  Business Systems
                </p>
              </div>
              <div className="w-full space-y-2">
                {[
                  "Finance Logic", 
                  "Software Development", 
                  "ERP & POS Systems"
                ].map((item, i) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[rgba(45,125,255,0.06)] border border-[rgba(45,125,255,0.12)]"
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: i === 0 ? "#00c8ff" : i === 1 ? "#2d7dff" : "#4d9fff" }}
                    />
                    <span
                      className="text-[#7a8ba8]"
                      style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem" }}
                    >
                      {item}
                    </span>
                    <span
                      className="ml-auto text-[#2d7dff]"
                      style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem" }}
                    >
                      ✓ Active
                    </span>
                  </div>
                ))}
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
