"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Fintech Dashboard UI",
      description:
        "A comprehensive financial dashboard showcasing complex data visualization, real-time updates, and an ultra-modern dark theme.",
      tech: ["Next.js", "Tailwind", "Recharts", "Framer Motion"],
      github: "https://github.com",
      live: "https://example.com",
      status: "Live",
    },
    {
      title: "TaskFlow Platform",
      description:
        "A highly interactive Kanban-style task management tool heavily inspired by Linear. Built with drag-and-drop mechanics and optimistic UI updates.",
      tech: ["React", "Zustand", "dnd-kit", "Supabase"],
      github: "https://github.com",
      live: "https://example.com",
      status: "Beta",
    },
    {
      title: "E-Commerce Storefront",
      description:
        "A headless e-commerce frontend optimized for sub-second page loads. Features beautiful micro-interactions on product cards and cart.",
      tech: ["Next.js App Router", "Stripe", "Tailwind", "Shopify API"],
      github: "https://github.com",
      live: "https://example.com",
      status: "Live",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 border-t border-white/5 relative min-h-screen"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-widest text-[#A1A1AA] mb-4">
            03. Selected Work
          </h2>
          <h3 className="text-4xl font-semibold text-white">
            Projects I&apos;ve built
          </h3>
        </div>

        <div className="space-y-24">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.7 }}
              className="group relative flex flex-col md:flex-row gap-8 items-center"
            >
              {/* Project Visual mock */}
              <div className="w-full md:w-[60%] aspect-video bg-zinc-900 rounded-xl border border-white/10 overflow-hidden relative shadow-2xl z-10">
                {/* Placeholder for real image */}
                <div className="absolute inset-0 bg-linear-to-tr from-brand-500/10 to-transparent p-6 flex flex-col justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-center font-mono text-zinc-700 opacity-50 font-bold text-4xl transform -rotate-12">
                    [ Screenshot ]
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full md:w-[40%] flex flex-col justify-center space-y-6 md:-ml-12 z-20">
                <div className="glass p-8 rounded-2xl border border-white/10 shadow-xl backdrop-blur-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="relative flex h-2.5 w-2.5">
                      {project.status === "Live" && (
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      )}
                      <span
                        className={`relative inline-flex rounded-full h-2.5 w-2.5 ${project.status === "Live" ? "bg-emerald-500" : "bg-brand-500"}`}
                      ></span>
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      {project.status}
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-400 transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-white/5 border border-white/10 rounded-md px-2 py-1 text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                    <a
                      href={project.github}
                      className="text-zinc-400 hover:text-white transition-colors"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      className="text-zinc-400 hover:text-white transition-colors"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
