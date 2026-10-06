"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { useLang } from "@/context/LanguageContext";

const servicesData = [
  {
    id: "security",
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
    id: "python",
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
    id: "web",
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
    id: "smm",
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
    id: "ai",
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
    id: "git",
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

  // Interactive Project Scope Configurator
  const [selectedServices, setSelectedServices] = useState<string[]>(["security", "web"]);

  const toggleService = (id: string) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleSendScopeTelegram = () => {
    const names = selectedServices
      .map(id => servicesData.find(svc => svc.id === id)?.[lang as "en" | "uz" | "ru"].title)
      .filter(Boolean)
      .join(", ");
    const introMsg = lang === "uz" ? "Salom Ismoil! Men quyidagi xizmatlar bo'yicha loyiha buyurtma qilmoqchiman:" : lang === "ru" ? "Здравствуйте Исмоил! Я хочу заказать проект по следующим услугам:" : "Hello Ismoil! I would like to order a project for the following services:";
    const text = encodeURIComponent(`${introMsg} ${names}`);
    window.open(`https://t.me/ismoil_turgunboyev?text=${text}`, "_blank");
  };

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

        {/* Standard Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {servicesData.map((svc, i) => {
            const d = svc[lang as "en" | "uz" | "ru"];
            const isSelected = selectedServices.includes(svc.id);
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                onClick={() => toggleService(svc.id)}
                className={`cyber-card p-7 group cursor-pointer transition-all duration-300 ${
                  isSelected ? "border-[#00FF9D] bg-[rgba(0,255,157,0.06)] shadow-[0_0_25px_rgba(0,255,157,0.15)]" : "border-[rgba(0,242,254,0.15)]"
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center text-xl text-[#050811] shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {svc.icon}
                  </div>
                  <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold border font-mono transition-all ${
                    isSelected ? "bg-[#00FF9D] text-[#050811] border-[#00FF9D]" : "border-[rgba(0,242,254,0.3)] text-gray-500"
                  }`}>
                    {isSelected ? "✓" : "+"}
                  </span>
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

        {/* Interactive Scope Builder Output Bar */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }} className="cyber-card p-6 border-[rgba(0,252,254,0.3)] bg-[#080D1A]/95">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[#00F2FE]">
                <span>⚡ {lang === "uz" ? "INTERAKTIV LOYIHA KALKULYATORI" : lang === "ru" ? "ИНТЕРАКТИВНЫЙ КОНФИГУРАТОР ПРОЕКТА" : "INTERACTIVE PROJECT CONFIGURATOR"}</span>
                <span className="text-[#00FF9D]">({selectedServices.length} {lang === "uz" ? "Tanlandi" : lang === "ru" ? "Выбрано" : "Selected"})</span>
              </div>
              <p className="text-xs text-[#8B96B5]">
                {selectedServices.length > 0
                  ? `${lang === "uz" ? "Tanlangan xizmatlar:" : lang === "ru" ? "Выбранные услуги:" : "Selected services:"} ${selectedServices.map(id => servicesData.find(s => s.id === id)?.[lang as "en" | "uz" | "ru"].title).join(" + ")}`
                  : lang === "uz" ? "Yuqoridagi kartalarga bosib xizmatlarni tanlang..." : lang === "ru" ? "Выберите услуги, нажав на карточки выше..." : "Select services by clicking cards above..."}
              </p>
            </div>

            <motion.button
              onClick={handleSendScopeTelegram}
              disabled={selectedServices.length === 0}
              whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(0,255,157,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className={`px-6 py-3 rounded-xl font-bold text-xs font-mono tracking-wide transition-all ${
                selectedServices.length > 0
                  ? "bg-gradient-to-r from-[#00FF9D] to-[#00F2FE] text-[#050811] shadow-lg"
                  : "bg-gray-800 text-gray-500 cursor-not-allowed"
              }`}
            >
              🚀 {lang === "uz" ? "Telegram Orqali Buyurtma Berish" : lang === "ru" ? "Заказать через Telegram" : "Order via Telegram"} ({selectedServices.length})
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
