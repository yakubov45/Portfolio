"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/context/LanguageContext";

export default function Hero() {
  const { tr } = useLang();
  const roles = tr.hero.roles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingRef = useRef<ReturnType<typeof setTimeout>>(null);
  const [activeDomain, setActiveDomain] = useState<number>(0);

  useEffect(() => {
    const currentRole = roles[roleIndex % roles.length];
    typingRef.current = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
        if (displayText.length === currentRole.length) setTimeout(() => setIsDeleting(true), 2200);
      } else {
        setDisplayText(displayText.slice(0, -1));
        if (displayText.length === 0) { setIsDeleting(false); setRoleIndex(i => (i + 1) % roles.length); }
      }
    }, isDeleting ? 30 : 65);
    return () => { if (typingRef.current) clearTimeout(typingRef.current); };
  }, [displayText, isDeleting, roleIndex, roles]);

  const domainTabs = [
    {
      id: 0,
      title: "01. Cybersecurity & Pentesting",
      badge: "Kali Linux / Burp / Nmap",
      icon: "💻",
      color: "#00FF9D",
      border: "rgba(0,255,157,0.4)",
      bg: "rgba(0,255,157,0.06)",
      codeSnippet: [
        "// Kali Linux & Network Reconnaissance",
        "nmap -sV -sC -p- 192.168.1.1/24",
        "burpsuite --intercept-proxy HTTP/2",
        "sherlock --username target_id --osint",
        "Status: System Hardened ✓ [Cisco TACACS]",
      ],
    },
    {
      id: 1,
      title: "02. Python & Web Development",
      badge: "Python / Web / APIs / Git",
      icon: "🐍",
      color: "#00F2FE",
      border: "rgba(0,242,254,0.4)",
      bg: "rgba(0,242,254,0.06)",
      codeSnippet: [
        "# Python Scripting & REST API Engine",
        "import requests, json, git",
        "def build_web_app(framework='Next.js'):",
        "    return render_ui() + sync_api_backend()",
        "Status: Production Build Ready ✓",
      ],
    },
    {
      id: 2,
      title: "03. Instagram SMM & Digital",
      badge: "Branding / Ads / Video Scripts",
      icon: "📱",
      color: "#FF0844",
      border: "rgba(255,8,68,0.4)",
      bg: "rgba(255,8,68,0.06)",
      codeSnippet: [
        "// Instagram SMM & Content Engine",
        "const profileStrategy = { bio: 'Optimized', logo: 'Vector' };",
        "const videoScript = generateAdCopy('Product Showcase');",
        "publishContent({ channel: 'Instagram Reels' });",
        "Status: Campaign Live 🔥",
      ],
    },
    {
      id: 3,
      title: "04. AI Content Workflows",
      badge: "AI Automation / Prompting",
      icon: "🤖",
      color: "#7F00FF",
      border: "rgba(127,0,255,0.4)",
      bg: "rgba(127,0,255,0.06)",
      codeSnippet: [
        "/* AI Workflow & Prompting Hub */",
        "run_ai_pipeline(mode='Marketing Scripting')",
        "generate_creative_ideas(target='Viral Engagement')",
        "export_video_storyboard()",
        "Status: AI Automation Active ⚡",
      ],
    },
  ];

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid pt-24 pb-16">
      {/* Glow Rings */}
      <div className="absolute w-[700px] h-[700px] bg-[rgba(0,242,254,0.08)] rounded-full blur-[140px] pointer-events-none" style={{ top: "-10%", left: "50%", transform: "translateX(-50%)" }} />
      <div className="absolute w-[500px] h-[500px] bg-[rgba(0,255,157,0.07)] rounded-full blur-[120px] pointer-events-none" style={{ bottom: "0%", right: "-5%" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Top Tag Pill */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-flex items-center gap-2 mb-6">
          <span className="cyber-tag border-[rgba(0,255,157,0.4)] bg-[rgba(0,255,157,0.08)] text-[#00FF9D]">
            <span className="w-2 h-2 rounded-full bg-[#00FF9D] animate-ping" />
            {tr.hero.badge}
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-4">
          <span className="text-[#F0F6FF]">{tr.hero.greeting}</span>{" "}
          <span className="gradient-text-electric">Turg'unboyev Ismoil</span>
        </motion.h1>

        {/* Typing Role */}
        <div className="h-12 mb-6 flex items-center justify-center">
          <span className="font-mono text-[#00F2FE] text-lg sm:text-xl font-bold tracking-wide">
            &gt; {displayText}
            <span className="animate-pulse text-[#00FF9D] ml-1">_</span>
          </span>
        </div>

        {/* Hero Description */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-[#8B96B5] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          {tr.hero.desc}
        </motion.p>

        {/* Buttons */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-4 justify-center mb-14">
          <motion.button onClick={() => go("projects")} whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(0,242,254,0.4)" }} whileTap={{ scale: 0.97 }} className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#00F2FE] via-[#4FACFE] to-[#00FF9D] text-[#050811] font-extrabold text-sm shadow-xl tracking-wide">
            {tr.hero.viewProjects}
          </motion.button>
          <motion.button onClick={() => go("contact")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="px-8 py-3.5 rounded-2xl bg-[rgba(10,16,31,0.7)] text-[#F0F6FF] font-semibold text-sm border border-[rgba(0,242,254,0.3)] hover:border-[#00FF9D] transition-all">
            {tr.hero.contactMe}
          </motion.button>
        </motion.div>

        {/* Interactive Matrix Dashboard Deck */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="max-w-5xl mx-auto">
          {/* Domain Selector Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {domainTabs.map((tab) => {
              const isActive = activeDomain === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveDomain(tab.id)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-300 ${
                    isActive
                      ? "bg-[rgba(10,16,31,0.9)] border-[#00FF9D] shadow-[0_0_25px_rgba(0,255,157,0.2)]"
                      : "bg-[rgba(10,16,31,0.5)] border-[rgba(0,242,254,0.15)] hover:border-[rgba(0,242,254,0.4)]"
                  }`}
                >
                  <div className="text-xl mb-2">{tab.icon}</div>
                  <div className="text-xs font-bold text-[#F0F6FF] truncate">{tab.title}</div>
                  <div className="text-[10px] font-mono text-[#8B96B5] mt-1">{tab.badge}</div>
                </button>
              );
            })}
          </div>

          {/* Active HUD Code & Specs Monitor */}
          <div className="cyber-card p-6 text-left border-[rgba(0,242,254,0.3)]">
            <div className="flex items-center justify-between border-b border-[rgba(0,242,254,0.15)] pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-cyan-400 inline-block animate-pulse" />
                <span className="text-xs font-mono text-[#00F2FE] font-bold">CYBER HUD MONITOR :: DOMAIN_0{activeDomain + 1}</span>
              </div>
              <span className="text-[11px] font-mono text-[#00FF9D] bg-[rgba(0,255,157,0.1)] px-2.5 py-0.5 rounded-md border border-[rgba(0,255,157,0.3)]">
                ACTIVE
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={activeDomain} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="font-mono text-xs leading-relaxed">
                {domainTabs[activeDomain].codeSnippet.map((line, idx) => (
                  <div key={idx} className={`mb-1.5 ${line.startsWith("//") || line.startsWith("#") || line.startsWith("/*") ? "text-[#4B5678]" : line.startsWith("Status") ? "text-[#00FF9D] font-bold" : "text-[#F0F6FF]"}`}>
                    {line}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-14 flex justify-center gap-10 sm:gap-16">
          {tr.hero.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-black gradient-text-electric">{s.num}</div>
              <div className="text-xs text-[#8B96B5] font-mono mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
