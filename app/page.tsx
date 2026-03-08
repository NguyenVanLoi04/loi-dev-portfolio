import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#030014] min-h-screen text-white overflow-hidden font-sans selection:bg-brand-500/30">
      {/* Background Noise Texture */}
      <div
        className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Navigation (Optional, minimum setup) */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-zinc-950/50 backdrop-blur-md border-b border-white/5 transition-all">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="font-mono font-bold text-xl tracking-tighter text-white hover:text-brand-400 transition-colors"
          >
            <h3 className="text-xl md:text-2xl font-extrabold tracking-tight  leading-tight">
              <span className="text-gradient drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                Nguyen Van Loi
              </span>
            </h3>
          </a>

          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a
              href="#experience"
              className="hover:text-white transition-colors"
            >
              Experience
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
