"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      year: "Sep 2025 - Oct 2026",
      role: "Frontend Developer",
      company: "Teso Global",
      description:
        "Developed and maintained robust frontend applications. Focused on scalable architecture, code quality, and delivering pixel-perfect, highly interactive user interfaces.",
    },
    {
      year: "Feb 2025 - Aug 2025",
      role: "Frontend Developer Intern",
      company: "TMA Solutions",
      description:
        "Assisted in building UI components, fixing bugs, and participating in agile development workflows in a professional enterprise environment.",
    },
  ];

  return (
    <section id="experience" className="py-24 border-t border-white/5 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-widest text-[#A1A1AA] mb-4">
            04. Experience
          </h2>
          <h3 className="text-3xl font-semibold text-white">
            Where I&apos;ve worked
          </h3>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline dot */}
              <div className="absolute w-3 h-3 bg-brand-500 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_15px_rgba(168,85,247,0.8)] group-hover:scale-150 transition-transform duration-300" />

              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                <h4 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">
                  {exp.role}
                </h4>
                <span className="text-sm font-mono text-zinc-500 bg-white/5 px-3 py-1 rounded w-fit">
                  {exp.year}
                </span>
              </div>

              <h5 className="text-lg font-medium text-zinc-400 mb-4">
                {exp.company}
              </h5>

              <p className="text-zinc-500 leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
