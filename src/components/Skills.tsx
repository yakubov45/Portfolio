"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { useLang } from "@/context/LanguageContext";

type Skill = { name: string; icon: string; color: string; level: number };

const allCategories = [
  // 0: Cybersecurity & Networking
  {
    skills: [
      { name: "Kali Linux / Linux", icon: "🐧", color: "#00FF9D", level: 88 },
      { name: "Nmap Network Scanner", icon: "📡", color: "#00F2FE", level: 90 },
      { name: "Burp Suite Auditing", icon: "🐞", color: "#FF0844", level: 82 },
      { name: "Metasploit Framework", icon: "⚡", color: "#F59E0B", level: 78 },
      { name: "Sherlock OSINT", icon: "🔍", color: "#7F00FF", level: 86 },
      { name: "Web Security (XSS)", icon: "🔐", color: "#00FF9D", level: 82 },
      { name: "Cisco TACACS Basics", icon: "🛡️", color: "#00F2FE", level: 75 },
      { name: "TCP/IP & VLAN Routing", icon: "🛜", color: "#4FACFE", level: 85 },
      { name: "Pentesting Fundamentals", icon: "🎯", color: "#FF0844", level: 80 },
    ],
  },
  // 1: Development
  {
    skills: [
      { name: "Python Scripting", icon: "🐍", color: "#3776AB", level: 85 },
      { name: "Web Development", icon: "🌐", color: "#00F2FE", level: 88 },
      { name: "Frontend Architecture", icon: "🎨", color: "#61DAFB", level: 86 },
      { name: "Backend Concepts", icon: "⚙️", color: "#7F00FF", level: 82 },
      { name: "REST API Integration", icon: "🔌", color: "#00FF9D", level: 87 },
      { name: "Git & GitHub Workflow", icon: "🐙", color: "#F05032", level: 90 },
    ],
  },
  // 2: SMM & Digital
  {
    skills: [
      { name: "Instagram SMM Strategy", icon: "📸", color: "#E1306C", level: 90 },
      { name: "Content Ideation", icon: "💡", color: "#F59E0B", level: 92 },
      { name: "Profile & Bio Branding", icon: "✨", color: "#00F2FE", level: 94 },
      { name: "Logo & Portfolio Design", icon: "🖼️", color: "#7F00FF", level: 88 },
      { name: "Ad & Video Scriptwriting", icon: "🎬", color: "#00FF9D", level: 90 },
    ],
  },
  // 3: AI & Workflows
  {
    skills: [
      { name: "AI Content Tools", icon: "🤖", color: "#7F00FF", level: 92 },
      { name: "AI Script & Storyboard", icon: "🧠", color: "#00F2FE", level: 90 },
      { name: "AI Workflow Engineering", icon: "⚡", color: "#00FF9D", level: 88 },
      { name: "Prompting & Automation", icon: "🔮", color: "#FF0844", level: 89 },
    ],
  },
];

const specialties = [
  { label: "Pentesting & OSINT", color: "#00FF9D", icon: "🔐" },
  { label: "Python Automation", color: "#00F2FE", icon: "🐍" },
  { label: "Instagram SMM", color: "#E1306C", icon: "📸" },
  { label: "AI Workflows", color: "#7F00FF", icon: "🤖" },
];

function SkillBar({ skill, inView }: { skill: Skill; inView: boolean }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold" style={{ background: `${skill.color}20`, color: skill.color }}>
            {skill.icon}
          </span>
          <span className="text-xs font-semibold text-[#8B96B5] group-hover:text-[#F0F6FF] transition-colors">
            {skill.name}
          </span>
        </div>
        <span className="text-xs font-mono text-[#00F2FE]">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-[rgba(10,16,31,0.8)] rounded-full overflow-hidden border border-[rgba(0,242,254,0.1)]">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${skill.color}70, ${skill.color})`,
            boxShadow: `0 0 12px ${skill.color}70`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { tr } = useLang();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [activeIdx, setActiveIdx] = useState(0);
  const cats = tr.skills.cats;

  return (
    <section id="skills" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-14">
          <span className="cyber-tag mb-4 inline-block">{tr.skills.tag}</span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#F0F6FF] mb-4">
            {tr.skills.title} <span className="gradient-text-electric">{tr.skills.titleGrad}</span>
          </h2>
          <p className="text-[#8B96B5] max-w-2xl mx-auto text-lg">{tr.skills.sub}</p>
        </motion.div>

        {/* Tabs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="flex flex-wrap justify-center gap-3 mb-10">
          {cats.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setActiveIdx(i)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold font-mono tracking-wide transition-all duration-300 ${
                activeIdx === i
                  ? "bg-gradient-to-r from-[#00F2FE] via-[#4FACFE] to-[#00FF9D] text-[#050811] shadow-[0_0_20px_rgba(0,242,254,0.4)]"
                  : "bg-[rgba(10,16,31,0.6)] text-[#8B96B5] border border-[rgba(0,242,254,0.15)] hover:text-[#F0F6FF]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Active Skill Bars */}
          <motion.div key={activeIdx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="cyber-card p-8">
            <h3 className="text-base font-bold text-[#F0F6FF] mb-6 flex items-center gap-2 font-mono">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00FF9D]" />
              {cats[activeIdx]}
            </h3>
            <div className="flex flex-col gap-5">
              {allCategories[activeIdx].skills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} inView={inView} />
              ))}
            </div>
          </motion.div>

          {/* All Skill Pills */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 }} className="cyber-card p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-[#F0F6FF] mb-6 font-mono">{tr.skills.allTech}</h3>
              <div className="flex flex-wrap gap-2">
                {allCategories
                  .flatMap((c) => c.skills)
                  .map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: i * 0.02 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 rounded-xl bg-[rgba(10,16,31,0.6)] border border-[rgba(0,242,254,0.15)] hover:border-[#00FF9D] text-xs font-mono text-[#8B96B5] hover:text-[#F0F6FF] transition-all flex items-center gap-1.5 cursor-default"
                    >
                      <span style={{ color: skill.color }}>{skill.icon}</span>
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[rgba(0,242,254,0.1)]">
              <p className="text-[11px] text-[#00F2FE] font-mono mb-3">// {tr.skills.specialty}</p>
              <div className="grid grid-cols-2 gap-3">
                {specialties.map((item) => (
                  <div key={item.label} className="flex items-center gap-2.5 text-xs text-[#8B96B5] p-2 rounded-xl bg-[rgba(5,8,17,0.7)] border border-[rgba(0,242,254,0.12)]">
                    <span className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold" style={{ background: `${item.color}20`, color: item.color }}>
                      {item.icon}
                    </span>
                    <span className="font-semibold text-[#F0F6FF]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
