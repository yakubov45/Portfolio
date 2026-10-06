"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming",
      icon: "🐍",
      skills: ["Python", "JavaScript"],
    },
    {
      category: "Artificial Intelligence",
      icon: "🤖",
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
      icon: "🎨",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Zustand"],
    },
    {
      category: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "FastAPI"],
    },
    {
      category: "Database / Services",
      icon: "🗄️",
      skills: ["MongoDB", "Firebase"],
    },
    {
      category: "Tools",
      icon: "🛠️",
      skills: ["Git", "GitHub"],
    },
  ];

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block mb-2">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            Skills & <span className="gradient-heading">Technologies</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2">
            Technologies and frameworks I work with across AI development and full-stack web projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="academic-card p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="text-lg">{cat.icon}</span>
                  <h3 className="text-base font-bold text-slate-100">{cat.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 hover:border-sky-500/40 hover:text-sky-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
