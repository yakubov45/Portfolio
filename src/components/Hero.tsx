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

  // Interactive CLI State
  const [cmdInput, setCmdInput] = useState("");
  const [terminalLogs, setTerminalLogs] = useState<Array<{ cmd: string; output: string | React.ReactNode }>>([
    {
      cmd: "system --init",
      output: "WELCOME TO ISMOIL TURGUNBOYEV CYBER HUB v2.5 :: TYPE 'help' OR CLICK CHIPS BELOW",
    },
  ]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalLogs]);

  const handleRunCommand = (commandStr: string) => {
    const cmd = commandStr.trim().toLowerCase();
    let out: React.ReactNode = "";

    if (cmd === "help") {
      out = (
        <div className="text-[#00F2FE] space-y-1">
          <div>AVAILABLE COMMANDS:</div>
          <div>- <span className="text-[#00FF9D]">scan</span> : Run Nmap & Security Recon simulation</div>
          <div>- <span className="text-[#00F2FE]">python</span> : Execute Python automation script</div>
          <div>- <span className="text-[#FF0844]">smm</span> : Generate Instagram SMM & Ad Script strategy</div>
          <div>- <span className="text-[#7F00FF]">ai</span> : Run AI workflow & prompt generation</div>
          <div>- <span className="text-[#F59E0B]">contact</span> : Jump to contact form</div>
          <div>- <span className="text-gray-400">clear</span> : Clear terminal output</div>
        </div>
      );
    } else if (cmd.startsWith("scan")) {
      out = (
        <div className="text-[#00FF9D] space-y-1 font-mono text-[11px]">
          <div>[+] Initiating Nmap 7.94 scan on 192.168.1.100...</div>
          <div>PORT     STATE SERVICE       VERSION</div>
          <div>22/tcp   open  ssh           OpenSSH 8.9p1</div>
          <div>80/tcp   open  http          Nginx 1.18.0</div>
          <div>443/tcp  open  ssl/https     OpenSSL 3.0.2</div>
          <div>[+] Sherlock OSINT: Searching usernames across 300+ sites... DONE</div>
          <div className="text-[#00F2FE] font-bold">[✔] Security Audit Complete: No Critical XSS Vulnerabilities Detected.</div>
        </div>
      );
    } else if (cmd.startsWith("python")) {
      out = (
        <div className="text-[#00F2FE] space-y-1 font-mono text-[11px]">
          <div>$ python3 automation_suite.py --task sync_api</div>
          <div>[INFO] Loading REST API endpoints...</div>
          <div>[SUCCESS] Parsed 1,450 records in 0.042s</div>
          <div>[GIT] Pushed latest commit to origin/main (SHA: 9c7ad64)</div>
          <div className="text-[#00FF9D] font-bold">[✔] Automation Process Finished Successfully.</div>
        </div>
      );
    } else if (cmd.startsWith("smm")) {
      out = (
        <div className="text-[#FF0844] space-y-1 font-mono text-[11px]">
          <div>📱 INSTAGRAM SMM & BRANDING ENGINE</div>
          <div>- Bio Concept: "Multidisciplinary Specialist | Tech & Security"</div>
          <div>- Content Plan: 3x Reels (Scripted via AI), 5x Stories (Visual Portfolio)</div>
          <div>- Product Ad Script: "Transforming raw ideas into secure digital systems."</div>
          <div className="text-[#00FF9D] font-bold">[✔] Brand Identity Blueprint Prepared!</div>
        </div>
      );
    } else if (cmd.startsWith("ai")) {
      out = (
        <div className="text-[#7F00FF] space-y-1 font-mono text-[11px]">
          <div>🤖 AI WORKFLOW PIPELINE ACTIVE</div>
          <div>Prompt &gt; "Generate high-converting promo video script for IT agency"</div>
          <div>Result &gt; Hook: "90% of security breaches happen due to misconfigured APIs..."</div>
          <div className="text-[#00FF9D] font-bold">[✔] AI Prompt Generated & Storyboard Exported!</div>
        </div>
      );
    } else if (cmd === "contact") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      out = "Redirecting to contact section...";
    } else if (cmd === "clear") {
      setTerminalLogs([]);
      setCmdInput("");
      return;
    } else {
      out = `Command '${commandStr}' not recognized. Type 'help' to see available commands.`;
    }

    setTerminalLogs(prev => [...prev, { cmd: commandStr, output: out }]);
    setCmdInput("");
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cmdInput.trim()) handleRunCommand(cmdInput);
  };

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid pt-24 pb-16">
      {/* Background Glows */}
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
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-[#8B96B5] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          {tr.hero.desc}
        </motion.p>

        {/* Buttons */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-4 justify-center mb-10">
          <motion.button onClick={() => go("projects")} whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(0,242,254,0.4)" }} whileTap={{ scale: 0.97 }} className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#00F2FE] via-[#4FACFE] to-[#00FF9D] text-[#050811] font-extrabold text-sm shadow-xl tracking-wide">
            {tr.hero.viewProjects}
          </motion.button>
          <motion.button onClick={() => go("contact")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="px-8 py-3.5 rounded-2xl bg-[rgba(10,16,31,0.7)] text-[#F0F6FF] font-semibold text-sm border border-[rgba(0,242,254,0.3)] hover:border-[#00FF9D] transition-all">
            {tr.hero.contactMe}
          </motion.button>
        </motion.div>

        {/* Creative Feature: Live Interactive Cyber Terminal CLI */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="max-w-4xl mx-auto text-left">
          <div className="cyber-card border-[rgba(0,242,254,0.3)] p-0 overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-[#080D1A] px-4 py-3 border-b border-[rgba(0,242,254,0.2)] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="text-xs font-mono text-[#00F2FE] ml-2 font-bold">ISMOIL_CLI :: INTERACTIVE CYBER PLATFORM</span>
              </div>
              <span className="text-[10px] font-mono text-[#00FF9D] bg-[rgba(0,255,157,0.12)] px-2.5 py-0.5 rounded border border-[rgba(0,255,157,0.3)]">
                LIVE INTERACTIVE
              </span>
            </div>

            {/* Quick Command Chips */}
            <div className="bg-[#0A101F] px-4 py-2 border-b border-[rgba(0,242,254,0.1)] flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="text-gray-400">Quick Commands:</span>
              <button onClick={() => handleRunCommand("scan")} className="px-2.5 py-1 rounded bg-[rgba(0,255,157,0.1)] text-[#00FF9D] border border-[rgba(0,255,157,0.3)] hover:bg-[rgba(0,255,157,0.2)] transition-all">
                ⚡ scan
              </button>
              <button onClick={() => handleRunCommand("python")} className="px-2.5 py-1 rounded bg-[rgba(0,242,254,0.1)] text-[#00F2FE] border border-[rgba(0,242,254,0.3)] hover:bg-[rgba(0,242,254,0.2)] transition-all">
                🐍 python
              </button>
              <button onClick={() => handleRunCommand("smm")} className="px-2.5 py-1 rounded bg-[rgba(255,8,68,0.1)] text-[#FF0844] border border-[rgba(255,8,68,0.3)] hover:bg-[rgba(255,8,68,0.2)] transition-all">
                📱 smm
              </button>
              <button onClick={() => handleRunCommand("ai")} className="px-2.5 py-1 rounded bg-[rgba(127,0,255,0.1)] text-[#7F00FF] border border-[rgba(127,0,255,0.3)] hover:bg-[rgba(127,0,255,0.2)] transition-all">
                🤖 ai
              </button>
              <button onClick={() => handleRunCommand("help")} className="px-2.5 py-1 rounded bg-[rgba(245,158,11,0.1)] text-[#F59E0B] border border-[rgba(245,158,11,0.3)] hover:bg-[rgba(245,158,11,0.2)] transition-all">
                ❓ help
              </button>
            </div>

            {/* Terminal Body Log */}
            <div className="p-5 font-mono text-xs max-h-[240px] overflow-y-auto space-y-3 bg-[#050811]/90">
              {terminalLogs.map((log, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-gray-400">
                    <span className="text-[#00FF9D]">ismoil@cyber-deck</span>:<span className="text-[#00F2FE]">~</span>$ {log.cmd}
                  </div>
                  <div className="pl-3 text-gray-200">{log.output}</div>
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Terminal Input Form */}
            <form onSubmit={onSubmit} className="bg-[#0A101F] px-4 py-3 border-t border-[rgba(0,242,254,0.15)] flex items-center gap-2">
              <span className="text-[#00FF9D] font-mono text-xs font-bold">&gt;</span>
              <input
                type="text"
                value={cmdInput}
                onChange={(e) => setCmdInput(e.target.value)}
                placeholder="Type 'scan', 'python', 'smm', 'ai' or 'help'..."
                className="w-full bg-transparent text-xs font-mono text-[#F0F6FF] placeholder-[#4B5678] focus:outline-none"
              />
              <button type="submit" className="px-3 py-1 bg-[#00F2FE] text-[#050811] text-xs font-mono font-bold rounded hover:bg-[#00FF9D] transition-colors">
                RUN
              </button>
            </form>
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
