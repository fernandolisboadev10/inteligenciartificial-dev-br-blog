---
title: "ChatGPT, Claude ou Google: Qual Assinatura de IA Vale a Pena pra Quem Programa em 2026"
description: "Codex no ChatGPT, Claude Code no Claude, Antigravity e Jules no Google: o que cada plano entrega pra programar, como funcionam os limites de uso e qual assinar conforme o seu perfil de dev."
category: "Ferramentas de IA"
date: 2026-10-22T14:58:00-03:00
translation: "chatgpt-claude-google-que-suscripcion-elegir"
readingTime: "7 min"
image: "./images/chatgpt-claude-google-qual-assinar.webp"
imageAlt: "Desenvolvedora pensativa, com o queixo apoiado na mão e uma caneta na outra, diante de um monitor ultrawide com código e um painel de configurações, ao lado de um caderno de anotações, em um escritório de startup com colega ao fundo desenhando em um quadro branco e a vista de uma cidade pela janela"
draft: false
---

Quem programa com IA precisa de um agente que lê o projeto, edita vários arquivos, roda testes e aguenta horas de trabalho sem travar. O preço de tabela dos três grandes é parecido, perto de US$ 20 por mês, mas o que decide a escolha é o limite de uso e o ambiente onde o agente roda.

Este guia olha as assinaturas do ChatGPT, do Claude e do Google só pelo ângulo de quem escreve código, do iniciante ao profissional. Para a comparação por ferramenta (Lovable, Cursor, Replit e companhia), veja o [comparativo de ferramentas de vibe coding](/ferramentas-vibe-coding-criar-apps-ia-2026/). Aqui a pergunta é outra: qual plano pagar.

Os preços abaixo estão em dólares, antes de impostos e IOF, e foram conferidos nas páginas oficiais em 22 de outubro de 2026. Planos e limites mudam rápido (neste mês o Cursor reorganizou os dele), então confira os links no fim antes de assinar. Não usamos os planos por meses: o que segue é leitura das páginas e da documentação, não teste de longo prazo.

## Por que programar muda a conta

Num chat comum, quase qualquer plano basta. Num agente de código, cada tarefa manda o projeto inteiro de volta ao modelo, e uma sessão longa gasta cota como poucas outras coisas. Por isso as três empresas medem o uso por janela de cinco horas, com um limite semanal por cima, e nenhuma promete um número fixo de tarefas.

Duas consequências práticas:

- O plano de US$ 20 serve para uso moderado. Quem entrega código todo dia tende a esbarrar no limite, como detalhamos no [review do Claude Code](/claude-code-review-vale-o-preco/).
- Quando a cota acaba, você tem três saídas: esperar o reset, subir de plano ou pagar por uso (créditos ou API, cobrados por token).

## Os planos lado a lado, só para código

| Plano | Preço/mês | O que entrega para programar | Limite |
| --- | --- | --- | --- |
| ChatGPT Free | US$ 0 | Codex para tarefas rápidas | Sem número publicado |
| ChatGPT Go | US$ 8 | Codex para tarefas leves | Sem número publicado |
| ChatGPT Plus | US$ 20 | Codex com os modelos GPT-6.1 Sol e GPT-6 Luna | Por janela de 5 h, mais limite semanal; créditos extras |
| ChatGPT Pro | US$ 100, 200 ou 500 | Mais cota; hoje sem limite de 5 h | Limite semanal pode valer |
| Claude Free | US$ 0 | Sem Claude Code | Só chat |
| Claude Pro | US$ 20 (US$ 17 no anual) | Claude Code com Opus, Sonnet e Haiku | Janela de 5 h e limite semanal, divididos com o chat |
| Claude Max | US$ 100 (5x) ou US$ 200 (20x) | Claude Code com cota 5 ou 20 vezes a do Pro; Fable listado | Janela de 5 h, semanal e um limite semanal separado do Fable |
| Google AI Plus | US$ 4,99 | Acesso limitado a Jules e Antigravity | Limitado |
| Google AI Pro | US$ 19,99 | Antigravity (IDE e CLI), Jules, AI Studio e US$ 10 em créditos do Google Cloud | Janela de 5 h até o limite semanal |
| Google AI Ultra | US$ 99,99 (5x) ou US$ 199,99 (20x) | Maior cota; modelos de terceiros no Antigravity | A maior cota |

## ChatGPT: o Codex vem dentro da assinatura

