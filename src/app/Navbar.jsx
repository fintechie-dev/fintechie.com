import React from "react";
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = ["Home", "About", "Expertise", "Solutions", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#080c14]/90 backdrop-blur border-b border-[rgba(45,125,255,0.18)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
            <img src="/image/favicon.png" />
          </div>
          <span
            className="text-white tracking-tight"
            style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.15rem" }}
          >
            FinTechie
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-[#7a8ba8] hover:text-white transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 500 }}
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="px-5 py-2 rounded-lg bg-[#2d7dff] text-white hover:bg-[#1a6be8] transition-colors duration-200"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 600 }}
          >
            Get Started
          </a>
        </div>

        <button className="md:hidden text-[#e8edf5]" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0e1420] border-t border-[rgba(45,125,255,0.18)] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-[#7a8ba8] hover:text-white transition-colors"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-lg bg-[#2d7dff] text-white text-center"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.875rem" }}
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
