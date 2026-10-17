"use client";

import { motion } from "framer-motion";

export default function AIJourney() {
  const steps = [
    {
      title: "Programming",
      status: "Completed Foundations",
      desc: "Python & JavaScript fundamentals, data structures, and algorithms.",
    },
    {
      title: "Machine Learning",
      status: "Active Focus",
      desc: "Supervised & unsupervised learning algorithms, scikit-learn, evaluation metrics.",
    },
    {
      title: "Deep Learning",
      status: "Active Focus",
      desc: "Artificial Neural Networks, backpropagation, optimization, TensorFlow.",
    },
    {
      title: "Computer Vision",
      status: "Active Focus",
      desc: "Image classification, CNNs, image preprocessing, dataset curation.",
    },
    {
      title: "Neural Networks",
      status: "Developing",
      desc: "Custom network architectures, multi-class classification, model tuning.",
    },
    {
      title: "Transformers & LLMs",
      status: "Learning Goal",
      desc: "Attention mechanisms, Transformer architectures, Fine-tuning concepts.",
    },
    {
      title: "AI Agents",
      status: "Learning Goal",
      desc: "Autonomous agent workflows, tool integration, reasoning loops.",
    },
    {
      title: "AI Engineer",
      status: "Long-Term Goal",
      desc: "Building scalable, production-ready AI systems and intelligent products.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <section id="ai-journey" className="section-padding relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-[0.2em] block mb-2">
            05 // Learning Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            My AI <span className="gradient-heading">Journey</span>
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto mt-2">
            A transparent progression of the skills and domains I am actively studying and developing toward my career goal as an AI Engineer.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {steps.map((step, idx) => {
            const isGoal = step.status === "Long-Term Goal";
            const isActive = step.status === "Active Focus";

            return (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className={`academic-card p-5 flex flex-col justify-between relative group ${
                  isGoal
                    ? "border-white/50 bg-white/[0.04]"
                    : "border-white/10"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-zinc-400 group-hover:text-white transition-colors">
                      0{idx + 1}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                        isActive
                          ? "bg-white text-black font-bold"
                          : isGoal
                          ? "bg-white/20 text-white border border-white/40 font-bold"
                          : "bg-zinc-900 text-zinc-400 border border-white/10"
                      }`}
                    >
                      {step.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-zinc-500 font-mono text-xs">
                    →
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
