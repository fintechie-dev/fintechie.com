import React, { useState } from "react";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setSent(true);
      setForm({ name: "", email: "", company: "", message: "" });

    } catch (err) {
      console.log("Error sending message", err);
    }
  };

  return (
    <section id="contact" className="bg-[#080c14] py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        {/* Left */}
        <div>
          <p
            className="text-[#2d7dff] mb-3"
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.12em" }}
          >
            // GET IN TOUCH
          </p>
          <h2
            className="text-[#e8edf5] mb-6"
            style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.75rem)" }}
          >
            Let's Build Something
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #2d7dff 0%, #00c8ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Exceptional
            </span>
          </h2>
          <p
            className="text-[#7a8ba8] mb-12 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem" }}
          >
            Whether you need a business website, ERP solution, POS system, e-commerce platform, or custom software, let’s discuss how technology can solve your business problem.
          </p>

          <div className="space-y-6">
            {[
              {
                icon: MapPin,
                line1: "Salalah, Oman",
                line2: "Available for projects in Oman, UAE, India & remotely",
              },
              {
                icon: Phone,
                line1: "+968 98774277",
                line2: "WhatsApp / Direct Contact",
              },
              {
                icon: Mail,
                line1: "fintechie.dev@gmail.com",
                line2: "Project enquiries and collaboration",
              },
            ].map(({ icon: Icon, line1, line2 }) => (
              <div key={line1} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[rgba(45,125,255,0.1)] border border-[rgba(45,125,255,0.2)] flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-[#2d7dff]" />
                </div>
                <div>
                  <p
                    className="text-[#e8edf5]"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 500 }}
                  >
                    {line1}
                  </p>
                  <p
                    className="text-[#7a8ba8]"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
                  >
                    {line2}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="bg-[#0e1420] border border-[rgba(45,125,255,0.2)] rounded-2xl p-8">
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[rgba(45,125,255,0.15)] border border-[rgba(45,125,255,0.4)] flex items-center justify-center mb-6">
                <Send size={24} className="text-[#2d7dff]" />
              </div>
              <h3
                className="text-[#e8edf5] mb-3"
                style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.4rem" }}
              >
                Message Sent!
              </h3>
              <p
                className="text-[#7a8ba8]"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}
              >
                Thank you! I’ll review your message and get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <p
                className="text-[#e8edf5] mb-6"
                style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.15rem" }}
              >
                Send Me a Message
              </p>
              {[
                { key: "name", label: "Full Name", type: "text", placeholder: "Your name" },
                { key: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                { key: "company", label: "Company / Business", type: "text", placeholder: "Your business name" },
              ].map(({ key, label, type, placeholder }) => (
                <div key={key}>
                  <label
                    className="block text-[#7a8ba8] mb-1.5"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", fontWeight: 500 }}
                  >
                    {label}
                  </label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    value={form[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="w-full bg-[#080c14] border border-[rgba(45,125,255,0.2)] rounded-xl px-4 py-3 text-[#e8edf5] placeholder-[#4a5a70] focus:border-[#2d7dff] focus:outline-none transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem" }}
                    required
                  />
                </div>
              ))}
              <div>
                <label
                  className="block text-[#7a8ba8] mb-1.5"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", fontWeight: 500 }}
                >
                  How Can I Help?
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your website, ERP, POS, or software idea..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-[#080c14] border border-[rgba(45,125,255,0.2)] rounded-xl px-4 py-3 text-[#e8edf5] placeholder-[#4a5a70] focus:border-[#2d7dff] focus:outline-none transition-colors resize-none"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem" }}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#2d7dff] text-white hover:bg-[#1a6be8] transition-colors duration-200"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.9rem" }}
              >
                Send Message <Send size={15} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
