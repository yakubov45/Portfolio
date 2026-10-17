"use client";

import { motion } from "framer-motion";

export default function About() {
  const languages = [
    { name: "Uzbek", level: "Native", code: "UZ" },
    { name: "English", level: "B1 Intermediate", code: "EN" },
    { name: "Russian", level: "Basic understanding", code: "RU" },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-[0.2em] block mb-2">
            01 // Overview
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            About <span className="gradient-heading">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-2 academic-card p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center font-black text-lg font-mono shadow-[0_0_25px_rgba(255,255,255,0.15)]">
                  MY
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Muhammad Yoqubjonov</h3>
                  <p className="text-xs font-mono text-zinc-400">
                    AI Student • PDP University • Uzbekistan
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a second-year Artificial Intelligence student at PDP University. I am interested in Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, and software development.
                </p>
                <p>
                  I prefer learning through practice: I build projects, make mistakes, analyze them, understand the problem, and improve my solution.
                </p>
                <p>
                  Alongside AI, I develop full-stack applications using modern JavaScript technologies. My long-term goal is to become an Artificial Intelligence Engineer and build useful AI-powered products.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
              <span className="tech-badge">Practical Learning</span>
              <span className="tech-badge">Problem Solving</span>
              <span className="tech-badge">Full-Stack Dev</span>
              <span className="tech-badge">AI & Machine Learning</span>
            </div>
          </motion.div>

          {/* Languages & Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            {/* Languages Card */}
            <div className="academic-card p-6">
              <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2 font-mono uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-white" />
                Languages
              </h3>
              <div className="space-y-2.5">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-950/90 border border-white/10 hover:border-white/30 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-white font-bold">
                        {lang.code}
                      </span>
                      <span className="text-xs font-medium text-zinc-200">{lang.name}</span>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Profile Card */}
            <div className="academic-card p-6 flex-1 flex flex-col justify-between">
              <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2 font-mono uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-white" />
                Academic Context
              </h3>
              <ul className="space-y-3 text-xs text-zinc-300">
                <li className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-zinc-500 font-mono">Institution</span>
                  <span className="text-white font-medium">PDP University</span>
                </li>
                <li className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-zinc-500 font-mono">Year</span>
                  <span className="text-white font-medium">2nd Year Bachelor&apos;s</span>
                </li>
                <li className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-zinc-500 font-mono">Career Goal</span>
                  <span className="text-white font-medium">AI Engineer</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-zinc-500 font-mono">Location</span>
                  <span className="text-white font-medium">Uzbekistan</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
