/**
 * Abubakr Olimov - Premium 3D Portfolio JavaScript
 * Multilingual Engine (TJ, RU, EN), Dual Theme (Dark/Light),
 * 3D Interactive Canvas, Tilt Effects, Portfolio Filter, Lightbox,
 * and WhatsApp Order Calculator.
 */

// ==========================================
// 1. MULTILINGUAL TRANSLATION DATA
// ==========================================
const translations = {
  tj: {
    nav_home: "Асосӣ",
    nav_about: "Дар бораи ман",
    nav_skills: "Маҳоратҳо",
    nav_portfolio: "Портфолио",
    nav_services: "Хизматрасониҳо",
    nav_pricing: "Нархнома",
    nav_contact: "Тамос",
    btn_order: "Фармоиш",

    hero_badge: "Барои лоиҳаҳо озод",
    hero_hello: "Салом, ман",
    hero_name: "Абубакр Олимов",
    hero_roles: [
      "UX/UI Дизайнери Замонавӣ",
      "Графический Дизайнери Эҷодкор",
      "Офарандаи Брендинг ва Постерҳо",
      "Мутахассиси Реклама ва Э-коммерс"
    ],
    hero_desc: "Ман тарҳҳои визуалӣ, постерҳои ҷолиб, маҳсулоти э-коммерс ва интерфейсҳои замонавии веб ва мобилиро бо сабки премиум ва 3D эҷод мекунам. Ҳар як лоиҳа бо завқи баланд ва сифати беҳтарин иҷро мешавад.",
    hero_btn_works: "Дидани корҳо",
    hero_btn_contact: "Тамос бо ман",
    hero_stat_projects: "Лоиҳаҳои тайёр",
    hero_stat_exp: "Сол таҷриба",
    hero_stat_clients: "Мизоҷони розӣ",
    hero_stat_quality: "Сифати кор",

    about_badge: "Дар бораи дизайнер",
    about_title: "Ҳадафи ман — офаридани тарҳе, ки диққатро ҷалб мекунад",
    about_lead: "Салом! Номи ман Абубакр Олимов. Ман графический ва UX/UI дизайнери касбӣ ҳастам.",
    about_p1: "Ман дар соҳаи тарроҳии визуалӣ кор мекунам ва барои брендҳо, тиҷоратҳо ва ширкатҳо постерҳои рекламавии замонавӣ, визиткаҳо, баннерҳои шабакаҳои иҷтимоӣ, баннерҳои чопӣ ва интерфейсҳои истифодабаранда (UX/UI) месозам.",
    about_p2: "Асоси кори ман — дақиқӣ, зебоӣ ва мутобиқат бо стандартҳои ҷаҳонии тарроҳии муосир мебошад. Бо истифода аз абзорҳои пешрафтаи Photoshop ва Figma ман ғояҳои шуморо ба воқеияти визуалӣ табдил медиҳам.",
    about_step1: "1. Таҳлил ва мулоқот",
    about_step1_desc: "Муайян кардани ҳадаф ва аудитория",
    about_step2: "2. Консепт ва ғоя",
    about_step2_desc: "Офаридани эскиз ва сохтори визуалӣ",
    about_step3: "3. Дизайни 3D ва Premium",
    about_step3_desc: "Тарроҳии ниҳоӣ бо ҷузъиёти баланд",
    about_step4: "4. Таҳвили лоиҳа",
    about_step4_desc: "Омодасозӣ барои чоп ва веб",

    skills_badge: "Маҳоратҳо ва Абзорҳо",
    skills_title: "Технологияҳо ва таҷрибаи кории ман",
    skills_subtitle: "Абзорҳо ва маҳоратҳое, ки ман дар эҷоди тарҳҳои беҳтарин истифода мебарам",
    skill_ps: "Adobe Photoshop & Манипулятсия",
    skill_ps_desc: "Ретуши аксҳо, сохтани сояҳо, коллажҳо, ивази рӯй ва постерҳои тиҷоратӣ.",
    skill_ui: "Figma & UX/UI Дизайн",
    skill_ui_desc: "Сохтани сохтори сайтҳо, барномаҳои мобилӣ ва таҷрибаи роҳати корбар.",
    skill_brand: "Брендинг ва Ҳувияти Визуалӣ",
    skill_brand_desc: "Визиткаҳо, логотипҳо, рангҳо ва қоидаҳои брендинг барои ширкатҳо.",
    skill_market: "Э-коммерс ва Карточкаҳои Мол",
    skill_market_desc: "Тарҳи карточкаҳо барои мағозаҳо, инфографика ва баннерҳои ҷолиб.",
    skill_print: "Полиграфия ва Чоп",
    skill_print_desc: "Брошюраҳо, флаерҳо, буклетҳо, винеткаҳо ва баннерҳои кӯчагӣ.",
    skill_3d: "3D Эффектҳо ва Мокапҳо",
    skill_3d_desc: "Пешниҳоди воқеии маҳсулот дар фазои 3D барои ҷалби максималии харидор.",

    portfolio_badge: "Галереяи Корҳо",
    portfolio_title: "Намунаи корҳо ва лоиҳаҳои ман",
    portfolio_subtitle: "Ҳамаи тасвирҳо корҳои воқеӣ мебошанд, ки метавонед дар ҳолати калон бубинед",
    filter_all: "Ҳама",
    filter_posters: "Реклама ва Постерҳо",
    filter_products: "Маҳсулот ва Э-коммерс",
    filter_branding: "Брендинг ва Визитка",
    filter_print: "Флаер ва Чоп",
    filter_retouch: "Ретуш ва Арт",
    search_placeholder: "Ҷустуҷӯи корҳо...",

    services_badge: "Хизматрасониҳо",
    services_title: "Ман чӣ хизматрасониҳоро пешниҳод мекунам?",
    services_subtitle: "Ҳалли касбии ҳамаи талаботҳои дизайнии тиҷорати шумо",
    service_1_title: "Постерҳои Рекламавӣ ва Баннерҳо",
    service_1_desc: "Тарҳрезии постерҳои баландсифат барои автомобилҳо, пойафзол, хӯрокворӣ, шабакаҳои иҷтимоӣ ва рекламаи кӯчагӣ.",
    service_2_title: "Интерфейси UX/UI (Сайт ва Барнома)",
    service_2_desc: "Тарроҳии сомонаҳои муосир, лендингҳо ва барномаҳои телефонӣ бо услуби тоза ва 3D.",
    service_3_title: "Брендинг ва Ҳуҷҷатҳои Корхона",
    service_3_desc: "Тарҳи визиткаҳои премиум, бланкаҳо, менюи ресторанҳо ва бастабандии маҳсулот.",
    service_4_title: "Ретуш ва Манипулятсияи Аксҳо",
    service_4_desc: "Иваз кардани рӯй, сохтани сояҳои воқеӣ, тоза кардани пасманзар ва эффектҳои бадеӣ.",

    calc_badge: "Нархномаи Интерактивӣ",
    calc_title: "Ҳисоби тахминии арзиши лоиҳа",
    calc_subtitle: "Хизматрасонии лозимаро интихоб кунед ва нархи пешакиро бидонед",
    calc_service_label: "Навъи лоиҳа:",
    calc_service_poster: "Постери Рекламавӣ",
    calc_service_ui: "UX/UI Дизайни Сайт",
    calc_service_brand: "Брендинг ва Визитка",
    calc_service_flyer: "Флаер / Брошюра",
    calc_service_retouch: "Ретуш / Манипулятсия",
    calc_tier_label: "Сатҳи мураккабӣ:",
    calc_tier_basic: "Базавӣ (1 рӯз)",
    calc_tier_standard: "Касбӣ (2-3 рӯз)",
    calc_tier_premium: "Премиум 3D (3-5 рӯз)",
    calc_urgency_label: "Муҳлат:",
    calc_urgency_normal: "Муқаррарӣ",
    calc_urgency_urgent: "Зудрас (Шитоб)",
    calc_total_title: "Арзиши тахминӣ:",
    calc_delivery_time: "Муҳлати тахминӣ:",
    calc_btn_whatsapp: "Фармоиш бо WhatsApp",

    contact_badge: "Бо ман тамос гиред",
    contact_title: "Биёед лоиҳаи навбатии шуморо якҷоя оғоз кунем!",
    contact_subtitle: "Барои супоридани фармоиш ё машварат метавонед мустақиман занг занед ё паём фиристед",
    contact_phone_label: "Телефон / WhatsApp",
    contact_email_label: "Почтаи электронӣ",
    contact_location_label: "Макон",
    contact_location_val: "Душанбе, Тоҷикистон",
    contact_form_title: "Паёми худро фиристед",
    contact_name_ph: "Номи шумо",
    contact_phone_ph: "Рақами телефон",
    contact_service_ph: "Кадом хизматрасонӣ лозим аст?",
    contact_msg_ph: "Дар бораи лоиҳаи худ мухтасар нависед...",
    contact_btn_send: "Фиристодани паём",
    contact_copy_alert: "Рақами телефон нусхабардорӣ шуд!",
    contact_sent_alert: "Ташаккур! Паёми шумо қабул шуд. Ман зуд бо шумо тамос мегирам.",

    quick_call: "Занг задан",
    lightbox_download: "Боргирӣ (HD)",
    lightbox_order: "Ҳаминхел фармоиш",

    footer_rights: "Ҳамаи ҳуқуқҳо ҳифз шудаанд.",
    footer_designed: "Тарроҳӣ ва рушд: Абубакр Олимов"
  },

  ru: {
    nav_home: "Главная",
    nav_about: "Обо мне",
    nav_skills: "Навыки",
    nav_portfolio: "Портфолио",
    nav_services: "Услуги",
    nav_pricing: "Калькулятор",
    nav_contact: "Контакты",
    btn_order: "Заказать",

    hero_badge: "Открыт для новых проектов",
    hero_hello: "Привет, я",
    hero_name: "Абубакр Олимов",
    hero_roles: [
      "Современный UX/UI Дизайнер",
      "Креативный Графический Дизайнер",
      "Создатель Брендинга и Постеров",
      "Специалист по Рекламе и E-Commerce"
    ],
    hero_desc: "Создаю эффектный визуальный стиль, рекламные постеры, инфографику для маркетплейсов и премиальные интерфейсы в 3D эстетике. Каждый проект делаю с максимальным качеством и вниманием к деталям.",
    hero_btn_works: "Смотреть работы",
    hero_btn_contact: "Связаться со мной",
    hero_stat_projects: "Готовых проектов",
    hero_stat_exp: "Года опыта",
    hero_stat_clients: "Довольных клиентов",
    hero_stat_quality: "Гарантия качества",

    about_badge: "О дизайнере",
    about_title: "Моя цель — создавать дизайн, который продает и восхищает",
    about_lead: "Здравствуйте! Меня зовут Абубакр Олимов. Я профессиональный графический и UX/UI дизайнер.",
    about_p1: "Я разрабатываю визуальные концепции для брендов и бизнеса: рекламные постеры для обуви и авто, карточки товаров, визитки, полиграфию, ресторанные меню и современные цифровые интерфейсы.",
    about_p2: "В работе я совмещаю глубокие знания композиции в Photoshop и проектирование пользовательского опыта в Figma. Результат — чистый, продающий и эстетичный дизайн мирового уровня.",
    about_step1: "1. Анализ и бриф",
    about_step1_desc: "Определение целей и целевой аудитории",
    about_step2: "2. Концепт и идея",
    about_step2_desc: "Разработка эскизов и визуального ритма",
    about_step3: "3. 3D и Премиум стиль",
    about_step3_desc: "Финальная детализация и спецэффекты",
    about_step4: "4. Сдача проекта",
    about_step4_desc: "Подготовка всех файлов для печати и веба",

    skills_badge: "Навыки и Инструменты",
    skills_title: "Мой стек технологий и экспертиза",
    skills_subtitle: "Инструменты, которые я использую для реализации самых смелых идей",
    skill_ps: "Adobe Photoshop и Арт-манипуляция",
    skill_ps_desc: "Профессиональная ретушь, физически корректные тени, замена лиц, постеры.",
    skill_ui: "Figma и UX/UI Проектирование",
    skill_ui_desc: "Создание адаптивных сайтов, мобильных приложений и удобных дизайн-систем.",
    skill_brand: "Брендинг и Фирменный Стиль",
    skill_brand_desc: "Визитки, логотипы, гайдлайны, корпоративные цвета для бизнеса.",
    skill_market: "Маркетплейсы и Карточки Товаров",
    skill_market_desc: "Яркие товарные баннеры, инфографика и продающие акценты.",
    skill_print: "Полиграфия и Печатная продукция",
    skill_print_desc: "Буклеты, флаеры, брошюры, виньетки и уличные баннеры.",
    skill_3d: "3D Эффекты и Мокапы",
    skill_3d_desc: "Реалистичная подача готового продукта в 3D пространстве.",

    portfolio_badge: "Галерея Работ",
    portfolio_title: "Избранные работы и проекты",
    portfolio_subtitle: "Все изображения — реальные работы из моего портфолио в высоком разрешении",
    filter_all: "Все",
    filter_posters: "Реклама и Постеры",
    filter_products: "Товары и E-Commerce",
    filter_branding: "Брендинг и Визитки",
    filter_print: "Флаеры и Печать",
    filter_retouch: "Ретушь и Арт",
    search_placeholder: "Поиск по работам...",

    services_badge: "Услуги",
    services_title: "Чем я могу помочь вашему проекту?",
    services_subtitle: "Комплексные визуальные решения под ключ",
    service_1_title: "Рекламные Постеры и Баннеры",
    service_1_desc: "Динамичные постеры для брендов, спортивной обуви, премиум автомобилей, еды и соцсетей.",
    service_2_title: "UX/UI Дизайн (Сайты и Приложения)",
    service_2_desc: "Проектирование стильных сайтов, лендингов и интерфейсов мобильных приложений в Figma.",
    service_3_title: "Фирменный Стиль и Брендинг",
    service_3_desc: "Разработка стильных визиток, корпоративной полиграфии, ресторанных меню и упаковки.",
    service_4_title: "Ретушь и Фотоманипуляция",
    service_4_desc: "Арт-коллажирование, замена лиц, реалистичные тени, удаление фона и светокоррекция.",

    calc_badge: "Интерактивный Калькулятор",
    calc_title: "Предварительный расчет стоимости",
    calc_subtitle: "Выберите параметры вашего заказа, чтобы рассчитать примерную стоимость",
    calc_service_label: "Тип проекта:",
    calc_service_poster: "Рекламный постер",
    calc_service_ui: "UX/UI дизайн сайта",
    calc_service_brand: "Брендинг и визитки",
    calc_service_flyer: "Флаер / брошюра",
    calc_service_retouch: "Ретушь / манипуляция",
    calc_tier_label: "Уровень сложности:",
    calc_tier_basic: "Базовый (1 день)",
    calc_tier_standard: "Профессиональный (2-3 дня)",
    calc_tier_premium: "Премиум 3D (3-5 дней)",
    calc_urgency_label: "Срочность:",
    calc_urgency_normal: "Обычная",
    calc_urgency_urgent: "Срочно (Экспресс)",
    calc_total_title: "Ориентировочная стоимость:",
    calc_delivery_time: "Срок выполнения:",
    calc_btn_whatsapp: "Заказать через WhatsApp",

    contact_badge: "Контакты",
    contact_title: "Давайте создадим что-то потрясающее вместе!",
    contact_subtitle: "Напишите мне или позвоните для обсуждения вашего проекта",
    contact_phone_label: "Телефон / WhatsApp",
    contact_email_label: "Email",
    contact_location_label: "Локация",
    contact_location_val: "Душанбе, Таджикистан",
    contact_form_title: "Отправить заявку",
    contact_name_ph: "Ваше имя",
    contact_phone_ph: "Номер телефона",
    contact_service_ph: "Какая услуга требуется?",
    contact_msg_ph: "Расскажите кратко о вашей задаче...",
    contact_btn_send: "Отправить сообщение",
    contact_copy_alert: "Номер телефона скопирован в буфер!",
    contact_sent_alert: "Спасибо! Ваше сообщение отправлено. Я свяжусь с вами в ближайшее время.",

    quick_call: "Позвонить",
    lightbox_download: "Скачать (HD)",
    lightbox_order: "Заказать такой же",

    footer_rights: "Все права защищены.",
    footer_designed: "Дизайн и разработка: Абубакр Олимов"
  },

  en: {
    nav_home: "Home",
    nav_about: "About Me",
    nav_skills: "Skills",
    nav_portfolio: "Portfolio",
    nav_services: "Services",
    nav_pricing: "Calculator",
    nav_contact: "Contact",
    btn_order: "Order",

    hero_badge: "Available for new projects",
    hero_hello: "Hello, I am",
    hero_name: "Abubakr Olimov",
    hero_roles: [
      "Modern UX/UI Designer",
      "Creative Graphic Designer",
      "Brand Identity & Poster Creator",
      "E-Commerce & Ads Specialist"
    ],
    hero_desc: "I craft striking visual identities, high-impact commercial posters, e-commerce graphics, and cutting-edge digital user experiences with a sleek 3D aesthetic.",
    hero_btn_works: "Explore Portfolio",
    hero_btn_contact: "Get in Touch",
    hero_stat_projects: "Projects Completed",
    hero_stat_exp: "Years Experience",
    hero_stat_clients: "Happy Clients",
    hero_stat_quality: "Quality Guaranteed",

    about_badge: "About the Designer",
    about_title: "My mission is to craft visuals that demand attention",
    about_lead: "Hello! My name is Abubakr Olimov. I am a professional Graphic and UX/UI Designer.",
    about_p1: "I specialize in visual storytelling, designing high-conversion advertising posters, luxury business cards, marketplace assets, and intuitive digital interfaces.",
    about_p2: "Combining mastery of Adobe Photoshop with strategic UX thinking in Figma, I transform business concepts into memorable, high-converting visual masterpieces.",
    about_step1: "1. Discovery & Brief",
    about_step1_desc: "Defining goals and target audience",
    about_step2: "2. Visual Concept",
    about_step2_desc: "Wireframing and creative composition",
    about_step3: "3. 3D & Premium Craft",
    about_step3_desc: "High-end detailing and rendering",
    about_step4: "4. Final Delivery",
    about_step4_desc: "Production-ready print and web assets",

    skills_badge: "Skills & Toolbox",
    skills_title: "My Core Expertise & Tools",
    skills_subtitle: "The industry-standard software and methodologies I leverage daily",
    skill_ps: "Adobe Photoshop & Art Manipulation",
    skill_ps_desc: "Advanced retouching, photorealistic lighting & shadows, compositing, ads.",
    skill_ui: "Figma & UX/UI Prototyping",
    skill_ui_desc: "Responsive web layouts, mobile app interfaces, and modern design systems.",
    skill_brand: "Brand Identity & Guidelines",
    skill_brand_desc: "Business stationery, corporate logos, color palettes, and typography.",
    skill_market: "E-Commerce & Product Showcase",
    skill_market_desc: "High-impact product cards, infographics, and retail marketing assets.",
    skill_print: "Print Production & Editorial",
    skill_print_desc: "Brochures, flyers, tri-folds, commemorative albums, and outdoor banners.",
    skill_3d: "3D Visuals & Realistic Mockups",
    skill_3d_desc: "Bringing designs into realistic 3D environments to maximize impact.",

    portfolio_badge: "Featured Portfolio",
    portfolio_title: "Selected Design Works",
    portfolio_subtitle: "Browse real case studies and creative projects in high resolution",
    filter_all: "All Works",
    filter_posters: "Advertising & Posters",
    filter_products: "Products & E-Commerce",
    filter_branding: "Branding & Stationery",
    filter_print: "Flyers & Print",
    filter_retouch: "Retouch & Art",
    search_placeholder: "Search projects...",

    services_badge: "Services",
    services_title: "What Can I Do For You?",
    services_subtitle: "Comprehensive creative design solutions for modern brands",
    service_1_title: "Advertising Posters & Banners",
    service_1_desc: "High-impact promotional graphics for automotive, sportswear, food & social media campaigns.",
    service_2_title: "UX/UI Design (Web & Mobile)",
    service_2_desc: "Clean, responsive, user-friendly websites and application interfaces built in Figma.",
    service_3_title: "Brand Identity & Print Design",
    service_3_desc: "Luxury business cards, corporate brochures, restaurant menus, and packaging.",
    service_4_title: "Photo Retouching & Manipulation",
    service_4_desc: "Face swaps, realistic shadow casting, background compositing, and surreal effects.",

    calc_badge: "Interactive Calculator",
    calc_title: "Instant Project Price Estimate",
    calc_subtitle: "Select your project parameters to get a real-time estimate",
    calc_service_label: "Project Type:",
    calc_service_poster: "Advertising Poster",
    calc_service_ui: "UX/UI Website Design",
    calc_service_brand: "Branding & Cards",
    calc_service_flyer: "Flyer / Brochure",
    calc_service_retouch: "Retouch / Art",
    calc_tier_label: "Complexity Tier:",
    calc_tier_basic: "Basic (1 Day)",
    calc_tier_standard: "Professional (2-3 Days)",
    calc_tier_premium: "Premium 3D (3-5 Days)",
    calc_urgency_label: "Urgency:",
    calc_urgency_normal: "Standard",
    calc_urgency_urgent: "Urgent Express",
    calc_total_title: "Estimated Price:",
    calc_delivery_time: "Estimated Delivery:",
    calc_btn_whatsapp: "Order via WhatsApp",

    contact_badge: "Get In Touch",
    contact_title: "Let's Create Something Extraordinary Together",
    contact_subtitle: "Feel free to reach out directly via call or message to discuss your next project",
    contact_phone_label: "Phone / WhatsApp",
    contact_email_label: "Email",
    contact_location_label: "Location",
    contact_location_val: "Dushanbe, Tajikistan",
    contact_form_title: "Send a Message",
    contact_name_ph: "Your Name",
    contact_phone_ph: "Your Phone Number",
    contact_service_ph: "What service do you need?",
    contact_msg_ph: "Tell me briefly about your project...",
    contact_btn_send: "Send Message",
    contact_copy_alert: "Phone number copied to clipboard!",
    contact_sent_alert: "Thank you! Your message has been received. I will contact you shortly.",

    quick_call: "Call Now",
    lightbox_download: "Download HD",
    lightbox_order: "Order Similar",

    footer_rights: "All rights reserved.",
    footer_designed: "Designed & Developed by Abubakr Olimov"
  }
};

