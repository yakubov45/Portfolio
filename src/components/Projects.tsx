"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { useLang } from "@/context/LanguageContext";

const projectData = [
  {
    id: "osint-recon",
    icon: "📡",
    gradient: "from-[#10B981] to-[#22D3EE]",
    tech: ["Python", "Kali Linux", "Nmap", "Sherlock", "OSINT"],
    status: "completed",
    en: {
      title: "Network Reconnaissance & OSINT Scanner",
      category: "Cybersecurity",
      desc: "Automated Python script suite integrating Nmap port scanning and Sherlock OSINT username reconnaissance.",
      longDesc: "A modular security scanning tool built with Python on Kali Linux. Performs multi-threaded host discovery, open port enumeration with Nmap, and social media footprint searching using Sherlock techniques.",
      features: [
        "Nmap automated port & service discovery",
        "Sherlock OSINT username footprinting",
        "TCP/IP network status report",
        "VLAN & routing validation",
        "Python automation script framework"
      ],
    },
    uz: {
      title: "Network Recon & OSINT Skaneri",
      category: "Kiberxavfsizlik",
      desc: "Nmap port skanerlash va Sherlock OSINT qidiruvini avtomatlashtiruvchi Python skriptlar to'plami.",
      longDesc: "Kali Linux muhitida Python yordamida yozilgan modulli xavfsizlik vositasi. Xostlarni aniqlash, Nmap orqali ochiq portlarni skanerlash va Sherlock yordamida raqamli izlarni (OSINT) tahlil qiladi.",
      features: [
        "Nmap orqali port va servis skaneri",
        "Sherlock OSINT username qidiruvlari",
        "TCP/IP tarmoq holati hisoboti",
        "VLAN va static routing tekshiruvi",
        "Python skript avtomatizatsiyasi"
      ],
    },
    ru: {
      title: "Network Recon & OSINT Сканер",
      category: "Кибербезопасность",
      desc: "Автоматизированный набор Python скриптов для сканирования Nmap и OSINT разведки через Sherlock.",
      longDesc: "Модульный инструмент безопасности на Python для Kali Linux. Выполняет обнаружение хостов, сканирование портов Nmap и поиск цифровых следов пользователей в социальных сетях.",
      features: [
        "Автоматическое сканирование Nmap",
        "Sherlock OSINT поиск по имени",
        "Отчёт по TCP/IP сетям",
        "Проверка VLAN и статической маршрутизации",
        "Скрипты автоматизации на Python"
      ],
    },
  },
  {
    id: "web-security-lab",
    icon: "🔐",
    gradient: "from-[#F59E0B] to-[#EF4444]",
    tech: ["Burp Suite", "Web Security", "XSS", "Pentesting", "Linux"],
    status: "completed",
    en: {
      title: "Web Security & Vulnerability Audit Lab",
      category: "Web Security",
      desc: "Web vulnerability testing suite focusing on XSS detection, Burp Suite request analysis, and threat mitigation.",
      longDesc: "Practical web application penetration testing lab. Exercises HTTP request interception and modification using Burp Suite, testing for Reflected & Stored XSS, and designing security fixes.",
      features: [
        "Burp Suite proxy request analysis",
        "XSS payload detection & prevention",
        "Web security weakness auditing",
        "Cisco TACACS auth protocol concepts",
        "Security remediation report"
      ],
    },
    uz: {
      title: "Web Xavfsizlik va Zaiflik Auditi Laboratoriyasi",
      category: "Web Xavfsizlik",
      desc: "Burp Suite yordamida XSS zaifliklarini aniqlash va veb xavfsizlik auditini o'tkazish amaliyoti.",
      longDesc: "Veb ilovalarni pentesting qilish amaliyot laboratoriyasi. Burp Suite yordamida so'rovlarni tutib qolish va tahlil qilish, Reflected & Stored XSS zaifliklarini aniqlash hamda himoya usullarini ishlab chiqish.",
      features: [
        "Burp Suite proksi tahlillari",
        "XSS zaifliklarini aniqlash va bartaraf etish",
        "Veb zaifliklarni tahlil qilish",
        "Cisco TACACS autentifikatsiya asoslari",
        "Xavfsizlikni mustahkamlash hisoboti"
      ],
    },
    ru: {
      title: "Лаборатория Аудита Веб-Безопасности",
      category: "Веб-Безопасность",
      desc: "Практический аудит веб-безопасности: обнаружение XSS заифлик, анализ запросов в Burp Suite.",
      longDesc: "Лабораторный практикум по тестированию веб-приложений на проникновение (пентестинг). Перехват запросов с Burp Suite, тестирование на XSS уязвимости и устранение рисков.",
      features: [
        "Анализ запросов через Burp Suite",
        "Обнаружение и защита от XSS",
        "Аудит уязвимостей веб-приложений",
        "Основы протокола Cisco TACACS",
        "Отчёт по устранению рисков"
      ],
    },
  },
  {
    id: "web-dev-app",
    icon: "🌐",
    gradient: "from-[#4F8EF7] to-[#8B5CF6]",
    tech: ["Python", "Web Dev", "REST API", "Git", "GitHub"],
    status: "completed",
    en: {
      title: "Modern Web App & Python API Integration",
      category: "Development",
      desc: "Interactive web platform showcasing frontend UI fundamentals, Python backend scripting, and REST API integration.",
      longDesc: "Full-stack development showcase demonstrating modern responsive web design, structured HTML/CSS/JS, Python API backend integration, and clean Git workflow.",
      features: [
        "Responsive frontend UI architecture",
        "Python backend script integration",
        "RESTful API communication",
        "Git version control & GitHub workflow",
        "Optimized web user experience"
      ],
    },
    uz: {
      title: "Zamonaviy Veb Ilova va Python API Integratsiyasi",
      category: "Dasturlash",
      desc: "Frontend dizayn asoslari, Python backend skriptlari va REST API integratsiyasiga ega veb platforma.",
      longDesc: "Veb dasturlash va Python imkoniyatlarini birlashtiruvchi loyiha. Moslashuvchan interfeys, tartibli kod strukturasi, API bilan ishlash va GitHub boshqaruvi.",
      features: [
        "Moslashuvchan frontend UI strukturasi",
        "Python backend skript integratsiyasi",
        "RESTful API bilan ishlash",
        "Git versiyalar nazorati va GitHub workflow",
        "Tez va samarali veb foydalanish"
      ],
    },
    ru: {
      title: "Современное Веб-Приложение и Python API",
      category: "Разработка",
      desc: "Интерактивная веб-платформа с основами Frontend UI, скриптами Python и интеграцией REST API.",
      longDesc: "Проект, демонстрирующий навыки веб-разработки: адаптивный верстку, Python скрипты на бэкенде, интеграцию API и управление версиями через Git/GitHub.",
      features: [
        "Адаптивная архитектура Frontend UI",
        "Интеграция Python бэкенд скриптов",
        "Взаимодействие с RESTful API",
        "Контроль версий Git и GitHub workflow",
        "Оптимизированный пользовательский опыт"
      ],
    },
  },
  {
    id: "smm-ai-pipeline",
    icon: "📱",
    gradient: "from-[#EC4899] to-[#8B5CF6]",
    tech: ["Instagram SMM", "AI Tools", "Branding", "Video Scripts"],
    status: "completed",
    en: {
      title: "Instagram SMM & AI Content Automation Pipeline",
      category: "SMM / AI",
      desc: "Digital marketing workflow combining Instagram profile branding, logo design, and AI-generated product video scripts.",
      longDesc: "End-to-end digital content strategy system. Utilizes AI tools for generating viral content ideas, writing product promo video scripts, and developing cohesive Instagram branding.",
      features: [
        "Instagram bio, profile & highlight branding",
        "Logo & portfolio asset creation",
        "AI-driven product video & ad script ideation",
        "Content calendar & publishing workflow",
        "AI prompt automation for marketing"
      ],
    },
    uz: {
      title: "Instagram SMM va AI Kontent Avtomatizatsiyasi",
      category: "SMM / AI",
      desc: "Instagram profil brendingi, logo dizayni va AI yordamida mahsulot reklama scriptlarini tayyorlash tizimi.",
      longDesc: "Raqamli marketing va AI imkoniyatlarini birlashtirgan kontent tizimi. AI vositalari orqali videolarga g'oyalar yaratish, reklama va mahsulot ssenariylarini tayyorlash hamda Instagram brendingini rivojlantirish.",
      features: [
        "Instagram profil, bio va brending dizayni",
        "Logo va portfolio materiallarini tayyorlash",
        "AI yordamida reklama va video ssenariylar yozish",
        "Kontent g'oyalarini shakllantirish",
        "AI workflow va marketing avtomatizatsiyasi"
      ],
    },
    ru: {
      title: "Instagram SMM и ИИ Контент Пайплайн",
      category: "SMM / ИИ",
      desc: "Система цифрового маркетинга: брендинг Instagram, дизайн логотипа и создание видео-сценариев с ИИ.",
      longDesc: "Комплексная стратегия цифрового контента. Использование ИИ-инструментов для генерации вирусных идей, написания рекламных сценариев для продуктов и полного брендинга профиля в Instagram.",
      features: [
        "Брендинг профиля, био и хайлайтс Instagram",
        "Создание логотипа и материалов портфолио",
        "ИИ-генерация сценариев для рекламных видео",
        "Формирование контент-плана",
        "ИИ-workflows и маркетинговая автоматизация"
      ],
    },
  },
];

