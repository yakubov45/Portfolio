"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center tech-grid-bg pt-28 pb-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Academic Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          PDP University • 2nd Year AI Student (2024 – Present)
        </motion.div>

        {/* Name */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg sm:text-xl font-medium text-slate-400 mb-2"
        >
          Hi, I am <span className="text-slate-100 font-semibold">Muhammad Yoqubjonov</span>
        </motion.h2>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100 mb-6 leading-tight"
        >
          Artificial Intelligence <br className="hidden sm:inline" />
          <span className="gradient-heading">Student & Developer</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-normal"
        >
          I build practical AI and full-stack projects while developing my skills in Machine Learning, Deep Learning, Computer Vision, and modern web technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center items-center mb-14"
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-sky-500/10 flex items-center gap-2"
          >
            <span>View My Projects</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700/80 transition-all flex items-center gap-2"
          >
            <span>Contact Me</span>
          </button>
        </motion.div>

        {/* Key Focus Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-left"
        >
          <div className="academic-card p-3.5">
            <div className="text-xs text-slate-400 font-mono mb-1">Focus 01</div>
            <div className="text-sm font-semibold text-slate-200">Machine Learning</div>
          </div>
          <div className="academic-card p-3.5">
            <div className="text-xs text-slate-400 font-mono mb-1">Focus 02</div>
            <div className="text-sm font-semibold text-slate-200">Deep Learning</div>
          </div>
          <div className="academic-card p-3.5">
            <div className="text-xs text-slate-400 font-mono mb-1">Focus 03</div>
            <div className="text-sm font-semibold text-slate-200">Computer Vision</div>
          </div>
          <div className="academic-card p-3.5">
            <div className="text-xs text-slate-400 font-mono mb-1">Focus 04</div>
            <div className="text-sm font-semibold text-slate-200">Full-Stack Web</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
