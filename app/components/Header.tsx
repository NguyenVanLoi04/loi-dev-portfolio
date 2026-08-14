"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

export default function Header() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-fit max-w-2xl"
    >
      <nav className="flex items-center justify-between px-6 py-3 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.6)]">

        {/* Logo */}
        <Link
          href="#"
          className="flex-shrink-0 mr-8 text-xl font-extrabold tracking-tight leading-tight group"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)] group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all duration-300">
            Loi Dev
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-300 rounded-full"
            >
              {hoveredIndex === index && (
                <motion.div
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                  className="absolute inset-0 bg-white/10 rounded-full -z-10"
                />
              )}
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="flex items-center ml-4">
          <Link
            href="#contact"
            className="px-5 py-2 text-sm font-bold text-white bg-brand-500/80 hover:bg-brand-400 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Let's Talk
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
