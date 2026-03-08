"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 border-t border-white/5 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-75 bg-brand-500/10 blur-[120px] rounded-full mix-blend-screen -z-10" />

      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <h2 className="text-sm uppercase tracking-widest text-brand-400 font-mono mb-4">
            05. What&apos;s Next?
          </h2>

          <h3 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h3>

          <p className="text-xl text-zinc-400 max-w-xl mx-auto leading-relaxed">
            I&apos;m currently open to new opportunities. Whether you have a
            question or just want to say hi, I&apos;ll try my best to get back
            to you!
          </p>

          <div className="pt-8">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300 group"
            >
              <Mail className="w-5 h-5" />
              Say Hello
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Minimal Contact Form Alternative structure if needed */}
        {/* <motion.form className="mt-16 text-left space-y-6 max-w-xl mx-auto">
           ... (omitted for minimalist CTA approach, but achievable with standard inputs + group-focus tailwind styles) 
        </motion.form> */}
      </div>
    </section>
  );
}
