---
title: "DeepSeek V4.1 Flash-1017: o Que Mudou na Atualização e na API de Busca"
description: "A DeepSeek lançou em 17 de outubro a atualização V4.1 Flash-1017, abriu a API de busca e manteve preços baixos. Veja o que é novo, quanto custa e o que ainda não dá para confirmar."
category: "Chatbots"
date: 2026-10-17T21:15:00-03:00
readingTime: "6 min"
image: "./images/deepseek-v4-1-atualizacao.webp"
imageAlt: "Notebook aberto sobre uma mesa de madeira com a tela mostrando a mensagem de boas-vindas do chatbot DeepSeek, ao lado de uma xícara de café e um caderno de anotações, com o pôr do sol sobre a cidade ao fundo"
---

O DeepSeek não parou de se mexer desde que virou assunto no mundo inteiro. Neste sábado, 17 de outubro de 2026, a empresa chinesa soltou mais uma atualização do seu chatbot, e ela veio acompanhada de uma novidade que interessa a quem programa: a busca própria da DeepSeek agora está aberta para qualquer desenvolvedor.

Reuni o que foi confirmado no changelog oficial da API e em reportagens como a da Investing.com (republicada pelo Yahoo Finance), e separei o que ainda depende de verificação independente. Se você quer ver o DeepSeek em ação num teste prático, o [duelo do timer Pomodoro contra o ChatGPT](/deepseek-vs-chatgpt-timer-pomodoro/) continua valendo. Aqui o foco é outro: o que mudou nos últimos meses.

## A atualização de hoje: V4.1 Flash-1017

Segundo o changelog da DeepSeek, o nome `deepseek-flash` agora aponta para uma versão aprimorada do V4.1 Flash, chamada V4.1-Flash-1017. O site e o app também passaram a usar essa versão. O preço e o jeito de chamar a API continuam os mesmos.

A empresa descreve o ganho como melhor desempenho em testes, tarefas concluídas mais rápido e respostas mais curtas. Respostas mais curtas importam porque a API cobra pelo texto gerado: se o modelo escreve menos para chegar ao mesmo resultado, a conta cai. A DeepSeek chamou isso de uma melhoria "Pareto", ou seja, ganhar em desempenho e custo sem piorar nada.

Os números divulgados, segundo a Investing.com, são estes:

- **DeepSWE v1.1** (teste de programação): 77,0, contra 74,2 da versão anterior.
- **Automation-Bench V1.0.6** (tarefas de automação): 60,5, contra 54,8.

Um cuidado importante: são resultados informados pela própria DeepSeek. Não encontrei testes independentes dessa versão, então trate as pontuações como indicação, não como veredito. Benchmark de laboratório também não garante que o modelo vá se sair igual no seu trabalho do dia a dia.

## Busca e leitura de páginas abertas ao público

A segunda novidade é a API de Search e Fetch. Ela dá a desenvolvedores acesso ao mecanismo de busca próprio da DeepSeek e à leitura do conteúdo de páginas da web, o que permite montar assistentes que consultam informação atualizada. A Investing.com informa que cada endpoint custa US$ 0,75 por mil chamadas. Esse preço não aparece no changelog oficial, então vale conferir na página da DeepSeek antes de planejar qualquer coisa, e alguns relatos mencionam um período gratuito inicial que não consegui confirmar.

Para o usuário comum, isso é um sinal de direção: a DeepSeek quer ser mais do que um chatbot de conversa e passar a competir como peça de agentes que pesquisam e executam tarefas.

## Como chegamos até aqui: agosto e setembro

A atualização de hoje é a quarta mexida relevante em dois meses. Pelo changelog oficial:

- **13 de agosto:** o V4-Pro entrou em disponibilidade geral no app, no site e na API. Os modos de raciocínio do Pro e do Flash ganharam três níveis de esforço (baixo, alto e máximo) e a API passou a ter suporte nativo ao formato Responses. Também começou a cobrança diferente por horário: fora do pico, os preços valem metade.
- **21 de agosto:** saiu uma versão experimental com visão, a V4-Flash-Vision-Exp.
- **10 de setembro:** chegou o V4.1 Flash, com compreensão nativa de imagens. Os modelos V4 Flash anteriores foram aposentados e redirecionados temporariamente para o novo, e os preços da API caíram.

Em resumo: o app que você abre hoje já enxerga imagens e tem o raciocínio ajustável, coisas que não existiam no começo do verão.

## Quanto custa usar pela API

Para quem desenvolve, a página oficial de preços mostra os valores por milhão de tokens (uma medida de texto) em dólares:

| Modelo | Entrada (fora do pico) | Saída (fora do pico) | Entrada (pico) | Saída (pico) |
|---|---|---|---|---|
| deepseek-flash | US$ 0,15 | US$ 0,60 | US$ 0,30 | US$ 1,20 |
| deepseek-v4-pro | US$ 0,66 | US$ 1,98 | US$ 1,32 | US$ 3,96 |

