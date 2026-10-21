import './style.css';
import { categories, menu } from './menu.js';

const PHONE = '+212535401961';
const INSTAGRAM = 'https://www.instagram.com/cafe_veranda_restaurant/';
const MAP = 'https://www.google.com/maps?cid=13514422603543729394';
const MAP_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5193266428923!2d-5.533383499999999!3d33.8762766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda04513a93a0b41:0xbb8cdfc164bbd4f2!2sCaf%C3%A9%20veranda!5e0!3m2!1sfr!2sma!4v1775561032220!5m2!1sfr!2sma';
const ADDRESS = 'Villa 21, Lotissement Al Mountazah, Zahwa';
const asset = (name) => `${import.meta.env.BASE_URL}images/${name}`;
const supported = ['fr', 'en', 'ar'];
let language = supported.includes(localStorage.getItem('veranda-language')) ? localStorage.getItem('veranda-language') : 'fr';
let activeCategory = categories[0].id;
let headerObserver;

const copy = {
  fr: {
    title: 'Café Veranda | Café restaurant à Meknès', description: 'Découvrez le menu et les prix de Café Veranda à Meknès, puis contactez-nous pour votre prochaine visite.',
    skip: 'Aller au contenu', homeAria: 'Café Veranda, accueil', navAria: 'Navigation principale', mobileNavAria: 'Navigation mobile', language: 'Langue du site',
    navHome: 'La maison', navMenu: 'Le menu', navWorld: 'L’univers', navVisit: 'Nous trouver', callBook: 'Appeler pour réserver', openNav: 'Ouvrir le menu', closeNav: 'Fermer le menu',
    heroPlace: 'Café restaurant à Meknès', hero1: 'Les beaux moments', hero2a: 'se', hero2b: 'partagent', hero2c: 'à table.',
    heroBody: 'Un café le matin, un déjeuner qui s’étire, un dîner à retrouver. Bienvenue chez Veranda.', heroMenu: 'Voir le menu', heroVisit: 'Nous rendre visite', scroll: 'Défiler pour découvrir',
    aboutLabel: 'À propos de Veranda', about1: 'Un lieu pour', about2: 'chaque envie.', aboutBody1: 'Au cœur de Meknès, Café Veranda réunit les moments simples de la journée autour d’un menu aux influences marocaines et internationales.', aboutBody2: 'On s’y retrouve pour un café, une pause gourmande ou un repas à partager, à l’intérieur comme en terrasse.', aboutLink: 'Découvrir l’adresse',
    featureAria: 'L’esprit de la maison', featureLabel: 'Du matin au soir', feature1: 'Le plaisir de', feature2: 'prendre son temps.', featureBody: 'La première tasse du jour. Un plat à partager. Une douceur qui prolonge la conversation.', featureLink: 'Explorer le menu',
    menuLabel: 'À découvrir', menuTitle: 'Le menu', menuBody: 'Des petits déjeuners aux desserts, découvrez les plats et boissons de Café Veranda.', menuTabsAria: 'Catégories du menu', menuSelectLabel: 'Choisir une catégorie du menu', menuSelection: 'Sélection du menu',
    priceNote: 'Prix relevés sur le menu partagé en story Instagram. Les tarifs et disponibilités peuvent avoir changé. À confirmer auprès du restaurant.',
    galleryLabel: 'L’univers Veranda', gallery1: 'Des instants', gallery2: 'à savourer.', galleryLink: 'Suivre sur Instagram', galleryCaption1: 'Autour de la table', galleryCaption2: 'Un moment à partager', galleryCaption3: 'La pause café', galleryNote: 'Photographies d’ambiance créées pour cette proposition de site.',
    visitLabel: 'Nous trouver', visit1: 'Votre table', visit2: 'vous attend.', directions: 'Obtenir l’itinéraire', call: 'Appeler le restaurant', mapAria: 'Carte de localisation de Café Veranda', mapOpen: 'Ouvrir dans Google Maps',
    footerLine: 'Un moment à partager, à Meknès.', footerNote: 'Site de présentation', top: 'Retour en haut', instaAria: 'Café Veranda sur Instagram', cafeAlt: 'Cappuccino et crêpes dans une scène d’ambiance conceptuelle', couscousAlt: 'Couscous servi dans une scène culinaire conceptuelle', heroAlt: 'Ambiance conceptuelle d’un restaurant verdoyant', currency: 'DH',
  },
  en: {
    title: 'Café Veranda | Restaurant in Meknès', description: 'Explore Café Veranda’s menu and prices in Meknès, then get in touch for your next visit.',
    skip: 'Skip to content', homeAria: 'Café Veranda, home', navAria: 'Main navigation', mobileNavAria: 'Mobile navigation', language: 'Website language',
    navHome: 'Our place', navMenu: 'The menu', navWorld: 'The atmosphere', navVisit: 'Find us', callBook: 'Call to reserve', openNav: 'Open menu', closeNav: 'Close menu',
    heroPlace: 'Café restaurant in Meknès', hero1: 'Good moments', hero2a: 'are', hero2b: 'shared', hero2c: 'at the table.',
    heroBody: 'Morning coffee, a leisurely lunch, dinner together. Welcome to Veranda.', heroMenu: 'View the menu', heroVisit: 'Visit us', scroll: 'Scroll to explore',
    aboutLabel: 'About Veranda', about1: 'A place for', about2: 'every occasion.', aboutBody1: 'In the heart of Meknès, Café Veranda brings the day’s simple moments together over a menu with Moroccan and international influences.', aboutBody2: 'Stop by for coffee, a sweet break, or a meal to share indoors or on the terrace.', aboutLink: 'Find our address',
    featureAria: 'The spirit of Veranda', featureLabel: 'Morning to evening', feature1: 'Take time', feature2: 'to enjoy it.', featureBody: 'The first cup of the day. A dish to share. Something sweet to keep the conversation going.', featureLink: 'Explore the menu',
    menuLabel: 'Discover', menuTitle: 'The menu', menuBody: 'From breakfast to dessert, explore Café Veranda’s food and drinks.', menuTabsAria: 'Menu categories', menuSelectLabel: 'Choose a menu category', menuSelection: 'Menu selection',
    priceNote: 'Prices are from the menu shared in an Instagram Story. Prices and availability may have changed. Please confirm with the restaurant.',
    galleryLabel: 'The Veranda atmosphere', gallery1: 'Moments', gallery2: 'to savour.', galleryLink: 'Follow on Instagram', galleryCaption1: 'Around the table', galleryCaption2: 'A moment to share', galleryCaption3: 'Coffee break', galleryNote: 'Concept photographs created for this website proposal.',
    visitLabel: 'Find us', visit1: 'Your table', visit2: 'is waiting.', directions: 'Get directions', call: 'Call the restaurant', mapAria: 'Map showing Café Veranda', mapOpen: 'Open in Google Maps',
    footerLine: 'A moment to share in Meknès.', footerNote: 'Website concept', top: 'Back to top', instaAria: 'Café Veranda on Instagram', cafeAlt: 'Cappuccino and crêpes in a concept image', couscousAlt: 'Couscous in a concept food image', heroAlt: 'Concept image of a leafy restaurant', currency: 'DH',
  },
  ar: {
    title: 'مقهى ومطعم فيراندا | مكناس', description: 'تصفح قائمة وأسعار مقهى فيراندا في مكناس وتواصل معنا لزيارتك القادمة.',
    skip: 'الانتقال إلى المحتوى', homeAria: 'مقهى فيراندا، الصفحة الرئيسية', navAria: 'التنقل الرئيسي', mobileNavAria: 'التنقل على الهاتف', language: 'لغة الموقع',
    navHome: 'المكان', navMenu: 'القائمة', navWorld: 'الأجواء', navVisit: 'موقعنا', callBook: 'اتصل للحجز', openNav: 'افتح القائمة', closeNav: 'أغلق القائمة',
    heroPlace: 'مقهى ومطعم في مكناس', hero1: 'أجمل اللحظات', hero2a: '', hero2b: 'نتشاركها', hero2c: 'حول المائدة.',
    heroBody: 'قهوة الصباح، غداء على مهل، وعشاء يجمع الأحبة. مرحباً بكم في فيراندا.', heroMenu: 'تصفح القائمة', heroVisit: 'زرنا', scroll: 'مرّر لاكتشاف المزيد',
    aboutLabel: 'عن فيراندا', about1: 'مكان يناسب', about2: 'كل لحظة.', aboutBody1: 'في قلب مكناس، يجمع مقهى فيراندا لحظات اليوم حول قائمة مستوحاة من المطبخ المغربي والعالمي.', aboutBody2: 'التقِ بنا على قهوة أو حلوى أو وجبة تشاركها مع من تحب، داخل المطعم أو على الشرفة.', aboutLink: 'اكتشف العنوان',
    featureAria: 'روح فيراندا', featureLabel: 'من الصباح إلى المساء', feature1: 'متعة', feature2: 'الاستمتاع بالوقت.', featureBody: 'أول فنجان في الصباح. طبق نتشاركه. وحلوى تطيل الحديث.', featureLink: 'استكشف القائمة',
    menuLabel: 'اكتشف', menuTitle: 'القائمة', menuBody: 'من الفطور إلى الحلوى، اكتشف أطباق ومشروبات مقهى فيراندا.', menuTabsAria: 'أقسام القائمة', menuSelectLabel: 'اختر قسماً من القائمة', menuSelection: 'من القائمة',
    priceNote: 'الأسعار مأخوذة من القائمة المنشورة في قصة إنستغرام. قد تتغير الأسعار والتوفر، لذا يرجى التأكد من المطعم.',
    galleryLabel: 'أجواء فيراندا', gallery1: 'لحظات', gallery2: 'تستحق التذوق.', galleryLink: 'تابعنا على إنستغرام', galleryCaption1: 'حول المائدة', galleryCaption2: 'لحظة نتشاركها', galleryCaption3: 'استراحة القهوة', galleryNote: 'صور تخيلية أُنشئت لهذا النموذج من الموقع.',
    visitLabel: 'موقعنا', visit1: 'طاولتك', visit2: 'بانتظارك.', directions: 'احصل على الاتجاهات', call: 'اتصل بالمطعم', mapAria: 'خريطة موقع مقهى فيراندا', mapOpen: 'افتح في خرائط Google',
    footerLine: 'لحظة نتشاركها في مكناس.', footerNote: 'نموذج موقع', top: 'العودة للأعلى', instaAria: 'مقهى فيراندا على إنستغرام', cafeAlt: 'قهوة وكريب في صورة تخيلية', couscousAlt: 'كسكس في صورة طعام تخيلية', heroAlt: 'صورة تخيلية لمطعم تحيط به النباتات', currency: 'د.م.',
  },
};

