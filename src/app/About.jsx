import React from "react";
import { Users, Award, TrendingUp, Briefcase, Code, Database } from "lucide-react";

export function About() {
  return (
    <section id="about" className="bg-[#0e1420] py-24 border-y border-[rgba(45,125,255,0.18)]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left — image */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden border border-[rgba(45,125,255,0.2)]">
            <img
              src="image/portfolio-2.jpg"
              alt="FinTechie workspace"
              className="w-full h-80 object-cover opacity-80"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-6 bg-[#080c14] border border-[rgba(45,125,255,0.3)] rounded-2xl p-5 flex items-center gap-4">
            <Award size={28} className="text-[#00c8ff]" />
            <div>
              <p
                className="text-[#e8edf5]"
                style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.1rem" }}
              >
                FinTechie
              </p>
              <p
                className="text-[#7a8ba8]"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem" }}
              >
                Finance × Technology
              </p>
            </div>
          </div>
        </div>

        {/* Right — content */}
        <div className="pt-8">
          <p
            className="text-[#2d7dff] mb-3"
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.12em" }}
          >
            // MY JOURNEY
          </p>
          <h2
            className="text-[#e8edf5] mb-6"
            style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
          >
            Finance, Business
            <br />
            & Technology
          </h2>
          <p
            className="text-[#7a8ba8] mb-6 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem" }}
          >
            Started my career in finance and accounting, gaining hands-on experience in financial reporting, business operations, budgeting, and management.
          </p>
          <p
            className="text-[#7a8ba8] mb-10 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem" }}
          >
            Over the years, I developed a passion for technology and software development. Today, I combine finance expertise with modern development skills to build ERP systems, POS solutions, e-commerce platforms, and business automation tools that solve real-world problems.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {[
              {
                icon: Briefcase,
                value: "8+",
                label: "Years in Finance"
              },
              {
                icon: Code,
                value: "DevOps",
                label: "Full-Stack Development"
              },
              {
                icon: Database,
                value: "ERP & POS",
                label: "Business Systems"
              }
            ].map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="text-center p-4 rounded-xl bg-[rgba(45,125,255,0.06)] border border-[rgba(45,125,255,0.15)]"
              >
                <Icon size={18} className="text-[#2d7dff] mx-auto mb-2" />
                <p
                  className="text-[#e8edf5]"
                  style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.3rem" }}
                >
                  {value}
                </p>
                <p
                  className="text-[#7a8ba8]"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