// ==========================================
// 2. PORTFOLIO ITEMS DATA (Real Files)
// ==========================================
const portfolioItems = [
  {
    id: "bmw-poster",
    title: "BMW M4 G82 Coupe Poster",
    category: "posters",
    file: "POSTER M=BMW.png",
    tools: ["Photoshop", "Typography", "Automotive"],
    desc_tj: "Тарҳи постерӣ барои BMW M4 бо аксҳои чандкунҷа, tipography замонавӣ ва визуали хашмгин.",
    desc_ru: "Стильный автомобильный постер для BMW M4 G82 с многослойной композицией и динамичной типографикой.",
    desc_en: "Dynamic automotive poster for BMW M4 G82 featuring multi-angle cutouts and aggressive sports styling."
  },
  {
    id: "porsche-poster",
    title: "Porsche 911 GT3 R Poster",
    category: "posters",
    file: "вазифаи хонаги порше.png",
    tools: ["Photoshop", "Layout", "Poster Design"],
    desc_tj: "Постери эстетикии Porsche 911 GT3 R бо тақсимоти геометрӣ ва рангҳои норинҷии варзишӣ.",
    desc_ru: "Эстетичный постер Porsche 911 GT3 R с геометрической сегментацией и гоночным акцентом.",
    desc_en: "Clean poster layout for Porsche 911 GT3 R with modern geometric photo framing."
  },
  {
    id: "tefal-product",
    title: "Tefal Ultimate Power Pro 3200W",
    category: "products",
    file: "11111111111111.png",
    tools: ["Photoshop", "E-Commerce", "Marketplace"],
    desc_tj: "Карточкаи рекламавии электроника барои маркетплейсҳо бо инфографика ва хусусиятҳои мол.",
    desc_ru: "Рекламная товарная карточка для маркетплейса с инфографикой, режимами и мощностью 3200 Вт.",
    desc_en: "High-conversion marketplace product card featuring feature badges, specs, and dramatic lighting."
  },
  {
    id: "pagani-watch",
    title: "Pagani Design Luxury Watch",
    category: "products",
    file: "ВАЗИФАИ ХОНАГИ 21,08,2026,2.png",
    tools: ["Photoshop", "Commercial", "Lighting"],
    desc_tj: "Постери тиҷоратии соати люксӣ рӯи санги мармар бо равшании касбӣ ва сояҳои дақиқ.",
    desc_ru: "Рекламный постер премиальных часов Pagani Design на текстурном мраморе с кинематографичным светом.",
    desc_en: "Commercial watch advertisement placed on dark granite rock with dramatic directional lighting."
  },
  {
    id: "airdots-pro",
    title: "AirDots PRO Wireless Showcase",
    category: "products",
    file: "ВАЗИФАИ ХОНАГИ 21,08,2026.png",
    tools: ["Photoshop", "3D Lighting", "Tech Ads"],
    desc_tj: "Тарҳи футуристии наушникҳои бесим бо равшании неонӣ ва маълумоти батарея.",
    desc_ru: "Футуристичный рекламный постер беспроводных наушников с неоновой подсветкой и характеристиками.",
    desc_en: "Futuristic wireless earbuds promo poster with neon glow and battery life breakdown."
  },
  {
    id: "airpods-max",
    title: "Apple AirPods Max Sound Studio",
    category: "products",
    file: "ВАЗИФАИ ХОНАГИ 27,08,2026,1.png",
    tools: ["Photoshop", "Apple Style", "Minimalism"],
    desc_tj: "Тарҳи постерӣ дар услуби Apple барои AirPods Max бо мусиқии Taylor Swift ва нишонаҳои сифат.",
    desc_ru: "Рекламный арт в стиле Apple для наушников AirPods Max с элементами аудиоплеера и иконками.",
    desc_en: "Apple-inspired AirPods Max showcase with integrated music widget and technical highlights."
  },
  {
    id: "urbanista-headphones",
    title: "Urbanista Wireless Audio Poster",
    category: "posters",
    file: "ВАЗИФАИ ХОНАГИ 21,08,2026,1.png",
    tools: ["Photoshop", "Minimal", "Typography"],
    desc_tj: "Постери минималистии аудио бо услуби зебои тиҷоратӣ ва матни ороишӣ.",
    desc_ru: "Минималистичный рекламный постер наушников Urbanista с элегантной фоновой типографикой.",
    desc_en: "Urbanista audio advertisement combining outlined typography and bold product focus."
  },
  {
    id: "nike-shoes-1",
    title: "Nike Shoes 'Қадаматро бо эътимод бардор'",
    category: "posters",
    file: "EXM BANNER 2.png",
    tools: ["Photoshop", "Banner", "Tajik Copy"],
    desc_tj: "Баннери рекламавии пойафзоли варзишии Nike бо забони тоҷикӣ ва нишони тахфифи 25%.",
    desc_ru: "Продающий рекламный баннер спортивной обуви Nike на таджикском языке со скидкой 25%.",
    desc_en: "Commercial banner for Nike sport sneakers featuring local Tajik copywriting and a 25% discount badge."
  },
  {
    id: "nike-shoes-2",
    title: "Nike 'Пойафзоли Варзишӣ' Promo",
    category: "posters",
    file: "EXM BANEER SPORT SHOES.png",
    tools: ["Photoshop", "Ad Banner", "Call to Action"],
    desc_tj: "Баннери касбии мағозаи пойафзол бо тугмаи харид ва тамосҳои мустақим.",
    desc_ru: "Промо-баннер для спортивного магазина с кнопкой покупки и прямыми контактами.",
    desc_en: "Clean sport footwear banner with call-to-action button and contact info."
  },
  {
    id: "nike-shoes-pink",
    title: "Nike 'Услуби Ту Интихоби Ту'",
    category: "posters",
    file: "Exm общий.png",
    tools: ["Photoshop", "Fashion Ads", "Grunge Splash"],
    desc_tj: "Баннери мӯд барои кроссовкаҳои гулобии Nike бо эффекти ранги лаппида ва контрасти баланд.",
    desc_ru: "Фэшн-баннер для розовых кроссовок Nike с гранжевыми брызгами и контрастной подачей.",
    desc_en: "Trendy fashion sneaker advertisement with paint splash textures and bold typography."
  },
  {
    id: "lebron-poster",
    title: "LeBron James 'Just Do It' Dynamic Poster",
    category: "posters",
    file: "БУРГЕР.png",
    tools: ["Photoshop", "Sports Poster", "Typography"],
    desc_tj: "Постери динамикии варзишӣ бо тасвири Леброн Ҷеймс ва шиори шинохтаи Nike.",
    desc_ru: "Динамичный спортивный арт-постер с Леброном Джеймсом и культовым лозунгом Just Do It.",
    desc_en: "High-energy athletic poster featuring LeBron James soaring with integrated layered text."
  },
  {
    id: "nike-air-force-1",
    title: "Nike Air Force 1 'Classic Vibes'",
    category: "posters",
    file: "EXTR.png",
    tools: ["Photoshop", "Streetwear", "Creative"],
    desc_tj: "Постери эҷодкоронаи кроссовка бо унсурҳои кашидашуда ва матнҳои streetwear.",
    desc_ru: "Креативный стритвир-постер для классических Air Force 1 с нарисованными акцентами.",
    desc_en: "Streetwear creative concept poster for Nike Air Force 1 with playful graphic brush elements."
  },
  {
    id: "nike-air-denim",
    title: "Nike Air Force Limited Denim",
    category: "posters",
    file: "EXTG.png",
    tools: ["Photoshop", "Cutout", "Editorial"],
    desc_tj: "Постери мӯд бо маскаи буриши ҳарфҳои бузурги NIKE аз паси кроссовка.",
    desc_ru: "Эдиториал постер джинсовых кроссовок Nike с интеграцией обуви в огромный типографический логотип.",
    desc_en: "Editorial sneaker showcase featuring shoe woven through massive typography block lettering."
  },
  {
    id: "business-card-abubakr",
    title: "Olimov Abubakr Business Identity",
    category: "branding",
    file: "1122.png",
    tools: ["Photoshop", "Corporate", "Identity"],
    desc_tj: "Визиткаи шахсии Абубакр Олимов бо рангҳои сиёҳ ва тиллоӣ ва тамосҳои дақиқ.",
    desc_ru: "Фирменная визитка Абубакра Олимова в глубоком антрацитовом цвете с золотыми акцентами.",
    desc_en: "Personal identity business card for Abubakr Olimov crafted in obsidian black and warm amber."
  },
  {
    id: "card-logo-back",
    title: "Corporate Identity Card Geometric Back",
    category: "branding",
    file: "1122.1.png",
    tools: ["Photoshop", "Geometric", "Branding"],
    desc_tj: "Қисми қафои визитка бо логотипи геометрӣ ва хатҳои динамикӣ.",
    desc_ru: "Оборотная сторона корпоративной визитки с геометрическим логотипом и шевроном.",
    desc_en: "Reverse business card layout with minimalist geometric concentric circles and arrow geometry."
  },
  {
    id: "nurjahan-menu",
    title: "Nurjahan Hotel & Restaurant Visual Menu",
    category: "branding",
    file: "эгзамин 1.png",
    tools: ["Photoshop", "Food Design", "Menu"],
    desc_tj: "Тарҳи муқоваи меню ва брендинги тарабхонаи миллии Nurjahan бо акси оши палов.",
    desc_ru: "Дизайн обложки меню и презентации для ресторана Nurjahan с аппетитной фуд-съемкой плова.",
    desc_en: "Restaurant menu cover concept for Nurjahan Hotel & Restaurant with appetizing pilaf photography."
  },
  {
    id: "nurjahan-card",
    title: "Nurjahan VIP Brand Card",
    category: "branding",
    file: "эгзамини 2.png",
    tools: ["Photoshop", "Hospitality", "Print"],
    desc_tj: "Визиткаи расмии роҳбари тарабхона бо нақши тиллоӣ ва тафсилоти макон.",
    desc_ru: "Визитная карточка руководства отеля-ресторана с золотым брендингом и контактными данными.",
    desc_en: "Executive business card design for restaurant ownership with signature calligraphy accents."
  },
  {
    id: "ramen-menu",
    title: "Special Ramen Japanese Menu Poster",
    category: "branding",
    file: "ВАЗИФАИ ХОНАГИ 27,08,2026,2.png",
    tools: ["Photoshop", "Japanese Style", "Menu"],
    desc_tj: "Постери менюи таомҳои ҷопонӣ бо нақши мавҷҳо ва таомҳои Shoyu ва Miso Ramen.",
    desc_ru: "Японское ресторанное меню с традиционным фоновым орнаментом сэйгайха и раменом.",
    desc_en: "Japanese specialty ramen menu poster showcasing Shoyu & Miso ramen over traditional seigaiha pattern."
  },
  {
    id: "albert-rega-set",
    title: "Creative Designer Business Card Set",
    category: "branding",
    file: "вазифаи хонаги визитка.png",
    tools: ["Photoshop", "Mockup", "Identity"],
    desc_tj: "Маҷмӯи тарҳрезии визиткаҳо бо мокапи сояҳо ва QR-код.",
    desc_ru: "Комплект макетов креативных визиток со стилизацией QR-кода и мягкими тенями.",
    desc_en: "Creative business card collection featuring QR code integration and clean corporate layout."
  },
  {
    id: "city-flyer",
    title: "Corporate Skyline Roll-up Banner",
    category: "print",
    file: "ВАЗИФАИ ХОНАГИ ФЛАЕР.png",
    tools: ["Photoshop", "Roll-up", "Architecture"],
    desc_tj: "Баннери калони амудӣ барои ширкатҳои сохтмонӣ ва тиҷоратӣ бо акси Ню-Йорк.",
    desc_ru: "Вертикальный ролл-ап баннер для корпоративных клиентов с фотографиями урбанистических небоскребов.",
    desc_en: "Tall vertical roll-up banner featuring dynamic geometric frames and modern urban skyline."
  },
  {
    id: "tri-fold-flyer",
    title: "Corporate Principles Tri-Fold Flyer",
    category: "print",
    file: "FLAYER VAZIFAI XONAGI 14.08.2026.png",
    tools: ["Photoshop", "Flyer", "Print Design"],
    desc_tj: "Флаери иттилоотӣ барои презентатсияи ширкат ва хизматрасониҳо.",
    desc_ru: "Презентационный трехстворчатый флаер с блоками преимуществ и корпоративной эстетикой.",
    desc_en: "Corporate tri-fold brochure layout highlighting business advisory services and team credentials."
  },
  {
    id: "ulta-store-banner",
    title: "Ulta Beauty Outdoor Store Banner Mockup",
    category: "print",
    file: "Сохтани Банер кори синфи 28,08,2026.png",
    tools: ["Photoshop", "Outdoor Ad", "Perspective"],
    desc_tj: "Ҷойгиркунии баннери рекламавӣ дар фасад ва пешайвони бино бо дурнамои дақиқ.",
    desc_ru: "Интеграция рекламного баннера в реальный фасад торгового центра с перспективой и тенями.",
    desc_en: "Outdoor storefront banner mockup showing accurate perspective distortion and architectural lighting."
  },
  {
    id: "vignette-album",
    title: "Premium Photo Vignette & Album",
    category: "print",
    file: "VINETKA.png",
    tools: ["Photoshop", "Editorial", "Graduation"],
    desc_tj: "Тарҳи албоми хотиравӣ ва винетка барои мактабҳо ва донишгоҳҳо бо ороиши визуалӣ.",
    desc_ru: "Дизайн памятной виньетки и фотокниги для выпускников с художественным оформлением.",
    desc_en: "Commemorative graduation photo album and vignette spread design."
  },
  {
    id: "wine-shadow",
    title: "Realistic Glass & Wine Shadow Casting",
    category: "retouch",
    file: "БАКАЛ СОЯ ДОДАН.png",
    tools: ["Photoshop", "Photorealism", "Shadows"],
    desc_tj: "Эҷоди сояи воқеии қадаҳи шишагӣ ва шароб бо гузариши нури шаффоф.",
    desc_ru: "Ювелирная отрисовка реалистичной каустики и тени от стеклянного бокала с вином.",
    desc_en: "Precision Photoshop lighting study: generating realistic transparent liquid and glass shadow caustics."
  },
  {
    id: "torn-paper-city",
    title: "Torn Paper Sunset City Metamorphosis",
    category: "retouch",
    file: "ЕФЕКТИ ДРИДАГИ. 1,2.png",
    tools: ["Photoshop", "Photo Manipulation", "Art"],
    desc_tj: "Манипулятсияи коғази дарида: гузариш аз кӯчаи сиёҳу сафед ба ғуруби офтоби осмонбӯсҳо.",
    desc_ru: "Творческая фотоманипуляция: эффект разорванной бумаги, соединяющий ч/б трафик и алый закат.",
    desc_en: "Surreal torn paper composite bridging monochrome city traffic and glowing sunset skies."
  },
  {
    id: "face-swap",
    title: "Professional Portrait Face Swap & Retouch",
    category: "retouch",
    file: "руй алиш кардан.png",
    tools: ["Photoshop", "Face Swap", "Skin Retouch"],
    desc_tj: "Ивази касбии рӯй дар либоси расмӣ бо нигоҳ доштани сохтори пӯст ва равшанӣ.",
    desc_ru: "Профессиональная бесшовная замена лица с точным сопоставлением скинтона, освещения и пропорций.",
    desc_en: "Professional seamless portrait face-swap and color-temperature skin tone balancing."
  }
];

