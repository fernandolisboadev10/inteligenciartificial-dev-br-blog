---
title: "OpenAI DevDay 2026 pra Quem Programa: GPT-6.1 Sol, Codex Cloud e Dots Contra o Claude Opus 5.5"
description: "O que a OpenAI anunciou no DevDay de 29 de setembro e o que muda pra quem usa IA pra programar: GPT-6.1 Sol a US$ 2 por milhão de tokens, Codex Cloud, agentes Dots e a comparação de preço com o Claude Opus 5.5."
category: "Ferramentas de IA para Código"
date: 2026-10-01
readingTime: "7 min"
image: "./images/openai-devday-2026.webp"
imageAlt: "Foto editorial de um desenvolvedor visto de costas num espaço de trabalho iluminado, com notebook mostrando código desfocado e um celular em suporte ao lado exibindo uma lista de tarefas, com colegas desfocados ao fundo"
---

Em uma semana, os dois maiores laboratórios de IA mexeram no preço do código. Em 22 de setembro, a Anthropic lançou o **Claude Opus 5.5**. Em 29 de setembro, a OpenAI respondeu no DevDay 2026 com o **GPT-6.1 Sol**, o **Codex Cloud** e os agentes **Dots**. Foram mais de 20 anúncios, mas só alguns mudam a rotina de quem escreve código.

Este texto separa o que importa pra desenvolvedores e coloca os números lado a lado. Se você ainda não leu o contexto, o [GPT-6 Astra explicado](/gpt-6-astra/) e o [Claude Fable 5.1 explicado](/claude-fable-5-1/) mostram de onde cada lado partiu.

## GPT-6.1 Sol: Quase o Astra por um Quinto do Preço

O anúncio mais relevante pra quem paga a conta de API. A OpenAI descreve o GPT-6.1 Sol como inteligência próxima à do GPT-6 Astra, com cerca de **um quinto do preço por token**.

Segundo a cobertura do evento, os números principais são:

- **Preço**: US$ 2 por milhão de tokens de entrada e US$ 10 por milhão de saída
- **Contexto**: cerca de 1 milhão de tokens, com saída de até 128 mil tokens
- **Foco**: programação com agentes, uso de computador e fluxos de trabalho longos
- **Qualidade**: empata com o Astra no DeepSWE 1.1, melhora o OSWorld 2.0 em 7% e reduz erros factuais de 11,4% pra 7,7%
- **Acesso**: API e planos ChatGPT Plus, Pro, Business, Enterprise e Edu

Pra comparar: o Astra custa US$ 10 por milhão de entrada e US$ 50 por milhão de saída, como detalhamos no artigo sobre o [GPT-6 Astra](/gpt-6-astra/). O Sol novo entrega a mesma ordem de grandeza de capacidade em código por 20% desse valor. Um aviso: os benchmarks acima são os divulgados pela OpenAI e pela imprensa do evento. Teste nas suas próprias tarefas antes de migrar.

## Codex Cloud: Tarefas que Rodam com o Notebook Fechado

O Codex Cloud permite começar e continuar tarefas de código pelo desktop, pela web ou pelo celular. Cada tarefa ganha um **ambiente isolado na nuvem**, com repositórios, ferramentas e dependências do projeto, e continua rodando mesmo se o seu computador entrar em repouso.

Isso muda o fluxo em dois pontos:

1. **Delegar de verdade.** Você descreve a tarefa, fecha o notebook e volta pro resultado. É a ideia de agente assíncrono, que já aparece nos [estudos de caso das ferramentas de IA de código](/estudos-de-caso-ferramentas-ia-codigo/).
2. **Segurança por isolamento.** Rodar em ambiente separado reduz o risco de o agente mexer na sua máquina, um assunto que cobrimos em [7 cuidados de segurança com MCP](/mcp-seguranca-agentes-de-codigo/).

A OpenAI também anunciou o **Codex Security Cloud**, que varre repositórios do GitHub e propõe correções, além de uma visão `/agents` e controles por voz no Codex.

## Dots: Agentes que Não Esperam o Prompt

Os Dots são agentes "sempre ligados". Em vez de responder só quando você pergunta, eles ficam trabalhando em tarefas recorrentes, aprendem suas preferências e se conectam a mais de 4 mil aplicativos, segundo a cobertura do evento. Cada Dot roda no próprio computador na nuvem e pode ser acessado pelo ChatGPT, e a OpenAI planeja Slack, Teams e outros canais.

Pra programadores, a utilidade imediata é menor que a do Codex Cloud: pense em acompanhar pull requests, triar issues ou resumir deploys. Fica a pergunta de quanto de autonomia vale dar a um agente que age sem você pedir. Quem adota um Dot deveria aplicar as mesmas regras de permissão mínima que valem pra qualquer agente.

Os Dots começam a chegar a assinantes do ChatGPT Pro e Business Premium, com beta pra Enterprise, Edu e Saúde. Há ainda um novo plano **ChatGPT Pro 500, a US$ 500 por mês**, com acesso à camada "Ultrafast", que a OpenAI diz gerar tokens até 8 vezes mais rápido no Codex.

## A Resposta da Anthropic: Claude Opus 5.5

Uma semana antes, a Anthropic lançou o Opus 5.5 com a promessa de render no nível do Fable 5.1 na maioria das tarefas, por menos da metade do preço. Segundo a documentação oficial, ele custa **US$ 4 por milhão de entrada e US$ 20 por milhão de saída**, com 1 milhão de tokens de contexto e até 128 mil de saída. O Fable 5.1 custa US$ 10 e US$ 50.

