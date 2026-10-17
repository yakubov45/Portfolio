"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming",
      code: "01",
      skills: ["Python", "JavaScript"],
    },
    {
      category: "Artificial Intelligence",
      code: "02",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Neural Networks",
        "CNN",
        "TensorFlow",
        "scikit-learn",
      ],
    },
    {
      category: "Frontend",
      code: "03",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Zustand"],
    },
    {
      category: "Backend",
      code: "04",
      skills: ["Node.js", "Express.js", "FastAPI"],
    },
    {
      category: "Database / Services",
      code: "05",
      skills: ["MongoDB", "Firebase"],
    },
    {
      category: "Tools",
      code: "06",
      skills: ["Git", "GitHub"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-[0.2em] block mb-2">
            03 // Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Skills & <span className="gradient-heading">Technologies</span>
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto mt-2">
            Technologies and frameworks I work with across AI development and full-stack web projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.category}
              variants={cardVariants}
              className="academic-card p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
                  <h3 className="text-base font-bold text-white group-hover:tracking-wide transition-all">
                    {cat.category}
                  </h3>
                  <span className="text-xs font-mono text-zinc-500 group-hover:text-white transition-colors">
                    /{cat.code}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.06, y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 18 }}
                      className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-white/15 text-xs font-mono text-zinc-200 hover:bg-white hover:text-black hover:border-white transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
