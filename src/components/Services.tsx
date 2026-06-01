"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLang } from "@/context/LanguageContext";

const servicesData = [
  {
    icon: "⚡", gradient: "from-[#4F8EF7] to-[#22D3EE]", glow: "rgba(79,142,247,0.2)",
    features: ["Next.js / React", "TypeScript", "API Integration", "Performance"],
    en: { title: "Web Application Development", desc: "Building modern, performant web applications using Next.js, React, and TypeScript. From SPAs to complex multi-page platforms." },
    uz: { title: "Veb Ilovalar Ishlab Chiqish", desc: "Next.js, React va TypeScript yordamida zamonaviy, samarali veb ilovalar yaratish — oddiy SPA'dan murakkab platformalargacha." },
    ru: { title: "Разработка веб-приложений", desc: "Создание современных, производительных веб-приложений на Next.js, React и TypeScript — от SPA до сложных платформ." },
  },
  {
    icon: "🎨", gradient: "from-[#8B5CF6] to-[#EC4899]", glow: "rgba(139,92,246,0.2)",
    features: ["Responsive Design", "Glassmorphism", "Framer Motion", "Tailwind CSS"],
    en: { title: "UI/UX Design & Implementation", desc: "Creating beautiful, intuitive interfaces with glassmorphism, bento grids, animations, and modern design aesthetics." },
    uz: { title: "UI/UX Dizayn va Amalga Oshirish", desc: "Glassmorphism, bento gridlar, animatsiyalar va zamonaviy estetika bilan chiroyli, intuitiv interfeyslar yaratish." },
    ru: { title: "UI/UX Дизайн и реализация", desc: "Создание красивых интерфейсов с glassmorphism, bento grid, анимациями и современной эстетикой." },
  },
  {
    icon: "🔥", gradient: "from-[#EC4899] to-[#F59E0B]", glow: "rgba(236,72,153,0.2)",
    features: ["Firebase Auth", "Firestore", "Real-time Updates", "Cloud Storage"],
    en: { title: "Firebase & Backend Integration", desc: "Integrating Firebase services including Firestore, Authentication, and Storage to build scalable, real-time backend systems." },
    uz: { title: "Firebase va Backend Integratsiya", desc: "Firestore, autentifikatsiya va saqlash xizmatlarini integratsiya qilish — kengaytiriladigan real vaqt backend tizimlari." },
    ru: { title: "Firebase и Backend интеграция", desc: "Интеграция Firebase — Firestore, Authentication и Storage для масштабируемых backend-систем реального времени." },
  },
  {
    icon: "🌐", gradient: "from-[#22D3EE] to-[#10B981]", glow: "rgba(34,211,238,0.2)",
    features: ["i18n / L10n", "Dynamic Content", "Language Detection", "RTL Support"],
    en: { title: "Multi-Language Websites", desc: "Building fully localized platforms with seamless language switching and persistent state for global audiences." },
    uz: { title: "Ko'p Tilli Veb-Saytlar", desc: "Global auditoriya uchun uzluksiz til almashtirish va persistent holatga ega to'liq lokalizatsiya qilingan platformalar." },
    ru: { title: "Многоязычные сайты", desc: "Создание полностью локализованных платформ с переключением языков и сохранением состояния для глобальной аудитории." },
  },
  {
    icon: "📊", gradient: "from-[#10B981] to-[#4F8EF7]", glow: "rgba(16,185,129,0.2)",
    features: ["Analytics UI", "Data Tables", "Charts", "CRUD Operations"],
    en: { title: "Admin Dashboards", desc: "Designing and building custom admin panels with analytics, data management, and clean workflows." },
    uz: { title: "Admin Panellari", desc: "Analitika, ma'lumotlar boshqaruvi va qulay ish oqimlari bilan maxsus admin panellarini loyihalash va qurish." },
    ru: { title: "Панели администратора", desc: "Проектирование и создание пользовательских панелей с аналитикой, управлением данными и удобными рабочими процессами." },
  },
  {
    icon: "🚀", gradient: "from-[#F59E0B] to-[#8B5CF6]", glow: "rgba(245,158,11,0.2)",
    features: ["Vercel Deploy", "Core Web Vitals", "CDN Setup", "Monitoring"],
    en: { title: "Deployment & Optimization", desc: "Deploying production-ready applications to Vercel with performance optimization and monitoring." },
    uz: { title: "Deploy va Optimizatsiya", desc: "Ishlab chiqarishga tayyor ilovalarni Vercel'ga joylashtirish, ishlash optimizatsiyasi va monitoring." },
    ru: { title: "Деплой и оптимизация", desc: "Развёртывание production-ready приложений на Vercel с оптимизацией производительности и мониторингом." },
  },
];

export default function Services() {
  const { tr, lang } = useLang();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const s = tr.services;

  return (
    <section id="services" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[rgba(236,72,153,0.04)] rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-14">
          <span className="tag mb-4 inline-block">{s.tag}</span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#F0F4FF] mb-4">{s.title} <span className="gradient-text">{s.titleGrad}</span></h2>
          <p className="text-[#8B96B5] max-w-2xl mx-auto text-lg">{s.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesData.map((svc, i) => {
            const d = svc[lang as "en" | "uz" | "ru"];
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: i * 0.08 }} whileHover={{ y: -8 }} className="bento-card p-7 group cursor-default">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center text-xl shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`} style={{ boxShadow: `0 8px 30px ${svc.glow}` }}>{svc.icon}</div>
                <h3 className="text-lg font-bold text-[#F0F4FF] mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#4F8EF7] group-hover:to-[#8B5CF6] transition-all">{d.title}</h3>
                <p className="text-[#8B96B5] text-sm leading-relaxed mb-5">{d.desc}</p>
                <div className="pt-5 border-t border-[rgba(79,142,247,0.08)] flex flex-wrap gap-2">
                  {svc.features.map(f => <span key={f} className="text-xs px-2.5 py-1 rounded-lg font-mono text-[#4B5678] bg-[rgba(79,142,247,0.05)] border border-[rgba(79,142,247,0.1)] group-hover:text-[#8B96B5] group-hover:border-[rgba(79,142,247,0.2)] transition-all">{f}</span>)}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7 }} className="text-center mt-14">
          <p className="text-[#8B96B5] mb-4">{s.ctaText} <span className="text-[#F0F4FF] font-medium">{s.ctaHighlight}</span></p>
          <motion.button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(79,142,247,0.4)" }} whileTap={{ scale: 0.97 }} className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] text-white font-semibold shadow-lg">
            {s.ctaBtn}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
