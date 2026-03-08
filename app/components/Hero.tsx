"use client";

import { motion } from "framer-motion";
import { Github, FileText, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background glows - glaring bright gradients on black */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh] bg-purple-600/50 blur-[150px] rounded-full mix-blend-screen -z-10 animate-pulse" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] bg-blue-500/60 blur-[120px] rounded-full mix-blend-screen -z-10" />

      <div className="container mx-auto px-6 max-w-6xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20"
        >
          {/* Left Column: Text Content */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            {/* Intro text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-sm uppercase tracking-widest text-[#A1A1AA] font-mono mb-6"
            >
              Hi, I&apos;m Nguyen Van Loi
            </motion.p>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-tight mb-6"
            >
              Fullstack <br />
              <span className="text-gradient drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                Developer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-[#A1A1AA] max-w-lg leading-relaxed font-light mb-10"
            >
              Building robust, scalable applications from pixel-perfect
              frontends to high-performance backends. Specialized in Next.js,
              Node.js, and modern cloud architectures.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-4"
            >
              <a
                href="#projects"
                className="group flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-4 glass text-white font-medium rounded-full hover:bg-white/10 transition-colors duration-300 border border-white/10"
              >
                <Github className="w-5 h-5" />
                <span className="hidden sm:inline">GitHub</span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                className="flex items-center gap-2 px-6 py-4 glass text-[#A1A1AA] font-medium rounded-full hover:text-white hover:bg-white/10 transition-colors duration-300 border border-transparent"
              >
                <FileText className="w-5 h-5" />
                <span className="hidden sm:inline">CV</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Avatar/Visual */}
          <div className="flex-1 flex justify-center md:justify-end relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "backOut" }}
              className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border border-white/10 glass flex items-center justify-center overflow-hidden relative group hover:border-brand-500/50 transition-colors duration-500"
            >
              {/* Replace with actual image in real use case */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/30 to-brand-400/20 group-hover:opacity-100 opacity-70 transition-opacity duration-500" />
              <div className="absolute shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] inset-0" />
              <span className="text-7xl font-bold opacity-80 group-hover:scale-110 transition-transform duration-500 tracking-tighter">
                LD
              </span>

              {/* Decorative elements */}
              <div className="absolute inset-0 rounded-full border border-white/5 scale-110 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-0 rounded-full border border-brand-500/20 scale-125 animate-[spin_15s_linear_infinite_reverse]" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