// Current State
let currentLang = localStorage.getItem("abubakr_portfolio_lang") || "tj";
let currentTheme = localStorage.getItem("abubakr_portfolio_theme") || "dark";
let activeFilter = "all";
let searchQuery = "";
let currentLightboxIndex = 0;

// ==========================================
// 3. INITIALIZATION & DOM READY
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
  initCanvas3D();
  initTypingEffect();
  initPortfolio();
  initCalculator();
  initContactForm();
  initScrollSpy();
  initTiltCards();
  initMobileMenu();
});

// ==========================================
// 4. THEME CONTROLLER
// ==========================================
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  if (!themeToggleBtn) return;

  applyTheme(currentTheme);

  themeToggleBtn.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(currentTheme);
    localStorage.setItem("abubakr_portfolio_theme", currentTheme);
  });
}

function applyTheme(theme) {
  const themeIcon = document.getElementById("theme-icon");
  if (theme === "light") {
    document.body.classList.add("light-theme");
    if (themeIcon) themeIcon.className = "fas fa-moon";
  } else {
    document.body.classList.remove("light-theme");
    if (themeIcon) themeIcon.className = "fas fa-sun";
  }
}

// ==========================================
// 5. LANGUAGE CONTROLLER
// ==========================================
function initLanguage() {
  const langBtns = document.querySelectorAll(".lang-btn");
  langBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.getAttribute("data-lang");
      if (selected && translations[selected]) {
        currentLang = selected;
        localStorage.setItem("abubakr_portfolio_lang", currentLang);
        applyLanguage(currentLang);
        renderPortfolioGrid();
      }
    });
  });

  applyLanguage(currentLang);
}

