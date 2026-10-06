"use client";

import { motion } from "framer-motion";

export default function About() {
  const languages = [
    { name: "Uzbek", level: "Native", flag: "🇺🇿" },
    { name: "English", level: "B1 Intermediate", flag: "🇬🇧" },
    { name: "Russian", level: "Basic understanding", flag: "🇷🇺" },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block mb-2">
            Overview
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            About <span className="gradient-heading">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Bio Card */}
          <div className="lg:col-span-2 academic-card p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center text-sky-400 font-bold text-lg font-mono">
                  MY
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-100">Muhammad Yoqubjonov</h3>
                  <p className="text-xs font-mono text-sky-400">
                    AI Student • PDP University • Uzbekistan 🇺🇿
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
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

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap gap-2">
              <span className="tech-badge">Practical Learning</span>
              <span className="tech-badge">Problem Solving</span>
              <span className="tech-badge font-sans">Full-Stack Dev</span>
              <span className="tech-badge font-sans">AI & Machine Learning</span>
            </div>
          </div>

          {/* Languages & Quick Facts */}
          <div className="flex flex-col gap-6">
            {/* Languages Card */}
            <div className="academic-card p-6">
              <h3 className="text-sm font-semibold text-slate-200 mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                Languages
              </h3>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/60">
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">{lang.flag}</span>
                      <span className="text-xs font-medium text-slate-200">{lang.name}</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Profile Card */}
            <div className="academic-card p-6 flex-1 flex flex-col justify-between">
              <h3 className="text-sm font-semibold text-slate-200 mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Academic Context
              </h3>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">•</span>
                  <span><strong>Institution:</strong> PDP University</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">•</span>
                  <span><strong>Year:</strong> 2nd Year Bachelor's</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">•</span>
                  <span><strong>Career Goal:</strong> AI Engineer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-400 font-bold">•</span>
                  <span><strong>Location:</strong> Uzbekistan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
