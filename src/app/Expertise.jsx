import React from "react";
import {
  DollarSign,
  BarChart3,
  Briefcase,
  Calculator,
  Code,
  Database,
  ShoppingCart,
  CreditCard,
} from "lucide-react";

const expertise = [
  {
    icon: DollarSign,
    title: "Finance & Accounting",
    items: ["Financial Reporting", "Cost Control", "Budgeting"],
    tag: "finance_core",
  },
  {
    icon: Briefcase,
    title: "Business Operations",
    items: [
      "Operations Management",
      "Process Optimization",
      "Business Workflows"
    ],
    tag: "operations",
  },
  {
    icon: Code,
    title: "Software Development",
    items: [
      "React & Vite",
      "Node.js & Express",
      "Git",
      "MongoDB, MySQL & PostgreSql",
    ],
    tag: "dev_stack",
  },
  {
    icon: Database,
    title: "Business Systems",
    items: [
      "ERP",  
      "Billing Systems", 
      "Inventory Management",
      "Inventory Control",
      "Business Reporting"],
    tag: "business_systems",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    items: [
      "Multi-Vendor Platforms",
      "Order Management",
      "Customer Experience"
    ],
    tag: "ecommerce",
  },
  {
    icon: CreditCard,
    title: "Payment Systems",
    items: [
      "Online Payment Gateways",
      "POS Payment Integration",
      "Transaction Workflows"
    ],
    tag: "payments",
  },
  
];


export function Expertise() {
  return (
    <section id="expertise" className="bg-[#080c14] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2
            className="text-[#e8edf5] mb-4"
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3vw, 2.75rem)",
            }}
          >
            My Expertise
          </h2>
          <p
            className="text-[#7a8ba8] max-w-xl"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem" }}
          >
            Finance, technology, and business systems combined to build real-world solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map(({ icon: Icon, title, items, tag }) => (
            <div
              key={title}
              className="p-6 rounded-2xl bg-[#0e1420] border border-[rgba(45,125,255,0.15)] hover:border-[rgba(45,125,255,0.4)] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-[rgba(45,125,255,0.12)] flex items-center justify-center">
                  <Icon size={20} className="text-[#2d7dff]" />
                </div>

                <span
                  className="text-[#2d7dff] opacity-40"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.65rem",
                  }}
                >
                  {tag}
                </span>
              </div>

              <h3
                className="text-[#e8edf5] mb-3"
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                }}
              >
                {title}
              </h3>

              <ul className="space-y-1">
                {items.map((item) => (
                  <li
                    key={item}
                    className="text-[#7a8ba8] text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}