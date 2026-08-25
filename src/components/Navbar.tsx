"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { Lang } from "@/translations";

const langOptions: { code: Lang; label: string; flag: string }[] = [
  { code: "uz", label: "UZ", flag: "🇺🇿" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "ru", label: "RU", flag: "🇷🇺" },
];

export default function Navbar() {
  const { tr, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [langOpen, setLangOpen] = useState(false);

  const navLinks = [
    { label: tr.nav.home, href: "#hero" },
    { label: tr.nav.about, href: "#about" },
    { label: tr.nav.skills, href: "#skills" },
    { label: tr.nav.projects, href: "#projects" },
    { label: tr.nav.experience, href: "#experience" },
    { label: tr.nav.services, href: "#services" },
    { label: tr.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const ids = ["hero", "about", "skills", "projects", "experience", "services", "contact"];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 120) { setActiveSection(ids[i]); break; }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const go = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#050811]/85 backdrop-blur-xl border-b border-[rgba(0,242,254,0.2)] shadow-[0_10px_35px_rgba(0,0,0,0.6)]" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.button onClick={() => go("#hero")} whileHover={{ scale: 1.03 }} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00F2FE] via-[#4FACFE] to-[#00FF9D] flex items-center justify-center text-[#050811] font-black text-sm shadow-[0_0_20px_rgba(0,242,254,0.4)]">
              IT
            </div>
            <div className="text-left hidden sm:block">
              <span className="font-extrabold text-base tracking-wide text-[#F0F6FF]">
                Turg'unboyev <span className="gradient-text-electric">Ismoil</span>
              </span>
              <span className="block text-[10px] font-mono text-[#00F2FE]">CYBER & DEV SPECIALIST</span>
            </div>
          </motion.button>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1.5 bg-[rgba(10,16,31,0.6)] p-1.5 rounded-2xl border border-[rgba(0,242,254,0.15)]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.href}>
                  <button
                    onClick={() => go(link.href)}
                    className={`relative px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 ${
                      isActive ? "text-[#050811] font-bold" : "text-[#8B96B5] hover:text-[#F0F6FF]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-gradient-to-r from-[#00F2FE] to-[#00FF9D] rounded-xl shadow-[0_0_15px_rgba(0,242,254,0.5)]"
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right Controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[rgba(10,16,31,0.7)] border border-[rgba(0,242,254,0.2)] text-xs font-mono text-[#8B96B5] hover:text-[#F0F6FF] hover:border-[#00F2FE] transition-all"
              >
                <span>{langOptions.find((l) => l.code === lang)?.flag}</span>
                <span className="font-bold">{lang.toUpperCase()}</span>
                <span className="text-[10px] opacity-60">▾</span>
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute right-0 top-full mt-2 bg-[#0A101F] border border-[rgba(0,242,254,0.25)] rounded-xl overflow-hidden shadow-2xl z-50 min-w-[110px]"
                  >
                    {langOptions.map((opt) => (
                      <button
                        key={opt.code}
                        onClick={() => {
                          setLang(opt.code);
                          setLangOpen(false);
                        }}
                        className={`flex items-center gap-2.5 w-full px-4 py-2.5 text-xs font-mono transition-colors ${
                          lang === opt.code
                            ? "text-[#00FF9D] bg-[rgba(0,255,157,0.12)] font-bold"
                            : "text-[#8B96B5] hover:text-[#F0F6FF] hover:bg-[rgba(0,242,254,0.08)]"
                        }`}
                      >
                        <span>{opt.flag}</span> {opt.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              onClick={() => go("#contact")}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0,242,254,0.5)" }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00F2FE] via-[#4FACFE] to-[#00FF9D] text-[#050811] font-bold text-xs shadow-lg transition-all"
            >
              {tr.nav.hire}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2">
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }} className="block w-6 h-0.5 bg-[#00F2FE] rounded-full origin-center" />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block w-6 h-0.5 bg-[#00FF9D] rounded-full" />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} className="block w-6 h-0.5 bg-[#00F2FE] rounded-full origin-center" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed top-[73px] left-0 right-0 z-40 bg-[#050811]/95 backdrop-blur-2xl border-b border-[rgba(0,242,254,0.2)] px-6 py-5 md:hidden">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.li key={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                  <button onClick={() => go(link.href)} className="w-full text-left px-4 py-3 rounded-xl text-[#8B96B5] hover:text-[#F0F6FF] hover:bg-[rgba(0,242,254,0.1)] transition-all text-sm font-medium">
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <div className="flex gap-2 px-4 py-2">
                {langOptions.map(opt => (
                  <button key={opt.code} onClick={() => setLang(opt.code)} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${lang === opt.code ? "bg-[rgba(0,255,157,0.2)] text-[#00FF9D] border border-[rgba(0,255,157,0.4)]" : "bg-[rgba(10,16,31,0.6)] text-[#8B96B5] border border-[rgba(0,242,254,0.15)]"}`}>
                    {opt.flag} {opt.label}
                  </button>
                ))}
              </div>
              <button onClick={() => go("#contact")} className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-[#00F2FE] via-[#4FACFE] to-[#00FF9D] text-[#050811] font-bold text-sm mt-2">
                {tr.nav.hire}
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
