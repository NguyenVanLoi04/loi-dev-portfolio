"use client";

import { motion } from "framer-motion";
import { Zap, Server, Sparkles } from "lucide-react";

export default function About() {
  const strengths = [
    {
      icon: <Zap className="w-5 h-5 text-brand-500" />,
      text: "Performance First",
    },
    {
      icon: <Server className="w-5 h-5 text-brand-500" />,
      text: "Robust Architecture",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-brand-500" />,
      text: "Pixel-Perfect UI",
    },
  ];

  return (
    <section id="about" className="py-24 border-t border-white/5 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Title Area */}
          <div className="md:col-span-1">
            <h2 className="text-sm uppercase tracking-widest text-[#A1A1AA] sticky top-24">
              01. About Me
            </h2>
          </div>

          {/* Content Area */}
          <div className="md:col-span-2 space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl text-zinc-300 leading-snug font-medium"
            >
              I bridge the gap between design and robust backend infrastructure,
              creating experiences that look beautiful and perform perfectly
              under the hood.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-zinc-500 leading-relaxed max-w-2xl"
            >
              With 1.5 years of intensive experience in the modern JavaScript/TypeScript ecosystem, I have successfully architected and delivered robust, production-ready applications. My expertise spans across complex enterprise dashboards, dynamic customer loyalty systems, Zalo Mini Apps, and high-performance mobile applications (React Native/Expo). I take pride in transforming complex business requirements into scalable, clean, and pixel-perfect digital products end-to-end.
            </motion.p>

            {/* Core Strengths */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4 pt-6"
            >
              {strengths.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-white/10 text-zinc-300 shadow-sm"
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
