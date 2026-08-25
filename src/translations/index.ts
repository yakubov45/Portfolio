export type Lang = "en" | "uz" | "ru";

const t = {
  en: {
    nav: {
      home: "Home", about: "About", skills: "Skills", projects: "Projects",
      experience: "Experience", services: "Services", contact: "Contact", hire: "Hire Me",
    },
    hero: {
      badge: "Available for opportunities & projects",
      greeting: "Hi, I'm", name: "Muhammad\nYoqubjonov",
      roles: [
        "Cybersecurity & Pentesting Enthusiast",
        "Python & Web Developer",
        "Instagram SMM & Digital Specialist",
        "AI Content Workflow Specialist"
      ],
      desc: "Specialized in IT/Cybersecurity (Kali Linux, Pentesting, Nmap, Burp Suite), Web & Python Development, Instagram SMM & Branding, and AI Content Workflows.",
      viewProjects: "View Projects", contactMe: "Contact Me",
      stats: [
        { num: "4", label: "Core Domains" },
        { num: "15+", label: "Security & Dev Tools" },
        { num: "100%", label: "Dedication" }
      ],
      scroll: "scroll down",
    },
    about: {
      tag: "About Me", title: "Multidisciplinary Tech &", titleGrad: "Digital Specialist",
      sub: "Driven by security, code, digital strategy, and AI-powered innovation.",
      role: "Cybersecurity • Web Dev • SMM • AI Workflows • Tashkent 🇺🇿",
      bio1: "I am a passionate tech specialist from Tashkent with expertise spanning IT & Cybersecurity, Web & Python Development, Digital SMM, and AI Content Workflows.",
      bio2: "From analyzing web vulnerabilities with Burp Suite & Nmap and automating tasks with Python scripts, to designing Instagram branding strategies and leveraging AI for marketing workflows — I deliver modern, effective solutions.",
      langTitle: "Languages", goalTitle: "Goals", styleTitle: "Work Style", interestTitle: "Domains",
      langs: [
        { name: "Uzbek", level: "Native", flag: "🇺🇿" },
        { name: "Russian", level: "Fluent", flag: "🇷🇺" },
        { name: "English", level: "Proficient", flag: "🇬🇧" }
      ],
      goals: [
        "Advanced Pentesting & Security Audit",
        "Full-stack Web & Python Applications",
        "Automated AI Marketing Systems",
        "Digital Brand Strategy & SMM Growth"
      ],
      styles: [
        "Analytical Mindset", "Security-Oriented", "Creative Marketer", "Fast Learner", "Problem Solver"
      ],
      interests: [
        { icon: "🔐", label: "Cybersecurity & Pentesting" },
        { icon: "💻", label: "Python & Web Dev" },
        { icon: "📱", label: "Instagram SMM & Branding" },
        { icon: "🤖", label: "AI Workflows & Prompting" },
        { icon: "🌐", label: "Networking & TACACS" },
        { icon: "🚀", label: "Git & GitHub Projects" }
      ],
    },
    skills: {
      tag: "My Skills & Tools", title: "Capabilities Across", titleGrad: "4 Domains",
      sub: "Comprehensive toolkit spanning Cybersecurity, Development, SMM Marketing, and AI Workflows.",
      allTech: "All Technologies & Tools", specialty: "Core Specialties",
      cats: ["Cybersecurity & Networks", "Development", "SMM & Digital", "AI & Workflows"],
    },
    projects: {
      tag: "Featured Work", title: "Projects &", titleGrad: "Reconnaissance",
      sub: "Practical implementations in Security Scanning, Web Dev, SMM Branding, and AI Workflows.",
      viewDetails: "View Details", completed: "Completed", inProgress: "Active",
    },
    experience: {
      tag: "Journey", title: "My Skill Growth", titleGrad: "Timeline",
      sub: "Continuous evolution across Cybersecurity, Programming, Digital SMM, and AI tools.",
    },
    services: {
      tag: "Services", title: "What I", titleGrad: "Offer",
      sub: "End-to-end technical, security, SMM, and AI solutions tailored for modern digital needs.",
      ctaText: "Have a project or security inquiry?", ctaHighlight: "Let's collaborate and build something great.",
      ctaBtn: "Start a Project →",
    },
    contact: {
      tag: "Contact", title: "Let's", titleGrad: "Connect",
      sub: "Interested in collaboration, web development, cybersecurity testing, or SMM strategy? Reach out today.",
      location: "Tashkent, Uzbekistan", locationSub: "Available for remote & freelance work",
      emailSub: "Reply within 24 hours", githubSub: "Explore my repositories", telegramSub: "Message me on Telegram",
      availableTitle: "Available for Work & Freelance",
      availableDesc: "Open to cybersecurity projects, web development, SMM branding, and AI workflow consulting.",
      formTitle: "Send a Message",
      name: "Name", email: "Email", subject: "Subject", message: "Message",
      namePh: "Your name", emailPh: "your@email.com", subjectPh: "Project, Security Audit, SMM...", messagePh: "Tell me about your project or inquiry...",
      send: "Send Message →", sending: "Sending...", sent: "✓ Message Sent!", error: "Failed. Try again →",
    },
    footer: {
      tagline: "Multidisciplinary Specialist in Cybersecurity, Python & Web Development, Instagram SMM, and AI Workflows.",
      navigation: "Navigation", getInTouch: "Get in Touch",
      copyright: "All rights reserved.",
      builtWith: "Built with",
    },
  },

  uz: {
    nav: {
      home: "Bosh sahifa", about: "Men haqimda", skills: "Ko'nikmalar", projects: "Loyihalar",
      experience: "Tajriba", services: "Xizmatlar", contact: "Aloqa", hire: "Ishga olish",
    },
    hero: {
      badge: "Loyiha va takliflarga ochiqman",
      greeting: "Salom, men", name: "Muhammad\nYoqubjonov",
      roles: [
        "Kiberxavfsizlik va Pentesting Ishqibozi",
        "Python va Veb Dasturchi",
        "Instagram SMM va Digital Mutaxassis",
        "AI Kontent va Workflow Mutaxassisi"
      ],
      desc: "IT/Kiberxavfsizlik (Kali Linux, Pentesting, Nmap, Burp Suite), Veb va Python dasturlash, Instagram SMM va brending hamda AI vositalari bo'yicha mutaxassis.",
      viewProjects: "Loyihalarni ko'rish", contactMe: "Bog'lanish",
      stats: [
        { num: "4", label: "Asosiy Soha" },
        { num: "15+", label: "Vositalar va Tizimlar" },
        { num: "100%", label: "Ishtiyoq va Mas'uliyat" }
      ],
      scroll: "pastga aylantiring",
    },
    about: {
      tag: "Men haqimda", title: "Kop qirrali Texnologiya va", titleGrad: "Raqamli Mutaxassis",
      sub: "Kiberxavfsizlik, kodlash, raqamli marketing va AI innovatsiyalari birlashgan joyda.",
      role: "Kiberxavfsizlik • Veb Dasturlash • SMM • AI Workflows • Toshkent 🇺🇿",
      bio1: "Men Toshkentdan bo'lgan, IT va Kiberxavfsizlik, Veb hamda Python dasturlash, Digital SMM va AI ish jarayonlari (workflow) sohalarida izlanayotgan va ishlayotgan mutaxassisman.",
      bio2: "Burp Suite & Nmap yordamida veb zaifliklarni tahlil qilish va Python skriptlari orqali jarayonlarni avtomatlashtirishdan tortib, Instagram brending strategiyalari va marketingda sun'iy intellekt vositalarini qo'llashgacha zamonaviy va samarali yechimlar yarataman.",
      langTitle: "Tillar", goalTitle: "Maqsadlar", styleTitle: "Ish uslubi", interestTitle: "Sohalar",
      langs: [
        { name: "O'zbek", level: "Ona tili", flag: "🇺🇿" },
        { name: "Rus", level: "Ravon", flag: "🇷🇺" },
        { name: "Ingliz", level: "Yaxshi darajada", flag: "🇬🇧" }
      ],
      goals: [
        "Pentesting va Xavfsizlik Auditi",
        "Python va Veb Ilovalar Yaratish",
        "AI Marketing va Kontent Avtomatizatsiyasi",
        "SMM Rivojlanish va Brending Strategiyasi"
      ],
      styles: [
        "Tahliliy Fikrlovchi", "Xavfsizlikka Yo'naltirilgan", "Ijodkor Marketer", "Tez O'rganuvchi", "Muammo Hal Qiluvchi"
      ],
      interests: [
        { icon: "🔐", label: "Kiberxavfsizlik va Pentesting" },
        { icon: "💻", label: "Python va Veb Dasturlash" },
        { icon: "📱", label: "Instagram SMM va Brending" },
        { icon: "🤖", label: "AI Workflows va Prompting" },
        { icon: "🌐", label: "Tarmoqlar va TACACS" },
        { icon: "🚀", label: "Git va GitHub Loyihalari" }
      ],
    },
    skills: {
      tag: "Ko'nikmalarim", title: "4 Yo'nalish Boyicha", titleGrad: "Vositalar va Bilimlar",
      sub: "Kiberxavfsizlik, Dasturlash, SMM Marketing va AI Workflows boyicha kompleks bilim to'plami.",
      allTech: "Barcha Texnologiyalar va Vositalar", specialty: "Asosiy Mutaxassisliklar",
      cats: ["Kiberxavfsizlik va Tarmoqlar", "Dasturlash (Dev)", "SMM va Digital", "AI va Avtomatizatsiya"],
    },
    projects: {
      tag: "Loyihalar", title: "Bajarilgan", titleGrad: "Loyihalar va Tahlillar",
      sub: "Kiberxavfsizlik skanerlash, Veb dasturlash, SMM brending va AI kontent yaratish boyicha amaliy ishlar.",
      viewDetails: "Batafsil ko'rish", completed: "Tugallangan", inProgress: "Faol",
    },
    experience: {
      tag: "Rivojlanish", title: "Mening Bilim va", titleGrad: "Tajriba Yo'lim",
      sub: "Kiberxavfsizlik, Dasturlash, Digital SMM va AI vositalari boyicha doimiy o'sish dinamikasi.",
    },
    services: {
      tag: "Xizmatlar", title: "Nima Taklif", titleGrad: "Qilaman",
      sub: "Zamonaviy raqamli ehtiyojlar uchun texnik, xavfsizlik, SMM va AI yechimlari.",
      ctaText: "Loyiha yoki xavfsizlik boyicha savolingiz bormi?", ctaHighlight: "Keling, birgalikda samarali yechim yarataylik.",
      ctaBtn: "Loyihani boshlash →",
    },
    contact: {
      tag: "Aloqa", title: "Bog'lanish va", titleGrad: "Hamkorlik",
      sub: "Loyiha yaratish, veb dasturlash, kiberxavfsizlik tekshiruvi yoki SMM brending boyicha bog'laning.",
      location: "Tashkent shahri, O'zbekiston", locationSub: "Masofaviy va frilans ish uchun tayyorman",
      emailSub: "24 soat ichida javob beraman", githubSub: "GitHub repositoriyalarim", telegramSub: "Telegram orqali xabar yuboring",
      availableTitle: "Ish va frilans uchun ochiqman",
      availableDesc: "Kiberxavfsizlik loyihalari, veb dasturlash, SMM brending va AI workflow boyicha takliflar uchun tayyorman.",
      formTitle: "Xabar yuboring",
      name: "Ism", email: "Email", subject: "Mavzu", message: "Xabar",
      namePh: "Ismingiz", emailPh: "email@gmail.com", subjectPh: "Loyiha, Xavfsizlik auditi, SMM...", messagePh: "Loyihangiz yoki savolingiz haqida yozing...",
      send: "Xabar yuborish →", sending: "Yuborilmoqda...", sent: "✓ Xabar yuborildi!", error: "Xato. Qaytadan urinib ko'ring →",
    },
    footer: {
      tagline: "Kiberxavfsizlik, Python va Veb dasturlash, Instagram SMM va AI Workflows boyicha kop qirrali mutaxassis.",
      navigation: "Navigatsiya", getInTouch: "Bog'lanish",
      copyright: "Barcha huquqlar himoyalangan.",
      builtWith: "Qurilgan",
    },
  },

  ru: {
    nav: {
      home: "Главная", about: "Обо мне", skills: "Навыки", projects: "Проекты",
      experience: "Опыт", services: "Услуги", contact: "Контакты", hire: "Нанять меня",
    },
    hero: {
      badge: "Открыт для проектов и предложений",
      greeting: "Привет, я", name: "Мухаммад\nЯкубжонов",
      roles: [
        "Энтузиаст CyberSecurity и Пентестинга",
        "Python и Web Разработчик",
        "Специалист по Instagram SMM и Брендингу",
        "Специалист по AI Контенту и Workflow"
      ],
      desc: "Специализируюсь в IT/Кибербезопасности (Kali Linux, Пентестинг, Nmap, Burp Suite), Web и Python разработке, Instagram SMM и AI Workflows.",
      viewProjects: "Смотреть проекты", contactMe: "Связаться",
      stats: [
        { num: "4", label: "Главных сферы" },
        { num: "15+", label: "Инструментов и систем" },
        { num: "100%", label: "Самоотдача" }
      ],
      scroll: "прокрутите вниз",
    },
    about: {
      tag: "Обо мне", title: "Мультидисциплинарный IT и", titleGrad: "Digital Специалист",
      sub: "На стыке кибербезопасности, программирования, цифрового маркетинга и ИИ.",
      role: "Кибербезопасность • Web Dev • SMM • AI Workflows • Ташкент 🇺🇿",
      bio1: "Я IT-специалист из Ташкента с глубоким интересом и навыками в области кибербезопасности, веб-разработки на Python и JS, Instagram SMM и автоматизации рабочих процессов с помощью ИИ.",
      bio2: "От анализа веб-уязвимостей с Burp Suite & Nmap и написания скриптов на Python до разработки стратегий продвижения в Instagram и создания сценариев контента с помощью ИИ.",
      langTitle: "Языки", goalTitle: "Цели", styleTitle: "Стиль работы", interestTitle: "Сферы",
      langs: [
        { name: "Узбекский", level: "Родной", flag: "🇺🇿" },
        { name: "Русский", level: "Свободный", flag: "🇷🇺" },
        { name: "Английский", level: "Хороший уровень", flag: "🇬🇧" }
      ],
      goals: [
        "Продвинутый Пентестинг и Аудит Безопасности",
        "Разработка Веб и Python Приложений",
        "Автоматизация Маркетинга с ИИ",
        "Стратегия SMM Продвижения и Брендинга"
      ],
      styles: [
        "Аналитический склад", "Фокус на безопасности", "Креативный маркетинг", "Быстро обучаюсь", "Решаю задачи"
      ],
      interests: [
        { icon: "🔐", label: "Кибербезопасность и Пентест" },
        { icon: "💻", label: "Python и Web Разработка" },
        { icon: "📱", label: "Instagram SMM и Брендинг" },
        { icon: "🤖", label: "ИИ Workflows и Промптинг" },
        { icon: "🌐", label: "Сети и TACACS" },
        { icon: "🚀", label: "Проекты на Git & GitHub" }
      ],
    },
    skills: {
      tag: "Мои навыки", title: "Навыки и Инструменты по", titleGrad: "4 Направлениям",
      sub: "Комплексный набор инструментов: Кибербезопасность, Разработка, SMM Маркетинг и ИИ Workflows.",
      allTech: "Все технологии и инструменты", specialty: "Специализация",
      cats: ["Кибербезопасность и Сети", "Разработка (Dev)", "SMM и Digital", "ИИ и Автоматизация"],
    },
    projects: {
      tag: "Проекты", title: "Выполненные", titleGrad: "Проекты и Аудиты",
      sub: "Практические работы по сканированию безопасности, веб-разработке, SMM брендингу и сценариям ИИ.",
      viewDetails: "Подробнее", completed: "Завершён", inProgress: "Активен",
    },
    experience: {
      tag: "Опыт", title: "Мой Путь Развития", titleGrad: "и Роста",
      sub: "Хронология развития навыков в кибербезопасности, программировании, SMM и ИИ.",
    },
    services: {
      tag: "Услуги", title: "Что Я", titleGrad: "Предлагаю",
      sub: "Комплексные технические, SMM и ИИ решения для современных цифровых задач.",
      ctaText: "Есть проект или вопрос по безопасности?", ctaHighlight: "Давайте создадим эффективное решение вместе.",
      ctaBtn: "Начать проект →",
    },
    contact: {
      tag: "Контакты", title: "Связаться и", titleGrad: "Сотрудничать",
      sub: "Обсудить проект, веб-разработку, аудит безопасности или SMM стратегию.",
      location: "Ташкент, Узбекистан", locationSub: "Доступен для удалённой работы и фриланса",
      emailSub: "Отвечу в течение 24 часов", githubSub: "Мои репозитории на GitHub", telegramSub: "Напишите мне в Telegram",
      availableTitle: "Открыт для работы и фриланса",
      availableDesc: "Готов к проектам по кибербезопасности, веб-разработке, SMM брендингу и консультациям по ИИ.",
      formTitle: "Отправить сообщение",
      name: "Имя", email: "Email", subject: "Тема", message: "Сообщение",
      namePh: "Ваше имя", emailPh: "your@email.com", subjectPh: "Проект, Аудит безопасности, SMM...", messagePh: "Расскажите о вашей задаче...",
      send: "Отправить →", sending: "Отправка...", sent: "✓ Сообщение отправлено!", error: "Ошибка. Попробуйте снова →",
    },
    footer: {
      tagline: "Специалист по Кибербезопасности, Python & Web разработке, Instagram SMM и AI Workflows.",
      navigation: "Навигация", getInTouch: "Связаться",
      copyright: "Все права защищены.",
      builtWith: "Создано с",
    },
  },
};

export default t;
