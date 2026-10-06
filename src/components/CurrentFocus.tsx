"use client";

import { motion } from "framer-motion";

export default function CurrentFocus() {
  const focusItems = [
    { title: "Machine Learning", icon: "📊", desc: "Algorithms, feature engineering, and model evaluation techniques." },
    { title: "Deep Learning", icon: "🧠", desc: "Neural network architectures, backpropagation, and TensorFlow framework." },
    { title: "Computer Vision", icon: "👁️", desc: "Image classification, Convolutional Neural Networks (CNN), and image processing." },
    { title: "Neural Networks", icon: "🌐", desc: "Custom network design, optimization algorithms, and loss function tuning." },
    { title: "Transformers", icon: "⚡", desc: "Attention mechanisms, sequence-to-sequence modeling, and architecture design." },
    { title: "Large Language Models", icon: "💬", desc: "Understanding language models, fine-tuning concepts, and prompt design." },
    { title: "AI Agents", icon: "🤖", desc: "Autonomous agent architectures, tool usage, and reasoning workflows." },
    { title: "FastAPI", icon: "🚀", desc: "Building high-performance Python web APIs for model deployment." },
    { title: "Full-Stack Development", icon: "💻", desc: "Combining React/Next.js frontends with scalable modern backends." },
  ];

  return (
    <section id="focus" className="section-padding relative bg-slate-950/40">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block mb-2">
            Active Study & Research
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            Currently <span className="gradient-heading">Learning</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2">
            Topics and technologies I am currently studying and applying in my coursework and personal projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {focusItems.map((item) => (
            <div key={item.title} className="academic-card p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-lg flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-100 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
