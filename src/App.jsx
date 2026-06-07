import React from "react";
import "./styles/fonts.css";
import { Navbar } from "./app/Navbar";
import { Hero } from "./app/Hero";
import { Stats } from "./app/Stats";
import { Solutions } from "./app/Solutions";
import { About } from "./app/About";
import { Testimonials } from "./app/Testimonials";
import { Contact } from "./app/Contact";
import { Footer } from "./app/Footer";
import { Expertise } from "./app/Expertise";

export default function App() {
  return (
    /* MARKER-MAKE-KIT-INVOKED */
    <div className="bg-[#080c14] min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <Hero />
      <Stats />
      <Expertise />
      <Solutions />
      <About />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}
