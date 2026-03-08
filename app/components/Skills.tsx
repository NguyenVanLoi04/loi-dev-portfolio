"use client";

import { motion } from "framer-motion";
import { Layers, Database, Palette } from "lucide-react";

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-24 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-widest text-[#A1A1AA] mb-4">
            02. Technical Arsenal
          </h2>
          <h3 className="text-3xl font-semibold text-white">
            The tools I use daily
          </h3>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Frontend Card */}
          <motion.div
            variants={item}
            className="glass p-8 rounded-2xl border border-white/10 hover:border-brand-500/50 transition-colors duration-500 group relative overflow-hidden text-center"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-brand-500 to-brand-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="flex flex-col items-center justify-center space-y-4">
              <Layers className="w-10 h-10 text-brand-400" />
              <h4 className="text-xl font-medium text-white">
                Frontend Ecosystem
              </h4>
              <p className="text-zinc-400 text-sm">
                Primary focus on modern React architecture.
              </p>

              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {[
                  "React 19",
                  "Next.js",
                  "TypeScript",
                  "TailwindCSS",
                  "Framer Motion",
                  "Zustand",
                  "Material UI",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Backend Card */}
          <motion.div
            variants={item}
            className="glass p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors duration-500 group relative overflow-hidden text-center"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="flex flex-col items-center justify-center space-y-4">
              <Database className="w-10 h-10 text-blue-400" />
              <h4 className="text-xl font-medium text-white">
                Backend Architecture
              </h4>
              <p className="text-zinc-400 text-sm">
                Scalable server-side solutions.
              </p>

              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {[
                  "Node.js",
                  "Express",
                  "Nest.js",
                  "PostgreSQL",
                  "Supabase",
                  "Redis",
                  "Docker",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tools Card */}
          <motion.div
            variants={item}
            className="glass p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-colors duration-500 text-center md:col-span-2"
          >
            <div className="flex flex-col items-center justify-center space-y-4">
              <Palette className="w-8 h-8 text-zinc-400" />
              <div className="flex flex-wrap justify-center gap-8 mt-2 items-center text-zinc-400 text-sm font-medium">
                <span className="hover:text-white transition-colors">
                  Figma
                </span>
                <span className="hover:text-white transition-colors">
                  Vercel
                </span>
                <span className="hover:text-white transition-colors">
                  Git/GitHub
                </span>
                <span className="hover:text-white transition-colors">Jest</span>
                <span className="hover:text-white transition-colors">
                  Storybook
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
