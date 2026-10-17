"use client";

import { motion } from "framer-motion";

export default function CurrentFocus() {
  const focusItems = [
    {
      title: "Machine Learning",
      code: "ML",
      desc: "Algorithms, feature engineering, and model evaluation techniques.",
    },
    {
      title: "Deep Learning",
      code: "DL",
      desc: "Neural network architectures, backpropagation, and TensorFlow framework.",
    },
    {
      title: "Computer Vision",
      code: "CV",
      desc: "Image classification, Convolutional Neural Networks (CNN), and image processing.",
    },
    {
      title: "Neural Networks",
      code: "NN",
      desc: "Custom network design, optimization algorithms, and loss function tuning.",
    },
    {
      title: "Transformers",
      code: "TF",
      desc: "Attention mechanisms, sequence-to-sequence modeling, and architecture design.",
    },
    {
      title: "Large Language Models",
      code: "LLM",
      desc: "Understanding language models, fine-tuning concepts, and prompt design.",
    },
    {
      title: "AI Agents",
      code: "AG",
      desc: "Autonomous agent architectures, tool usage, and reasoning workflows.",
    },
    {
      title: "FastAPI",
      code: "API",
      desc: "Building high-performance Python web APIs for model deployment.",
    },
    {
      title: "Full-Stack Development",
      code: "FS",
      desc: "Combining React/Next.js frontends with scalable modern backends.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <section id="focus" className="section-padding relative bg-zinc-950/50 border-y border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-[0.2em] block mb-2">
            06 // Active Study & Research
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Currently <span className="gradient-heading">Learning</span>
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto mt-2">
            Topics and technologies I am currently studying and applying in my coursework and personal projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {focusItems.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="academic-card p-5 flex items-start gap-4 group"
            >
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/15 flex items-center justify-center text-xs font-mono font-bold text-white flex-shrink-0 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                {item.code}
              </div>
              <div>
                <h3 className="text-sm font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
