"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="section-padding relative bg-slate-950/40">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block mb-2">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            Education <span className="gradient-heading">Timeline</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="academic-card p-8 border-l-4 border-l-sky-400 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-mono text-sky-400 font-semibold px-2.5 py-1 rounded bg-sky-500/10 border border-sky-500/20 inline-block mb-2">
                  2024 – Present
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                  PDP University
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                📍 Uzbekistan
              </span>
            </div>

            <h4 className="text-base font-semibold text-sky-400 mb-3">
              Bachelor's Degree in Artificial Intelligence
            </h4>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Currently in 2nd year of studies. The curriculum covers foundational and practical aspects of Artificial Intelligence, Machine Learning algorithms, Data Structures, Mathematics for AI, Deep Learning architectures, and Modern Software Engineering.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 block font-mono mb-1">Status</span>
                <span className="text-slate-200 font-medium">Currently Enrolled</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 block font-mono mb-1">Level</span>
                <span className="text-slate-200 font-medium">2nd Year Undergraduate</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 block font-mono mb-1">Specialization</span>
                <span className="text-slate-200 font-medium">Artificial Intelligence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
