"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLang } from "@/context/LanguageContext";

const timelineData = [
  {
    year: "2024 – Present",
    icon: "🔐",
    color: "#10B981",
    tags: ["Kali Linux", "Burp Suite", "Nmap", "Web Security", "Cisco TACACS"],
    en: {
      title: "Cybersecurity & Pentesting Focus",
      org: "Security Labs & Reconnaissance",
      desc: "Deepening practical knowledge in penetration testing fundamentals, network scanning with Nmap, web vulnerability auditing with Burp Suite, OSINT with Sherlock, and Cisco TACACS basics.",
    },
    uz: {
      title: "Kiberxavfsizlik va Pentesting Yo'nalishi",
      org: "Xavfsizlik Laboratoriyalari va Tahlillar",
      desc: "Pentesting asoslari, Nmap orqali tarmoqlarni skanerlash, Burp Suite bilan veb zaifliklarni tahlil qilish, Sherlock orqali OSINT qidiruvlari va Cisco TACACS bo'yicha amaliy tajriba.",
    },
    ru: {
      title: "Кибербезопасность и Пентестинг",
      org: "Лаборатории Безопасности и Разведка",
      desc: "Углубление практических знаний в пентестинге, сканировании сетей с Nmap, аудите веб-уязвимостей через Burp Suite, OSINT через Sherlock и основах Cisco TACACS.",
    },
  },
  {
    year: "2023 – 2024",
    icon: "💻",
    color: "#4F8EF7",
    tags: ["Python", "Web Dev", "REST API", "Git", "GitHub"],
    en: {
      title: "Python & Web Development",
      org: "Software & Scripting Projects",
      desc: "Developed automation scripts in Python, learned web application structure, master frontend and backend concepts, REST API integration, and version control using Git & GitHub.",
    },
    uz: {
      title: "Python va Veb Dasturlash",
      org: "Dasturlar va Skript Loyihalari",
      desc: "Python yordamida avtomatizatsiya skriptlarini yozish, veb-saytlar yaratish asoslari, frontend/backend tushunchalari, API bilan ishlash hamda Git va GitHub orqali versiyalar nazorati.",
    },
    ru: {
      title: "Python и Веб-Разработка",
      org: "Проекты Программирования и Скриптов",
      desc: "Разработка скриптов автоматизации на Python, освоение веб-разработки, концепций Frontend/Backend, интеграции REST API и контроля версий через Git & GitHub.",
    },
  },
  {
    year: "2023 – Present",
    icon: "📱",
    color: "#EC4899",
    tags: ["Instagram SMM", "Branding", "Content Strategy", "Video Scripts"],
    en: {
      title: "Digital SMM & Content Strategy",
      org: "Social Media & Visual Branding",
      desc: "Designing Instagram bio and profile aesthetics, generating creative content ideas, crafting logo designs, and writing compelling promotional ad & video scripts.",
    },
    uz: {
      title: "Digital SMM va Kontent Strategiyasi",
      org: "Ijtimoiy Tarmoqlar va Vizual Brending",
      desc: "Instagram profil va bio brendingini yaratish, kontent g'oyalarini ishlab chiqish, logo va portfolio tayyorlash hamda mahsulotlar uchun reklama va video ssenariylar tuzish.",
    },
    ru: {
      title: "Digital SMM и Контент Стратегия",
      org: "Социальные Сети и Визуальный Брендинг",
      desc: "Дизайн профиля и био в Instagram, разработка креативных идей для контента, создание логотипов и подготовка рекламных видео-сценариев для продуктов.",
    },
  },
  {
    year: "2024 – Present",
    icon: "🤖",
    color: "#8B5CF6",
    tags: ["AI Marketing", "Prompting", "Script Gen", "AI Workflows"],
    en: {
      title: "AI Tools & Marketing Workflows",
      org: "AI-Powered Content Creation",
      desc: "Leveraging generative AI tools for marketing campaign execution, prompt engineering, generating video concept scripts, and building efficient content workflows.",
    },
    uz: {
      title: "AI Vositalari va Marketing Workflows",
      org: "Sun'iy Intellekt Kontent Tizimlari",
      desc: "Kontent va marketingda AI vositalaridan foydalanish, AI orqali mahsulot uchun video va ssenariy g'oyalarini shakllantirish va AI bilan ishlash ish oqimlarini (workflow) yo'lga qo'yish.",
    },
    ru: {
      title: "ИИ Инструменты и Маркетинг Workflows",
      org: "ИИ-Контентные Системы",
      desc: "Использование ИИ в маркетинге и контенте, генерация идей видео-сценариев с помощью ИИ и построение эффективных рабочих процессов (workflows).",
    },
  },
];

export default function Experience() {
  const { tr, lang } = useLang();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const e = tr.experience;

  return (
    <section id="experience" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[rgba(16,185,129,0.04)] rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="tag mb-4 inline-block border-[rgba(16,185,129,0.3)] bg-[rgba(16,185,129,0.08)] text-[#10B981]">
            {e.tag}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#F0F4FF] mb-4">
            {e.title} <span className="gradient-text">{e.titleGrad}</span>
          </h2>
          <p className="text-[#8B96B5] max-w-2xl mx-auto text-lg">{e.sub}</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[rgba(16,185,129,0.5)] via-[rgba(79,142,247,0.3)] to-transparent md:-translate-x-1/2" />
          <div className="flex flex-col gap-10">
            {timelineData.map((item, i) => {
              const d = item[lang as "en" | "uz" | "ru"];
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 pl-10 md:pl-0 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bento-card p-6 inline-block w-full text-left">
                      <span
                        className="inline-block text-xs font-mono px-3 py-1 rounded-full mb-3"
                        style={{
                          background: `${item.color}18`,
                          color: item.color,
                          border: `1px solid ${item.color}30`,
                        }}
                      >
                        {item.year}
                      </span>
                      <h3 className="text-lg font-bold text-[#F0F4FF] mb-1">{d.title}</h3>
                      <p className="text-sm font-medium mb-3" style={{ color: item.color }}>
                        {d.org}
                      </p>
                      <p className="text-sm text-[#8B96B5] leading-relaxed mb-4">{d.desc}</p>
                      <div className={`flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : ""}`}>
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-lg font-mono text-[#8B96B5] bg-[rgba(79,142,247,0.05)] border border-[rgba(79,142,247,0.12)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-6 z-10">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-base shadow-lg"
                      style={{
                        background: `${item.color}20`,
                        border: `2px solid ${item.color}`,
                        boxShadow: `0 0 16px ${item.color}50`,
                      }}
                    >
                      {item.icon}
                    </div>
                  </div>
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