function applyLanguage(lang) {
  const t = translations[lang] || translations.tj;

  // Update active state on language buttons
  document.querySelectorAll(".lang-btn").forEach(btn => {
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Update all elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // Update placeholders
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const key = el.getAttribute("data-i18n-ph");
    if (t[key]) {
      el.setAttribute("placeholder", t[key]);
    }
  });

  // Restart typing effect with new language roles
  startTypingEffect(t.hero_roles);

  // Recalculate calculator preview labels
  updateCalculator();
}

// ==========================================
// 6. DYNAMIC TYPING EFFECT
// ==========================================
let typingTimeout = null;
let roleIdx = 0;
let charIdx = 0;
let isDeleting = false;

function initTypingEffect() {
  const t = translations[currentLang] || translations.tj;
  startTypingEffect(t.hero_roles);
}

function startTypingEffect(roles) {
  if (typingTimeout) clearTimeout(typingTimeout);
  const target = document.getElementById("typing-text");
  if (!target || !roles || !roles.length) return;

  roleIdx = 0;
  charIdx = 0;
  isDeleting = false;

  function type() {
    const currentText = roles[roleIdx % roles.length];
    if (isDeleting) {
      target.textContent = currentText.substring(0, charIdx - 1);
      charIdx--;
    } else {
      target.textContent = currentText.substring(0, charIdx + 1);
      charIdx++;
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIdx === currentText.length) {
      speed = 2200; // Pause when full text is visible
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx++;
      speed = 400; // Pause before typing next word
    }

    typingTimeout = setTimeout(type, speed);
  }

  type();
}

