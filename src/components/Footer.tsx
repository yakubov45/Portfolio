"use client";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const socials = [
  {
    label: "GitHub", href: "https://github.com/yakubov45",
    icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.7.115 2.5.337 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" /></svg>,
  },
  {
    label: "Telegram", href: "https://t.me/yakubjan_m",
    icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>,
  },
];

export default function Footer() {
  const { tr } = useLang();
  const f = tr.footer;

  const navLinks = [
    { label: tr.nav.home, href: "#hero" },
    { label: tr.nav.about, href: "#about" },
    { label: tr.nav.skills, href: "#skills" },
    { label: tr.nav.projects, href: "#projects" },
    { label: tr.nav.services, href: "#services" },
    { label: tr.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="relative border-t border-[rgba(79,142,247,0.1)] pt-14 pb-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[rgba(79,142,247,0.3)] to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4F8EF7] to-[#8B5CF6] flex items-center justify-center text-white font-bold text-sm">MY</div>
              <span className="font-bold text-[#F0F4FF] text-lg">Muhammad Yoqubjonov</span>
            </div>
            <p className="text-[#4B5678] text-sm leading-relaxed max-w-xs">{f.tagline}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold text-[#F0F4FF] mb-4">{f.navigation}</h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <button onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })} className="text-sm text-[#4B5678] hover:text-[#4F8EF7] transition-colors">{link.label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-[#F0F4FF] mb-4">{f.getInTouch}</h4>
            <div className="flex flex-col gap-2 mb-5">
              <a href="mailto:muhammadyoqubjonov7@gmail.com" className="text-sm text-[#4B5678] hover:text-[#4F8EF7] transition-colors break-all">muhammadyoqubjonov7@gmail.com</a>
              <a href="https://t.me/yakubjan_m" target="_blank" rel="noopener noreferrer" className="text-sm text-[#4B5678] hover:text-[#4F8EF7] transition-colors">Telegram: @yakubjan_m</a>
              <span className="text-sm text-[#4B5678]">Toshkent, O'zbekiston 🇺🇿</span>
            </div>
            <div className="flex gap-3">
              {socials.map(s => (
                <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} whileHover={{ scale: 1.1, y: -2 }} className="w-10 h-10 rounded-xl glass border border-[rgba(79,142,247,0.15)] flex items-center justify-center text-[#4B5678] hover:text-[#4F8EF7] hover:border-[rgba(79,142,247,0.4)] transition-all">
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(79,142,247,0.08)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#4B5678]">© {new Date().getFullYear()} Muhammad Yoqubjonov. {f.copyright}</p>
          <p className="text-xs text-[#4B5678] font-mono">
            {f.builtWith} <span className="text-[#4F8EF7]">Next.js</span> · <span className="text-[#8B5CF6]">TypeScript</span> · <span className="text-[#06B6D4]">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