Dois detalhes técnicos importantes de quem usa a API: o pensamento adaptativo do Opus 5.5 não pode ser desligado, e o controle de profundidade é feito pelo parâmetro de esforço, que vem em `medium` por padrão.

## Comparação de Preço

<div style="max-width:900px;margin:24px auto;overflow-x:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table style="width:100%;border-collapse:collapse;background:#ffffff;box-shadow:0 1px 4px rgba(0,0,0,0.08);border-radius:8px;overflow:hidden;">
    <thead>
      <tr style="background:var(--ink-deep);color:#ffffff;">
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Modelo</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Entrada (por milhão)</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Saída (por milhão)</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">GPT-6 Astra</td>
        <td style="padding:12px 16px;">US$ 10</td>
        <td style="padding:12px 16px;">US$ 50</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;">Claude Fable 5.1</td>
        <td style="padding:12px 16px;">US$ 10</td>
        <td style="padding:12px 16px;">US$ 50</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">Claude Opus 5.5</td>
        <td style="padding:12px 16px;">US$ 4</td>
        <td style="padding:12px 16px;">US$ 20</td>
      </tr>
      <tr style="background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;">GPT-6.1 Sol</td>
        <td style="padding:12px 16px;">US$ 2</td>
        <td style="padding:12px 16px;">US$ 10</td>
      </tr>
    </tbody>
  </table>
</div>

No papel, o Sol sai pela metade do preço do Opus 5.5. Mas preço por token não é custo por tarefa: um modelo que "pensa" mais gasta mais tokens, e um que erra obriga a repetir a tarefa. Foi exatamente o que vimos no [teste do mesmo prompt de landing page em quatro modelos](/mesmo-prompt-landing-page-ia/), em que o mais caro custou mais de 30 vezes o mais barato. E se o preço é seu critério principal, vale conferir também a [API do Grok](/grok-api-preco/).

## O Que Isso Muda na Prática

**Se você paga por API:** reveja o modelo padrão dos seus scripts e agentes. Rodar a mesma tarefa no Sol e no Opus 5.5 por uma semana e comparar custo e taxa de acerto custa pouco e pode cortar a conta de forma relevante.

**Se você usa assinatura:** o que mais muda é o limite de uso e a velocidade. Antes de trocar de plano, veja o [comparativo de ChatGPT Plus, Claude Pro e Google AI Pro no Brasil](/chatgpt-claude-google-qual-assinar/) e a [comparação entre Claude Code, Antigravity e Copilot](/claude-code-vs-antigravity-vs-copilot/).

**Se você ainda não usa agentes:** comece pelo básico. Antes de ligar um agente autônomo, vale ter os hábitos do [vibe coding sem bagunça](/vibe-coding-6-habitos-sem-bagunca/) e conhecer os [recursos do Claude Code que quase ninguém ativa](/claude-code-recursos-ocultos/).

## Perguntas Frequentes

### O GPT-6.1 Sol substitui o GPT-6 Astra?

Pra a maioria das tarefas de código, ele chega perto por uma fração do preço, segundo a OpenAI. O Astra continua sendo o topo em capacidade bruta, e há um nível "Ultrafast" do Astra no plano Pro 500. Teste no seu caso antes de decidir.

### O Claude Opus 5.5 ainda vale a pena depois do Sol?

Depende da tarefa. O Opus 5.5 é o modelo padrão do Claude Code e foi pensado pra trabalho longo com agentes. A diferença de preço pro Sol é real, mas o que decide é quantas tentativas cada um precisa pra entregar código que funciona.

### Os Dots servem pra programar?

Servem pra tarefas em volta do código, como acompanhar PRs e issues. Pra escrever e alterar código de fato, o Codex Cloud é a peça relevante do anúncio.

### Preciso do plano de US$ 500?

Quase certamente não. O Pro 500 foca em velocidade máxima e uso intenso. A maioria dos desenvolvedores resolve com os planos de cerca de US$ 20 ou com a API.

## Conclusão

O DevDay confirmou a direção do mercado: modelos quase tão bons quanto os de topo, bem mais baratos, e agentes que trabalham sozinhos em ambientes na nuvem. Pra quem programa, a decisão prática é simples. Meça o custo por tarefa concluída em vez do preço por token, comece delegando tarefas pequenas e bem especificadas, e mantenha as permissões do agente no mínimo necessário.

---

*Fontes: [Documentação Claude Opus 5.5](https://platform.claude.com/docs/en/models/opus-5-5/overview), [AlternativeTo, OpenAI launches GPT-6.1 Sol and Dots](https://alternativeto.net/news/2026/10/openai-launches-gpt-6-1-sol-and-dots-its-new-always-on-ai-agents-that-work-independently/), [Tool Junction, OpenAI DevDay 2026 announcements](https://www.tooljunction.io/blog/openai-devday-2026-announcements), [Business Standard, OpenAI DevDay 2026](https://www.business-standard.com/technology/tech-news/openai-devday-2026-dots-gpt-6-1-sol-codex-developer-tools-126093000396_1.html), [The New Stack, Claude Opus 5.5 vs. Fable 5.1](https://thenewstack.io/claude-opus-5-5-vs-fable-5-1/). Números do evento conforme a cobertura da imprensa; a página oficial da OpenAI não pôde ser consultada diretamente.*
