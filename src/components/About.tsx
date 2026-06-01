"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLang } from "@/context/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1 } }),
};

export default function About() {
  const { tr } = useLang();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const a = tr.about;

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[rgba(139,92,246,0.04)] rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} className="text-center mb-16">
          <span className="tag mb-4 inline-block">{a.tag}</span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#F0F4FF] mb-4">
            {a.title} <span className="gradient-text">{a.titleGrad}</span>
          </h2>
          <p className="text-[#8B96B5] max-w-2xl mx-auto text-lg">{a.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Bio card */}
          <motion.div custom={1} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} className="lg:col-span-2 bento-card p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4F8EF7] to-[#8B5CF6] flex items-center justify-center text-white font-black text-xl shadow-lg flex-shrink-0">MY</div>
              <div>
                <h3 className="text-xl font-bold text-[#F0F4FF]">Muhammad Yoqubjonov</h3>
                <p className="text-[#4F8EF7] text-sm font-mono">{a.role}</p>
              </div>
            </div>
            <p className="text-[#8B96B5] leading-relaxed mb-4">{a.bio1}</p>
            <p className="text-[#8B96B5] leading-relaxed">{a.bio2}</p>
          </motion.div>

          {/* Languages */}
          <motion.div custom={2} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} className="bento-card p-6">
            <h3 className="text-base font-bold text-[#F0F4FF] mb-5 flex items-center gap-2"><span className="text-xl">🌐</span> {a.langTitle}</h3>
            <div className="flex flex-col gap-4">
              {a.langs.map(lang => (
                <div key={lang.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3"><span className="text-xl">{lang.flag}</span><span className="text-[#F0F4FF] text-sm font-medium">{lang.name}</span></div>
                  <span className="tag text-xs">{lang.level}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Goals */}
          <motion.div custom={3} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} className="bento-card p-6">
            <h3 className="text-base font-bold text-[#F0F4FF] mb-5 flex items-center gap-2"><span className="text-xl">🎯</span> {a.goalTitle}</h3>
            <ul className="flex flex-col gap-3">
              {a.goals.map(g => (
                <li key={g} className="flex items-center gap-3 text-sm text-[#8B96B5]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F8EF7] flex-shrink-0" />{g}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Work style */}
          <motion.div custom={4} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} className="bento-card p-6">
            <h3 className="text-base font-bold text-[#F0F4FF] mb-5 flex items-center gap-2"><span className="text-xl">⚙️</span> {a.styleTitle}</h3>
            <div className="flex flex-wrap gap-2">
              {a.styles.map(s => (
                <span key={s} className="text-xs px-3 py-1.5 rounded-lg bg-[rgba(79,142,247,0.08)] border border-[rgba(79,142,247,0.15)] text-[#8B96B5] font-medium">{s}</span>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div custom={5} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} className="md:col-span-2 lg:col-span-1 bento-card p-6">
            <h3 className="text-base font-bold text-[#F0F4FF] mb-5 flex items-center gap-2"><span className="text-xl">💡</span> {a.interestTitle}</h3>
            <div className="grid grid-cols-2 gap-3">
              {a.interests.map(item => (
                <div key={item.label} className="flex items-center gap-2 text-sm text-[#8B96B5] p-2 rounded-lg hover:bg-[rgba(79,142,247,0.05)] transition-colors">
                  <span>{item.icon}</span><span>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