Não existe assinatura separada do Codex. Ele está nos planos Free, Go, Plus, Pro e Business, e roda no app, no editor e no terminal. Segundo a [página de preços do Codex](https://learn.chatgpt.com/docs/pricing), o Free e o Go são descritos para tarefas rápidas e leves, sem limites publicados, e usam o GPT-6 Luna no app desktop.

O Plus é onde o uso sério começa. A página mostra faixas de mensagens locais por janela de cinco horas que variam muito conforme a tarefa: de 15 a 160 no GPT-6.1 Sol e de 350 a 3.000 no GPT-6 Luna. Cada faixa é larga porque o gasto depende do tamanho do pedido. Passou do limite, dá para comprar créditos. O Pro, a partir de US$ 100, hoje não tem a janela de cinco horas, embora limites semanais possam valer. Se quiser entender como os modelos Sol e Luna se comportam, leia [Os Modelos Sol, Terra e Luna do ChatGPT](/chatgpt-modelos-sol-terra-lua/).

**Faz sentido para:** quem já usa o ChatGPT no dia a dia e quer um agente de código no mesmo pagamento.

## Claude: o Claude Code é o ponto forte, e a cota é o gargalo

O Claude Code está incluído em todos os planos pagos e não existe no Free. Pela [página de preços da Anthropic](https://claude.com/pricing), o Pro custa US$ 20 por mês (US$ 17 no plano anual pago de uma vez), e o Max parte de US$ 100, com 5 ou 20 vezes a cota do Pro.

O detalhe que pega muita gente: chat, app e Claude Code dividem o mesmo pool. Uma conversa longa no navegador consome a cota que você queria para o terminal. Além disso, a Anthropic não publica quantas mensagens cabem em cada janela. Quando a cota acaba, as saídas oficiais são esperar, ativar créditos de uso (cobrados a preço de API) ou subir para o Max.

Um cuidado de custo: se a variável `ANTHROPIC_API_KEY` estiver definida no seu computador, o Claude Code usa a chave e cobra por API em vez de usar a assinatura.

**Faz sentido para:** quem trabalha em projetos com vários arquivos, usa terminal ou VS Code e aceita gerenciar a cota.

## Google: Antigravity e Jules, e o fim do Gemini CLI grátis

O Google organiza o código em três frentes dentro dos planos AI: o Antigravity (ambiente de agentes, com versão de linha de comando), o Jules (agente que trabalha em segundo plano) e o AI Studio. No Pro, a [documentação do Antigravity](/google-antigravity/) descreve uma cota "generosa" renovada a cada cinco horas até bater o limite semanal. Sem Pro ou Ultra, a cota é menor e renova toda semana. Os modelos de terceiros ficam só no Ultra.

Um alerta para quem segue tutoriais antigos: desde 18 de junho de 2026, o Gemini CLI e as extensões do Code Assist deixaram de atender contas individuais, inclusive Google AI Pro e Ultra. O Google manda esses usuários para o Antigravity CLI. Se um guia manda você entrar no Gemini CLI com a conta Google grátis, ele está desatualizado.

Não achamos limites numéricos oficiais do Antigravity: o Google diz que a cota depende da capacidade disponível.

**Faz sentido para:** quem quer um plano barato com armazenamento e extras de Google, ou quer começar pela cota gratuita do Antigravity e do AI Studio.

## Qual assinar, por perfil

**Iniciante, aprendendo a programar.** Não pague ainda. O ChatGPT Free inclui o Codex, o Antigravity tem cota gratuita semanal e o AI Studio é gratuito por padrão. Use os três até bater no limite, e só então assine um. Antes disso, o que mais ajuda é escrever bons pedidos, como mostra o [guia de prompt engineering para devs](/prompt-engineering-para-devs/).

**Quem faz vibe coding e projetos próprios.** Um plano de cerca de US$ 20 resolve. Escolha pelo ambiente que você aguenta usar: terminal e VS Code (Claude Code), app e CLI da OpenAI (Codex) ou o ecossistema Google (Antigravity). Mais importante do que a marca é o hábito de trabalhar em passos pequenos, como nos [6 hábitos de vibe coding sem bagunça](/vibe-coding-6-habitos-sem-bagunca/). E, quando o app ficar pronto, veja [onde hospedar](/vibe-coding-onde-hospedar-app/).

**Freelancer.** Comece com um plano de US$ 20 e observe quantas vezes por semana a cota acaba no meio de uma entrega. Se isso acontece e você cobra por hora ou por projeto, o salto para US$ 100 (Claude Max 5x, Google Ultra 5x ou ChatGPT Pro) pode se pagar rápido. Se acontece uma vez por mês, comprar créditos avulsos sai mais barato do que subir de plano.

**Dev profissional ou em empresa.** Código de empresa não costuma poder passar por conta pessoal: veja a política da sua equipe. Os planos de equipe existem para isso, como o Claude Team (US$ 25 por assento no mensal e US$ 20 no anual no padrão) e o ChatGPT Business (US$ 20 por usuário no anual, US$ 25 no mensal, mínimo de dois usuários). Antes de liberar agentes com acesso ao repositório, leia os [7 cuidados de segurança com servidores MCP](/mcp-seguranca-agentes-de-codigo/).

**Quem usa agentes o dia inteiro.** É o perfil em que assinatura com janela e pagamento por token se encontram. Pagar por API não tem janela de cinco horas, mas a conta varia com o uso e pode passar de US$ 100 por mês com facilidade (a documentação de custos da Anthropic cita médias de US$ 150 a US$ 250 por desenvolvedor em implantações de empresa, como mostramos no review). Para uso intenso e previsível, os planos de US$ 100 ou mais costumam dar mais controle.

## Uma regra simples para não pagar à toa

1. Assine um só plano de cerca de US$ 20 por um mês.
2. Anote quantas vezes a cota acabou antes do fim do trabalho.
3. Se nunca acabou, volte para o Go ou o gratuito.
4. Se acabou toda semana, suba de plano ou ative créditos.

Em qualquer plano, limpar o contexto entre tarefas sem relação e fazer pedidos específicos gasta bem menos cota.

## Perguntas frequentes

### Qual assinatura de IA é a melhor para programar?

Não existe uma melhor para todos. Os três planos de cerca de US$ 20 entregam um agente de código, e a escolha depende do ambiente que você prefere e de quanto a cota rende no seu trabalho.

### O Claude Code está incluído no Claude Pro?

Sim. Ele vem em todos os planos pagos da Anthropic e divide a cota com o chat. O plano Free não inclui.

### O Codex é pago à parte?

Não. Ele vem dentro dos planos do ChatGPT, do Free ao Pro. Quem usa chave de API paga o preço de API e não consome o limite do plano.

### O Gemini CLI ainda funciona de graça?

Para contas individuais, não: desde 18 de junho de 2026, o Google redireciona esses usuários para o Antigravity CLI.

### Vale pagar US$ 100 por mês?

Só se a cota de US$ 20 acaba com frequência e isso custa tempo ou dinheiro de verdade. Para uso moderado, não vale.

### Esses preços valem em reais?

Não. Eles estão em dólares. Para ver preços em reais do ChatGPT, veja o [guia de planos do ChatGPT em reais no TechOnPlay](https://techonplay.com.br/chatgpt-gratis-ou-pago/), e lembre que a cobrança em dólar tem IOF.

## Conclusão

Para programar, a pergunta útil não é qual IA é mais esperta, e sim qual cota aguenta o seu ritmo. Comece grátis, assine um plano de cerca de US$ 20, meça quando ele acaba e só suba se o limite atrapalhar o trabalho. O restante é preferência de ambiente. Para decidir também a ferramenta e não só o plano, volte ao [comparativo entre Claude Code, Antigravity e Copilot](/claude-code-vs-antigravity-vs-copilot/).

## Leia Também

- [Review do Claude Code em 2026: vale o preço?](/claude-code-review-vale-o-preco/)
- [Claude Code, Antigravity ou Copilot: qual escolher](/claude-code-vs-antigravity-vs-copilot/)
- [10 ferramentas de vibe coding pra criar apps com IA](/ferramentas-vibe-coding-criar-apps-ia-2026/)

---

*Fontes (consultadas em 22 de outubro de 2026): [Anthropic, preços](https://claude.com/pricing) | [Anthropic, plano Max](https://support.claude.com/en/articles/11049741-what-is-the-max-plan) | [Anthropic, Claude Code nos planos Pro e Max](https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-or-max-plan) | [OpenAI, preços do Codex](https://learn.chatgpt.com/docs/pricing) | [Google, planos Google AI](https://gemini.google/subscriptions/) | [Google, planos do Antigravity](https://antigravity.google/docs/plans/) | [Google, descontinuação do Gemini Code Assist para contas individuais](https://developers.google.com/gemini-code-assist/docs/deprecations/code-assist-individuals?hl=en) | [Engadget, preço do Google AI Ultra](https://www.engadget.com/2176060/the-google-ai-ultra-plan-now-starts-at-100-a-month/). Preços em dólares, sujeitos a mudança.*
