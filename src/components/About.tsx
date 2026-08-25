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
      color: "#00FF9D",
      border: "rgba(0, 255, 157, 0.35)",
      bg: "rgba(0, 255, 157, 0.06)",
      desc: "Kali Linux, Nmap network scanner, Burp Suite auditing, Metasploit, Sherlock OSINT, Cisco TACACS, TCP/IP & VLAN routing.",
    },
    {
      title: "Development",
      icon: "🌐",
      color: "#00F2FE",
      border: "rgba(0, 242, 254, 0.35)",
      bg: "rgba(0, 242, 254, 0.06)",
      desc: "Python task automation, Web Development, Frontend/Backend architecture, REST APIs & Git/GitHub repository workflow.",
    },
    {
      title: "SMM / Digital",
      icon: "📱",
      color: "#FF0844",
      border: "rgba(255, 8, 68, 0.35)",
      bg: "rgba(255, 8, 68, 0.06)",
      desc: "Instagram SMM strategy, bio & profile branding, content ideation, logo design, product promo & video scriptwriting.",
    },
    {
      title: "AI Workflows",
      icon: "🤖",
      color: "#7F00FF",
      border: "rgba(127, 0, 255, 0.35)",
      bg: "rgba(127, 0, 255, 0.06)",
      desc: "AI marketing integration, generating video & script concepts with AI, prompt engineering, and workflow automation.",
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[rgba(0,242,254,0.04)] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} className="text-center mb-16">
          <span className="cyber-tag mb-4 inline-block">{a.tag}</span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#F0F6FF] mb-4">
            {a.title} <span className="gradient-text-electric">{a.titleGrad}</span>
          </h2>
          <p className="text-[#8B96B5] max-w-2xl mx-auto text-lg">{a.sub}</p>
        </motion.div>

        {/* Bio Command Header Card */}
        <motion.div custom={1} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} className="cyber-card p-8 mb-8 border-[rgba(0,242,254,0.3)]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00F2FE] via-[#4FACFE] to-[#00FF9D] flex items-center justify-center text-[#050811] font-black text-2xl shadow-[0_0_30px_rgba(0,242,254,0.4)] flex-shrink-0">
                IT
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#F0F6FF]">Turg'unboyev Ismoil</h3>
                <p className="text-[#00FF9D] text-xs font-mono mt-1">{a.role}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="cyber-tag text-xs">CyberSecurity</span>
              <span className="cyber-tag text-xs text-[#00F2FE] border-[rgba(0,242,254,0.3)]">Web & Python</span>
              <span className="cyber-tag text-xs text-[#FF0844] border-[rgba(255,8,68,0.3)]">SMM Digital</span>
              <span className="cyber-tag text-xs text-[#7F00FF] border-[rgba(127,0,255,0.3)]">AI Workflows</span>
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
              className="cyber-card p-6 flex flex-col justify-between"
              style={{ borderColor: pillar.border }}
            >
              <div>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 font-bold"
                  style={{ background: pillar.bg, color: pillar.color, border: `1px solid ${pillar.border}` }}
                >
                  {pillar.icon}
                </div>
                <h4 className="text-lg font-bold text-[#F0F6FF] mb-2">{pillar.title}</h4>
                <p className="text-xs text-[#8B96B5] leading-relaxed">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Languages */}
          <motion.div custom={6} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} className="cyber-card p-6">
            <h3 className="text-sm font-bold text-[#F0F6FF] mb-4 flex items-center gap-2">
              <span className="text-lg">🌐</span> {a.langTitle}
            </h3>
            <div className="flex flex-col gap-3.5">
              {a.langs.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">{lang.flag}</span>
                    <span className="text-[#F0F6FF] text-xs font-medium">{lang.name}</span>
                  </div>
                  <span className="cyber-tag text-[10px] py-0.5">{lang.level}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Goals */}
          <motion.div custom={7} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} className="cyber-card p-6">
            <h3 className="text-sm font-bold text-[#F0F6FF] mb-4 flex items-center gap-2">
              <span className="text-lg">🎯</span> {a.goalTitle}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {a.goals.map((g) => (
                <li key={g} className="flex items-start gap-2 text-xs text-[#8B96B5]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D] mt-1 flex-shrink-0" />
                  {g}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Work Style */}
          <motion.div custom={8} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} className="cyber-card p-6">
            <h3 className="text-sm font-bold text-[#F0F6FF] mb-4 flex items-center gap-2">
              <span className="text-lg">⚙️</span> {a.styleTitle}
            </h3>
            <div className="flex flex-wrap gap-2">
              {a.styles.map((s) => (
                <span key={s} className="text-xs px-3 py-1.5 rounded-lg bg-[rgba(0,242,254,0.06)] border border-[rgba(0,242,254,0.2)] text-[#8B96B5]">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Focus Areas */}
          <motion.div custom={9} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} className="cyber-card p-6">
            <h3 className="text-sm font-bold text-[#F0F6FF] mb-4 flex items-center gap-2">
              <span className="text-lg">💡</span> {a.interestTitle}
            </h3>
            <div className="flex flex-col gap-2">
              {a.interests.map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-xs text-[#8B96B5] p-2 rounded-lg bg-[rgba(10,16,31,0.5)] border border-[rgba(0,242,254,0.1)]">
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
