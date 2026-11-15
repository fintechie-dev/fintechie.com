import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Solutions } from "./components/Solutions";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Expertise } from "./components/Expertise";

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
      {/* <Footer /> */}
    </div>
  );
}
