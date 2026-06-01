"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { useLang } from "@/context/LanguageContext";

const projectData = [
  {
    id: "ecommerce",
    icon: "🛒", gradient: "from-[#4F8EF7] to-[#8B5CF6]",
    tech: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"], status: "completed",
    en: { title: "E-Commerce Platform", category: "Full Stack", desc: "Modern online shopping platform with responsive UI, product management, multi-language support, and optimized performance.", longDesc: "A comprehensive e-commerce solution built with Next.js and Firebase. Features product catalog, search & filtering, authentication, and admin dashboard.", features: ["Product catalog & search", "Multi-language support", "Authentication system", "Admin dashboard", "Responsive design"] },
    uz: { title: "E-Commerce Platforma", category: "Full Stack", desc: "Zamonaviy onlayn do'kon platformasi — moslashuvchan dizayn, mahsulot boshqaruvi, ko'p tilli qo'llab-quvvatlash.", longDesc: "Next.js va Firebase asosida qurilgan to'liq e-commerce yechimi. Mahsulot katalogi, qidiruv, autentifikatsiya va admin panelini o'z ichiga oladi.", features: ["Mahsulot katalogi va qidiruv", "Ko'p tilli qo'llab-quvvatlash", "Autentifikatsiya tizimi", "Admin paneli", "Moslashuvchan dizayn"] },
    ru: { title: "E-Commerce Платформа", category: "Full Stack", desc: "Современная платформа интернет-магазина с адаптивным UI, управлением товарами и мультиязычной поддержкой.", longDesc: "Полноценное e-commerce решение на Next.js и Firebase с каталогом товаров, поиском, аутентификацией и панелью администратора.", features: ["Каталог и поиск товаров", "Мультиязычная поддержка", "Система аутентификации", "Панель администратора", "Адаптивный дизайн"] },
  },
  {
    id: "pcbuilder",
    icon: "🖥️", gradient: "from-[#22D3EE] to-[#4F8EF7]",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"], status: "completed",
    en: { title: "PC Builder Platform", category: "Web App", desc: "Interactive PC configuration system with real-time compatibility checks and dynamic pricing.", longDesc: "An innovative platform for building custom PCs with component selection, compatibility checking, product comparison, and dynamic pricing.", features: ["Component selection UI", "Compatibility checker", "Product comparison", "Dynamic pricing", "Yandex Maps integration"] },
    uz: { title: "PC Builder Platforma", category: "Web App", desc: "Foydalanuvchilarga kompyuter qismlarini interaktiv tanlash va moslashuv tekshiruvini taqdim etuvchi tizim.", longDesc: "Maxsus kompyuter yig'ish uchun innovatsion platforma — komponentlar tanlash, moslik tekshiruvi, narxlarni solishtirish.", features: ["Komponent tanlash UI", "Moslik tekshiruvi", "Mahsulotlarni solishtirish", "Dinamik narxlash", "Yandex Xaritalar integratsiyasi"] },
    ru: { title: "PC Builder Платформа", category: "Web App", desc: "Интерактивная система конфигурации ПК с проверкой совместимости в реальном времени и динамическими ценами.", longDesc: "Инновационная платформа для сборки ПК с выбором компонентов, проверкой совместимости и сравнением продуктов.", features: ["Интерфейс выбора компонентов", "Проверка совместимости", "Сравнение товаров", "Динамическое ценообразование", "Интеграция Яндекс.Карт"] },
  },
  {
    id: "dashboard",
    icon: "📊", gradient: "from-[#8B5CF6] to-[#EC4899]",
    tech: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"], status: "completed",
    en: { title: "Admin Dashboard", category: "UI/UX", desc: "Modern admin panel for managing products, users, and orders with analytics and clean workflows.", longDesc: "Feature-rich admin dashboard with real-time analytics, product and user management, order tracking, and data visualizations.", features: ["Analytics dashboard", "Product management", "User management", "Real-time updates", "Order tracking"] },
    uz: { title: "Admin Paneli", category: "UI/UX", desc: "Mahsulotlar, foydalanuvchilar va buyurtmalarni boshqarish uchun zamonaviy admin paneli.", longDesc: "Real vaqt tahlili, mahsulot va foydalanuvchi boshqaruvi, buyurtmalarni kuzatish va ma'lumotlar vizualizatsiyasiga ega admin paneli.", features: ["Analitika paneli", "Mahsulot boshqaruvi", "Foydalanuvchi boshqaruvi", "Real vaqt yangilanishlari", "Buyurtmalarni kuzatish"] },
    ru: { title: "Панель администратора", category: "UI/UX", desc: "Современная панель администратора для управления товарами, пользователями и заказами.", longDesc: "Многофункциональная панель с аналитикой в реальном времени, управлением товарами, пользователями и визуализацией данных.", features: ["Аналитическая панель", "Управление товарами", "Управление пользователями", "Обновления в реальном времени", "Отслеживание заказов"] },
  },
  {
    id: "ai",
    icon: "🤖", gradient: "from-[#10B981] to-[#22D3EE]",
    tech: ["Python", "CNN", "Computer Vision", "ML"], status: "inProgress",
    en: { title: "AI / Object Detection", category: "AI/ML", desc: "Machine learning projects using CNN and object detection with computer vision and image processing.", longDesc: "Exploration of AI including CNNs, object detection, and image processing. Working with ML datasets and building detection pipelines.", features: ["CNN model training", "Object detection", "Image processing", "Dataset management", "AI-based detection"] },
    uz: { title: "Sun'iy Intellekt / Obyekt Aniqlash", category: "Sun'iy Intellekt", desc: "CNN va obyektni aniqlash tizimlari yordamida kompyuter ko'rinishi bo'yicha ML loyihalari.", longDesc: "Sun'iy intellektni o'rganish — CNN, obyektni aniqlash va tasvirni qayta ishlash. ML datasetlari bilan ishlash.", features: ["CNN model o'qitish", "Obyektni aniqlash", "Tasvirni qayta ishlash", "Dataset boshqaruvi", "AI asosidagi aniqlash"] },
    ru: { title: "ИИ / Обнаружение объектов", category: "ИИ/МО", desc: "Проекты машинного обучения с CNN и обнаружением объектов, компьютерным зрением.", longDesc: "Изучение ИИ — свёрточные нейронные сети, обнаружение объектов, обработка изображений и работа с датасетами.", features: ["Обучение CNN моделей", "Обнаружение объектов", "Обработка изображений", "Управление датасетами", "ИИ-обнаружение"] },
  },
];

