"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLang } from "@/context/LanguageContext";

const servicesData = [
  {
    icon: "🔐",
    gradient: "from-[#10B981] to-[#22D3EE]",
    glow: "rgba(16, 185, 129, 0.2)",
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
    gradient: "from-[#3776AB] to-[#4F8EF7]",
    glow: "rgba(55, 118, 171, 0.2)",
    features: ["Python Scripts", "Automation", "OSINT Tools", "CLI Utilities"],
    en: {
      title: "Python Scripting & Task Automation",
      desc: "Writing custom Python scripts for task automation, OSINT data gathering, file parsing, and system utilities.",
    },
    uz: {
      title: "Python Skriptlar va Avtomatizatsiya",
      org: "Python Scripting",
      desc: "Vazifalarni avtomatlashtirish, OSINT ma'lumotlarini izlash va tahlil qilish hamda maxsus Python skriptlarini yozish.",
    },
    ru: {
      title: "Python Скрипты и Автоматизация",
      desc: "Написание скриптов на Python для автоматизации задач, сбора OSINT данных и системных утилит.",
    },
  },
  {
    icon: "🌐",
    gradient: "from-[#4F8EF7] to-[#8B5CF6]",
    glow: "rgba(79, 142, 247, 0.2)",
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
    gradient: "from-[#EC4899] to-[#F59E0B]",
    glow: "rgba(236, 72, 153, 0.2)",
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
    gradient: "from-[#8B5CF6] to-[#22D3EE]",
    glow: "rgba(139, 92, 246, 0.2)",
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
    gradient: "from-[#10B981] to-[#4F8EF7]",
    glow: "rgba(16, 185, 129, 0.2)",
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
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[rgba(16,185,129,0.04)] rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="tag mb-4 inline-block border-[rgba(16,185,129,0.3)] bg-[rgba(16,185,129,0.08)] text-[#10B981]">
            {s.tag}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#F0F4FF] mb-4">
            {s.title} <span className="gradient-text">{s.titleGrad}</span>
          </h2>
          <p className="text-[#8B96B5] max-w-2xl mx-auto text-lg">{s.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesData.map((svc, i) => {
            const d = svc[lang as "en" | "uz" | "ru"];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="bento-card p-7 group cursor-default"
              >
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center text-xl shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`}
                  style={{ boxShadow: `0 8px 30px ${svc.glow}` }}
                >
                  {svc.icon}
                </div>
                <h3 className="text-lg font-bold text-[#F0F4FF] mb-3 group-hover:text-[#10B981] transition-colors">
                  {d.title}
                </h3>
                <p className="text-[#8B96B5] text-sm leading-relaxed mb-5">{d.desc}</p>
                <div className="pt-5 border-t border-[rgba(79,142,247,0.08)] flex flex-wrap gap-2">
                  {svc.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs px-2.5 py-1 rounded-lg font-mono text-[#8B96B5] bg-[rgba(79,142,247,0.05)] border border-[rgba(79,142,247,0.12)] group-hover:border-[rgba(16,185,129,0.3)] transition-all"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-14"
        >
          <p className="text-[#8B96B5] mb-4">
            {s.ctaText} <span className="text-[#F0F4FF] font-medium">{s.ctaHighlight}</span>
          </p>
          <motion.button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(16,185,129,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#10B981] via-[#4F8EF7] to-[#8B5CF6] text-white font-semibold shadow-lg"
          >
            {s.ctaBtn}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