// ==========================================
// 7. 3D BACKGROUND CANVAS ENGINE
// ==========================================
function initCanvas3D() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  let mouseX = width / 2;
  let mouseY = height / 2;

  window.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // 3D Nodes System (Spheres & Connected Nodes)
  const nodeCount = 45;
  const nodes = [];

  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: (Math.random() - 0.5) * 1600,
      y: (Math.random() - 0.5) * 1200,
      z: Math.random() * 800 + 100,
      radius: Math.random() * 2.5 + 1.2,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      color: i % 3 === 0 ? "rgba(245, 158, 11," : i % 3 === 1 ? "rgba(99, 102, 241," : "rgba(6, 182, 212,"
    });
  }

  const fov = 400;

  function render() {
    ctx.clearRect(0, 0, width, height);

    const targetRotY = (mouseX - width / 2) * 0.0003;
    const targetRotX = (mouseY - height / 2) * 0.0003;

    // Sort nodes by Z for realistic depth
    nodes.sort((a, b) => b.z - a.z);

    const projected = [];

    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      n.x += n.vx;
      n.y += n.vy;

      // Wrap boundaries
      if (n.x < -800) n.x = 800;
      if (n.x > 800) n.x = -800;
      if (n.y < -600) n.y = 600;
      if (n.y > 600) n.y = -600;

      // Rotate coordinates
      const cosY = Math.cos(targetRotY);
      const sinY = Math.sin(targetRotY);
      const cosX = Math.cos(targetRotX);
      const sinX = Math.sin(targetRotX);

      const x1 = n.x * cosY - n.z * sinY;
      const z1 = n.z * cosY + n.x * sinY;

      const y2 = n.y * cosX - z1 * sinX;
      const z2 = z1 * cosX + n.y * sinX;

      const scale = fov / (fov + z2);
      const projX = width / 2 + x1 * scale;
      const projY = height / 2 + y2 * scale;
      const alpha = Math.min(1, Math.max(0.1, (1 - z2 / 1200) * 0.6));

      projected.push({ x: projX, y: projY, alpha, scale, color: n.color });

      // Draw glowing particle
      ctx.beginPath();
      ctx.arc(projX, projY, Math.max(0.5, n.radius * scale), 0, Math.PI * 2);
      ctx.fillStyle = `${n.color} ${alpha})`;
      ctx.fill();
    }

    // Draw connection lines
    for (let i = 0; i < projected.length; i++) {
      for (let j = i + 1; j < projected.length; j++) {
        const p1 = projected[i];
        const p2 = projected[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          const lineAlpha = (1 - dist / 130) * Math.min(p1.alpha, p2.alpha) * 0.35;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(245, 158, 11, ${lineAlpha})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

// ==========================================
// 8. 3D CARD TILT INTERACTION
// ==========================================
function initTiltCards() {
  const tiltElements = document.querySelectorAll(".hero-3d-card, .work-card, .skill-card, .service-card");

  tiltElements.forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
    });
  });
}

