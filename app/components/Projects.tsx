"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "MB Tracker Expense Mobile",
      description:
        "A smart personal finance management app. Integrated with AI OCR for receipt scanning and automatic category extraction. Built with a robust Layered Architecture.",
      tech: ["React Native", "Expo SDK 54", "Redux", "React Query", "AI Vision", "Zod"],
      github: "#",
      live: "#",
      status: "Production",
      image: "/expense-tracker.png",
    },
    {
      title: "VitaDairy Admin Portal v2",
      description:
        "A large-scale internal administration system featuring Zero-Trust Security. Engineered for managing Affiliate campaigns, reviewing social media evidence, and optimizing performance for massive datasets.",
      tech: ["React 18", "TypeScript", "Vite", "MUI v5", "Redux", "React Query"],
      github: "#",
      live: "#",
      status: "Production",
      image: "/admin-portal.png", // Add your image to the public folder as admin-portal.png
    },
    {
      title: "VitaDairy Customer Loyalty System",
      description:
        "A mobile-first web application that allows users to scan QR codes using their device camera, track their reward coin history, and seamlessly redeem gifts online.",
      tech: ["Next.js 14", "TypeScript", "Tailwind", "React Query", "React Hook Form"],
      github: "#",
      live: "#",
      status: "Live",
      image: "/webapp.png",
    },
    {
      title: "VitaDairy Zalo Mini App - Loyalty",
      description:
        "A native Mini App on the Zalo platform featuring Optical Character Recognition (OCR) and QR scanning. Delivers a frictionless loyalty experience without requiring external app installations.",
      tech: ["React 18", "Zalo Mini App SDK", "TanStack Router", "Tailwind v4"],
      github: "#",
      live: "#",
      status: "Live",
      image: "/zalo-mini-app.png",
    },
    {
      title: "VTD Landing Page Channel",
      description:
        "A modern, highly SEO-optimized landing page project. Leverages React Server Components (Next.js 16) and a Feature-based architecture to achieve lightning-fast response times.",
      tech: ["Next.js 16", "TypeScript", "Tailwind CSS", "Shadcn UI", "Framer Motion"],
      github: "#",
      live: "#",
      status: "Live",
      image: "/web-channel.png",
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
              className={`group relative flex flex-col gap-8 items-center ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Project Visual mock */}
              <div className="w-full md:w-[60%] aspect-video bg-zinc-900 rounded-xl border border-white/10 overflow-hidden relative shadow-2xl z-10 transition-transform duration-500 group-hover:scale-[1.02]">
                {project.image ? (
                  <div className="relative w-full h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/80 via-transparent to-transparent opacity-60" />
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-linear-to-tr from-brand-500/10 to-transparent p-6 flex flex-col justify-between">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <span className="font-mono text-zinc-600/50 font-bold text-3xl md:text-5xl transform -rotate-6 group-hover:scale-110 transition-transform duration-500">
                        [ Screenshot ]
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className={`w-full md:w-[40%] flex flex-col justify-center space-y-6 z-20 ${idx % 2 === 0 ? "md:-ml-12" : "md:-mr-12"}`}>
                <div className="glass p-8 rounded-2xl border border-white/10 shadow-xl backdrop-blur-2xl transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="relative flex h-2.5 w-2.5">
                      {project.status === "Live" && (
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      )}
                      <span
                        className={`relative inline-flex rounded-full h-2.5 w-2.5 ${project.status === "Live" ? "bg-emerald-500" : "bg-brand-500"}`}
                      ></span>
                    </span>
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      {project.status}
                    </span>
                  </div>

                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-brand-400 transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 rounded-md px-3 py-1.5 text-zinc-300 transition-colors cursor-default"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {(project.github !== "#" || project.live !== "#") && (
                    <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                      {project.github !== "#" && (
                        <a
                          href={project.github}
                          className="text-zinc-400 hover:text-white transition-colors hover:scale-110"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.live !== "#" && (
                        <a
                          href={project.live}
                          className="text-zinc-400 hover:text-white transition-colors hover:scale-110"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
