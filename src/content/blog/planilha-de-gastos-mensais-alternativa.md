---
title: "Planilha de gastos mensais: como montar (e quando trocar por app)"
description: "Aprenda a montar uma planilha de gastos mensais em 10 minutos: colunas, abas e fórmulas. E veja com honestidade quando vale trocar por um app."
keyword: "planilha de gastos mensais"
publishDate: 2026-07-16
tags: ["planilha", "orçamento", "organização"]
relatedSlugs: ["melhor-app-para-controlar-parcelas", "como-organizar-compras-parceladas", "como-controlar-gastos-com-assinaturas", "como-anotar-gastos-no-celular"]
faq:
  - q: "É melhor controlar gastos por planilha ou por app?"
    a: >-
      Depende do seu perfil. Planilha ganha em flexibilidade e custo zero, e
      funciona bem para orçamentos simples e pagamentos à vista. App ganha
      quando há muitas parcelas, mais de um cartão e necessidade de registrar
      na hora da compra.
  - q: "Como registrar compras parceladas na planilha de gastos?"
    a: >-
      Crie uma coluna "Parcela" no formato x/y (ex.: 3/12) e repita a linha da
      compra em cada aba mensal até a última parcela, atualizando o número a
      cada mês. Funciona, mas é manual — e é o principal motivo de abandono das
      planilhas.
  - q: "Qual fórmula usar para somar gastos por categoria?"
    a: >-
      Use SOMASE (SUMIF no Excel em inglês): ela soma os valores da coluna
      Valor sempre que a coluna Categoria corresponde ao critério que você
      definir, como "alimentação". É a fórmula ideal para alimentar a aba de
      resumo mensal.
cover: "/images/blog/planilha-de-gastos-mensais-alternativa.jpg"
coverAlt: "Ilustração: notebook com planilha ao lado de um celular com app de finanças"
---

Uma planilha de gastos mensais continua sendo uma das formas mais baratas e flexíveis de organizar o dinheiro: basta o Google Sheets ou o Excel, sem assinatura, com tudo do seu jeito. Neste guia, você aprende a criar a sua do zero em uns 10 minutos — e depois vê, com honestidade, quando a planilha funciona muito bem e quando ela começa a quebrar (spoiler: parcelas no cartão são o calcanhar de Aquiles).

## Como montar sua planilha de gastos mensais do zero

Não precisa de modelo pronto. Abra uma planilha em branco no Google Sheets ou no Excel e crie a estrutura abaixo.

### As colunas essenciais

Na primeira linha, crie estes cabeçalhos:

- **Data** — o dia da compra ou do pagamento.
- **Descrição** — o que foi ("mercado", "tênis", "conta de luz").
- **Categoria** — alimentação, transporte, casa, lazer, saúde. Escolha de 6 a 10 categorias e não invente mais que isso, senão o resumo vira uma bagunça.
- **Valor** — quanto custou. Use sempre número, sem "R$" digitado junto (formate a coluna como moeda).
- **Forma de pagamento** — Pix, débito, dinheiro ou o nome do cartão de crédito.
- **Parcela** — se for compra parcelada, anote no formato "x/y" (por exemplo, "2/10" para a segunda de dez parcelas).

Dica: use a validação de dados (lista suspensa) nas colunas de categoria e forma de pagamento, para não acabar com "Mercado", "mercado" e "MERCADO" como três categorias diferentes quebrando suas fórmulas.

### As abas: uma por mês + um resumo

A estrutura mais simples que funciona:

- **Uma aba por mês** ("Janeiro", "Fevereiro"...), cada uma com as mesmas colunas.
- **Uma aba "Resumo"**, que puxa os totais de cada mês e mostra o ano inteiro de uma vez.

No Resumo, monte uma tabela com os meses nas linhas e as categorias nas colunas. Assim você enxerga de cara se o gasto com delivery está subindo ou se dezembro estourou por causa dos presentes.

### Fórmulas que fazem o trabalho pesado

Três fórmulas resolvem 90% do que você precisa:

- **SOMA** para o total do mês: some a coluna inteira de valores da aba do mês.
- **SOMASE (SUMIF)** para o total por categoria: a fórmula soma apenas os valores cuja categoria bate com o critério. Na prática: "some a coluna Valor sempre que a coluna Categoria for igual a 'alimentação'". É essa fórmula que alimenta sua aba Resumo.
- **SOMASE por forma de pagamento** para saber quanto vai cair na fatura de cada cartão: mesmo raciocínio, mas usando a coluna Forma de pagamento como critério.

Se quiser um passo a mais, selecione a tabela do Resumo e insira um gráfico de pizza ou de colunas — o Google Sheets e o Excel montam na hora.

### Como registrar parcelas na planilha (o ponto fraco)

Aqui a coisa complica. Digamos que você parcelou um celular em 10x de R$ 250 no cartão. Na planilha, você tem duas opções — e as duas dão trabalho:

