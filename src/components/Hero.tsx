"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const focusPillars = [
    { id: "01", title: "Machine Learning" },
    { id: "02", title: "Deep Learning" },
    { id: "03", title: "Computer Vision" },
    { id: "04", title: "Full-Stack Web" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[94vh] flex items-center justify-center tech-grid-bg pt-28 pb-16 overflow-hidden"
    >
      {/* Animated Monochrome Geometric Rings & Glows */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute w-[560px] h-[560px] sm:w-[720px] sm:h-[720px] rounded-full border border-white/[0.04] border-dashed"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] rounded-full border border-white/[0.06]"
      />
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-white/[0.04] blur-[120px] rounded-full" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Academic Status Badge */}
        <motion.div variants={itemVariants} className="inline-block mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/15 text-zinc-200 text-xs font-mono backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            PDP University • 2nd Year AI Student (2024 – Present)
          </div>
        </motion.div>

        {/* Name */}
        <motion.h2
          variants={itemVariants}
          className="text-lg sm:text-xl font-medium text-zinc-400 mb-3 tracking-wide"
        >
          Hi, I am <span className="text-white font-semibold">Muhammad Yoqubjonov</span>
        </motion.h2>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
        >
          Artificial Intelligence <br className="hidden sm:inline" />
          <span className="gradient-heading">Student & Developer</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-normal"
        >
          I build practical AI and full-stack projects while developing my skills in Machine Learning, Deep Learning, Computer Vision, and modern web technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("#projects")}
            className="px-7 py-3.5 rounded-full bg-white hover:bg-zinc-200 text-black font-bold text-sm transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center gap-2 group"
          >
            <span>View My Projects</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("#contact")}
            className="px-7 py-3.5 rounded-full bg-zinc-950 hover:bg-zinc-900 text-white font-semibold text-sm border border-white/20 hover:border-white/50 transition-all flex items-center gap-2"
          >
            <span>Contact Me</span>
          </motion.button>
        </motion.div>

        {/* Key Focus Highlights */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-3xl mx-auto text-left"
        >
          {focusPillars.map((item, idx) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="academic-card p-4 group cursor-default"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] text-zinc-500 font-mono group-hover:text-zinc-300 transition-colors">
                  FOCUS {item.id}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-white transition-colors" />
              </div>
              <div className="text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors">
                {item.title}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
