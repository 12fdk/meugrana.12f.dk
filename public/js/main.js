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
    'personas.title': 'Para quem é o MeuGrana',
    'personas.subtitle': 'Se você se reconhecer aqui, o app é para você.',
    'personas.p1.title': 'Parcela tudo e perdeu a conta',
    'personas.p1.desc': 'Veja todas as parcelas ativas, quanto falta e quando cada uma termina — em um só lugar.',
    'personas.p2.title': 'Tem 2+ cartões de crédito',
    'personas.p2.desc': 'Fatura projetada por cartão, com o fechamento e o vencimento de cada um.',
    'personas.p3.title': 'Leva susto quando a fatura fecha',
    'personas.p3.desc': 'Saiba o valor da fatura antes de ela fechar, com alertas de fechamento e vencimento.',
    'personas.p4.title': 'Casais organizando as contas',
    'personas.p4.desc': 'Registrem os gastos em segundos e vejam juntos para onde vai o dinheiro da casa.',
    'personas.p5.title': 'MEI ou freelancer',
    'personas.p5.desc': 'Dashboard mensal para meses bons e ruins — com INSS e IRRF calculados no perfil de renda.',
    'personas.p6.title': 'Quer sair do rotativo',
    'personas.p6.desc': 'Enxergue o tamanho real do compromisso mensal e planeje os próximos meses com clareza.',
    'vs.title': 'MeuGrana vs a planilha',
    'vs.subtitle': 'Você não precisa de mais uma aba no Excel.',
    'vs.sheet.label': 'A planilha',
    'vs.app.r1': 'Parcelas terminam sozinhas no mês certo',
    'vs.sheet.r1': 'Fórmulas e datas atualizadas na mão',
    'vs.app.r2': 'Projeção de 12 meses automática',
    'vs.sheet.r2': 'Copiar e colar colunas todo mês',
    'vs.app.r3': 'Compra registrada em 5 segundos, no celular',
    'vs.sheet.r3': 'Abrir o Excel quando lembrar',
    'vs.app.r4': 'Gráficos por categoria prontos',
    'vs.sheet.r4': 'Montar tabela dinâmica',
    'vs.app.r5': 'Alertas de fechamento e vencimento',
    'vs.sheet.r5': 'Susto quando a fatura chega',
    'vs.app.r6': 'Dados no iPhone, com backup no iCloud',
    'vs.sheet.r6': 'Arquivo perdido no Drive',
    'pricing.title': 'Comece grátis. Evolua quando quiser.',
    'pricing.subtitle': 'O plano grátis já organiza suas parcelas. O Premium desbloqueia o controle total.',
    'pricing.free.name': 'Grátis',
    'pricing.free.price': 'R$ 0',
    'pricing.free.tagline': 'Para organizar o dia a dia',
    'pricing.free.f1': 'Dashboard com resumo do mês',
    'pricing.free.f2': 'Registro rápido de transações',
    'pricing.free.f3': 'Acompanhamento de parcelas por cartão',
    'pricing.free.f4': 'Projeção das próximas faturas',
    'pricing.free.f5': 'Gráficos de gastos por categoria',
    'pricing.free.f6': 'Alertas de fechamento e vencimento',
    'pricing.free.f7': 'PIX, boleto e vale-refeição',
    'pricing.free.f8': '100% offline — dados só no seu iPhone',
    'pricing.premium.name': 'Premium',
    'pricing.premium.price': 'Pagamento único de R$ 19,90',
    'pricing.premium.tagline': 'Para controle total',
    'pricing.premium.f1': 'Tudo do plano grátis',
    'pricing.premium.f2': 'Cartões e parcelas ilimitados',
    'pricing.premium.f3': 'Projeção completa de 12 meses',
    'pricing.premium.f4': 'Categorias personalizadas',
    'pricing.premium.f5': 'Relatórios e tendências',
    'pricing.premium.f6': 'Widgets na tela inicial',
    'pricing.premium.f7': 'Exportação CSV',
    'pricing.premium.f8': 'Sincronização via iCloud',
    'pricing.premium.note': 'Compra única pela App Store — acesso vitalício, sem mensalidade e sem assinatura para cancelar.',
    'faq.title': 'Perguntas frequentes',
    'faq.subtitle': 'Tudo que você precisa saber antes de baixar.',
    'faq.q1.q': 'O MeuGrana é grátis? O que está incluído no plano gratuito?',
    'faq.q1.a': 'Sim, o MeuGrana é grátis para baixar e usar. O plano gratuito inclui o dashboard mensal, registro de transações e acompanhamento de parcelas. O Premium desbloqueia cartões e parcelas ilimitados, projeção de 12 meses, categorias personalizadas, relatórios, exportação CSV e widgets extras — pagamento único de R$ 19,90 (acesso vitalício).',
    'faq.q13.q': 'Existe teste grátis do Premium?',
    'faq.q13.a': 'Existe. Ao instalar o app você começa com 30 dias de Premium liberado — sem cartão, sem cobrança e sem renovação automática. Quando o período termina, nada é cobrado e nada some: o app continua funcionando no plano gratuito, com todos os seus lançamentos no lugar. Se quiser manter os recursos Premium, é uma compra única de R$ 19,90.',
    'faq.q8.q': 'O Premium é assinatura? Preciso cancelar depois?',
    'faq.q8.a': 'Não é assinatura. O Premium do MeuGrana é uma compra única de R$ 19,90 pela App Store: você paga uma vez, o acesso é vitalício e não há nada para cancelar depois. Versões antigas do app chegaram a oferecer planos mensal e anual — quem assinou naquela época mantém o acesso e pode cancelar quando quiser em Ajustes → seu nome → Assinaturas.',
    'faq.q14.q': 'Preciso criar conta, informar e-mail ou CPF?',
    'faq.q14.a': 'Não. Você baixa o app e já começa a usar — sem cadastro, sem e-mail, sem CPF e sem senha. Não existe uma “conta MeuGrana”: o app é seu e os dados são seus.',
    'faq.q2.q': 'Preciso conectar meu banco?',
    'faq.q2.a': 'Não. O MeuGrana não usa Open Finance nem pede acesso ao seu banco. Você registra seus gastos manualmente em segundos — e seus dados ficam só no seu aparelho.',
    'faq.q4.q': 'Funciona offline?',
    'faq.q4.a': 'Sim. O MeuGrana é offline-first: registrar gastos, ver parcelas e consultar o dashboard funciona sem internet.',
    'faq.q3.q': 'Meus dados ficam seguros? Onde são armazenados?',
    'faq.q3.a': 'Seus lançamentos, cartões e informações de salário ficam armazenados no seu iPhone e, se você ativar a sincronização Premium, no seu iCloud pessoal — a que nós não temos acesso. Nenhum dado financeiro seu é enviado para os nossos servidores. Coletamos apenas estatísticas de uso anônimas (quais telas são abertas, por exemplo), que não incluem valores, nomes de lojas nem nada que identifique você.',
    'faq.q5.q': 'O que é a projeção de faturas e como funciona?',
    'faq.q5.a': 'O MeuGrana soma todas as parcelas futuras de cada cartão e mostra quanto você vai pagar em cada fatura nos próximos 12 meses — antes de a fatura fechar, sem surpresas.',
    'faq.q15.q': 'Como o app sabe em qual fatura cada parcela vai cair?',
    'faq.q15.a': 'Pelo dia de fechamento do cartão, que você informa ao cadastrá-lo. Compra feita antes do fechamento entra na fatura que já está aberta; feita depois, escorrega para a fatura seguinte. O MeuGrana aplica essa mesma regra a cada parcela, mês a mês — é por isso que a projeção bate com o que o banco cobra, em vez de simplesmente dividir o valor pelos meses do calendário.',
    'faq.q16.q': 'E se o parcelamento tiver juros? O que eu lanço no app?',
    'faq.q16.a': 'Lance o valor total que você vai realmente pagar, ou seja, a soma de todas as parcelas — não o preço à vista. Assim cada parcela fica com o valor certo e a projeção das próximas faturas sai correta. Vale a dica: se a soma das parcelas for maior que o preço à vista, o parcelamento tem juros embutidos, mesmo quando é anunciado como “sem juros”.',
    'faq.q17.q': 'Dá para ver quanto do limite do cartão as parcelas já comprometem?',
    'faq.q17.a': 'Dá. Ao cadastrar o cartão você informa o limite, e o MeuGrana mostra quanto da fatura já está tomado pelas parcelas em andamento e quanto ainda sobra. Costuma ser o número que mais assusta quem parcela muito: boa parte do limite do mês que vem já está gasta antes de o mês começar.',
    'faq.q6.q': 'Posso acompanhar vários cartões?',
    'faq.q6.a': 'Sim. Adicione seus cartões de crédito com dia de fechamento e vencimento e veja parcelas e faturas por cartão. No Premium, cartões ilimitados.',
    'faq.q18.q': 'O que acontece quando eu termino de pagar um parcelamento?',
    'faq.q18.a': 'O MeuGrana avança as parcelas sozinho conforme os meses passam — você não precisa marcar nada como pago. Na última parcela o app comemora com você, o parcelamento some das projeções seguintes e as faturas futuras ficam mais leves na hora. No plano gratuito, ele também libera espaço na sua cota de parcelamentos ativos.',
    'faq.q10.q': 'O app entende PIX, boleto e vale-refeição?',
    'faq.q10.a': 'Sim. PIX, boleto, vale-refeição e outros métodos de pagamento brasileiros são nativos no MeuGrana — junto com INSS, IRRF e 13º salário no perfil de renda.',
    'faq.q19.q': 'Dá para lançar um gasto a partir de um print ou da foto do comprovante?',
    'faq.q19.a': 'Dá. Compartilhe a imagem, o PDF ou o texto do comprovante com o MeuGrana pelo menu de compartilhamento do iPhone: o app lê o valor e o nome do estabelecimento e já abre o lançamento preenchido para você conferir e salvar. O reconhecimento acontece inteiro dentro do aparelho — a imagem não é enviada para lugar nenhum.',
    'faq.q20.q': 'Como registro contas fixas, como aluguel, luz e academia?',
    'faq.q20.a': 'Marque o lançamento como recorrente e escolha o dia do mês. O MeuGrana repete a conta automaticamente todos os meses e pode te lembrar quando a data chegar, então aluguel, luz, internet e mensalidade da academia entram no resumo do mês sem você digitar tudo de novo.',
    'faq.q21.q': 'Dá para controlar gastos com assinaturas, tipo Netflix e Spotify?',
    'faq.q21.a': 'Dá — e costuma ser a maior surpresa do mês. Cadastre cada assinatura como um gasto recorrente na categoria Streaming e o app soma tudo: aquelas mensalidades de R$ 20 ou R$ 50 que ninguém lembra viram um número só, e aí fica fácil decidir o que vale a pena manter.',
    'faq.q11.q': 'Lancei um gasto no mês errado. Dá para apagar ou corrigir?',
    'faq.q11.a': 'Dá sim. Você pode apagar qualquer lançamento a qualquer momento — mas quase sempre não precisa: é só editar o lançamento e mudar a data. Todo gasto, receita ou compra parcelada tem uma data que você define, e é ela que decide em qual mês ele aparece. Corrigiu a data, o valor sai do mês errado e entra no mês certo automaticamente.',
    'faq.q12.q': 'Posso lançar gastos de meses anteriores para ter um panorama do ano?',
    'faq.q12.a': 'Pode. Ao registrar um gasto ou uma receita você escolhe a data — inclusive de meses que já passaram. O lançamento entra no mês correspondente e o dashboard e os gráficos por categoria daquele mês são recalculados. Assim dá para preencher o histórico do ano aos poucos e comparar os meses; no Premium, os relatórios e tendências reúnem tudo em uma visão anual.',
    'faq.q22.q': 'O app calcula meu salário líquido, com INSS e IRRF?',
    'faq.q22.a': 'Calcula. No perfil de renda você informa o salário bruto e o MeuGrana desconta INSS e IRRF pelas faixas vigentes, soma vale-refeição, vale-transporte e outros benefícios e mostra quanto de fato entra na sua conta. Dá para incluir o 13º salário e escolher se ele cai de uma vez em dezembro ou dividido entre novembro e dezembro.',
    'faq.q23.q': 'O MeuGrana avisa antes do fechamento e do vencimento da fatura?',
    'faq.q23.a': 'Avisa. Você recebe um lembrete três dias antes de cada cartão fechar — a última chance de segurar uma compra para a fatura seguinte —, um aviso quando o vencimento se aproxima e outro no dia de pagar. O app também avisa quando um mês à frente vem pesado demais e quando um parcelamento chega ao fim. Todos os lembretes são opcionais e configuráveis.',
    'faq.q24.q': 'Tem widget para a tela de início?',
    'faq.q24.a': 'Tem. Um widget mostra o resumo do mês (o que entrou, o que saiu e o que sobrou) e outro mostra a próxima fatura a vencer, direto na tela de início ou na tela de bloqueio. O plano gratuito inclui o widget de resumo; o Premium libera todos.',
    'faq.q25.q': 'Tem modo escuro?',
    'faq.q25.a': 'Tem. Nos ajustes do app, o Premium libera a escolha entre claro, escuro e automático (acompanhando a aparência do iPhone).',
    'faq.q9.q': 'Posso exportar meus dados?',
    'faq.q9.a': 'Sim. Com o Premium você exporta suas transações em CSV para usar em planilhas ou levar para onde quiser.',
    'faq.q26.q': 'Dá para importar meus dados de outro app ou de uma planilha?',
    'faq.q26.a': 'Ainda não existe importação automática. Na prática, quase ninguém precisa: comece cadastrando os cartões e só os parcelamentos que ainda estão correndo — são alguns minutos de trabalho e isso já reconstrói as suas próximas 12 faturas. O histórico antigo você preenche aos poucos, se quiser. No sentido contrário, o Premium exporta tudo em CSV para a planilha.',
    'faq.q27.q': 'Comprei o Premium. Vale nos meus outros iPhones? E se eu trocar de aparelho?',
    'faq.q27.a': 'Vale, desde que você use o mesmo ID Apple: em Ajustes → Restaurar compras o acesso volta sem pagar de novo. Para levar junto os lançamentos, ative a sincronização via iCloud (Premium) — os dados viajam pela sua conta pessoal do iCloud, nunca pelos nossos servidores.',
    'faq.q28.q': 'O MeuGrana substitui a planilha de gastos mensais?',
    'faq.q28.a': 'Substitui — e sem a parte chata. Na planilha, você mantém fórmulas, abas e a projeção das parcelas na unha, e quase sempre para de atualizar depois de algumas semanas. O MeuGrana já nasce sabendo o que é parcela, fatura e dia de fechamento, e registra um gasto em segundos no celular, na hora da compra. Se ainda quiser sua planilha para outra coisa, o Premium exporta tudo em CSV.',
    'faq.q29.q': 'Qual a diferença entre o MeuGrana e apps como Mobills ou Organizze?',
    'faq.q29.a': 'São apps mais amplos, com conexão bancária e cobrança por assinatura — e atendem bem quem quer isso. O MeuGrana foi construído em volta de um problema específico: as parcelas. Ele projeta a fatura de cada cartão pelos próximos 12 meses, não pede acesso ao seu banco, funciona offline e custa uma compra única de R$ 19,90 em vez de mensalidade. Se você quer o extrato bancário importado automaticamente, eles resolvem melhor; se você quer saber quanto das suas próximas faturas já está comprometido, o MeuGrana resolve melhor.',
    'faq.q7.q': 'Tem versão para Android?',
    'faq.q7.a': 'Ainda não. O MeuGrana é exclusivo para iPhone (iOS 17 ou superior) no momento.',
    'cta.title': 'Comece a controlar seu dinheiro hoje',
    'cta.subtitle': 'Baixe o MeuGrana gratuitamente e veja para onde vai cada real.',
    'cta.button': 'Baixar na App Store',
    'sticky.tagline': 'Parcelas sob controle',
    'sticky.cta': 'Baixar grátis',
    'footer.madein': 'Feito com carinho na Dinamarca 🇩🇰',
    'footer.app': 'App',
    'footer.legal': 'Legal',
    'footer.contactTitle': 'Contato',
    'footer.support': 'Suporte',
    'footer.terms': 'Termos de Uso',
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
    'personas.title': 'Who MeuGrana is for',
    'personas.subtitle': 'If you see yourself here, the app is for you.',
    'personas.p1.title': 'You installment everything and lost count',
    'personas.p1.desc': 'See every active installment, what is left and when each one ends — in one place.',
    'personas.p2.title': 'You juggle 2+ credit cards',
    'personas.p2.desc': 'Projected bill per card, with each card\'s closing and due dates.',
    'personas.p3.title': 'The closed bill always surprises you',
    'personas.p3.desc': 'Know your bill amount before it closes, with closing and due-date alerts.',
    'personas.p4.title': 'Couples organizing the bills',
    'personas.p4.desc': 'Log expenses in seconds and see together where the household money goes.',
    'personas.p5.title': 'Self-employed or freelancer',
    'personas.p5.desc': 'A monthly dashboard for good and bad months — with INSS and IRRF handled in your income profile.',
    'personas.p6.title': 'You want out of revolving debt',
    'personas.p6.desc': 'See the real size of your monthly commitment and plan the coming months with clarity.',
    'vs.title': 'MeuGrana vs the spreadsheet',
    'vs.subtitle': "You don't need another Excel tab.",
    'vs.sheet.label': 'The spreadsheet',
    'vs.app.r1': 'Installments end on the right month, automatically',
    'vs.sheet.r1': 'Formulas and dates updated by hand',
    'vs.app.r2': 'Automatic 12-month projection',
    'vs.sheet.r2': 'Copy-pasting columns every month',
    'vs.app.r3': 'Log a purchase in 5 seconds, on your phone',
    'vs.sheet.r3': 'Opening Excel whenever you remember',
    'vs.app.r4': 'Ready-made category charts',
    'vs.sheet.r4': 'Building pivot tables',
    'vs.app.r5': 'Closing and due-date alerts',
    'vs.sheet.r5': 'Bill shock when the statement lands',
    'vs.app.r6': 'Data on your iPhone, backed up to iCloud',
    'vs.sheet.r6': 'A file lost somewhere in Drive',
    'pricing.title': 'Start free. Upgrade when you want.',
    'pricing.subtitle': 'The free plan already organizes your installments. Premium unlocks full control.',
    'pricing.free.name': 'Free',
    'pricing.free.price': 'R$ 0',
    'pricing.free.tagline': 'For everyday organizing',
    'pricing.free.f1': 'Dashboard with monthly summary',
    'pricing.free.f2': 'Quick transaction logging',
    'pricing.free.f3': 'Installment tracking per card',
    'pricing.free.f4': 'Upcoming bill projection',
    'pricing.free.f5': 'Spending charts by category',
    'pricing.free.f6': 'Closing and due-date alerts',
    'pricing.free.f7': 'PIX, boleto and meal vouchers',
    'pricing.free.f8': '100% offline — data stays on your iPhone',
    'pricing.premium.name': 'Premium',
    'pricing.premium.price': 'One-time payment of R$ 19.90',
    'pricing.premium.tagline': 'For full control',
    'pricing.premium.f1': 'Everything in the free plan',
    'pricing.premium.f2': 'Unlimited cards & installments',
    'pricing.premium.f3': 'Full 12-month projection',
    'pricing.premium.f4': 'Custom categories',
    'pricing.premium.f5': 'Reports & trends',
    'pricing.premium.f6': 'Home screen widgets',
    'pricing.premium.f7': 'CSV export',
    'pricing.premium.f8': 'iCloud sync',
    'pricing.premium.note': 'One-time App Store purchase — lifetime access, no monthly fee, no subscription to cancel.',
    'faq.title': 'Frequently asked questions',
    'faq.subtitle': 'Everything you need to know before downloading.',
    'faq.q1.q': "Is MeuGrana free? What's included in the free plan?",
    'faq.q1.a': 'Yes, MeuGrana is free to download and use. The free plan includes the monthly dashboard, transaction logging and installment tracking. Premium unlocks unlimited cards and installments, 12-month projection, custom categories, reports, CSV export and extra widgets — a one-time payment of R$ 19.90 (lifetime access).',
    'faq.q13.q': 'Is there a free trial of Premium?',
    'faq.q13.a': "There is. When you install the app you start with 30 days of Premium unlocked — no card, no charge, no auto-renewal. When it ends nothing is billed and nothing disappears: the app keeps working on the free plan with all your entries intact. If you want to keep the Premium features, it's a one-time R$ 19.90 purchase.",
    'faq.q8.q': 'Is Premium a subscription? Do I have to cancel it later?',
    'faq.q8.a': "It's not a subscription. MeuGrana Premium is a one-time R$ 19.90 App Store purchase: you pay once, access is for life, and there's nothing to cancel later. Older versions of the app did offer monthly and annual plans — anyone who subscribed back then keeps their access and can cancel anytime in Settings → your name → Subscriptions.",
    'faq.q14.q': 'Do I need to create an account or give my email?',
    'faq.q14.a': 'No. You download the app and start using it right away — no sign-up, no email, no ID number, no password. There is no “MeuGrana account”: the app is yours and so is the data.',
    'faq.q2.q': 'Do I need to connect my bank?',
    'faq.q2.a': "No. MeuGrana doesn't use Open Finance and never asks for access to your bank. You log your spending manually in seconds — and your data stays on your device.",
    'faq.q4.q': 'Does it work offline?',
    'faq.q4.a': 'Yes. MeuGrana is offline-first: logging expenses, viewing installments and checking the dashboard all work without internet.',
    'faq.q3.q': 'Is my data safe? Where is it stored?',
    'faq.q3.a': 'Your entries, cards and salary details are stored on your iPhone and, if you enable Premium sync, in your personal iCloud — which we cannot access. None of your financial data is sent to our servers. We only collect anonymous usage statistics (which screens get opened, for example), which contain no amounts, no store names and nothing that identifies you.',
    'faq.q5.q': 'What is the bill projection and how does it work?',
    'faq.q5.a': "MeuGrana adds up all future installments on each card and shows what you'll pay on every bill for the next 12 months — before the bill closes, no surprises.",
    'faq.q15.q': 'How does the app know which bill each installment lands on?',
    'faq.q15.a': "From the card's closing day, which you set when you add the card. A purchase made before closing goes on the bill that's already open; after closing, it slides to the next one. MeuGrana applies that same rule to every parcela, month by month — which is why the projection matches what the bank actually charges instead of just splitting the amount across calendar months.",
    'faq.q16.q': 'What if the installment plan has interest? What do I enter?',
    'faq.q16.a': "Enter the total you'll actually pay — the sum of all the instalments, not the cash price. That way each parcela carries the right amount and the projection of your next bills is correct. A tip: if the sum of the instalments is higher than the cash price, the plan has interest baked in, even when it's advertised as interest-free.",
    'faq.q17.q': 'Can I see how much of my card limit is already taken by instalments?',
    'faq.q17.a': "Yes. You enter the card's limit when you add it, and MeuGrana shows how much of the bill is already claimed by running instalments and how much is left. It's usually the most sobering number for heavy instalment users: a big share of next month's limit is spent before the month even starts.",
    'faq.q6.q': 'Can I track multiple cards?',
    'faq.q6.a': 'Yes. Add your credit cards with closing and due dates and see installments and bills per card. Premium removes the card limit.',
    'faq.q18.q': 'What happens when I finish paying off an instalment plan?',
    'faq.q18.a': 'MeuGrana advances the instalments on its own as the months pass — you never have to mark anything as paid. On the final parcela the app celebrates with you, the plan drops out of the following projections and your future bills get lighter straight away. On the free plan it also frees up a slot in your active-instalment allowance.',
    'faq.q10.q': 'Does the app understand PIX, boleto and meal vouchers?',
    'faq.q10.a': 'Yes. PIX, boleto, meal vouchers and other Brazilian payment methods are native in MeuGrana — along with INSS, IRRF and 13th salary in your income profile.',
    'faq.q19.q': 'Can I log an expense from a screenshot or a photo of the receipt?',
    'faq.q19.a': 'You can. Share the image, PDF or text with MeuGrana from the iPhone share sheet: the app reads the amount and the merchant name and opens a pre-filled entry for you to check and save. Recognition happens entirely on the device — the image is never uploaded anywhere.',
    'faq.q20.q': 'How do I log fixed bills like rent, electricity and the gym?',
    'faq.q20.a': 'Mark the entry as recurring and pick the day of the month. MeuGrana repeats it automatically every month and can remind you when the date comes around, so rent, power, internet and the gym membership show up in your monthly summary without you retyping them.',
    'faq.q21.q': 'Can I keep track of subscriptions like Netflix and Spotify?',
    'faq.q21.a': "You can — and it's usually the month's biggest surprise. Add each subscription as a recurring expense in the Streaming category and the app totals them up: all those forgotten R$ 20 and R$ 50 charges become a single number, and it gets easy to decide what's worth keeping.",
    'faq.q11.q': 'I logged an expense in the wrong month. Can I delete or fix it?',
    'faq.q11.a': "Yes. You can delete any entry at any time — but you usually don't need to: just edit the entry and change its date. Every expense, income or installment purchase has a date you set, and that date decides which month it shows up in. Fix the date and the amount moves out of the wrong month and into the right one automatically.",
    'faq.q12.q': 'Can I log expenses from previous months to get a picture of the whole year?',
    'faq.q12.a': "Yes. When you log an expense or income you pick the date — including months that have already passed. The entry lands in that month and the dashboard and category charts for it are recalculated. That way you can fill in the year's history bit by bit and compare months; with Premium, reports and trends pull it all into a yearly view.",
    'faq.q22.q': 'Does the app work out my take-home pay, with INSS and IRRF?',
    'faq.q22.a': 'It does. In the income profile you enter your gross salary and MeuGrana deducts INSS and IRRF using the current brackets, adds meal and transport vouchers and other benefits, and shows what actually lands in your account. You can include the 13th salary and choose whether it arrives as a December lump sum or split across November and December.',
    'faq.q23.q': 'Does MeuGrana warn me before the card closes and before the bill is due?',
    'faq.q23.a': 'It does. You get a reminder three days before each card closes — your last chance to hold a purchase for the next bill — a heads-up as the due date approaches, and one on the day itself. The app also warns you when a month ahead is looking unusually heavy and when an instalment plan is about to finish. Every reminder is optional and configurable.',
    'faq.q24.q': 'Is there a home screen widget?',
    'faq.q24.a': "Yes. One widget shows the month summary (what came in, what went out, what's left) and another shows the next bill due, right on your home or lock screen. The free plan includes the summary widget; Premium unlocks all of them.",
    'faq.q25.q': 'Is there a dark mode?',
    'faq.q25.a': "There is. In the app's settings, Premium unlocks the choice between light, dark and automatic (following your iPhone's appearance).",
    'faq.q9.q': 'Can I export my data?',
    'faq.q9.a': 'Yes. With Premium you can export your transactions as CSV to use in spreadsheets or take anywhere.',
    'faq.q26.q': 'Can I import my data from another app or a spreadsheet?',
    'faq.q26.a': "There's no automatic import yet. In practice hardly anyone needs one: start by adding your cards and only the instalment plans still running — a few minutes of work already rebuilds your next 12 bills. You can fill in older history gradually if you want. In the other direction, Premium exports everything as CSV for your spreadsheet.",
    'faq.q27.q': 'I bought Premium. Does it work on my other iPhones? What if I change device?',
    'faq.q27.a': 'It does, as long as you use the same Apple ID: Settings → Restore purchases brings your access back at no extra cost. To bring your entries along too, turn on iCloud sync (Premium) — the data travels through your personal iCloud account, never through our servers.',
    'faq.q28.q': 'Does MeuGrana replace my monthly expenses spreadsheet?',
    'faq.q28.a': 'It does — without the tedious part. A spreadsheet means maintaining formulas, tabs and the instalment projection by hand, and most people stop updating it within weeks. MeuGrana already understands instalments, bills and closing days, and logs an expense in seconds on your phone, right at the checkout. If you still want your spreadsheet for something else, Premium exports everything as CSV.',
    'faq.q29.q': 'How is MeuGrana different from apps like Mobills or Organizze?',
    'faq.q29.a': "They're broader apps, with bank connections and subscription pricing — and they serve people who want that well. MeuGrana was built around one specific problem: instalments. It projects each card's bill for the next 12 months, never asks for bank access, works offline and costs a one-time R$ 19.90 instead of a monthly fee. If you want your bank statement imported automatically, they do it better; if you want to know how much of your next bills is already committed, MeuGrana does.",
    'faq.q7.q': 'Is there an Android version?',
    'faq.q7.a': 'Not yet. MeuGrana is currently iPhone only (iOS 17 or later).',
    'cta.title': 'Start controlling your money today',
    'cta.subtitle': 'Download MeuGrana for free and see where every real goes.',
    'cta.button': 'Download on the App Store',
    'sticky.tagline': 'Installments under control',
    'sticky.cta': 'Get it free',
    'footer.madein': 'Made with care in Denmark 🇩🇰',
    'footer.app': 'App',
    'footer.legal': 'Legal',
    'footer.contactTitle': 'Contact',
    'footer.support': 'Support',
    'footer.terms': 'Terms of Use',
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
    img.src = `/images/screenshots/${screenshotLang}/screenshot-${num}.png`;
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

// Sticky download bar: show after scrolling past the hero, hide over the
// footer, dismissible for the session
function setupStickyDownload() {
  const bar = document.getElementById('sticky-download');
  if (!bar) return;
  if (sessionStorage.getItem('meugrana-sticky-dismissed')) return;

  let footerVisible = false;
  let dismissed = false;

  const update = () => {
    const show = !dismissed && !footerVisible && window.scrollY > 500;
    bar.classList.toggle('visible', show);
  };

  const footer = document.querySelector('.footer');
  if (footer && 'IntersectionObserver' in window) {
    new IntersectionObserver((entries) => {
      footerVisible = entries[0].isIntersecting;
      update();
    }).observe(footer);
  }

  window.addEventListener('scroll', update, { passive: true });

  const close = document.getElementById('sticky-download-close');
  if (close) {
    close.addEventListener('click', () => {
      dismissed = true;
      sessionStorage.setItem('meugrana-sticky-dismissed', '1');
      update();
    });
  }

  update();
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  const lang = detectLanguage();
  setLanguage(lang);
  setupScrollAnimations();
  setupSmoothScroll();
  setupMobileNav();
  setupStickyDownload();
});