1. **Repetir a linha em cada mês futuro.** "Celular — 1/10" em julho, "2/10" em agosto, e assim por diante: 10 linhas, em 10 abas diferentes, criadas manualmente (ou copiadas, ajustando o número da parcela toda vez).
2. **Registrar só quando a fatura chega.** Menos trabalho por compra, mas você perde a visão do futuro: não dá para saber quanto já está comprometido nos próximos meses.

E tem um agravante: cada cartão tem **data de fechamento diferente**. Uma compra do dia 28 pode cair na fatura deste mês num cartão e só na do mês seguinte no outro. A planilha não sabe disso — quem calcula é você, compra por compra.

![Mulher brasileira preocupada olhando projeções financeiras no celular, com caderno e calculadora na mesa](/images/blog/planilha-inline.jpg)

Com duas ou três parcelas ativas, dá para administrar. Com dez ou quinze compras parceladas espalhadas em dois cartões, a manutenção vira um trabalho mensal de verdade — e é aí que a maioria das planilhas morre abandonada.

## Quando a planilha funciona (e quando ela quebra)

Sendo honesto com os dois lados:

**A planilha funciona bem quando:**

- Seu orçamento é simples: salário entra, contas fixas saem, poucas compras no crédito.
- Você paga quase tudo à vista, no Pix ou no débito.
- Você gosta de mexer em planilha — montar fórmulas e gráficos é parte do prazer.
- Você quer controle total do formato: colunas, categorias e relatórios do seu jeito.

**A planilha quebra quando:**

- Você tem **parcelas em vários cartões**, com fechamentos diferentes. Cada compra parcelada vira uma tarefa de manutenção que se repete por meses.
- Você quer **projetar os meses futuros** ("quanto da minha renda já está comprometida em outubro?"). Dá para montar, mas exige fórmulas e disciplina que a maioria não mantém.
- Você precisa **registrar na hora da compra**. Editar planilha no celular, na fila do caixa, é lento — o registro fica "para depois" e depois vira nunca.
- A **disciplina de manutenção** falha. A planilha não avisa nada: se você parar de preencher por duas semanas, ela simplesmente fica desatualizada em silêncio.

Se você se reconheceu mais na segunda lista, não é falta de força de vontade — é a ferramenta errada para o seu caso.

## A alternativa sem planilha: um app feito para isso

O [MeuGrana](https://apps.apple.com/br/app/meugrana-parcelas-finan%C3%A7as/id6759177555) é um app para iPhone, grátis para baixar, criado exatamente para os pontos onde a planilha quebra:

- **Registro em segundos, no celular.** Você anota a compra na hora, em vez de acumular notinhas para lançar "quando sentar no computador".
- **Parcelas terminam sozinhas.** Você registra "10x de R$ 250" uma única vez; o app distribui as parcelas nos meses certos e encerra tudo automaticamente quando a última cai. Nada de copiar linha e trocar "3/10" por "4/10".
- **Projeção das próximas faturas.** Você vê hoje quanto já está comprometido nos meses seguintes, cartão por cartão — a projeção completa de 12 meses faz parte do Premium.
- **Gráficos prontos e alertas**, sem montar fórmula nenhuma.
- **Funciona offline e os dados ficam no aparelho** — o app não pede para conectar sua conta bancária.

Os recursos essenciais são gratuitos; quem quiser mais tem o Premium por pagamento único de R$ 19,90 (acesso vitalício).

E vale repetir: se você gosta de planilha e seu orçamento é simples, a planilha continua ótima — ela dá um controle total do formato que nenhum app oferece. A troca faz sentido principalmente para quem vive de compras parceladas e cansou da manutenção manual.

## Planilha vs. app: comparação direta

| Critério | Planilha | App (MeuGrana) |
|---|---|---|
| Custo para começar | Grátis | Grátis para baixar |
| Liberdade de formato | Total | Estrutura pronta |
| Registrar na hora da compra | Trabalhoso no celular | Segundos |
| Parcelas | Linhas repetidas, atualização manual | Terminam sozinhas no mês certo |
| Fechamento de cada cartão | Você calcula | O app calcula |
| Projeção de meses futuros | Exige fórmulas e disciplina | Pronta no app |
| Gráficos | Você monta | Prontos |
| Alertas | Não tem | Tem |
| Privacidade | Depende de onde salva | Dados no aparelho, sem conectar banco |

## Conclusão

Montar uma planilha de gastos mensais é rápido: seis colunas, uma aba por mês, uma aba de resumo e o SOMASE fazendo o trabalho por categoria. Para orçamentos simples e pagamentos à vista, é uma solução excelente e gratuita. O problema são as parcelas: repetir linhas, acompanhar fechamentos diferentes e projetar meses futuros exige uma manutenção que quase ninguém sustenta. Se esse é o seu caso, um app como o MeuGrana faz essa parte chata sozinho — e você gasta seu tempo decidindo, não digitando.