O horário de pico vai de 01h às 04h e de 06h às 10h (UTC), de segunda a sexta, exceto feriados chineses. Em horário de Brasília, isso cai de madrugada em dias úteis. Os dois modelos aceitam contexto de 1 milhão de tokens. Para comparar com outros chatbots, veja nosso comparativo [ChatGPT, Claude ou Google: qual assinar](/chatgpt-claude-google-qual-assinar/), que trata das assinaturas, já que o app do DeepSeek é grátis.

## Chips, Huawei e a pergunta sobre privacidade

Fora dos lançamentos, a notícia de hardware mais comentada do período veio da Bloomberg, relatada por veículos como o TechTimes: a DeepSeek teria encomendado 160 mil aceleradores Ascend 950DT da Huawei para um data center na Mongólia Interior, voltados à inferência, isto é, a responder usuários, e não ao treinamento. É informação baseada em fontes anônimas, a entrega completa é incerta e os desempenhos dos chips vêm da própria Huawei. Já a Tom's Hardware noticiou que uma equipe liderada pela Huawei afirma ter feito o pós-treinamento de um modelo da DeepSeek de 1,6 trilhão de parâmetros com cerca de mil chips Ascend 910C. É uma alegação, ainda sem verificação independente.

Sobre restrições: não encontrei nenhuma proibição nova nos últimos meses. O que existe são medidas anteriores, como a de Nova York, Texas e Virgínia, que baniram o app de dispositivos do governo estadual, e a da Austrália, de 2025. Como a empresa é chinesa, a pergunta de sempre continua: o que você escreve num chatbot hospedado lá fora pode ser regido por leis de outro país. Não coloque dados pessoais, senhas ou documentos sigilosos da empresa no app, o que vale para qualquer chatbot.

## O que isso muda para quem usa

- **Quem usa o app grátis:** o chat já roda a versão nova. Respostas mais enxutas e visão de imagens são o que você deve sentir. Teste com suas próprias tarefas.
- **Quem programa:** custo baixo e contexto longo tornam o Flash atraente para testar, principalmente em tarefas feitas à noite ou nos fins de semana, fora do pico. A busca própria abre espaço para assistentes que pesquisam.
- **Quem trabalha com dados sensíveis:** fique no cuidado. O fato de os pesos do modelo serem abertos, segundo o Crypto Briefing, permite rodar por conta própria, mas isso exige estrutura técnica e é outra conversa.
- **Quem compara chatbots:** não existe vencedor único. No nosso [teste de landing pages com quatro modelos](/mesmo-prompt-landing-page-ia/), o DeepSeek V4.1 Flash disputou com Claude Sonnet 5.5, GPT-6 Luna e Gemini 3.8 Flash. Quer entender a briga do outro lado? Veja os [modelos Sol, Terra e Luna do ChatGPT](/chatgpt-modelos-sol-terra-lua/).

## Perguntas frequentes

### O DeepSeek V4.1 Flash-1017 é grátis?

O app e o site do DeepSeek têm uso gratuito, e a versão nova já está neles. A API é paga, por consumo.

### Existe um "V4.1 Pro"?

Circulam rumores sobre um modelo assim, mas o changelog oficial não registra nada. Considere não confirmado.

### O DeepSeek é melhor que o ChatGPT ou o Claude?

As pontuações divulgadas são da própria empresa e não há teste independente dessa versão. Depende da tarefa. O melhor caminho é testar o mesmo pedido nos dois.

### É seguro usar o DeepSeek?

Para perguntas gerais, o risco é parecido com o de outros chatbots online. Para dados pessoais ou da empresa, evite, e confira se o seu empregador ou órgão público permite.

## Conclusão

A atualização de hoje é incremental: um modelo mais enxuto, preço mantido e uma API de busca nova. O que chama atenção é o ritmo, com mudanças relevantes em agosto, setembro e outubro. Vale acompanhar, mas com a régua certa: confirme as promessas com o seu uso antes de trocar de ferramenta.

---

*Fontes: [changelog da API DeepSeek](https://api-docs.deepseek.com/updates/), [preços da API DeepSeek](https://api-docs.deepseek.com/quick_start/pricing), [Investing.com via Yahoo Finance](https://uk.finance.yahoo.com/news/deepseek-releases-ai-model-opens-150410432.html), [Crypto Briefing](https://cryptobriefing.com/deepseek-v4-1-flash-update-openai-anthropic/), [TechTimes](https://www.techtimes.com/articles/326755/20260905/deepseeks-160000-chip-huawei-order-puts-prc-law-over-every-api-query.htm), [Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/huawei-led-team-claims-it-post-trained-deepseeks-1-6-trillion-parameter-models-on-ascend-910c-chips), [National Law Review](https://natlawreview.com/article/three-states-ban-deepseek-use-state-devices-and-networks).*