export default function Projects() {
  const { tr, lang } = useLang();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [selected, setSelected] = useState<typeof projectData[0] | null>(null);
  const p = tr.projects;

  return (
    <section id="projects" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[rgba(16,185,129,0.05)] rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="tag mb-4 inline-block border-[rgba(16,185,129,0.3)] bg-[rgba(16,185,129,0.08)] text-[#10B981]">
            {p.tag}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#F0F4FF] mb-4">
            {p.title} <span className="gradient-text">{p.titleGrad}</span>
          </h2>
          <p className="text-[#8B96B5] max-w-2xl mx-auto text-lg">{p.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectData.map((proj, i) => {
            const d = proj[lang as "en" | "uz" | "ru"];
            const isCompleted = proj.status === "completed";
            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelected(proj)}
                className="bento-card p-8 cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${proj.gradient} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {proj.icon}
                  </div>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      isCompleted
                        ? "bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.25)] text-[#10B981]"
                        : "bg-[rgba(245,158,11,0.1)] border border-[rgba(245,158,11,0.25)] text-[#F59E0B]"
                    }`}
                  >
                    {isCompleted ? p.completed : p.inProgress}
                  </span>
                </div>
                <span className="text-xs font-mono text-[#10B981] mb-1 block">{d.category}</span>
                <h3 className="text-xl font-bold text-[#F0F4FF] group-hover:text-[#22D3EE] transition-colors mb-3">
                  {d.title}
                </h3>
                <p className="text-[#8B96B5] text-sm leading-relaxed mb-5">{d.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {proj.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-lg bg-[rgba(79,142,247,0.08)] border border-[rgba(79,142,247,0.15)] text-[#8B96B5] font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-[#10B981] text-sm font-medium group-hover:gap-3 transition-all">
                  {p.viewDetails} →
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selected && (() => {
          const d = selected[lang as "en" | "uz" | "ru"];
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="bento-card w-full max-w-2xl max-h-[85vh] overflow-y-auto p-8 border-[rgba(16,185,129,0.3)]"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${selected.gradient} flex items-center justify-center text-2xl shadow-lg`}
                    >
                      {selected.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#F0F4FF]">{d.title}</h3>
                      <span className="tag text-xs border-[rgba(16,185,129,0.3)] bg-[rgba(16,185,129,0.08)] text-[#10B981] mt-1 inline-block">
                        {d.category}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="w-9 h-9 rounded-xl glass border border-[rgba(79,142,247,0.2)] flex items-center justify-center text-[#8B96B5] hover:text-[#F0F4FF]"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-[#8B96B5] leading-relaxed mb-6 text-sm sm:text-base">{d.longDesc}</p>

                <div className="mb-6">
                  <h4 className="text-xs font-mono text-[#10B981] mb-3">// Key Features & Modules</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {d.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-[#8B96B5]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selected.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1.5 rounded-lg bg-[rgba(16,185,129,0.08)] border border-[rgba(16,185,129,0.25)] text-[#10B981] font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
}
