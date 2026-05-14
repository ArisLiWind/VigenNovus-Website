// ─── i18n ────────────────────────────────────────────────────────────────────
const translations = {
  zh: {
    'nav.about':    '关于我们',
    'nav.products': '我们的产品',
    'nav.culture':  '企业文化',
    'nav.join':     '加入我们',

    'hero.eyebrow':  'VigenNovus · 维境拟生',
    'hero.title':    '维新筑境，<br>泽被苍生。',
    'hero.subtitle': '基于下一代 Agent 与人工智能和科技突破，构建造福人类的设施与协议。',

    'products.label':       '01 — 我们构建什么',
    'products.title':       '我们在构建什么',
    'products.card1.title': '智能体基础设施',
    'products.card1.desc':  '基于下一代 Agent 与人工智能形态，构建驱动智能应用的基础设施，为开发者与企业提供可靠的底层能力支撑。',
    'products.card2.title': '意识研究',
    'products.card2.desc':  '深入探索意识的起源与本质，追求人类最深刻的真理。',
    'products.card3.title': '人类幸福',
    'products.card3.desc':  '技术的终极衡量标准只有一个——它让多少人变得更幸福。',

    'culture.label':       '02 — 我们如何思考',
    'culture.title':       '我们如何思考',
    'culture.card1.title': '深刻思考',
    'culture.card1.desc':  '追求真理，独立思考，刨根问底，不满足于表面答案，直达事物本质与真相。',
    'culture.card2.title': '简单纯粹',
    'culture.card2.desc':  '把复杂的问题做简单，把简单的事情做干净。拒绝不必要的复杂性。',
    'culture.card3.title': '坦诚高效',
    'culture.card3.desc':  '表达真实想法，直接沟通，不浪费彼此的时间与精力。',
    'culture.card4.title': '追求极致',
    'culture.card4.desc':  '不只是完成，而是做到最好。高标准是我们对自己和世界的承诺。',

    'join.label':    '03 — 加入我们',
    'join.title':    '加入改变一切的<br>这一代人。',
    'join.subtitle': '我们在寻找相信这件事的人——工程师、科学家、设计师，或者任何相信人类还没发挥全部潜能的人。你属于这里。',
    'join.cta':      '我们在招募 →',

    'footer.contact': '联系我们',
    'footer.privacy': '隐私政策',
    'footer.terms':   '条款',
    'footer.copy':    '© 2025 VigenNovus · 维境拟生',
  },

  en: {
    'nav.about':    'About',
    'nav.products': 'Products',
    'nav.culture':  'Culture',
    'nav.join':     'Join Us',

    'hero.eyebrow':  'VigenNovus · 维境拟生',
    'hero.title':    'Generate Change.<br>Elevate Humanity.',
    'hero.subtitle': 'Building the infrastructure and protocols that benefit humanity, powered by next-generation Agent, AI, and technological breakthroughs.',

    'products.label':       '01 — WHAT WE BUILD',
    'products.title':       'What we build',
    'products.card1.title': 'Agentic Infrastructure',
    'products.card1.desc':  'Building the foundational infrastructure that powers next-generation Agent and AI-native applications — providing developers and enterprises with reliable, scalable underpinnings.',
    'products.card2.title': 'Consciousness Research',
    'products.card2.desc':  'Deeply exploring the origins and nature of consciousness, in pursuit of humanity\'s most profound truths.',
    'products.card3.title': 'Human Happiness',
    'products.card3.desc':  'There is only one ultimate measure of technology — how many people\'s lives it makes better.',

    'culture.label':       '02 — HOW WE THINK',
    'culture.title':       'How we think',
    'culture.card1.title': 'Think Deeply',
    'culture.card1.desc':  'Pursue truth independently. Question everything, settle for nothing surface-level, and drive straight to the essence of things.',
    'culture.card2.title': 'Stay Simple',
    'culture.card2.desc':  'Simplify hard problems. Execute clean solutions. Reject unnecessary complexity.',
    'culture.card3.title': 'Be Direct',
    'culture.card3.desc':  'Say what you mean. Communicate honestly and directly. Respect everyone\'s time.',
    'culture.card4.title': 'Pursue Excellence',
    'culture.card4.desc':  'Not just done — done right. High standards are our commitment to ourselves and to the world.',

    'join.label':    '03 — JOIN US',
    'join.title':    'Join the generation<br>that changes everything.',
    'join.subtitle': 'We\'re looking for people who believe in this mission — engineers, scientists, designers, or anyone who believes humanity hasn\'t reached its full potential yet. You belong here.',
    'join.cta':      'We\'re Hiring →',

    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.terms':   'Terms',
    'footer.copy':    '© 2025 VigenNovus · 维境拟生',
  }
};

let currentLang = 'zh';

function applyLanguage(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = lang === 'zh' ? 'EN' : '中文';
}

// ─── Grid Canvas (engineering blueprint dots) ─────────────────────────────────
function initCanvas() {
  const canvas = document.getElementById('grid-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Blueprint + grid
    const spacing = 48;
    ctx.strokeStyle = 'rgba(79,195,220,0.07)';
    ctx.lineWidth = 0.5;
    for (let x = 0; x <= W; x += spacing) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y <= H; y += spacing) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }

    // Crosshair dots at intersections (sparse)
    ctx.fillStyle = 'rgba(79,195,220,0.18)';
    for (let x = 0; x <= W; x += spacing) {
      for (let y = 0; y <= H; y += spacing) {
        if ((x / spacing + y / spacing) % 3 === 0) {
          ctx.beginPath();
          ctx.arc(x, y, 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // Ambient glow at top-center
    const grad = ctx.createRadialGradient(W / 2, 0, 0, W / 2, 0, W * 0.55);
    grad.addColorStop(0,   'rgba(79,195,220,0.06)');
    grad.addColorStop(1,   'rgba(79,195,220,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);
  }

  draw();
  window.addEventListener('resize', draw);
}

// ─── Navbar scroll state ──────────────────────────────────────────────────────
function initNavbar() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  // Active link
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-menu a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 80) current = s.id;
    });
    links.forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + current ? '#f0f2f5' : '';
    });
  });

  // Smooth scroll
  links.forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// ─── Scroll reveal ────────────────────────────────────────────────────────────
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // stagger siblings
        const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
        const idx = siblings.indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, idx * 80);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function initCTA() {
  const btn = document.querySelector('.cta-button');
  if (btn) btn.addEventListener('click', () => {
    alert('Thank you for your interest! We will be in touch.');
  });
}

// ─── Lang toggle ──────────────────────────────────────────────────────────────
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
  initCanvas();
  initNavbar();
  initReveal();
  initCTA();
  initLangToggle();
  applyLanguage(currentLang);
});
