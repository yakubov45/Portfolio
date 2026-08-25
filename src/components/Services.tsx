"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLang } from "@/context/LanguageContext";

const servicesData = [
  {
    icon: "🔐",
    gradient: "from-[#00FF9D] to-[#00F2FE]",
    features: ["Nmap Scanning", "Burp Suite", "XSS Audit", "Cisco TACACS"],
    en: {
      title: "Security Recon & Vulnerability Audit",
      desc: "Network reconnaissance using Nmap, web vulnerability auditing with Burp Suite, XSS testing, and network protocol basics.",
    },
    uz: {
      title: "Xavfsizlik Auditi va Pentesting",
      desc: "Nmap orqali tarmoq skaneri, Burp Suite yordamida veb zaifliklarni tahlil qilish, XSS tekshiruvi va TACACS asoslari.",
    },
    ru: {
      title: "Аудит Безопасности и Пентестинг",
      desc: "Разведка сетей с Nmap, аудит веб-уязвимостей в Burp Suite, тестирование XSS и основы протокола TACACS.",
    },
  },
  {
    icon: "🐍",
    gradient: "from-[#00F2FE] to-[#3776AB]",
    features: ["Python Scripts", "Automation", "OSINT Tools", "CLI Utilities"],
    en: {
      title: "Python Scripting & Task Automation",
      desc: "Writing custom Python scripts for task automation, OSINT data gathering, file parsing, and system utilities.",
    },
    uz: {
      title: "Python Skriptlar va Avtomatizatsiya",
      desc: "Vazifalarni avtomatlashtirish, OSINT ma'lumotlarini izlash va tahlil qilish hamda maxsus Python skriptlarini yozish.",
    },
    ru: {
      title: "Python Скрипты и Автоматизация",
      desc: "Написание скриптов на Python для автоматизации задач, сбора OSINT данных и системных утилит.",
    },
  },
  {
    icon: "🌐",
    gradient: "from-[#00F2FE] to-[#7F00FF]",
    features: ["HTML/CSS/JS", "Frontend UI", "REST APIs", "Clean Architecture"],
    en: {
      title: "Web Development & API Integration",
      desc: "Building clean, fast, and responsive websites with structured HTML/CSS/JS, frontend/backend integration, and REST APIs.",
    },
    uz: {
      title: "Veb Dasturlash va API Integratsiya",
      desc: "Zamonaviy va moslashuvchan saytlar yaratish asoslari, frontend/backend integratsiyasi hamda REST API bilan ishlash.",
    },
    ru: {
      title: "Веб-Разработка и Интеграция API",
      desc: "Создание современных веб-сайтов на HTML/CSS/JS, интеграция Frontend/Backend концепций и REST API.",
    },
  },
  {
    icon: "📱",
    gradient: "from-[#FF0844] to-[#F59E0B]",
    features: ["Instagram SMM", "Bio & Branding", "Logo Design", "Video Scripts"],
    en: {
      title: "Instagram SMM & Digital Branding",
      desc: "Designing Instagram profile branding, bio optimization, visual logos, portfolio presentation, and product ad scripts.",
    },
    uz: {
      title: "Instagram SMM va Digital Brending",
      desc: "Instagram profil va bio brendingini takomillashtirish, kontent g'oyalari, logo dizayni hamda reklama/video ssenariylari.",
    },
    ru: {
      title: "Instagram SMM и Digital Брендинг",
      desc: "Брендинг профиля и био в Instagram, идеи контента, дизайн логотипа и подготовка сценариев для рекламы продуктов.",
    },
  },
  {
    icon: "🤖",
    gradient: "from-[#7F00FF] to-[#00F2FE]",
    features: ["AI Tools", "Marketing Ideas", "Script Generation", "AI Workflows"],
    en: {
      title: "AI Workflows & Marketing Automation",
      desc: "Applying cutting-edge AI tools to speed up content creation, ideate product video scripts, and optimize marketing workflows.",
    },
    uz: {
      title: "AI Workflows va Marketing Vositalari",
      desc: "Kontent va marketingda AI vositalaridan foydalanish, video/script g'oyalarini AI orqali shakllantirish va workflow avtomatizatsiyasi.",
    },
    ru: {
      title: "ИИ Workflows и Автоматизация Маркетинга",
      desc: "Применение ИИ в маркетинге, генерация идей видео-сценариев через ИИ и оптимизация рабочих процессов.",
    },
  },
  {
    icon: "🚀",
    gradient: "from-[#00FF9D] to-[#00F2FE]",
    features: ["Git Workflow", "GitHub Repos", "Version Control", "Project Setup"],
    en: {
      title: "Git Repository & Code Management",
      desc: "Setting up professional Git/GitHub repositories, managing code branches, and maintaining structured software projects.",
    },
    uz: {
      title: "Git repositoriyalar va Kod Boshqaruvi",
      desc: "Professional Git/GitHub repositoriyalarini sozlash, versiyalar nazorati va loyihalarni to'g'ri strukturada boshqarish.",
    },
    ru: {
      title: "Управление Репозиториями Git & GitHub",
      desc: "Настройка профессиональных репозиториев на GitHub, контроль версий и структурированное управление кодом.",
    },
  },
];

export default function Services() {
  const { tr, lang } = useLang();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const s = tr.services;

  return (
    <section id="services" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-14">
          <span className="cyber-tag mb-4 inline-block">{s.tag}</span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#F0F6FF] mb-4">
            {s.title} <span className="gradient-text-electric">{s.titleGrad}</span>
          </h2>
          <p className="text-[#8B96B5] max-w-2xl mx-auto text-lg">{s.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesData.map((svc, i) => {
            const d = svc[lang as "en" | "uz" | "ru"];
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: i * 0.08 }} whileHover={{ y: -6 }} className="cyber-card p-7 group cursor-default">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center text-xl text-[#050811] shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {svc.icon}
                </div>
                <h3 className="text-lg font-bold text-[#F0F6FF] mb-3 group-hover:text-[#00FF9D] transition-colors">{d.title}</h3>
                <p className="text-[#8B96B5] text-xs sm:text-sm leading-relaxed mb-5">{d.desc}</p>
                <div className="pt-5 border-t border-[rgba(0,242,254,0.1)] flex flex-wrap gap-1.5">
                  {svc.features.map((f) => (
                    <span key={f} className="text-[11px] px-2 py-0.5 rounded-md font-mono text-[#8B96B5] bg-[rgba(10,16,31,0.6)] border border-[rgba(0,242,254,0.15)] group-hover:border-[#00FF9D] transition-all">
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7 }} className="text-center mt-14">
          <p className="text-[#8B96B5] mb-4">
            {s.ctaText} <span className="text-[#F0F6FF] font-medium">{s.ctaHighlight}</span>
          </p>
          <motion.button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(0,242,254,0.4)" }} whileTap={{ scale: 0.97 }} className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#00F2FE] via-[#4FACFE] to-[#00FF9D] text-[#050811] font-extrabold text-sm shadow-xl">
            {s.ctaBtn}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
