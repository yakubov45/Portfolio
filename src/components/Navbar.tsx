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
        if (el && window.scrollY >= el.offsetTop - 100) { setActiveSection(ids[i]); break; }
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass border-b border-[rgba(79,142,247,0.15)] shadow-[0_8px_32px_rgba(0,0,0,0.4)]" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.button onClick={() => go("#hero")} whileHover={{ scale: 1.02 }} className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#10B981] via-[#4F8EF7] to-[#8B5CF6] flex items-center justify-center text-white font-black text-sm shadow-lg">MY</div>
            <span className="font-bold text-lg text-[#F0F4FF] hidden sm:block">Muhammad<span className="gradient-text">.</span></span>
          </motion.button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.href}>
                  <button onClick={() => go(link.href)} className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive ? "text-[#10B981]" : "text-[#8B96B5] hover:text-[#F0F4FF]"}`}>
                    {isActive && <motion.div layoutId="nav-indicator" className="absolute inset-0 bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.25)] rounded-lg" />}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl glass border border-[rgba(79,142,247,0.2)] text-sm font-medium text-[#8B96B5] hover:text-[#F0F4FF] hover:border-[rgba(16,185,129,0.4)] transition-all"
              >
                <span>{langOptions.find(l => l.code === lang)?.flag}</span>
                <span>{lang.toUpperCase()}</span>
                <span className="text-xs opacity-50">▾</span>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute right-0 top-full mt-2 glass border border-[rgba(79,142,247,0.2)] rounded-xl overflow-hidden shadow-xl z-50 min-w-[100px]"
                  >
                    {langOptions.map((opt) => (
                      <button
                        key={opt.code}
                        onClick={() => { setLang(opt.code); setLangOpen(false); }}
                        className={`flex items-center gap-2 w-full px-4 py-2.5 text-sm font-medium transition-colors ${lang === opt.code ? "text-[#10B981] bg-[rgba(16,185,129,0.1)]" : "text-[#8B96B5] hover:text-[#F0F4FF] hover:bg-[rgba(79,142,247,0.05)]"}`}
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#10B981] via-[#4F8EF7] to-[#8B5CF6] text-white text-sm font-semibold shadow-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all"
            >
              {tr.nav.hire}
            </motion.button>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2">
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }} className="block w-6 h-0.5 bg-[#8B96B5] rounded-full origin-center" />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block w-6 h-0.5 bg-[#8B96B5] rounded-full" />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} className="block w-6 h-0.5 bg-[#8B96B5] rounded-full origin-center" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed top-[73px] left-0 right-0 z-40 glass border-b border-[rgba(79,142,247,0.15)] px-6 py-4 md:hidden">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.li key={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                  <button onClick={() => go(link.href)} className="w-full text-left px-4 py-3 rounded-xl text-[#8B96B5] hover:text-[#F0F4FF] hover:bg-[rgba(16,185,129,0.08)] transition-all text-sm font-medium">
                    {link.label}
                  </button>
                </motion.li>
              ))}
              {/* Language options mobile */}
              <div className="flex gap-2 px-4 py-2">
                {langOptions.map(opt => (
                  <button key={opt.code} onClick={() => setLang(opt.code)} className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${lang === opt.code ? "bg-[rgba(16,185,129,0.2)] text-[#10B981] border border-[rgba(16,185,129,0.3)]" : "glass text-[#8B96B5] border border-[rgba(79,142,247,0.1)]"}`}>
                    {opt.flag} {opt.label}
                  </button>
                ))}
              </div>
              <button onClick={() => go("#contact")} className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-[#10B981] via-[#4F8EF7] to-[#8B5CF6] text-white text-sm font-semibold mt-1">
                {tr.nav.hire}
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
