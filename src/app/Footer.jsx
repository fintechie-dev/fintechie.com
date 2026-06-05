import React from "react";
import { Zap, Linkedin, Twitter, Github } from "lucide-react";

export function Footer() {
  const cols = [
    {
      heading: "Services",
      links: ["Cloud Migration", "Cybersecurity", "Network Infrastructure", "Data Management", "Managed Support"],
    },
    {
      heading: "Solutions",
      links: ["Small Business", "Mid-Market", "Enterprise", "Healthcare IT", "Financial Services"],
    },
    {
      heading: "Company",
      links: ["About Us", "Careers", "Blog", "Press", "Partner Program"],
    },
  ];

  return (
    <footer className="bg-[#0e1420] border-t border-[rgba(45,125,255,0.18)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#2d7dff] flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              <span
                className="text-white"
                style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.1rem" }}
              >
                NexaTech
              </span>
            </div>
            <p
              className="text-[#7a8ba8] leading-relaxed mb-6"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" }}
            >
              Enterprise IT solutions designed to scale with your ambition. Trusted by 500+ organizations worldwide.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl border border-[rgba(45,125,255,0.2)] flex items-center justify-center text-[#7a8ba8] hover:text-white hover:border-[#2d7dff] transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
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
                      href="#"
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
            © 2026 NexaTech Inc. All rights reserved.
          </p>
          <p
            className="text-[#2d7dff] opacity-50"
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem" }}
          >
            build_v4.2.1 · uptime: 99.97%
          </p>
        </div>
      </div>
    </footer>
  );
}
