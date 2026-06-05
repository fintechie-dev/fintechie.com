import React from "react";
const stats = [
  { value: "8+", label: "Years in Finance & Business" },
  { value: "5+", label: "Technology Domains Explored" },
  { value: "100+", label: "Projects & Case Studies" },
  { value: "Finance × Tech", label: "Cross-Disciplinary Expertise" },
]

export function Stats() {
  return (
    <section className="bg-[#0e1420] border-y border-[rgba(45,125,255,0.18)] py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="text-center transition-transform duration-300 hover:-translate-y-1"
          >
            <p
              className={`text-[#e8edf5] mb-1 font-extrabold ${
                value === "Finance + Tech"
                  ? "text-xl sm:text-2xl md:text-3xl"
                  : "text-4xl sm:text-5xl"
              }`}
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {value}
            </p>

            <p
              className="text-[#7a8ba8] text-sm font-medium"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