// ==========================================
// 9. PORTFOLIO GALLERY & FILTERING
// ==========================================
function initPortfolio() {
  // Filter tabs click
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.getAttribute("data-filter");
      renderPortfolioGrid();
    });
  });

  // Search input
  const searchInput = document.getElementById("portfolio-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", e => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderPortfolioGrid();
    });
  }

  // Lightbox handlers
  initLightbox();

  renderPortfolioGrid();
}

function renderPortfolioGrid() {
  const grid = document.getElementById("works-grid");
  if (!grid) return;

  const t = translations[currentLang] || translations.tj;

  const filtered = portfolioItems.filter(item => {
    const matchCategory = activeFilter === "all" || item.category === activeFilter;
    const desc = item[`desc_${currentLang}`] || item.desc_tj;
    const matchSearch =
      !searchQuery ||
      item.title.toLowerCase().includes(searchQuery) ||
      desc.toLowerCase().includes(searchQuery) ||
      item.tools.some(tool => tool.toLowerCase().includes(searchQuery));
    return matchCategory && matchSearch;
  });

  // Update counts on filter buttons
  document.querySelectorAll(".filter-btn").forEach(btn => {
    const cat = btn.getAttribute("data-filter");
    const countBadge = btn.querySelector(".filter-count");
    if (countBadge) {
      if (cat === "all") {
        countBadge.textContent = portfolioItems.length;
      } else {
        const c = portfolioItems.filter(i => i.category === cat).length;
        countBadge.textContent = c;
      }
    }
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <i class="fas fa-search" style="font-size: 2.5rem; color: var(--accent-amber); margin-bottom: 1rem; opacity: 0.5;"></i>
        <h4 style="font-size: 1.25rem;">${currentLang === "tj" ? "Ҳеҷ чиз ёфт нашуд" : currentLang === "ru" ? "Ничего не найдено" : "No projects found"}</h4>
        <p style="margin-top: 0.5rem; font-size: 0.95rem;">${currentLang === "tj" ? "Калимаи дигарро санҷед ё филтрро иваз кунед." : currentLang === "ru" ? "Попробуйте изменить запрос или сбросить фильтр." : "Try clearing search or choosing another filter."}</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered
    .map((item, idx) => {
      const desc = item[`desc_${currentLang}`] || item.desc_tj;
      const categoryLabel =
        item.category === "posters" ? t.filter_posters :
        item.category === "products" ? t.filter_products :
        item.category === "branding" ? t.filter_branding :
        item.category === "print" ? t.filter_print : t.filter_retouch;

      return `
      <article class="work-card" data-id="${item.id}" onclick="openLightboxById('${item.id}')">
        <div class="work-card-thumb">
          <span class="work-badge-tag">${categoryLabel}</span>
          <img src="./${encodeURIComponent(item.file)}" alt="${item.title}" class="work-card-img" loading="lazy" />
          <div class="work-overlay-actions">
            <button class="work-action-btn" title="View Fullscreen" onclick="event.stopPropagation(); openLightboxById('${item.id}')">
              <i class="fas fa-expand"></i>
            </button>
            <a href="./${encodeURIComponent(item.file)}" download class="work-action-btn" title="Download" onclick="event.stopPropagation();">
              <i class="fas fa-download"></i>
            </a>
          </div>
        </div>
        <div class="work-card-body">
          <h3 class="work-card-title">${item.title}</h3>
          <p class="work-card-desc">${desc}</p>
          <div class="work-card-footer">
            <div class="work-card-tools">
              ${item.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join("")}
            </div>
            <i class="fas fa-arrow-right" style="color: var(--accent-amber);"></i>
          </div>
        </div>
      </article>
    `;
    })
    .join("");

  // Re-attach tilt effect on newly created cards
  initTiltCards();
}

// ==========================================
// 10. LIGHTBOX / FULLSCREEN MODAL
// ==========================================
function initLightbox() {
  const modal = document.getElementById("lightbox-modal");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");

  if (!modal) return;

  closeBtn?.addEventListener("click", closeLightbox);
  prevBtn?.addEventListener("click", prevLightbox);
  nextBtn?.addEventListener("click", nextLightbox);

  // Close on backdrop click
  modal.addEventListener("click", e => {
    if (e.target === modal) closeLightbox();
  });

  // Keyboard navigation
  window.addEventListener("keydown", e => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") prevLightbox();
    if (e.key === "ArrowRight") nextLightbox();
  });

  // Mobile Touch Swipe Gesture for Lightbox
  let touchStartX = 0;
  let touchStartY = 0;

  modal.addEventListener("touchstart", e => {
    if (e.touches && e.touches.length > 0) {
      touchStartX = e.touches[0].screenX;
      touchStartY = e.touches[0].screenY;
    }
  }, { passive: true });

  modal.addEventListener("touchend", e => {
    if (e.changedTouches && e.changedTouches.length > 0) {
      const diffX = e.changedTouches[0].screenX - touchStartX;
      const diffY = e.changedTouches[0].screenY - touchStartY;
      // If horizontal swipe is prominent (> 45px and more horizontal than vertical)
      if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) {
          nextLightbox();
        } else {
          prevLightbox();
        }
      }
    }
  }, { passive: true });
}

