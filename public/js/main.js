/* MeuGrana Landing Page — Language switching & scroll animations */

const translations = {
  pt: {
    'nav.features': 'Recursos',
    'nav.how': 'Como funciona',
    'nav.screenshots': 'Capturas',
    'nav.premium': 'Premium',
    'nav.download': 'Baixar',
    'nav.faq': 'FAQ',
    'hero.headline': 'Nunca mais perca o controle das parcelas',
    'hero.subtitle': 'Chega de planilha e de susto na fatura. O MeuGrana reúne as parcelas espalhadas nos seus cartões e mostra quanto da fatura já está comprometida — mês a mês.',
    'hero.cta': 'Baixar na App Store',
    'hero.microcopy': 'Grátis para baixar · Sem cadastro · Dados só no seu iPhone',
    'hero.ratingLabel': 'avaliações na App Store',
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
    'how.title': 'Como funciona',
    'how.subtitle': 'Do cadastro ao controle total em quatro passos.',
    'how.step1.title': 'Cadastre seus cartões e contas',
    'how.step1.desc': 'Adicione seus cartões de crédito com dia de fechamento e vencimento — o MeuGrana cuida do resto.',
    'how.step2.title': 'Registre compras e parcelamentos',
    'how.step2.desc': 'À vista, PIX, boleto ou parcelado em 12x: registre em segundos e nunca mais esqueça uma parcela.',
    'how.step3.title': 'Veja a projeção das próximas faturas',
    'how.step3.desc': 'Saiba hoje quanto vai pagar nos próximos 12 meses, com cada parcela já contabilizada.',
    'how.step4.title': 'Acompanhe o mês no dashboard',
    'how.step4.desc': 'Receitas, despesas, parcelas e saldo em um só lugar — e gráficos por categoria para ver para onde vai seu dinheiro.',
    'screenshots.title': 'Veja o app em ação',
    'screenshots.subtitle': 'Interface moderna e intuitiva, pensada para facilitar seu controle financeiro.',
    'screenshot1.alt': 'Dashboard — Resumo mensal',
    'screenshot2.alt': 'Parcelas — Acompanhamento de parcelamentos',
    'screenshot3.alt': 'Projeção — Faturas futuras',
    'screenshot4.alt': 'Cartões — Seus cartões de crédito',
    'screenshot5.alt': 'Transações — Histórico de gastos',
    'testimonials.title': 'O que dizem os usuários',
    'testimonials.subtitle': 'Avaliações reais da App Store.',
    'premium.title': 'MeuGrana Premium',
    'premium.subtitle': 'Desbloqueie todo o potencial do app.',
    'premium.feature1': 'Cartões e parcelas ilimitados',
    'premium.feature2': 'Projeção de 12 meses',
    'premium.feature3': 'Categorias personalizadas',
    'premium.feature4': 'Relatórios e tendências',
    'premium.feature5': 'Exportação CSV',
    'premium.feature6': 'Widgets extras',
    'premium.price': 'A partir de R$ 14,90/mês',
    'faq.title': 'Perguntas frequentes',
    'faq.subtitle': 'Tudo que você precisa saber antes de baixar.',
    'faq.q1.q': 'O MeuGrana é grátis? O que está incluído no plano gratuito?',
    'faq.q1.a': 'Sim, o MeuGrana é grátis para baixar e usar. O plano gratuito inclui o dashboard mensal, registro de transações e acompanhamento de parcelas. O Premium desbloqueia cartões e parcelas ilimitados, projeção de 12 meses, categorias personalizadas, relatórios, exportação CSV e widgets extras — a partir de R$ 14,90/mês.',
    'faq.q2.q': 'Preciso conectar meu banco?',
    'faq.q2.a': 'Não. O MeuGrana não usa Open Finance nem pede acesso ao seu banco. Você registra seus gastos manualmente em segundos — e seus dados ficam só no seu aparelho.',
    'faq.q3.q': 'Meus dados ficam seguros? Onde são armazenados?',
    'faq.q3.a': 'Sim. Seus dados são armazenados exclusivamente no seu iPhone e, se você ativar a sincronização Premium, no seu iCloud pessoal — a que nós não temos acesso. Não coletamos dados pessoais nem usamos analytics de terceiros.',
    'faq.q4.q': 'Funciona offline?',
    'faq.q4.a': 'Sim. O MeuGrana é offline-first: registrar gastos, ver parcelas e consultar o dashboard funciona sem internet.',
    'faq.q5.q': 'O que é a projeção de faturas e como funciona?',
    'faq.q5.a': 'O MeuGrana soma todas as parcelas futuras de cada cartão e mostra quanto você vai pagar em cada fatura nos próximos 12 meses — antes de a fatura fechar, sem surpresas.',
    'faq.q6.q': 'Posso acompanhar vários cartões?',
    'faq.q6.a': 'Sim. Adicione seus cartões de crédito com dia de fechamento e vencimento e veja parcelas e faturas por cartão. No Premium, cartões ilimitados.',
    'faq.q7.q': 'Tem versão para Android?',
    'faq.q7.a': 'Ainda não. O MeuGrana é exclusivo para iPhone (iOS) no momento.',
    'faq.q8.q': 'Como cancelo o Premium?',
    'faq.q8.a': 'A assinatura é gerenciada pela Apple. Cancele a qualquer momento em Ajustes → seu nome → Assinaturas, sem multa.',
    'faq.q9.q': 'Posso exportar meus dados?',
    'faq.q9.a': 'Sim. Com o Premium você exporta suas transações em CSV para usar em planilhas ou levar para onde quiser.',
    'faq.q10.q': 'O app entende PIX, boleto e vale-refeição?',
    'faq.q10.a': 'Sim. PIX, boleto, vale-refeição e outros métodos de pagamento brasileiros são nativos no MeuGrana — junto com INSS, IRRF e 13º salário no perfil de renda.',
    'cta.title': 'Comece a controlar seu dinheiro hoje',
    'cta.subtitle': 'Baixe o MeuGrana gratuitamente e veja para onde vai cada real.',
    'cta.button': 'Baixar na App Store',
    'footer.privacy': 'Política de Privacidade',
    'footer.copyright': '© 2026 MeuGrana. Todos os direitos reservados.',
    'lang.toggle': 'EN',
  },
  en: {
    'nav.features': 'Features',
    'nav.how': 'How it works',
    'nav.screenshots': 'Screenshots',
    'nav.premium': 'Premium',
    'nav.download': 'Download',
    'nav.faq': 'FAQ',
    'hero.headline': 'Never lose track of your installments again',
    'hero.subtitle': 'No more spreadsheets, no more bill shock. MeuGrana brings together the installments scattered across your cards and shows how much of your bill is already committed — month by month.',
    'hero.cta': 'Download on the App Store',
    'hero.microcopy': 'Free to download · No sign-up · Your data stays on your iPhone',
    'hero.ratingLabel': 'ratings on the App Store',
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
    'how.title': 'How it works',
    'how.subtitle': 'From setup to full control in four steps.',
    'how.step1.title': 'Add your cards and accounts',
    'how.step1.desc': 'Add your credit cards with closing and due dates — MeuGrana handles the rest.',
    'how.step2.title': 'Log purchases and installments',
    'how.step2.desc': 'One-off, PIX, boleto or 12 monthly installments: log it in seconds and never miss a payment again.',
    'how.step3.title': 'See your upcoming bills',
    'how.step3.desc': "Know today what you'll pay over the next 12 months, with every installment already counted.",
    'how.step4.title': 'Track your month on the dashboard',
    'how.step4.desc': 'Income, expenses, installments and balance in one place — plus category charts to see where your money goes.',
    'screenshots.title': 'See the app in action',
    'screenshots.subtitle': 'Modern and intuitive interface designed to make financial control easy.',
    'screenshot1.alt': 'Dashboard — Monthly summary',
    'screenshot2.alt': 'Installments — Track your parcelas',
    'screenshot3.alt': 'Projection — Future bills',
    'screenshot4.alt': 'Cards — Your credit cards',
    'screenshot5.alt': 'Transactions — Spending history',
    'testimonials.title': 'What users are saying',
    'testimonials.subtitle': 'Real reviews from the App Store.',
    'premium.title': 'MeuGrana Premium',
    'premium.subtitle': 'Unlock the full power of the app.',
    'premium.feature1': 'Unlimited cards & installments',
    'premium.feature2': '12-month projection',
    'premium.feature3': 'Custom categories',
    'premium.feature4': 'Reports & trends',
    'premium.feature5': 'CSV export',
    'premium.feature6': 'Extra widgets',
    'premium.price': 'Starting at R$ 14.90/month',
    'faq.title': 'Frequently asked questions',
    'faq.subtitle': 'Everything you need to know before downloading.',
    'faq.q1.q': 'Is MeuGrana free? What\'s included in the free plan?',
    'faq.q1.a': 'Yes, MeuGrana is free to download and use. The free plan includes the monthly dashboard, transaction logging and installment tracking. Premium unlocks unlimited cards and installments, 12-month projection, custom categories, reports, CSV export and extra widgets — from R$ 14.90/month.',
    'faq.q2.q': 'Do I need to connect my bank?',
    'faq.q2.a': 'No. MeuGrana doesn\'t use Open Finance and never asks for access to your bank. You log your spending manually in seconds — and your data stays on your device.',
    'faq.q3.q': 'Is my data safe? Where is it stored?',
    'faq.q3.a': 'Yes. Your data is stored exclusively on your iPhone and, if you enable Premium sync, in your personal iCloud — which we cannot access. We don\'t collect personal data or use third-party analytics.',
    'faq.q4.q': 'Does it work offline?',
    'faq.q4.a': 'Yes. MeuGrana is offline-first: logging expenses, viewing installments and checking the dashboard all work without internet.',
    'faq.q5.q': 'What is the bill projection and how does it work?',
    'faq.q5.a': 'MeuGrana adds up all future installments on each card and shows what you\'ll pay on every bill for the next 12 months — before the bill closes, no surprises.',
    'faq.q6.q': 'Can I track multiple cards?',
    'faq.q6.a': 'Yes. Add your credit cards with closing and due dates and see installments and bills per card. Premium removes the card limit.',
    'faq.q7.q': 'Is there an Android version?',
    'faq.q7.a': 'Not yet. MeuGrana is currently iPhone (iOS) only.',
    'faq.q8.q': 'How do I cancel Premium?',
    'faq.q8.a': 'The subscription is managed by Apple. Cancel anytime in Settings → your name → Subscriptions, with no penalty.',
    'faq.q9.q': 'Can I export my data?',
    'faq.q9.a': 'Yes. With Premium you can export your transactions as CSV to use in spreadsheets or take anywhere.',
    'faq.q10.q': 'Does the app understand PIX, boleto and meal vouchers?',
    'faq.q10.a': 'Yes. PIX, boleto, meal vouchers and other Brazilian payment methods are native in MeuGrana — along with INSS, IRRF and 13th salary in your income profile.',
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

  // Literal per-language attributes (used for content that isn't in the
  // dictionary, e.g. testimonial quotes baked in at build time)
  document.querySelectorAll('[data-i18n-pt]').forEach(el => {
    const text = el.getAttribute(lang === 'pt' ? 'data-i18n-pt' : 'data-i18n-en');
    if (text) el.textContent = text;
  });

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

  // Swap the App Store badge for the localized version
  const badgeLang = lang === 'pt' ? 'pt-br' : 'en-us';
  document.querySelectorAll('img[data-badge]').forEach(img => {
    img.src = `https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/${badgeLang}?size=250x83`;
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
