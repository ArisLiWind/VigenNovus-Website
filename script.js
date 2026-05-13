// ─── i18n ────────────────────────────────────────────────────────────────────
const translations = {
  zh: {
    'nav.about':    '关于我们',
    'nav.products': '我们的产品',
    'nav.culture':  '企业文化',
    'nav.join':     '加入我们',

    'hero.title':    '生成改变。造福人类。',
    'hero.subtitle': '基于下一代 Agent 与人工智能，构建造福人类的应用，探索意识的起源与真理，为人类创造更幸福的未来。',

    'about.title': '我们生来是为了理解活着的意义。',
    'about.text':  '人类文明的每一次跃升，都源于对真理的追问。意识是宇宙中最深刻的谜题。我们在这里，试图理解它。',

    'products.title':       '我们在构建什么',
    'products.card1.title': '智能体基础设施',
    'products.card1.desc':  '基于下一代 Agent 与人工智能形态，构建驱动智能应用的基础设施，为开发者与企业提供可靠的底层能力支撑。',
    'products.card2.title': '意识研究',
    'products.card2.desc':  '深入探索意识的起源与本质，追求人类最深刻的真理。',
    'products.card3.title': '人类幸福',
    'products.card3.desc':  '技术的终极衡量标准只有一个——它让多少人变得更幸福。',

    'culture.title':       '我们如何思考',
    'culture.card1.title': '深刻思考',
    'culture.card1.desc':  '追求真理，独立思考，刨根问底，不满足于表面答案，直达事物本质与真相。',
    'culture.card2.title': '简单纯粹',
    'culture.card2.desc':  '把复杂的问题做简单，把简单的事情做干净。拒绝不必要的复杂性。',
    'culture.card3.title': '坦诚高效',
    'culture.card3.desc':  '表达真实想法，直接沟通，不浪费彼此的时间与精力。',
    'culture.card4.title': '追求极致',
    'culture.card4.desc':  '不只是完成，而是做到最好。高标准是我们对自己和世界的承诺。',

    'join.title':    '加入改变一切的这一代人。',
    'join.subtitle': '我们在寻找相信这件事的人——工程师、科学家、设计师，或者任何相信人类还没发挥全部潜能的人。你属于这里。',
    'join.cta':      '我们在招募 →',

    'footer.tagline': '世界在改变。我们生成这种改变。',
    'footer.copy':    '© 2025 VigenNovus · 维境拟生',
    'footer.contact': '联系我们',
    'footer.privacy': '隐私政策',
    'footer.terms':   '条款',
  },

  en: {
    'nav.about':    'About',
    'nav.products': 'Products',
    'nav.culture':  'Culture',
    'nav.join':     'Join Us',

    'hero.title':    'Generate Change. Elevate Humanity.',
    'hero.subtitle': 'Building next-generation Agent & AI-powered applications, exploring the origins of consciousness and truth, to create a happier future for humanity.',

    'about.title': 'We exist to understand what it means to be alive.',
    'about.text':  'Every leap in human civilization begins with the pursuit of truth. Consciousness is the deepest mystery in the universe. We are here to understand it.',

    'products.title':      'What we build',
    'products.card1.title': 'Agentic Infrastructure',
    'products.card1.desc':  'Building the foundational infrastructure that powers next-generation Agent and AI-native applications — providing developers and enterprises with reliable, scalable underpinnings.',
    'products.card2.title': 'Consciousness Research',
    'products.card2.desc':  'Deeply exploring the origins and nature of consciousness, in pursuit of humanity\'s most profound truths.',
    'products.card3.title': 'Human Happiness',
    'products.card3.desc':  'There is only one ultimate measure of technology — how many people\'s lives it makes better.',

    'culture.title':       'How we think',
    'culture.card1.title': 'Think Deeply',
    'culture.card1.desc':  'Pursue truth independently. Question everything, settle for nothing surface-level, and drive straight to the essence of things.',
    'culture.card2.title': 'Stay Simple',
    'culture.card2.desc':  'Simplify hard problems. Execute clean solutions. Reject unnecessary complexity.',
    'culture.card3.title': 'Be Direct',
    'culture.card3.desc':  'Say what you mean. Communicate honestly and directly. Respect everyone\'s time.',
    'culture.card4.title': 'Pursue Excellence',
    'culture.card4.desc':  'Not just done — done right. High standards are our commitment to ourselves and to the world.',

    'join.title':    'Join the generation that changes everything.',
    'join.subtitle': 'We\'re looking for people who believe in this mission — engineers, scientists, designers, or anyone who believes humanity hasn\'t reached its full potential yet. You belong here.',
    'join.cta':      'We\'re Hiring →',

    'footer.tagline': 'The world changes. We generate the change.',
    'footer.copy':    '© 2025 VigenNovus · Vigen Novus',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.terms':   'Terms',
  }
};

let currentLang = 'zh';

function applyLanguage(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = lang === 'zh' ? 'EN' : '中文';
}

// ─── Navigation ──────────────────────────────────────────────────────────────
function initNavigation() {
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  window.addEventListener('scroll', updateActiveNav);
}

function updateActiveNav() {
  const sections = document.querySelectorAll('section');
  let current = '';
  sections.forEach(section => {
    if (pageYOffset >= section.offsetTop - 60) {
      current = section.getAttribute('id');
    }
  });
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = '#378ADD';
    }
  });
}

// ─── Scroll Animations ───────────────────────────────────────────────────────
function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

  document.querySelectorAll('.product-card, .culture-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// ─── Button Interactions ─────────────────────────────────────────────────────
function initButtonInteractions() {
  const ctaButton = document.querySelector('.cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', () => {
      alert('Thank you for your interest! Please visit our careers page for more information.');
    });
  }
}

// ─── Lang Toggle ─────────────────────────────────────────────────────────────
function initLangToggle() {
  const btn = document.getElementById('langToggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    applyLanguage(currentLang);
  });
}

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollAnimations();
  initButtonInteractions();
  initLangToggle();
  applyLanguage(currentLang); // apply default (zh)
});