export default function Projects() {
  const { tr, lang } = useLang();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [selected, setSelected] = useState<typeof projectData[0] | null>(null);
  const p = tr.projects;

  return (
    <section id="projects" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[rgba(139,92,246,0.05)] rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-14">
          <span className="tag mb-4 inline-block">{p.tag}</span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#F0F4FF] mb-4">{p.title} <span className="gradient-text">{p.titleGrad}</span></h2>
          <p className="text-[#8B96B5] max-w-2xl mx-auto text-lg">{p.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectData.map((proj, i) => {
            const d = proj[lang as "en" | "uz" | "ru"];
            const isCompleted = proj.status === "completed";
            return (
              <motion.div key={proj.id} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: i * 0.1 }} whileHover={{ y: -8 }} onClick={() => setSelected(proj)} className="bento-card p-8 cursor-pointer group">
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${proj.gradient} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>{proj.icon}</div>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${isCompleted ? "bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.2)] text-[#10B981]" : "bg-[rgba(245,158,11,0.1)] border border-[rgba(245,158,11,0.2)] text-[#F59E0B]"}`}>
                    {isCompleted ? p.completed : p.inProgress}
                  </span>
                </div>
                <span className="text-xs font-mono text-[#4F8EF7] mb-1 block">{d.category}</span>
                <h3 className="text-xl font-bold text-[#F0F4FF] group-hover:text-[#4F8EF7] transition-colors mb-3">{d.title}</h3>
                <p className="text-[#8B96B5] text-sm leading-relaxed mb-5">{d.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {proj.tech.slice(0, 3).map(t => <span key={t} className="text-xs px-2.5 py-1 rounded-lg bg-[rgba(79,142,247,0.08)] border border-[rgba(79,142,247,0.15)] text-[#8B96B5] font-mono">{t}</span>)}
                  {proj.tech.length > 3 && <span className="text-xs px-2.5 py-1 rounded-lg bg-[rgba(79,142,247,0.08)] border border-[rgba(79,142,247,0.15)] text-[#4B5678] font-mono">+{proj.tech.length - 3}</span>}
                </div>
                <div className="flex items-center gap-2 text-[#4F8EF7] text-sm font-medium group-hover:gap-3 transition-all">{p.viewDetails} →</div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selected && (() => {
          const d = selected[lang as "en" | "uz" | "ru"];
          return (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)} className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} onClick={e => e.stopPropagation()} className="bento-card w-full max-w-2xl max-h-[85vh] overflow-y-auto p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${selected.gradient} flex items-center justify-center text-2xl`}>{selected.icon}</div>
                    <div><h3 className="text-2xl font-bold text-[#F0F4FF]">{d.title}</h3><span className="tag text-xs">{d.category}</span></div>
                  </div>
                  <button onClick={() => setSelected(null)} className="w-9 h-9 rounded-xl glass border border-[rgba(79,142,247,0.2)] flex items-center justify-center text-[#8B96B5] hover:text-[#F0F4FF]">✕</button>
                </div>
                <p className="text-[#8B96B5] leading-relaxed mb-6">{d.longDesc}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-mono text-[#4F8EF7] mb-3">// Features</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {d.features.map(f => <li key={f} className="flex items-center gap-2 text-sm text-[#8B96B5]"><span className="w-1.5 h-1.5 rounded-full bg-[#10B981] flex-shrink-0" />{f}</li>)}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selected.tech.map(t => <span key={t} className="text-xs px-3 py-1.5 rounded-lg bg-[rgba(79,142,247,0.08)] border border-[rgba(79,142,247,0.2)] text-[#4F8EF7] font-mono">{t}</span>)}
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
}
