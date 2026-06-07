import React from "react";
import { Zap, Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  const cols = [
    {
      heading: "Expertise",
      links: ["Finance & Accounting", "Business Operations", "Software Development", "ERP & POS Systems"],
    },
    {
      heading: "Solutions",
      links: ["POS System", "ERP Workflow", "E-Commerce Platform", "Payment Integration"],
    },
    {
      heading: "Connect",
      links: ["About", "Expertise", "Solutions", "Contact"],
    },
  ];

  return (
    <footer className="bg-[#0e1420] border-t border-[rgba(45,125,255,0.18)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#2d7dff] flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              <span
                className="text-white"
                style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.1rem" }}
              >
                FinTechie
              </span>
            </div>

            <p
              className="text-[#7a8ba8] leading-relaxed mb-6"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" }}
            >
              Bridging finance, business, and technology through ERP systems, POS solutions,
              e-commerce platforms, and business automation.
            </p>

            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/fintechie" className="w-9 h-9 rounded-xl border border-[rgba(45,125,255,0.2)] flex items-center justify-center text-[#7a8ba8] hover:text-white hover:border-[#2d7dff] transition-all">
                <Linkedin size={15} />
              </a>
              <a href="https://github.com/fintechie-dev" className="w-9 h-9 rounded-xl border border-[rgba(45,125,255,0.2)] flex items-center justify-center text-[#7a8ba8] hover:text-white hover:border-[#2d7dff] transition-all">
                <Github size={15} />
              </a>
              <a href="mailto:fintechie.dev@gmail.com" className="w-9 h-9 rounded-xl border border-[rgba(45,125,255,0.2)] flex items-center justify-center text-[#7a8ba8] hover:text-white hover:border-[#2d7dff] transition-all">
                <Mail size={15} />
              </a>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.heading}>
              <p
                className="text-[#e8edf5] mb-4"
                style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "0.9rem" }}
              >
                {col.heading}
              </p>

              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#contact"
                      className="text-[#7a8ba8] hover:text-[#e8edf5] transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" }}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[rgba(45,125,255,0.12)] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-[#7a8ba8]"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
          >
            © 2026 FinTechie. All rights reserved.
          </p>

          <p
            className="text-[#2d7dff] opacity-50"
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem" }}
          >
            1143034345
          </p>
        </div>
      </div>
    </footer>
  );
}