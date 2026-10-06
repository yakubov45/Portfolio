"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: "techstore",
      name: "TechStore",
      category: "Full-Stack E-commerce",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      description:
        "TechStore is a full-stack technology e-commerce platform with product management, authentication, REST APIs, and multilingual support.",
      features: [
        "React frontend architecture",
        "Node.js & Express REST API",
        "MongoDB database integration",
        "User authentication",
        "Product catalog management",
        "Responsive interface",
        "Uzbek / Russian / English support",
      ],
      githubUrl: "https://github.com/yakubov45",
      liveUrl: "https://techstores.uz/",
      liveLabel: "Live Store (techstores.uz)",
    },
    {
      id: "onepc",
      name: "OnePC",
      category: "E-commerce / Full-Stack",
      tech: ["Next.js", "React", "Firebase", "Zustand", "Tailwind CSS"],
      description:
        "OnePC is a PC components e-commerce platform developed for the Uzbekistan market. The project focuses on product management, user authentication, PC building, and a modern shopping experience.",
      features: [
        "Product management",
        "User authentication",
        "Custom PC Builder tool",
        "Firebase Firestore database",
        "Firebase Authentication & Storage",
        "Responsive interface & image optimization",
      ],
      githubUrl: "https://github.com/yakubov45",
      liveUrl: "http://onepc.uz/",
      liveLabel: "Live Site (onepc.uz)",
    },
    {
      id: "green-processing",
      name: "Green Processing",
      category: "Quality Inspection & Operational Web App",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      description:
        "Green Processing is an industrial quality inspector dashboard and management system built for QA leads and line inspectors with multi-journal auditing and multi-language support.",
      features: [
        "Role-based inspector dashboard",
        "Multi-journal quality logging",
        "Real-time inspection status tracking",
        "TypeScript type safety",
        "Multilingual UI (UZ / RU / EN)",
      ],
      githubUrl: "https://github.com/yakubov45",
      liveUrl: "https://green-processing.vercel.app/",
      liveLabel: "Live App (Vercel)",
    },
    {
      id: "wood-defect",
      name: "AI Wood Defect Detection",
      category: "Artificial Intelligence / Computer Vision",
      tech: ["Python", "TensorFlow", "CNN", "Computer Vision", "Gradio"],
      description:
        "An AI-based computer vision project designed to detect defects in wood products using a custom Convolutional Neural Network.",
      datasetInfo:
        "More than 17,000 JPG images were available in the original dataset. For model development, a dataset of approximately 10,000 images was selected and prepared.",
      classes: ["Crack", "Dead Knot", "Live Knot", "Resin", "Knot with Crack", "Normal"],
      technicalDetails: [
        "Custom CNN architecture",
        "Image classification",
        "224 × 224 input images",
        "Six-class classification",
        "TensorFlow model evaluation",
        "Gradio web interface",
      ],
      flowDiagram: ["Dataset", "Preprocessing", "CNN", "Classification", "Result"],
      githubUrl: "https://github.com/yakubov45",
      liveUrl: "https://huggingface.co/spaces/but1321/wood-defect-classifier",
      liveLabel: "Hugging Face Space",
    },
  ];

  return (
    <section id="projects" className="section-padding relative bg-slate-950/40">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block mb-2">
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
            Featured <span className="gradient-heading">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2">
            Practical projects built during my studies in Artificial Intelligence and Full-Stack Web Development.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((proj) => (
            <div key={proj.id} className="academic-card p-6 sm:p-8">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <span className="text-xs font-mono text-sky-400 font-medium block mb-1">
                    {proj.category}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-100">{proj.name}</h3>
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      {proj.liveLabel || "Live Demo"}
                    </a>
                  )}

                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 text-xs font-mono flex items-center gap-2 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.7.115 2.5.337 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" />
                      </svg>
                      GitHub Repo
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed mb-5">
                {proj.description}
              </p>

              {/* Special AI Visual Flow Diagram if AI Wood Defect Detection */}
              {proj.flowDiagram && (
                <div className="mb-6 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-[11px] font-mono text-sky-400 block mb-3 uppercase tracking-wider">
                    Pipeline Flow Architecture
                  </span>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    {proj.flowDiagram.map((step, idx) => (
                      <div key={step} className="flex items-center gap-2">
                        <span className="px-3 py-1.5 rounded bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold">
                          {step}
                        </span>
                        {idx < proj.flowDiagram!.length - 1 && (
                          <span className="text-sky-400 font-bold">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Dataset & Classes Info if applicable */}
              {proj.datasetInfo && (
                <div className="mb-5 p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 text-xs space-y-2">
                  <div>
                    <span className="text-slate-400 font-mono">Dataset Preparation: </span>
                    <span className="text-slate-300">{proj.datasetInfo}</span>
                  </div>
                  {proj.classes && (
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      <span className="text-slate-400 font-mono mr-1">Target Classes (6): </span>
                      {proj.classes.map((cls) => (
                        <span key={cls} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px]">
                          {cls}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Features List */}
              {proj.features && (
                <div className="mb-5">
                  <span className="text-xs font-mono text-slate-400 block mb-2 font-semibold">
                    Key Implementation Features:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {proj.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical details list if available */}
              {proj.technicalDetails && (
                <div className="mb-5">
                  <span className="text-xs font-mono text-slate-400 block mb-2 font-semibold">
                    Technical Specifications:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-300">
                    {proj.technicalDetails.map((detail) => (
                      <div key={detail} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technology Badges */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                {proj.tech.map((t) => (
                  <span key={t} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
