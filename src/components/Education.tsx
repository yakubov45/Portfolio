"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="section-padding relative bg-zinc-950/50 border-y border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-[0.2em] block mb-2">
            02 // Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Education <span className="gradient-heading">Timeline</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <div className="academic-card p-8 border-l-4 border-l-white relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-mono text-black bg-white font-bold px-3 py-1 rounded-full inline-block mb-3">
                  2024 – Present
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  PDP University
                </h3>
              </div>
              <span className="text-xs font-mono text-zinc-400 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 self-start sm:self-center">
                Uzbekistan
              </span>
            </div>

            <h4 className="text-base font-semibold text-zinc-200 mb-3 font-mono">
              Bachelor&apos;s Degree in Artificial Intelligence
            </h4>

            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Currently in 2nd year of studies. The curriculum covers foundational and practical aspects of Artificial Intelligence, Machine Learning algorithms, Data Structures, Mathematics for AI, Deep Learning architectures, and Modern Software Engineering.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-zinc-950/90 border border-white/10 hover:border-white/30 transition-colors">
                <span className="text-zinc-500 block font-mono mb-1">Status</span>
                <span className="text-white font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Currently Enrolled
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-950/90 border border-white/10 hover:border-white/30 transition-colors">
                <span className="text-zinc-500 block font-mono mb-1">Level</span>
                <span className="text-white font-semibold">2nd Year Undergraduate</span>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-950/90 border border-white/10 hover:border-white/30 transition-colors">
                <span className="text-zinc-500 block font-mono mb-1">Specialization</span>
                <span className="text-white font-semibold">Artificial Intelligence</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