const icon = (name, size = 18) => {
  const paths = {
    arrow: '<path d="M4 12h15m-6-6 6 6-6 6"/>', north: '<path d="M5 17 17 5M7 5h10v10"/>',
    pin: '<path d="M12 21s7-5.3 7-11a7 7 0 0 0-14 0c0 5.7 7 11 7 11Z"/><circle cx="12" cy="10" r="2.4"/>',
    phone: '<path d="M5 3h4l1 5-2 2a15 15 0 0 0 6 6l2-2 5 1v4a2 2 0 0 1-2 2C10 21 3 14 3 5a2 2 0 0 1 2-2Z"/>',
    insta: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
    chevron: '<path d="m9 18 6-6-6-6"/>', down: '<path d="m6 9 6 6 6-6"/>', globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>', check: '<path d="m5 12 4 4L19 6"/>', close: '<path d="M5 5l14 14M19 5 5 19"/>', menu: '<path d="M3 8h18M3 16h18"/>',
  };
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
};

function renderSite() {
  if (headerObserver) headerObserver.disconnect();
  const t = copy[language];
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  document.title = t.title;
  document.querySelector('meta[name="description"]').content = t.description;
  document.querySelector('#app').innerHTML = `
    <a class="skip-link" href="#contenu">${t.skip}</a>
    <header class="site-header">
      <div class="header-inner shell">
        <a class="wordmark" href="#haut" aria-label="${t.homeAria}"><span class="wordmark-v">V</span><span>Veranda<small>CAFÉ RESTAURANT</small></span></a>
        <nav class="desktop-nav" aria-label="${t.navAria}"><a href="#maison">${t.navHome}</a><a href="#menu">${t.navMenu}</a><a href="#galerie">${t.navWorld}</a><a href="#adresse">${t.navVisit}</a></nav>
        <div class="language-picker"><button class="language-trigger" type="button" aria-label="${t.language}" aria-expanded="false" aria-controls="language-options">${icon('globe', 16)}<span>${language.toUpperCase()}</span>${icon('down', 13)}</button><div class="language-options" id="language-options" role="group" aria-label="${t.language}" hidden>${supported.map((code) => `<button type="button" data-lang="${code}" lang="${code}" aria-pressed="${language === code}"><span class="language-option-code">${code.toUpperCase()}</span><span>${{ fr: 'Français', en: 'English', ar: 'العربية' }[code]}</span>${language === code ? icon('check', 15) : ''}</button>`).join('')}</div></div>
        <a class="header-book" href="tel:${PHONE}">${t.callBook} ${icon('north', 16)}</a>
        <button class="menu-toggle" type="button" aria-label="${t.openNav}" aria-expanded="false" aria-controls="mobile-nav">${icon('menu', 25)}</button>
      </div>
      <nav class="mobile-nav" id="mobile-nav" aria-label="${t.mobileNavAria}" hidden><a href="#maison">${t.navHome}</a><a href="#menu">${t.navMenu}</a><a href="#galerie">${t.navWorld}</a><a href="#adresse">${t.navVisit}</a><a class="mobile-call" href="tel:${PHONE}">${t.callBook} ${icon('north', 18)}</a></nav>
    </header>
    <main id="contenu">
      <section class="hero" id="haut" aria-labelledby="hero-title"><div class="hero-image" role="img" aria-label="${t.heroAlt}"></div><div class="hero-shade"></div><div class="hero-content shell"><p class="hero-location"><span class="location-line"></span>${t.heroPlace}</p><h1 id="hero-title">${t.hero1}<br>${t.hero2a} <em>${t.hero2b}</em> ${t.hero2c}</h1><p class="hero-copy">${t.heroBody}</p><div class="hero-actions"><a class="button button-light" href="#menu">${t.heroMenu} ${icon('arrow')}</a><a class="text-link hero-link" href="#adresse">${t.heroVisit} ${icon('north', 16)}</a></div></div><div class="hero-bottom shell"><span>Meknès, Maroc</span><span>${t.scroll} <span aria-hidden="true">↓</span></span></div></section>
      <section class="intro section-pad" id="maison" aria-labelledby="intro-title"><div class="shell intro-grid"><div class="intro-heading"><p class="section-kicker">${t.aboutLabel}</p><h2 id="intro-title">${t.about1}<br><em>${t.about2}</em></h2></div><div class="intro-body"><p>${t.aboutBody1}</p><p>${t.aboutBody2}</p><a class="inline-link" href="#adresse">${t.aboutLink} ${icon('north', 17)}</a></div></div></section>
      <section class="feature" aria-label="${t.featureAria}"><div class="feature-image"><img src="${asset('cafe.webp')}" alt="${t.cafeAlt}" width="1122" height="1402" loading="lazy"></div><div class="feature-copy"><div><p class="section-kicker light">${t.featureLabel}</p><h2>${t.feature1}<br><em>${t.feature2}</em></h2><p>${t.featureBody}</p><a class="inline-link light-link" href="#menu">${t.featureLink} ${icon('north', 17)}</a></div><span class="feature-mark" aria-hidden="true">V.</span></div></section>
      <section class="menu-section section-pad" id="menu" aria-labelledby="menu-title"><span id="carte" class="anchor-alias" aria-hidden="true"></span><div class="shell"><div class="section-head"><div><p class="section-kicker">${t.menuLabel}</p><h2 id="menu-title">${t.menuTitle}</h2></div><p>${t.menuBody}</p></div><div class="menu-layout"><div class="menu-tabs" role="tablist" aria-label="${t.menuTabsAria}"></div><label class="menu-select-wrap"><span>${t.menuSelectLabel}</span><select class="menu-select" aria-label="${t.menuSelectLabel}"></select></label><div class="menu-panel" id="menu-panel" role="tabpanel" tabindex="0"></div></div><p class="menu-source">${t.priceNote}</p></div></section>
      <section class="gallery-section" id="galerie" aria-labelledby="gallery-title"><div class="shell gallery-head"><div><p class="section-kicker">${t.galleryLabel}</p><h2 id="gallery-title">${t.gallery1}<br><em>${t.gallery2}</em></h2></div><a class="inline-link" href="${INSTAGRAM}" target="_blank" rel="noopener noreferrer">${t.galleryLink} ${icon('north', 17)}</a></div><div class="gallery-grid shell"><figure class="gallery-tall"><img src="${asset('couscous.webp')}" alt="${t.couscousAlt}" width="1122" height="1402" loading="lazy"><figcaption>${t.galleryCaption1}</figcaption></figure><figure class="gallery-wide"><img src="${asset('hero.webp')}" alt="${t.heroAlt}" width="1672" height="941" loading="lazy"><figcaption>${t.galleryCaption2}</figcaption></figure><figure class="gallery-small"><img src="${asset('cafe.webp')}" alt="${t.cafeAlt}" width="1122" height="1402" loading="lazy"><figcaption>${t.galleryCaption3}</figcaption></figure></div><p class="gallery-note shell">${t.galleryNote}</p></section>
      <section class="visit section-pad" id="adresse" aria-labelledby="visit-title"><div class="shell visit-grid"><div><p class="section-kicker light">${t.visitLabel}</p><h2 id="visit-title">${t.visit1}<br><em>${t.visit2}</em></h2><p class="visit-intro"><bdi>${ADDRESS}</bdi><br><bdi>Meknès 50000, Maroc</bdi></p><div class="visit-actions"><a class="button button-light" href="${MAP}" target="_blank" rel="noopener noreferrer">${t.directions} ${icon('north', 18)}</a><a class="button button-outline" href="tel:${PHONE}">${t.call} ${icon('phone', 18)}</a></div></div><div class="visit-card"><div class="visit-card-top"><span class="visit-card-kicker">Meknès · Al Mountazah</span><span class="visit-card-label">Café Veranda</span></div><div class="map-frame"><iframe title="${t.mapAria}" src="${MAP_EMBED}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div><div class="visit-card-foot"><span>Villa 21 · Al Mountazah Zahwa<br>Meknès</span><a href="${MAP}" target="_blank" rel="noopener noreferrer">${t.mapOpen} ${icon('north', 17)}</a></div></div></div></section>
    </main>
    <footer class="footer"><div class="shell footer-top"><a class="wordmark footer-wordmark" href="#haut" aria-label="${t.homeAria}"><span class="wordmark-v">V</span><span>Veranda<small>CAFÉ RESTAURANT</small></span></a><p>${t.footerLine}</p><a class="footer-social" href="${INSTAGRAM}" target="_blank" rel="noopener noreferrer" aria-label="${t.instaAria}">${icon('insta', 21)}</a></div><div class="shell footer-bottom"><span>© ${new Date().getFullYear()} Café Veranda</span><span>${t.footerNote}</span><a href="#haut">${t.top} ↑</a></div></footer>`;

  const tabs = document.querySelector('.menu-tabs');
  const select = document.querySelector('.menu-select');
  const panel = document.querySelector('#menu-panel');
  const renderMenu = () => {
    tabs.innerHTML = categories.map((cat) => `<button type="button" role="tab" id="tab-${cat.id}" aria-controls="menu-panel" aria-selected="${cat.id === activeCategory}" tabindex="${cat.id === activeCategory ? '0' : '-1'}" data-category="${cat.id}">${cat.label[language]}<span aria-hidden="true">${icon('chevron', 18)}</span></button>`).join('');
    select.innerHTML = categories.map((cat) => `<option value="${cat.id}" ${cat.id === activeCategory ? 'selected' : ''}>${cat.label[language]}</option>`).join('');
    const category = categories.find((cat) => cat.id === activeCategory);
    panel.setAttribute('aria-labelledby', `tab-${category.id}`);
    panel.innerHTML = `<div class="menu-panel-head"><p class="section-kicker">${t.menuSelection}</p><h3>${category.label[language]}</h3></div><ul class="menu-items">${menu.filter((entry) => entry.category === activeCategory).map((entry) => `<li><span class="item-name">${entry.name[language]}</span><span class="menu-price"><bdi>${entry.price}</bdi> ${t.currency}</span></li>`).join('')}</ul>`;
  };
  renderMenu();
  tabs.addEventListener('click', (event) => { const tab = event.target.closest('[role="tab"]'); if (!tab) return; activeCategory = tab.dataset.category; renderMenu(); document.querySelector(`#tab-${activeCategory}`).focus(); });
  tabs.addEventListener('keydown', (event) => { if (!['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return; event.preventDefault(); const index = categories.findIndex((cat) => cat.id === activeCategory); const next = event.key === 'Home' ? 0 : event.key === 'End' ? categories.length - 1 : (index + (['ArrowDown', 'ArrowRight'].includes(event.key) ? 1 : -1) + categories.length) % categories.length; activeCategory = categories[next].id; renderMenu(); document.querySelector(`#tab-${activeCategory}`).focus(); });
  select.addEventListener('change', () => { activeCategory = select.value; renderMenu(); select.focus(); });

  const toggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const setMenu = (open) => { mobileNav.hidden = !open; toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? t.closeNav : t.openNav); toggle.innerHTML = icon(open ? 'close' : 'menu', 25); document.body.classList.toggle('nav-open', open); };
  toggle.addEventListener('click', () => setMenu(mobileNav.hidden));
  mobileNav.addEventListener('click', (event) => { if (event.target.closest('a')) setMenu(false); });
  const languageTrigger = document.querySelector('.language-trigger');
  const languageOptions = document.querySelector('.language-options');
  const setLanguageMenu = (open) => { languageOptions.hidden = !open; languageTrigger.setAttribute('aria-expanded', String(open)); };
  languageTrigger.addEventListener('click', () => setLanguageMenu(languageOptions.hidden));
  document.querySelectorAll('[data-lang]').forEach((button) => button.addEventListener('click', () => changeLanguage(button.dataset.lang)));
  const header = document.querySelector('.site-header');
  headerObserver = new IntersectionObserver(([entry]) => header.classList.toggle('scrolled', !entry.isIntersecting), { threshold: 0 });
  headerObserver.observe(document.querySelector('.hero'));
}

function changeLanguage(next) {
  if (!supported.includes(next) || next === language) return;
  const y = window.scrollY;
  language = next;
  localStorage.setItem('veranda-language', language);
  document.body.classList.remove('nav-open');
  renderSite();
  requestAnimationFrame(() => window.scrollTo({ top: y, behavior: 'instant' }));
}

document.addEventListener('keydown', (event) => {
  const toggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const languageTrigger = document.querySelector('.language-trigger');
  const languageOptions = document.querySelector('.language-options');
  if (event.key === 'Escape' && languageOptions && !languageOptions.hidden) { languageOptions.hidden = true; languageTrigger.setAttribute('aria-expanded', 'false'); languageTrigger.focus(); return; }
  if (event.key === 'Escape' && mobileNav && !mobileNav.hidden) { mobileNav.hidden = true; toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', copy[language].openNav); toggle.innerHTML = icon('menu', 25); document.body.classList.remove('nav-open'); toggle.focus(); }
});

document.addEventListener('click', (event) => {
  const picker = document.querySelector('.language-picker');
  if (!picker || picker.contains(event.target)) return;
  const options = picker.querySelector('.language-options');
  options.hidden = true;
  picker.querySelector('.language-trigger').setAttribute('aria-expanded', 'false');
});

renderSite();
