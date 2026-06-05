import React from "react";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Whitfield",
    role: "CTO, Meridian Financial Group",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format",
    quote:
      "NexaTech's cloud migration team moved our entire data center to AWS in under 8 weeks with zero business disruption. Their level of planning and execution is genuinely world-class.",
    rating: 5,
  },
  {
    name: "James Okafor",
    role: "VP Engineering, Stratum Logistics",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format",
    quote:
      "We had a critical security incident at 2 AM. NexaTech's SOC team had our systems isolated and recovery underway in under 30 minutes. That kind of responsiveness is priceless.",
    rating: 5,
  },
  {
    name: "Priya Mehta",
    role: "IT Director, Quantum Health Systems",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format",
    quote:
      "HIPAA compliance was a nightmare before NexaTech. Their team mapped every gap, implemented controls, and got us audit-ready in three months. Our auditor was impressed.",
    rating: 5,
  },
  {
    name: "Daniel Torres",
    role: "CEO, Vantage Retail Group",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format",
    quote:
      "The managed IT support from NexaTech has reduced our internal IT tickets by 60% in six months. Their helpdesk team is fast, knowledgeable, and genuinely friendly.",
    rating: 5,
  },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  const t = testimonials[idx];

  return (
    <section id="testimonials" className="bg-[#080c14] py-24 relative overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-5 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #2d7dff 0%, transparent 70%)" }}
      />
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p
          className="text-[#2d7dff] mb-3"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.12em" }}
        >
          // CLIENT STORIES
        </p>
        <h2
          className="text-[#e8edf5] mb-16"
          style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.75rem)" }}
        >
          Trusted by Industry Leaders
        </h2>

        <div className="relative bg-[#0e1420] border border-[rgba(45,125,255,0.2)] rounded-3xl p-10 md:p-14">
          <Quote size={40} className="text-[#2d7dff] opacity-20 mb-6 mx-auto" />
          <p
            className="text-[#e8edf5] leading-relaxed mb-10"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1rem, 2vw, 1.15rem)", fontWeight: 400 }}
          >
            "{t.quote}"
          </p>
          <div className="flex items-center justify-center gap-4">
            <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-[rgba(45,125,255,0.4)]" />
            <div className="text-left">
              <p
                className="text-[#e8edf5]"
                style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "0.95rem" }}
              >
                {t.name}
              </p>
              <p
                className="text-[#7a8ba8]"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
              >
                {t.role}
              </p>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`rounded-full transition-all duration-200 ${
                  i === idx ? "w-6 h-2 bg-[#2d7dff]" : "w-2 h-2 bg-[rgba(45,125,255,0.3)]"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-xl border border-[rgba(45,125,255,0.2)] text-[#7a8ba8] hover:text-white hover:border-[#2d7dff] flex items-center justify-center transition-all"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-xl border border-[rgba(45,125,255,0.2)] text-[#7a8ba8] hover:text-white hover:border-[#2d7dff] flex items-center justify-center transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
