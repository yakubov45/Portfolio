"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/context/LanguageContext";

export default function Hero() {
  const { tr } = useLang();
  const roles = tr.hero.roles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const currentRole = roles[roleIndex % roles.length];
    typingRef.current = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
        if (displayText.length === currentRole.length) setTimeout(() => setIsDeleting(true), 2000);
      } else {
        setDisplayText(displayText.slice(0, -1));
        if (displayText.length === 0) { setIsDeleting(false); setRoleIndex(i => (i + 1) % roles.length); }
      }
    }, isDeleting ? 40 : 80);
    return () => { if (typingRef.current) clearTimeout(typingRef.current); };
  }, [displayText, isDeleting, roleIndex, roles]);

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <div className="absolute w-[600px] h-[600px] bg-[rgba(79,142,247,0.12)] rounded-full blur-[80px] pointer-events-none animate-float" style={{ top: "-10%", right: "-15%" }} />
      <div className="absolute w-[400px] h-[400px] bg-[rgba(139,92,246,0.1)] rounded-full blur-[80px] pointer-events-none animate-float" style={{ bottom: "10%", left: "-10%", animationDelay: "3s" }} />
      <div className="absolute inset-0 bg-gradient-radial from-[rgba(79,142,247,0.05)] via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-flex items-center gap-2 mb-6">
              <span className="tag"><span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />{tr.hero.badge}</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-4">
              <span className="text-[#F0F4FF]">{tr.hero.greeting}</span><br />
              <span className="gradient-text">Muhammad</span><br />
              <span className="text-[#F0F4FF]">Yoqubjonov</span>
            </motion.h1>

            <div className="h-10 mb-6">
              <span className="font-mono text-[#4F8EF7] text-xl font-medium">{displayText}<span className="animate-pulse ml-0.5">|</span></span>
            </div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-[#8B96B5] text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              {tr.hero.desc}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <motion.button onClick={() => go("projects")} whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(79,142,247,0.5)" }} whileTap={{ scale: 0.97 }} className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white font-semibold shadow-lg">
                {tr.hero.viewProjects}
              </motion.button>
              <motion.button onClick={() => go("contact")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="px-8 py-3.5 rounded-2xl glass text-[#F0F4FF] font-semibold border border-[rgba(79,142,247,0.3)] hover:border-[rgba(79,142,247,0.6)] transition-all">
                {tr.hero.contactMe}
              </motion.button>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="flex gap-8 justify-center lg:justify-start">
              {tr.hero.stats.map(s => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="text-2xl font-black gradient-text">{s.num}</div>
                  <div className="text-xs text-[#4B5678] font-medium mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - code card */}
          <div className="flex-shrink-0">
            <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3, type: "spring" }} className="relative">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -inset-6 rounded-full border border-dashed border-[rgba(79,142,247,0.2)]" />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute -inset-12 rounded-full border border-dashed border-[rgba(139,92,246,0.15)]" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-[#0F1525] to-[#1a2040] border border-[rgba(79,142,247,0.2)] shadow-[0_0_80px_rgba(79,142,247,0.15)] flex items-center justify-center overflow-hidden">
                  <div className="p-6 font-mono text-sm text-left w-full">
                    <div className="text-[#4B5678] mb-2 text-xs">// developer.ts</div>
                    <div className="mb-1"><span className="text-[#8B5CF6]">const </span><span className="text-[#22D3EE]">dev</span><span className="text-[#F0F4FF]"> = {"{"}</span></div>
                    <div className="pl-4 mb-1"><span className="text-[#4F8EF7]">name</span><span className="text-[#F0F4FF]">: </span><span className="text-[#10B981]">"Muhammad"</span>,</div>
                    <div className="pl-4 mb-1"><span className="text-[#4F8EF7]">location</span><span className="text-[#F0F4FF]">: </span><span className="text-[#10B981]">"Toshkent"</span>,</div>
                    <div className="pl-4 mb-1"><span className="text-[#4F8EF7]">stack</span><span className="text-[#F0F4FF]">: [</span></div>
                    <div className="pl-8 text-[#10B981]">"Next.js",</div>
                    <div className="pl-8 text-[#10B981]">"TypeScript",</div>
                    <div className="pl-8 text-[#10B981]">"Firebase"</div>
                    <div className="pl-4 text-[#F0F4FF]">],</div>
                    <div className="pl-4"><span className="text-[#4F8EF7]">passion</span><span className="text-[#F0F4FF]">: </span><span className="text-[#10B981]">true</span></div>
                    <div className="text-[#F0F4FF]">{"}"}</div>
                    <div className="mt-2 text-[#8B96B5] text-xs animate-pulse">▊</div>
                  </div>
                </div>
                <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 border border-[rgba(79,142,247,0.3)]">
                  <div className="text-xs font-mono text-[#4F8EF7] font-medium">Next.js 15</div>
                </motion.div>
                <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 3.5, repeat: Infinity }} className="absolute -bottom-4 -left-4 glass rounded-xl px-3 py-2 border border-[rgba(139,92,246,0.3)]">
                  <div className="text-xs font-mono text-[#8B5CF6] font-medium">TypeScript</div>
                </motion.div>
                <motion.div animate={{ y: [-3, 7, -3] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-1/2 -right-8 glass rounded-xl px-3 py-2 border border-[rgba(34,211,238,0.3)]">
                  <div className="text-xs font-mono text-[#22D3EE] font-medium">Firebase</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[#4B5678] text-xs font-mono">{tr.hero.scroll}</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-5 h-8 rounded-full border border-[rgba(79,142,247,0.3)] flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 bg-[#4F8EF7] rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
