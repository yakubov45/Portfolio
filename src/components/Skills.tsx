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
      { name: "Kali Linux / Linux", icon: "🐧", color: "#10B981", level: 85 },
      { name: "Nmap Scanning", icon: "📡", color: "#22D3EE", level: 88 },
      { name: "Burp Suite Testing", icon: "🐞", color: "#F59E0B", level: 80 },
      { name: "Metasploit Basics", icon: "⚡", color: "#EF4444", level: 75 },
      { name: "Sherlock OSINT Tool", icon: "🔍", color: "#8B5CF6", level: 85 },
      { name: "OSINT Data Gathering", icon: "🌐", color: "#3B82F6", level: 82 },
      { name: "Web Security (XSS)", icon: "🔐", color: "#EC4899", level: 80 },
      { name: "Cisco TACACS", icon: "🛡️", color: "#10B981", level: 72 },
      { name: "Networking (TCP/IP, VLAN)", icon: "🛜", color: "#06B6D4", level: 85 },
      { name: "Pentesting Basics", icon: "🎯", color: "#F97316", level: 75 },
    ],
  },
  // 1: Development
  {
    skills: [
      { name: "Python Scripting", icon: "🐍", color: "#3776AB", level: 82 },
      { name: "Web Development", icon: "🌐", color: "#4F8EF7", level: 85 },
      { name: "Frontend Concepts", icon: "🎨", color: "#61DAFB", level: 88 },
      { name: "Backend Concepts", icon: "⚙️", color: "#8B5CF6", level: 80 },
      { name: "API Integration", icon: "🔌", color: "#10B981", level: 85 },
      { name: "Git & GitHub", icon: "🐙", color: "#F05032", level: 88 },
    ],
  },
  // 2: SMM & Digital
  {
    skills: [
      { name: "Instagram SMM", icon: "📸", color: "#E1306C", level: 88 },
      { name: "Content Strategy", icon: "💡", color: "#F59E0B", level: 90 },
      { name: "Profile & Bio Branding", icon: "✨", color: "#EC4899", level: 92 },
      { name: "Logo & Portfolio Design", icon: "🖼️", color: "#8B5CF6", level: 85 },
      { name: "Product Ad & Video Scripts", icon: "🎬", color: "#10B981", level: 88 },
    ],
  },
  // 3: AI & Workflows
  {
    skills: [
      { name: "AI Marketing Tools", icon: "🤖", color: "#8B5CF6", level: 90 },
      { name: "AI Video & Script Ideation", icon: "🧠", color: "#22D3EE", level: 88 },
      { name: "AI Workflow Engineering", icon: "⚡", color: "#10B981", level: 85 },
      { name: "Prompting & Automation", icon: "🔮", color: "#EC4899", level: 86 },
    ],
  },
];

const specialties = [
  { label: "Pentesting & Recon", color: "#10B981", icon: "🔐" },
  { label: "Python Automation", color: "#3776AB", icon: "🐍" },
  { label: "Instagram SMM", color: "#E1306C", icon: "📸" },
  { label: "AI Workflows", color: "#8B5CF6", icon: "🤖" },
];

function SkillBar({ skill, inView }: { skill: Skill; inView: boolean }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <span
            className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
            style={{ background: `${skill.color}20`, color: skill.color }}
          >
            {skill.icon}
          </span>
          <span className="text-sm font-medium text-[#8B96B5] group-hover:text-[#F0F4FF] transition-colors">
            {skill.name}
          </span>
        </div>
        <span className="text-xs font-mono text-[#4B5678]">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-[rgba(79,142,247,0.08)] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
            boxShadow: `0 0 10px ${skill.color}60`,
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
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[rgba(16,185,129,0.05)] rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="tag mb-4 inline-block border-[rgba(16,185,129,0.3)] bg-[rgba(16,185,129,0.08)] text-[#10B981]">
            {tr.skills.tag}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#F0F4FF] mb-4">
            {tr.skills.title} <span className="gradient-text">{tr.skills.titleGrad}</span>
          </h2>
          <p className="text-[#8B96B5] max-w-2xl mx-auto text-lg">{tr.skills.sub}</p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {cats.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setActiveIdx(i)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeIdx === i
                  ? "bg-gradient-to-r from-[#10B981] via-[#4F8EF7] to-[#8B5CF6] text-white shadow-lg"
                  : "glass text-[#8B96B5] border border-[rgba(79,142,247,0.15)] hover:text-[#F0F4FF]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Active Category Skill Bars */}
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bento-card p-8"
          >
            <h3 className="text-lg font-bold text-[#F0F4FF] mb-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#10B981]" />
              {cats[activeIdx]}
            </h3>
            <div className="flex flex-col gap-5">
              {allCategories[activeIdx].skills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} inView={inView} />
              ))}
            </div>
          </motion.div>

          {/* All Skill Pills & Specialties */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="bento-card p-8"
          >
            <h3 className="text-lg font-bold text-[#F0F4FF] mb-6">{tr.skills.allTech}</h3>
            <div className="flex flex-wrap gap-2.5">
              {allCategories
                .flatMap((c) => c.skills)
                .map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: i * 0.02 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="skill-pill"
                  >
                    <span style={{ color: skill.color }}>{skill.icon}</span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[rgba(79,142,247,0.1)]">
              <p className="text-xs text-[#4B5678] font-mono mb-3">// {tr.skills.specialty}</p>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                {specialties.map((item) => (
                  <div key={item.label} className="flex items-center gap-2.5 text-xs text-[#8B96B5] p-2 rounded-xl bg-[rgba(15,21,37,0.5)] border border-[rgba(79,142,247,0.1)]">
                    <span
                      className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold"
                      style={{ background: `${item.color}20`, color: item.color }}
                    >
                      {item.icon}
                    </span>
                    <span className="font-medium text-[#F0F4FF]">{item.label}</span>
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