function openLightboxById(id) {
  const idx = portfolioItems.findIndex(i => i.id === id);
  if (idx !== -1) {
    currentLightboxIndex = idx;
    updateLightboxContent();
    const modal = document.getElementById("lightbox-modal");
    modal?.classList.add("active");
    document.body.classList.add("lightbox-open");
    document.body.style.overflow = "hidden";
  }
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  modal?.classList.remove("active");
  document.body.classList.remove("lightbox-open");
  document.body.style.overflow = "";
}

function prevLightbox() {
  currentLightboxIndex = (currentLightboxIndex - 1 + portfolioItems.length) % portfolioItems.length;
  updateLightboxContent();
}

function nextLightbox() {
  currentLightboxIndex = (currentLightboxIndex + 1) % portfolioItems.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const item = portfolioItems[currentLightboxIndex];
  if (!item) return;

  const t = translations[currentLang] || translations.tj;
  const desc = item[`desc_${currentLang}`] || item.desc_tj;

  const img = document.getElementById("lightbox-img");
  const title = document.getElementById("lightbox-title");
  const category = document.getElementById("lightbox-category");
  const descEl = document.getElementById("lightbox-desc");
  const toolsEl = document.getElementById("lightbox-tools");
  const downloadLink = document.getElementById("lightbox-download");

  if (img) img.src = `./${encodeURIComponent(item.file)}`;
  if (title) title.textContent = item.title;
  if (category) category.textContent = item.category.toUpperCase();
  if (descEl) descEl.textContent = desc;
  if (downloadLink) downloadLink.href = `./${encodeURIComponent(item.file)}`;

  if (toolsEl) {
    toolsEl.innerHTML = item.tools.map(tool => `<span class="tool-tag" style="padding: 4px 10px;">${tool}</span>`).join("");
  }
}

