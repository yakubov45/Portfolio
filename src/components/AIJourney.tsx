"use client";

import { motion } from "framer-motion";

export default function AIJourney() {
  const steps = [
    { title: "Programming", status: "Completed Foundations", desc: "Python & JavaScript fundamentals, data structures, and algorithms." },
    { title: "Machine Learning", status: "Active Focus", desc: "Supervised & unsupervised learning algorithms, scikit-learn, evaluation metrics." },
    { title: "Deep Learning", status: "Active Focus", desc: "Artificial Neural Networks, backpropagation, optimization, TensorFlow." },
    { title: "Computer Vision", status: "Active Focus", desc: "Image classification, CNNs, image preprocessing, dataset curation." },
    { title: "Neural Networks", status: "Developing", desc: "Custom network architectures, multi-class classification, model tuning." },
    { title: "Transformers & LLMs", status: "Learning Goal", desc: "Attention mechanisms, Transformer architectures, Fine-tuning concepts." },
    { title: "AI Agents", status: "Learning Goal", desc: "Autonomous agent workflows, tool integration, reasoning loops." },
    { title: "AI Engineer", status: "Long-Term Goal", desc: "Building scalable, production-ready AI systems and intelligent products." },
  ];

  return (
    <section id="ai-journey" className="section-padding relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block mb-2">
            Learning Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            My AI <span className="gradient-heading">Journey</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2">
            A transparent progression of the skills and domains I am actively studying and developing toward my career goal as an AI Engineer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className={`academic-card p-5 flex flex-col justify-between relative ${
                idx === steps.length - 1
                  ? "border-sky-500/40 bg-sky-500/5"
                  : "border-slate-800/80"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-sky-400">
                    Step 0{idx + 1}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                      step.status === "Active Focus"
                        ? "bg-sky-500/10 text-sky-400 border border-sky-500/20"
                        : step.status === "Long-Term Goal"
                        ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-bold"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {step.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-100 mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-600 font-mono text-xs">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
