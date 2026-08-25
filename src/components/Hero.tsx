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
  const [activeTab, setActiveTab] = useState<"security" | "dev" | "smm">("security");

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
    }, isDeleting ? 35 : 75);
    return () => { if (typingRef.current) clearTimeout(typingRef.current); };
  }, [displayText, isDeleting, roleIndex, roles]);

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg pt-20 pb-16">
      {/* Glow Orbs */}
      <div className="absolute w-[600px] h-[600px] bg-[rgba(16,185,129,0.1)] rounded-full blur-[90px] pointer-events-none animate-float" style={{ top: "-10%", right: "-15%" }} />
      <div className="absolute w-[500px] h-[500px] bg-[rgba(139,92,246,0.12)] rounded-full blur-[90px] pointer-events-none animate-float" style={{ bottom: "5%", left: "-10%", animationDelay: "3s" }} />
      <div className="absolute w-[400px] h-[400px] bg-[rgba(79,142,247,0.1)] rounded-full blur-[80px] pointer-events-none" style={{ top: "30%", left: "40%" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-flex items-center gap-2 mb-6">
              <span className="tag border-[rgba(16,185,129,0.3)] bg-[rgba(16,185,129,0.08)] text-[#10B981]">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                {tr.hero.badge}
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-4">
              <span className="text-[#F0F4FF]">{tr.hero.greeting}</span><br />
              <span className="gradient-text">Muhammad</span><br />
              <span className="text-[#F0F4FF]">Yoqubjonov</span>
            </motion.h1>

            <div className="h-12 mb-6 flex items-center justify-center lg:justify-start">
              <span className="font-mono text-[#22D3EE] text-lg sm:text-xl font-medium">
                &gt; {displayText}
                <span className="animate-pulse text-[#10B981] ml-1 font-bold">_</span>
              </span>
            </div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-[#8B96B5] text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              {tr.hero.desc}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <motion.button onClick={() => go("projects")} whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(16,185,129,0.4)" }} whileTap={{ scale: 0.97 }} className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#10B981] via-[#4F8EF7] to-[#8B5CF6] text-white font-semibold shadow-lg">
                {tr.hero.viewProjects}
              </motion.button>
              <motion.button onClick={() => go("contact")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="px-8 py-3.5 rounded-2xl glass text-[#F0F4FF] font-semibold border border-[rgba(79,142,247,0.3)] hover:border-[rgba(16,185,129,0.5)] transition-all">
                {tr.hero.contactMe}
              </motion.button>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="flex gap-8 justify-center lg:justify-start">
              {tr.hero.stats.map(s => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-black gradient-text">{s.num}</div>
                  <div className="text-xs text-[#4B5678] font-medium mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Interactive Cyber Console */}
          <div className="flex-shrink-0 w-full max-w-md lg:max-w-lg">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.3 }} className="relative">
              {/* Outer Decorative Ring */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute -inset-4 rounded-3xl border border-dashed border-[rgba(16,185,129,0.2)] pointer-events-none" />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -inset-8 rounded-3xl border border-dashed border-[rgba(139,92,246,0.15)] pointer-events-none" />

              {/* Terminal Container */}
              <div className="w-full rounded-2xl bg-[#0B0F19] border border-[rgba(79,142,247,0.25)] shadow-[0_0_50px_rgba(16,185,129,0.12)] overflow-hidden">
                {/* Header with tabs */}
                <div className="bg-[#0F1525] px-4 py-3 border-b border-[rgba(79,142,247,0.15)] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  </div>

                  <div className="flex gap-1">
                    <button onClick={() => setActiveTab("security")} className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${activeTab === "security" ? "bg-[rgba(16,185,129,0.15)] text-[#10B981] border border-[rgba(16,185,129,0.3)]" : "text-[#4B5678] hover:text-[#8B96B5]"}`}>
                      security.py
                    </button>
                    <button onClick={() => setActiveTab("dev")} className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${activeTab === "dev" ? "bg-[rgba(79,142,247,0.15)] text-[#4F8EF7] border border-[rgba(79,142,247,0.3)]" : "text-[#4B5678] hover:text-[#8B96B5]"}`}>
                      web_dev.ts
                    </button>
                    <button onClick={() => setActiveTab("smm")} className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${activeTab === "smm" ? "bg-[rgba(236,72,153,0.15)] text-[#EC4899] border border-[rgba(236,72,153,0.3)]" : "text-[#4B5678] hover:text-[#8B96B5]"}`}>
                      smm_ai.config
                    </button>
                  </div>
                </div>

                {/* Body code content */}
                <div className="p-6 font-mono text-xs leading-relaxed text-left min-h-[260px]">
                  {activeTab === "security" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key="security">
                      <div className="text-[#4B5678] mb-2">// Cybersecurity & Pentesting Suite</div>
                      <div className="text-[#8B5CF6]">import <span className="text-[#F0F4FF]">nmap, burpsuite, metasploit</span></div>
                      <div className="text-[#8B5CF6]">from <span className="text-[#F0F4FF]">kali_tools</span> import <span className="text-[#10B981]">Sherlock, OSINT</span></div>
                      <br />
                      <div><span className="text-[#22D3EE]">target</span> = <span className="text-[#10B981]">"security-lab.local"</span></div>
                      <div><span className="text-[#22D3EE]">modules</span> = [<span className="text-[#10B981]">"Nmap Scan"</span>, <span className="text-[#10B981]">"XSS Vulnerability Check"</span>, <span className="text-[#10B981]">"Cisco TACACS"</span>]</div>
                      <br />
                      <div><span className="text-[#8B5CF6]">def</span> <span className="text-[#4F8EF7]">run_recon</span>():</div>
                      <div className="pl-4 text-[#8B96B5]">print(<span className="text-[#10B981]">"[+] Scanning TCP/IP & VLAN routing..."</span>)</div>
                      <div className="pl-4 text-[#8B96B5]">return <span className="text-[#10B981]">"Status: System Hardened ✓"</span></div>
                      <br />
                      <div className="text-[#10B981] font-semibold animate-pulse">&gt; STATUS: Pentesting Recon Ready</div>
                    </motion.div>
                  )}

                  {activeTab === "dev" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key="dev">
                      <div className="text-[#4B5678] mb-2">// Web & Python Engineering</div>
                      <div className="mb-1"><span className="text-[#8B5CF6]">interface </span><span className="text-[#22D3EE]">DeveloperStack</span> <span className="text-[#F0F4FF]">{"{"}</span></div>
                      <div className="pl-4 mb-1"><span className="text-[#4F8EF7]">languages</span>: [<span className="text-[#10B981]">"Python"</span>, <span className="text-[#10B981]">"JavaScript"</span>];</div>
                      <div className="pl-4 mb-1"><span className="text-[#4F8EF7]">frontend</span>: [<span className="text-[#10B981]">"React"</span>, <span className="text-[#10B981]">"Next.js"</span>, <span className="text-[#10B981]">"Tailwind"</span>];</div>
                      <div className="pl-4 mb-1"><span className="text-[#4F8EF7]">backend</span>: [<span className="text-[#10B981]">"Python API"</span>, <span className="text-[#10B981]">"REST Endpoints"</span>];</div>
                      <div className="pl-4 mb-1"><span className="text-[#4F8EF7]">versionControl</span>: <span className="text-[#10B981]">"Git / GitHub"</span>;</div>
                      <div className="text-[#F0F4FF]">{"}"}</div>
                      <br />
                      <div className="text-[#4F8EF7] font-semibold animate-pulse">&gt; STATUS: Production Ready ✓</div>
                    </motion.div>
                  )}

                  {activeTab === "smm" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key="smm">
                      <div className="text-[#4B5678] mb-2">// SMM Marketing & AI Content Engine</div>
                      <div className="text-[#EC4899]">const <span className="text-[#F0F4FF]">smmStrategy</span> = {"{"}</div>
                      <div className="pl-4"><span className="text-[#22D3EE]">platform</span>: <span className="text-[#10B981]">"Instagram SMM & Bio Branding"</span>,</div>
                      <div className="pl-4"><span className="text-[#22D3EE]">design</span>: <span className="text-[#10B981]">"Logo & Portfolio Creation"</span>,</div>
                      <div className="pl-4"><span className="text-[#22D3EE]">videoScripts</span>: <span className="text-[#10B981]">"AI-generated Ad Campaigns"</span>,</div>
                      <div className="pl-4"><span className="text-[#22D3EE]">aiWorkflow</span>: [<span className="text-[#8B5CF6]">"Content Ideation"</span>, <span className="text-[#8B5CF6]">"Video Scripting"</span>]</div>
                      <div className="text-[#F0F4FF]">{"}"};</div>
                      <br />
                      <div className="text-[#EC4899] font-semibold animate-pulse">&gt; STATUS: AI Workflow Active 🔥</div>
                    </motion.div>
                  )}
                </div>

                {/* Footer status bar */}
                <div className="bg-[#0A0D16] px-4 py-2 border-t border-[rgba(79,142,247,0.1)] flex items-center justify-between text-[11px] font-mono text-[#4B5678]">
                  <span>OS: Kali / Linux</span>
                  <span className="text-[#10B981] font-semibold">● ACTIVE</span>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div animate={{ y: [-4, 6, -4] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 border border-[rgba(16,185,129,0.4)]">
                <div className="text-xs font-mono text-[#10B981] font-bold flex items-center gap-1.5">
                  <span>🔐</span> Kali / Nmap
                </div>
              </motion.div>

              <motion.div animate={{ y: [6, -4, 6] }} transition={{ duration: 3.5, repeat: Infinity }} className="absolute -bottom-4 -left-4 glass rounded-xl px-3 py-2 border border-[rgba(139,92,246,0.4)]">
                <div className="text-xs font-mono text-[#8B5CF6] font-bold flex items-center gap-1.5">
                  <span>🤖</span> AI Workflows
                </div>
              </motion.div>

              <motion.div animate={{ y: [-3, 5, -3] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-1/2 -right-6 glass rounded-xl px-3 py-2 border border-[rgba(236,72,153,0.4)] hidden sm:block">
                <div className="text-xs font-mono text-[#EC4899] font-bold flex items-center gap-1.5">
                  <span>📱</span> Instagram SMM
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-16 flex flex-col items-center gap-2">
          <span className="text-[#4B5678] text-xs font-mono">{tr.hero.scroll}</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-5 h-8 rounded-full border border-[rgba(79,142,247,0.3)] flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 bg-[#10B981] rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
