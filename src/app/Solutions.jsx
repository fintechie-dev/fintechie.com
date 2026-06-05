import React from "react";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const solutions = [
  {
    id: "pos",
    label: "POS System",
    heading: "Modern POS for Retail & Restaurants",
    body: "A practical billing system designed for real business operations, including sales, products, barcode, inventory, receipts, and daily reports.",
    items: [
      "Product & Category Management",
      "Barcode Search / Scan to Cart",
      "Thermal Receipt Printing",
      "Sales & Daily Closing Reports",
      "Inventory Stock Tracking",
    ],
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: "erp",
    label: "ERP Workflow",
    heading: "Business Operations Connected in One System",
    body: "ERP-style workflows that connect sales, purchases, inventory, expenses, vendors, customers, and financial reports.",
    items: [
      "Sales & Purchase Management",
      "Inventory & Stock Control",
      "Expense Tracking",
      "Vendor & Customer Management",
      "Profit & Loss Reporting",
    ],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
  },
  {
    id: "ecommerce",
    label: "E-Commerce",
    heading: "Online Business & Vendor Platforms",
    body: "E-commerce solutions built with real business logic, including products, vendors, orders, payments, delivery, and settlement workflows.",
    items: [
      "Product Listing & Order Flow",
      "Vendor Management",
      "Payment Gateway Integration",
      "Customer Wallet / Coupon Logic",
      "Order & Settlement Reports",
    ],
    img: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&h=400&fit=crop&auto=format",
  },
];

export function Solutions() {
  const [active, setActive] = useState("pos");
  const current = solutions.find((s) => s.id === active);

  if (!current) return null;

  return (
    <section id="solutions" className="bg-[#0e1420] py-24 border-y border-[rgba(45,125,255,0.18)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p
            className="text-[#2d7dff] mb-3"
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.12em" }}
          >
            // BUSINESS SYSTEMS
          </p>
          <h2
            className="text-[#e8edf5]"
            style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.75rem)" }}
          >
            ERP Systems
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-10 flex-wrap">
          {solutions.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`px-5 py-2.5 rounded-lg transition-all duration-200 ${
                active === s.id
                  ? "bg-[#2d7dff] text-white"
                  : "bg-[rgba(45,125,255,0.08)] text-[#7a8ba8] hover:text-[#e8edf5] border border-[rgba(45,125,255,0.15)]"
              }`}
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.875rem" }}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3
              className="text-[#e8edf5] mb-4"
              style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "1.6rem" }}
            >
              {current.heading}
            </h3>
            <p
              className="text-[#7a8ba8] mb-8 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem" }}
            >
              {current.body}
            </p>
            <ul className="space-y-3">
              {current.items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[#00c8ff] shrink-0" />
                  <span
                    className="text-[#e8edf5]"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-block mt-8 px-6 py-3 rounded-lg bg-[rgba(45,125,255,0.12)] border border-[rgba(45,125,255,0.3)] text-[#2d7dff] hover:bg-[#2d7dff] hover:text-white transition-all duration-200"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "0.875rem" }}
            >
              Discuss a Project →
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[rgba(45,125,255,0.2)] bg-[#080c14]">
            <img
              src={current.img}
              alt={current.heading}
              className="w-full h-72 object-cover opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
