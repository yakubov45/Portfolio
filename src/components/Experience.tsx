"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLang } from "@/context/LanguageContext";

const timelineData = [
  {
    year: "2024 – Present", icon: "🚀", color: "#4F8EF7",
    tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    en: { title: "Full Stack Developer", org: "Freelance & Personal Projects", desc: "Building complete web applications end-to-end — from design to deployment. Working with Next.js 15, TypeScript, Firebase, and Tailwind CSS to create production-ready platforms." },
    uz: { title: "Full Stack Dasturchi", org: "Frilanser va Shaxsiy Loyihalar", desc: "Dizayndan boshlab joylashtirishgacha to'liq veb ilovalar yaratish. Next.js 15, TypeScript, Firebase va Tailwind CSS bilan ishlab chiqarishga tayyor platformalar qurilmoqda." },
    ru: { title: "Fullstack Разработчик", org: "Фриланс и личные проекты", desc: "Разработка полноценных веб-приложений от дизайна до деплоя. Next.js 15, TypeScript, Firebase и Tailwind CSS для создания production-ready платформ." },
  },
  {
    year: "2023 – 2024", icon: "⚡", color: "#8B5CF6",
    tags: ["React.js", "TypeScript", "Firebase Auth", "Firestore"],
    en: { title: "Frontend Developer", org: "Web Development Journey", desc: "Deepened expertise in React.js ecosystem, TypeScript, and Firebase integration. Built complex UI components and responsive layouts." },
    uz: { title: "Frontend Dasturchi", org: "Veb Dasturlash Sayohati", desc: "React.js ekotizimi, TypeScript va Firebase integratsiyasida tajribani chuqurlashtirish. Murakkab UI komponentlar va moslashuvchan layoutlar qurildi." },
    ru: { title: "Frontend Разработчик", org: "Путь в веб-разработке", desc: "Углубление экспертизы в экосистеме React.js, TypeScript и интеграции Firebase. Создание сложных UI компонентов и адаптивных макетов." },
  },
  {
    year: "2022 – 2023", icon: "🎨", color: "#22D3EE",
    tags: ["HTML5", "CSS3", "JavaScript", "React.js"],
    en: { title: "Frontend Foundations", org: "Learning & Building", desc: "Mastered HTML5, CSS3, JavaScript (ES6+), and React.js. Built first responsive websites and started exploring Node.js and Express.js." },
    uz: { title: "Frontend Asoslari", org: "O'rganish va Qurish", desc: "HTML5, CSS3, JavaScript (ES6+) va React.js ni o'zlashtirish. Birinchi moslashuvchan veb-saytlar yaratildi va Node.js, Express.js o'rganila boshlandi." },
    ru: { title: "Основы Frontend", org: "Обучение и создание", desc: "Освоение HTML5, CSS3, JavaScript (ES6+) и React.js. Создание первых адаптивных сайтов и начало изучения Node.js и Express.js." },
  },
  {
    year: "2021 – 2022", icon: "🌱", color: "#10B981",
    tags: ["HTML", "CSS", "JavaScript Basics", "Git"],
    en: { title: "Started Web Development", org: "Self-Taught Path", desc: "Began the journey into software development. Learned programming fundamentals, HTML, CSS, and JavaScript basics." },
    uz: { title: "Veb Dasturlashni Boshladim", org: "O'z-O'zini O'qitish", desc: "Dasturiy ta'minot ishlab chiqishga sayohat boshlandi. Dasturlash asoslari, HTML, CSS va JavaScript o'rganildi." },
    ru: { title: "Начало веб-разработки", org: "Самообучение", desc: "Начало пути в разработку. Изучение основ программирования, HTML, CSS и JavaScript." },
  },
];

export default function Experience() {
  const { tr, lang } = useLang();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const e = tr.experience;

  return (
    <section id="experience" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[rgba(34,211,238,0.04)] rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-14">
          <span className="tag mb-4 inline-block">{e.tag}</span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#F0F4FF] mb-4">{e.title} <span className="gradient-text">{e.titleGrad}</span></h2>
          <p className="text-[#8B96B5] max-w-2xl mx-auto text-lg">{e.sub}</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[rgba(79,142,247,0.5)] via-[rgba(79,142,247,0.2)] to-transparent md:-translate-x-1/2" />
          <div className="flex flex-col gap-10">
            {timelineData.map((item, i) => {
              const d = item[lang as "en" | "uz" | "ru"];
              const isLeft = i % 2 === 0;
              return (
                <motion.div key={item.year} initial={{ opacity: 0, x: isLeft ? -40 : 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: i * 0.15 }} className={`relative flex items-start gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 pl-10 md:pl-0 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bento-card p-6 inline-block w-full text-left">
                      <span className="inline-block text-xs font-mono px-3 py-1 rounded-full mb-3" style={{ background: `${item.color}18`, color: item.color, border: `1px solid ${item.color}30` }}>{item.year}</span>
                      <h3 className="text-lg font-bold text-[#F0F4FF] mb-1">{d.title}</h3>
                      <p className="text-sm font-medium mb-3" style={{ color: item.color }}>{d.org}</p>
                      <p className="text-sm text-[#8B96B5] leading-relaxed mb-4">{d.desc}</p>
                      <div className={`flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : ""}`}>
                        {item.tags.map(tag => <span key={tag} className="text-xs px-2.5 py-1 rounded-lg font-mono text-[#4B5678] bg-[rgba(79,142,247,0.05)] border border-[rgba(79,142,247,0.1)]">{tag}</span>)}
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-6 z-10">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-base shadow-lg" style={{ background: `${item.color}20`, border: `2px solid ${item.color}`, boxShadow: `0 0 16px ${item.color}50` }}>{item.icon}</div>
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
