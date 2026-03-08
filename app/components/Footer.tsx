"use client";

import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 relative">
      <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-zinc-500 font-mono">
          © {new Date().getFullYear()} Built by Nguyen Van Loi.
        </div>

        <div className="flex gap-6">
          <a
            href="https://github.com"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>

        <div className="text-xs text-zinc-600 font-mono">
          Designed with Next.js & Tailwind V4
        </div>
      </div>
    </footer>
  );
}
