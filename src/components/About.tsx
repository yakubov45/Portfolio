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

  const domainPillars = [
    {
      title: "IT / Cybersecurity",
      icon: "💻",
      color: "#10B981",
      border: "rgba(16, 185, 129, 0.3)",
      bg: "rgba(16, 185, 129, 0.08)",
      desc: "Kali Linux, Nmap scanning, Burp Suite testing, Metasploit basics, OSINT (Sherlock), Cisco TACACS, TCP/IP & VLAN routing.",
    },
    {
      title: "Development",
      icon: "🌐",
      color: "#4F8EF7",
      border: "rgba(79, 142, 247, 0.3)",
      bg: "rgba(79, 142, 247, 0.08)",
      desc: "Python scripting, Web Development foundations, Frontend/Backend concepts, REST APIs & Git/GitHub repo management.",
    },
    {
      title: "SMM / Digital",
      icon: "📱",
      color: "#EC4899",
      border: "rgba(236, 72, 153, 0.3)",
      bg: "rgba(236, 72, 153, 0.08)",
      desc: "Instagram SMM, profile & bio branding, content strategy, logo design, product ad & video script writing.",
    },
    {
      title: "AI Workflows",
      icon: "🤖",
      color: "#8B5CF6",
      border: "rgba(139, 92, 246, 0.3)",
      bg: "rgba(139, 92, 246, 0.08)",
      desc: "Integrating AI tools for marketing automation, generating video script concepts, prompt engineering & AI workflows.",
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[rgba(139,92,246,0.04)] rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} className="text-center mb-16">
          <span className="tag mb-4 inline-block border-[rgba(16,185,129,0.3)] bg-[rgba(16,185,129,0.08)] text-[#10B981]">{a.tag}</span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#F0F4FF] mb-4">
            {a.title} <span className="gradient-text">{a.titleGrad}</span>
          </h2>
          <p className="text-[#8B96B5] max-w-2xl mx-auto text-lg">{a.sub}</p>
        </motion.div>

        {/* Bio Header Card */}
        <motion.div custom={1} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} className="bento-card p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#10B981] via-[#4F8EF7] to-[#8B5CF6] flex items-center justify-center text-white font-black text-2xl shadow-lg flex-shrink-0">
                MY
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#F0F4FF]">Muhammad Yoqubjonov</h3>
                <p className="text-[#10B981] text-sm font-mono mt-1">{a.role}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="tag text-xs border-[rgba(16,185,129,0.3)] bg-[rgba(16,185,129,0.08)] text-[#10B981]">CyberSecurity</span>
              <span className="tag text-xs border-[rgba(79,142,247,0.3)] bg-[rgba(79,142,247,0.08)] text-[#4F8EF7]">Web & Python</span>
              <span className="tag text-xs border-[rgba(236,72,153,0.3)] bg-[rgba(236,72,153,0.08)] text-[#EC4899]">SMM Digital</span>
              <span className="tag text-xs border-[rgba(139,92,246,0.3)] bg-[rgba(139,92,246,0.08)] text-[#8B5CF6]">AI Workflows</span>
            </div>
          </div>
          <p className="text-[#8B96B5] leading-relaxed text-base mb-4">{a.bio1}</p>
          <p className="text-[#8B96B5] leading-relaxed text-base">{a.bio2}</p>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {domainPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              custom={idx + 2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="bento-card p-6 flex flex-col justify-between"
              style={{ borderColor: pillar.border }}
            >
              <div>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 font-bold"
                  style={{ background: pillar.bg, color: pillar.color, border: `1px solid ${pillar.border}` }}
                >
                  {pillar.icon}
                </div>
                <h4 className="text-lg font-bold text-[#F0F4FF] mb-2">{pillar.title}</h4>
                <p className="text-sm text-[#8B96B5] leading-relaxed">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Details Grid: Languages, Goals, Work Style, Domains */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Languages */}
          <motion.div custom={6} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} className="bento-card p-6">
            <h3 className="text-base font-bold text-[#F0F4FF] mb-5 flex items-center gap-2">
              <span className="text-xl">🌐</span> {a.langTitle}
            </h3>
            <div className="flex flex-col gap-4">
              {a.langs.map(lang => (
                <div key={lang.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{lang.flag}</span>
                    <span className="text-[#F0F4FF] text-sm font-medium">{lang.name}</span>
                  </div>
                  <span className="tag text-xs">{lang.level}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Goals */}
          <motion.div custom={7} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} className="bento-card p-6">
            <h3 className="text-base font-bold text-[#F0F4FF] mb-5 flex items-center gap-2">
              <span className="text-xl">🎯</span> {a.goalTitle}
            </h3>
            <ul className="flex flex-col gap-3">
              {a.goals.map(g => (
                <li key={g} className="flex items-center gap-3 text-sm text-[#8B96B5]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] flex-shrink-0" />
                  {g}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Work Style */}
          <motion.div custom={8} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} className="bento-card p-6">
            <h3 className="text-base font-bold text-[#F0F4FF] mb-5 flex items-center gap-2">
              <span className="text-xl">⚙️</span> {a.styleTitle}
            </h3>
            <div className="flex flex-wrap gap-2">
              {a.styles.map(s => (
                <span key={s} className="text-xs px-3 py-1.5 rounded-lg bg-[rgba(16,185,129,0.08)] border border-[rgba(16,185,129,0.2)] text-[#8B96B5] font-medium">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Interests / Domains */}
          <motion.div custom={9} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} className="bento-card p-6">
            <h3 className="text-base font-bold text-[#F0F4FF] mb-5 flex items-center gap-2">
              <span className="text-xl">💡</span> {a.interestTitle}
            </h3>
            <div className="flex flex-col gap-2.5">
              {a.interests.map(item => (
                <div key={item.label} className="flex items-center gap-2 text-xs text-[#8B96B5] p-1.5 rounded-lg hover:bg-[rgba(79,142,247,0.05)] transition-colors">
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
