"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "AI Journey", href: "#ai-journey" },
    { label: "Currently Learning", href: "#focus" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = ["hero", "about", "education", "skills", "projects", "ai-journey", "focus", "contact"];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActiveSection(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/85 backdrop-blur-xl border-b border-white/10 py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollTo("#hero")}
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-9 h-9 rounded-lg bg-white text-black flex items-center justify-center font-black text-sm shadow-[0_0_20px_rgba(255,255,255,0.2)] font-mono transition-transform duration-300 group-hover:rotate-6">
              MY
            </div>
            <div>
              <span className="font-bold text-white text-base tracking-tight block">
                Muhammad Yoqubjonov
              </span>
              <span className="text-[11px] text-zinc-400 font-mono block leading-none">
                AI Student & Developer
              </span>
            </div>
          </motion.button>

          {/* Desktop Navigation with Animated Pill */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-950/90 p-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 ${
                    isActive ? "text-black font-semibold" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-white rounded-full -z-10 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    />
                  )}
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollTo("#contact")}
              className="px-4 py-2 rounded-full bg-white hover:bg-zinc-200 text-black font-semibold text-xs transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              Contact Me
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-black/95 backdrop-blur-2xl border-b border-white/15 px-6 py-6 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className={`text-left px-4 py-2.5 rounded-xl text-sm transition-colors ${
                      isActive
                        ? "bg-white text-black font-semibold"
                        : "text-zinc-300 hover:text-white hover:bg-zinc-900"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              <button
                onClick={() => scrollTo("#contact")}
                className="mt-3 w-full py-2.5 rounded-xl bg-white text-black font-semibold text-sm text-center"
              >
                Contact Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
