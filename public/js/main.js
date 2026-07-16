/* MeuGrana Landing Page — Language switching & scroll animations */

const translations = {
  pt: {
    'nav.features': 'Recursos',
    'nav.screenshots': 'Capturas',
    'nav.premium': 'Premium',
    'nav.download': 'Baixar',
    'hero.tagline': 'Controle seus gastos e parcelas',
    'hero.subtitle': 'O app de finanças feito para o jeito brasileiro de lidar com dinheiro. Acompanhe parcelas, cartões de crédito e projete suas faturas futuras.',
    'hero.cta': 'Baixar na App Store',
    'features.title': 'Feito para o Brasil',
    'features.subtitle': 'Recursos pensados para como você realmente usa seu dinheiro.',
    'feature1.title': 'Rastreador de Parcelas',
    'feature1.desc': 'Acompanhe todas as suas compras parceladas em um só lugar. Veja parcela atual, valor restante e quando cada parcelamento termina.',
    'feature2.title': 'Projeção de Faturas',
    'feature2.desc': 'Veja como será sua fatura do cartão de crédito nos próximos 12 meses. Sem surpresas na hora de pagar.',
    'feature3.title': 'Feito para o Brasil',
    'feature3.desc': 'PIX, boleto, vale-refeição, INSS, IRRF, 13º salário — tudo que os apps gringos não entendem.',
    'feature4.title': 'Controle Completo',
    'feature4.desc': 'Dashboard com resumo mensal, gráficos de gastos por categoria, e relatórios detalhados para entender para onde vai seu dinheiro.',
    'screenshots.title': 'Veja o app em ação',
    'screenshots.subtitle': 'Interface moderna e intuitiva, pensada para facilitar seu controle financeiro.',
    'screenshot1.alt': 'Dashboard — Resumo mensal',
    'screenshot2.alt': 'Parcelas — Acompanhamento de parcelamentos',
    'screenshot3.alt': 'Projeção — Faturas futuras',
    'screenshot4.alt': 'Cartões — Seus cartões de crédito',
    'screenshot5.alt': 'Transações — Histórico de gastos',
    'premium.title': 'MeuGrana Premium',
    'premium.subtitle': 'Desbloqueie todo o potencial do app.',
    'premium.feature1': 'Cartões e parcelas ilimitados',
    'premium.feature2': 'Projeção de 12 meses',
    'premium.feature3': 'Categorias personalizadas',
    'premium.feature4': 'Relatórios e tendências',
    'premium.feature5': 'Exportação CSV',
    'premium.feature6': 'Widgets extras',
    'premium.price': 'A partir de R$ 14,90/mês',
    'cta.title': 'Comece a controlar seu dinheiro hoje',
    'cta.subtitle': 'Baixe o MeuGrana gratuitamente e veja para onde vai cada real.',
    'cta.button': 'Baixar na App Store',
    'footer.privacy': 'Política de Privacidade',
    'footer.copyright': '© 2026 MeuGrana. Todos os direitos reservados.',
    'lang.toggle': 'EN',
  },
  en: {
    'nav.features': 'Features',
    'nav.screenshots': 'Screenshots',
    'nav.premium': 'Premium',
    'nav.download': 'Download',
    'hero.tagline': 'Track your spending & installments',
    'hero.subtitle': 'The finance app built for how Brazilians actually manage money. Track installments, credit cards, and project your future bills.',
    'hero.cta': 'Download on the App Store',
    'features.title': 'Built for Brazil',
    'features.subtitle': 'Features designed for how you actually use your money.',
    'feature1.title': 'Installment Tracker',
    'feature1.desc': 'Track all your installment purchases in one place. See current installment, remaining balance, and when each one ends.',
    'feature2.title': 'Bill Projection',
    'feature2.desc': 'See what your credit card bill will look like for the next 12 months. No surprises when it\'s time to pay.',
    'feature3.title': 'Made for Brazil',
    'feature3.desc': 'PIX, boleto, meal vouchers, INSS, IRRF, 13th salary — everything international apps don\'t understand.',
    'feature4.title': 'Complete Control',
    'feature4.desc': 'Dashboard with monthly summary, spending charts by category, and detailed reports to understand where your money goes.',
    'screenshots.title': 'See the app in action',
    'screenshots.subtitle': 'Modern and intuitive interface designed to make financial control easy.',
    'screenshot1.alt': 'Dashboard — Monthly summary',
    'screenshot2.alt': 'Installments — Track your parcelas',
    'screenshot3.alt': 'Projection — Future bills',
    'screenshot4.alt': 'Cards — Your credit cards',
    'screenshot5.alt': 'Transactions — Spending history',
    'premium.title': 'MeuGrana Premium',
    'premium.subtitle': 'Unlock the full power of the app.',
    'premium.feature1': 'Unlimited cards & installments',
    'premium.feature2': '12-month projection',
    'premium.feature3': 'Custom categories',
    'premium.feature4': 'Reports & trends',
    'premium.feature5': 'CSV export',
    'premium.feature6': 'Extra widgets',
    'premium.price': 'Starting at R$ 14.90/month',
    'cta.title': 'Start controlling your money today',
    'cta.subtitle': 'Download MeuGrana for free and see where every real goes.',
    'cta.button': 'Download on the App Store',
    'footer.privacy': 'Privacy Policy',
    'footer.copyright': '© 2026 MeuGrana. All rights reserved.',
    'lang.toggle': 'PT',
  }
};

let currentLang = 'pt';

function detectLanguage() {
  const saved = localStorage.getItem('meugrana-lang');
  if (saved && translations[saved]) return saved;
  const browserLang = navigator.language || navigator.userLanguage || 'pt';
  return browserLang.startsWith('pt') ? 'pt' : 'en';
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('meugrana-lang', lang);
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (el.tagName === 'IMG') {
        el.alt = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Swap screenshot images based on language
  const screenshotLang = lang === 'pt' ? 'pt-BR' : 'en-US';
  document.querySelectorAll('[data-screenshot]').forEach(img => {
    const num = img.getAttribute('data-screenshot');
    img.src = `images/screenshots/${screenshotLang}/screenshot-${num}.png`;
  });

  // Update toggle button text
  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.textContent = translations[lang]['lang.toggle'];
    toggleBtn.setAttribute('aria-label',
      lang === 'pt' ? 'Switch to English' : 'Mudar para Português'
    );
  }
}

function toggleLanguage() {
  setLanguage(currentLang === 'pt' ? 'en' : 'pt');
}

// Scroll-based fade-in animations
function setupScrollAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    document.querySelectorAll('.fade-in').forEach(el => {
      el.classList.add('visible');
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// Smooth scroll for nav links
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// Mobile nav toggle
function setupMobileNav() {
  const toggle = document.getElementById('mobile-nav-toggle');
  const nav = document.getElementById('nav-links');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
  });

  // Close nav when a link is clicked
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  const lang = detectLanguage();
  setLanguage(lang);
  setupScrollAnimations();
  setupSmoothScroll();
  setupMobileNav();
});