// ==========================================
// 11. PRICE CALCULATOR & WHATSAPP GENERATOR
// ==========================================
let calcState = {
  service: "poster",
  tier: "standard",
  urgency: "normal"
};

const priceMatrix = {
  poster: { basic: 150, standard: 300, premium: 550 },
  ui: { basic: 400, standard: 850, premium: 1600 },
  brand: { basic: 200, standard: 450, premium: 850 },
  flyer: { basic: 180, standard: 350, premium: 600 },
  retouch: { basic: 120, standard: 250, premium: 450 }
};

const deliveryMatrix = {
  basic: { normal: "1-2 рӯз / дня", urgent: "24 соат / часа" },
  standard: { normal: "2-4 рӯз / дня", urgent: "1-2 рӯз / дня" },
  premium: { normal: "4-7 рӯз / дней", urgent: "2-3 рӯз / дня" }
};

function initCalculator() {
  const calcPills = document.querySelectorAll(".calc-pill");
  calcPills.forEach(pill => {
    pill.addEventListener("click", () => {
      const type = pill.getAttribute("data-calc-type");
      const val = pill.getAttribute("data-calc-val");
      if (type && val) {
        calcState[type] = val;
        // Update active class in this group
        document.querySelectorAll(`[data-calc-type="${type}"]`).forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        updateCalculator();
      }
    });
  });

  const whatsappBtn = document.getElementById("calc-whatsapp-btn");
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", () => {
      const price = calculateTotal();
      const t = translations[currentLang] || translations.tj;
      const serviceName = t[`calc_service_${calcState.service}`] || calcState.service;
      const tierName = t[`calc_tier_${calcState.tier}`] || calcState.tier;

      let msg = "";
      if (currentLang === "tj") {
        msg = `Салом Абубакр! Ман аз сомонаи портфолиои шумо менависам. Мехоҳам фармоиш диҳам:\n\n• Навъи лоиҳа: ${serviceName}\n• Сатҳ: ${tierName}\n• Муҳлат: ${calcState.urgency === "urgent" ? "Зудрас" : "Муқаррарӣ"}\n• Арзиши тахминӣ: ~${price} Сомонӣ (TJS)\n\nИлтимос тафсилотро муҳокима кунем.`;
      } else if (currentLang === "ru") {
        msg = `Здравствуйте, Абубакр! Пишу с вашего сайта-портфолио. Хочу сделать заказ:\n\n• Тип проекта: ${serviceName}\n• Уровень: ${tierName}\n• Срочность: ${calcState.urgency === "urgent" ? "Срочно" : "Обычная"}\n• Примерная стоимость: ~${price} TJS\n\nДавайте обсудим детали!`;
      } else {
        msg = `Hello Abubakr! I am reaching out from your portfolio website. I would like to order:\n\n• Project: ${serviceName}\n• Tier: ${tierName}\n• Urgency: ${calcState.urgency}\n• Estimated Total: ~${price} TJS\n\nLooking forward to discussing details.`;
      }

      const encoded = encodeURIComponent(msg);
      window.open(`https://wa.me/992936010601?text=${encoded}`, "_blank");
    });
  }

  updateCalculator();
}

function calculateTotal() {
  const base = priceMatrix[calcState.service]?.[calcState.tier] || 250;
  const urgencyMultiplier = calcState.urgency === "urgent" ? 1.4 : 1.0;
  return Math.round(base * urgencyMultiplier);
}

function updateCalculator() {
  const amountEl = document.getElementById("calc-total-amount");
  const timeEl = document.getElementById("calc-delivery-time-val");
  const itemServiceEl = document.getElementById("calc-summary-service");
  const itemTierEl = document.getElementById("calc-summary-tier");

  const total = calculateTotal();
  const t = translations[currentLang] || translations.tj;

  if (amountEl) amountEl.textContent = total;
  if (timeEl) {
    const timeText = deliveryMatrix[calcState.tier]?.[calcState.urgency] || "2-3 рӯз";
    timeEl.textContent = timeText;
  }

  if (itemServiceEl) itemServiceEl.textContent = t[`calc_service_${calcState.service}`] || calcState.service;
  if (itemTierEl) itemTierEl.textContent = t[`calc_tier_${calcState.tier}`] || calcState.tier;
}

// ==========================================
// 12. CONTACT FORM & CLIPBOARD ACTIONS
// ==========================================
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const t = translations[currentLang] || translations.tj;

      const name = document.getElementById("form-name")?.value || "";
      const phone = document.getElementById("form-phone")?.value || "";
      const msg = document.getElementById("form-message")?.value || "";

      // Send to WhatsApp directly
      const waMsg = encodeURIComponent(`Паём аз сайти портфолио:\nНом: ${name}\nТелефон: ${phone}\nПаём: ${msg}`);
      window.open(`https://wa.me/992936010601?text=${waMsg}`, "_blank");

      showToast(t.contact_sent_alert);
      form.reset();
    });
  }

  // Copy Phone Number Button
  const copyBtn = document.getElementById("copy-phone-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText("+992936010601").then(() => {
        const t = translations[currentLang] || translations.tj;
        showToast(t.contact_copy_alert);
      });
    });
  }
}

function showToast(message) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fas fa-check-circle" style="color: var(--accent-amber); font-size: 1.15rem;"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.35s ease";
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// ==========================================
// 13. SCROLL SPY & HEADER SHADOW
// ==========================================
function initScrollSpy() {
  const header = document.querySelector(".header");
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-item a");

  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;

    if (scrollY > 50) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
}

// ==========================================
// 14. MOBILE NAVIGATION DRAWER & QUICK CONTROLS
// ==========================================
function initMobileMenu() {
  const toggle = document.getElementById("mobile-toggle");
  const navLinks = document.getElementById("nav-links");
  const backdrop = document.getElementById("nav-backdrop");
  const backToTop = document.getElementById("mobile-back-to-top");

  if (toggle && navLinks) {
    const toggleMenu = (open) => {
      const shouldOpen = open !== undefined ? open : !navLinks.classList.contains("active");
      navLinks.classList.toggle("active", shouldOpen);
      if (backdrop) backdrop.classList.toggle("active", shouldOpen);
      document.body.classList.toggle("nav-open", shouldOpen);
      const icon = toggle.querySelector("i");
      if (icon) {
        icon.className = shouldOpen ? "fas fa-times" : "fas fa-bars";
      }
    };

    toggle.addEventListener("click", () => toggleMenu());

    if (backdrop) {
      backdrop.addEventListener("click", () => toggleMenu(false));
    }

    // Close when clicking any nav link
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => toggleMenu(false));
    });
  }

  // Floating Back-to-Top Button on Mobile
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}
