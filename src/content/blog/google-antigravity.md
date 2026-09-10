---
title: "Google Antigravity Explicado: A Ferramenta de Código com Foco em Agentes do Gemini"
description: "O Google Antigravity substituiu o Gemini CLI em 2026. Veja o que ele realmente faz, quanto custa, e como se compara ao Gemini Code Assist e ao Jules."
category: "Ferramentas de IA para Código"
date: 2026-09-07
readingTime: "7 min"
image: "./images/google-antigravity.webp"
imageAlt: "Editor de código holográfico com esferas de agentes de IA brilhantes orbitando um monitor, ilustrando a plataforma de código multiagente do Google Antigravity"
---

Se você pesquisou "ferramenta de código do Gemini" recentemente e caiu num nome que não esperava, isso não foi engano. O Google Antigravity agora é o centro da linha de IA pra desenvolvedores do Google, e ele absorveu discretamente uma ferramenta que muita gente ainda usava: o Gemini CLI.

O Antigravity não é um chatbot colado num editor. É um repensar completo do que um IDE serve pra fazer, construído em torno da ideia de que você não deveria mais digitar cada linha sozinho. Aqui está o que ele é, como chegou até aqui, e se vale o seu tempo.

## Do Gemini CLI ao Antigravity: Uma Linha do Tempo Rápida

O Google anunciou o Antigravity em 18 de novembro de 2025, junto com o lançamento do Gemini 3. No início, ele ficava ao lado do Gemini CLI como um produto separado e mais ambicioso: um IDE com foco em agentes, em vez de uma ferramenta de terminal.

Isso não durou muito. No Google I/O, em 19 de maio de 2026, o Google anunciou que estava incorporando o Gemini CLI num novo Antigravity CLI, dando aos desenvolvedores uma janela de migração de 30 dias. O Gemini CLI parou de funcionar oficialmente pra usuários do Google AI Pro, Ultra e do nível gratuito em 18 de junho de 2026. Se sua organização usa o Gemini Code Assist Standard ou Enterprise, ou o Code Assist for GitHub via Google Cloud, você não foi afetado e manteve o acesso que já tinha.

A mensagem era clara: o Antigravity, não um CLI independente, é onde o Google quer que os desenvolvedores trabalhem agora.

## O Que o Antigravity Realmente É

O Antigravity é um IDE com foco em agentes, construído como um fork modificado do VS Code, que muda seu trabalho de escrever código linha por linha pra dirigir agentes autônomos que planejam, executam e verificam o próprio trabalho.

A peça central é o **Agent Manager**, uma visão pra orquestrar vários agentes rodando em paralelo em diferentes espaços de trabalho. Em vez de vigiar uma sugestão só, no estilo Copilot, de cada vez, você delega uma tarefa, um agente a divide em etapas, e você confere o progresso depois, como faria com o pull request de um colega de verdade.

O outro recurso de destaque é o controle de navegador embutido. Um agente do Antigravity consegue abrir uma instância real do Chromium, navegar até seu servidor de desenvolvimento local, clicar pelo fluxo de usuário que acabou de construir, e capturar screenshots como prova de que o recurso realmente funciona, não só que o código compila.

Em meados de 2026, o Antigravity tinha crescido pra quatro superfícies:

- **Antigravity IDE** — o fork do VS Code, pra edição prática junto com os agentes
- **Antigravity 2.0** — um aplicativo de desktop independente
- **Antigravity CLI** — uma ferramenta de terminal baseada em Go (substituta do Gemini CLI) que roda agentes em segundo plano sem travar sua sessão
- **Antigravity SDK** — um SDK em Python pra construir seus próprios fluxos de agentes em cima da plataforma

O Antigravity CLI manteve os recursos com os quais os desenvolvedores contavam no Gemini CLI, incluindo Agent Skills, Hooks, Subagentes e Extensões, só reempacotados como plugins do Antigravity.

## Quais Modelos o Alimentam

O Antigravity não está preso apenas aos próprios modelos do Google. Ele suporta Gemini 3 Pro, Gemini 3 Deep Think e Gemini 3 Flash, além de opções de terceiros incluindo Claude Sonnet 4.6, Claude Opus 4.6 e GPT-OSS 120B. Você escolhe o modelo por agente, então uma refatoração rápida pode rodar no Flash enquanto um bug complicado com múltiplos arquivos vai pro Gemini 3 Pro ou pro Claude Opus.

No SWE-bench Verified, um benchmark padrão pra tarefas de código do mundo real, tirado de issues reais do GitHub, o Antigravity foi relatado pontuando em torno de 76,2%, competitivo com as outras principais ferramentas de código agêntico do mercado em 2026.

## Quanto Custa

- 🆓 **Individual / Grátis** ($0/mês): Limites semanais básicos, completions de aba ilimitadas, requisições de comando ilimitadas, e acesso aos modelos listados do Google, Anthropic e OpenAI.
- 💰 **Google AI Pro** ($20/mês): Limites de uso mais altos nas superfícies do Antigravity, incluído no resto da assinatura Google AI Pro.
- 🚀 **Google AI Ultra** ($100/mês): Introduzido pro Antigravity em 19 de maio de 2026, com os limites mais altos pra desenvolvedores rodando agentes constantemente ao longo do dia.

## Antigravity vs. Gemini Code Assist vs. Jules

A linha de IA pra desenvolvedores do Google não é um produto só. Se você é assinante do Google AI Pro ou Ultra, na verdade tem três ferramentas de código diferentes disponíveis, e elas foram feitas pra hábitos diferentes.

<div style="max-width:900px;margin:24px auto;overflow-x:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table style="width:100%;border-collapse:collapse;background:#ffffff;box-shadow:0 1px 4px rgba(0,0,0,0.08);border-radius:8px;overflow:hidden;">
    <thead>
      <tr style="background:var(--ink-deep);color:#ffffff;">
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Recurso</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">🧠 Antigravity</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">🧩 Gemini Code Assist</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">📨 Jules</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">💡 O que é</td>
        <td style="padding:12px 16px;">IDE, CLI e SDK com foco em agentes</td>
        <td style="padding:12px 16px;">Extensão de IA pro seu editor atual</td>
        <td style="padding:12px 16px;">Agente de código assíncrono em segundo plano</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;">🖥️ Onde roda</td>
        <td style="padding:12px 16px;">Editor independente, app de desktop, ou terminal</td>
        <td style="padding:12px 16px;">Plugin dentro do VS Code ou JetBrains</td>
        <td style="padding:12px 16px;">Roda em segundo plano, abre um PR quando termina</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">🤖 Orquestração multiagente</td>
        <td style="padding:12px 16px;">✅ Agent Manager roda vários em paralelo</td>
        <td style="padding:12px 16px;">❌ Um assistente inline só</td>
        <td style="padding:12px 16px;">Cada tarefa é seu próprio agente assíncrono</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;">🌐 Verificação por navegador</td>
        <td style="padding:12px 16px;">✅ Embutida</td>
        <td style="padding:12px 16px;">❌</td>
        <td style="padding:12px 16px;">❌</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">🏢 Melhor encaixe</td>
        <td style="padding:12px 16px;">Desenvolvedores prontos pra delegar recursos inteiros</td>
        <td style="padding:12px 16px;">Times que querem manter o IDE e fluxo atuais</td>
        <td style="padding:12px 16px;">Tarefas de "delegar e esquecer" junto com outro trabalho</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;font-weight:600;">💳 Preço</td>
        <td style="padding:12px 16px;">Grátis, $20/mês Pro, $100/mês Ultra</td>
        <td style="padding:12px 16px;">Individual grátis; Standard/Enterprise pra organizações</td>
        <td style="padding:12px 16px;">Incluído no Google AI Pro/Ultra</td>
      </tr>
    </tbody>
  </table>
</div>

## Perguntas Frequentes

### O Google Antigravity é grátis?

Sim, existe um plano Individual de $0 com limites semanais de uso, completions de aba ilimitadas, e acesso a modelos do Google, Anthropic e OpenAI. Os níveis pagos ($20/mês Pro, $100/mês Ultra) aumentam os limites de uso pra uso mais pesado e o dia inteiro com agentes.

### O que aconteceu com o Gemini CLI?

Foi descontinuado. O Google anunciou a mudança pro Antigravity CLI em 19 de maio de 2026, e o Gemini CLI parou de funcionar pra usuários Pro, Ultra e do nível gratuito em 18 de junho de 2026. O Antigravity CLI é um sucessor baseado em Go que mantém a maioria dos recursos do Gemini CLI como plugins.

### O Antigravity só funciona com modelos Gemini?

Não. Além do Gemini 3 Pro, Deep Think e Flash, ele também suporta Claude Sonnet 4.6, Claude Opus 4.6 e GPT-OSS 120B, então você pode escolher um modelo por agente conforme a tarefa.

### O Antigravity é o mesmo que o Gemini Code Assist?

Não. O Gemini Code Assist é uma extensão de IA que se conecta a um IDE que você já usa. O Antigravity é uma plataforma separada e independente com foco em agentes, com seu próprio editor, CLI e SDK.

## Conclusão

O Antigravity é a aposta do Google de que o futuro das ferramentas de código se parece menos com autocompletar e mais com gestão: você descreve o resultado, um agente planeja e executa, e você verifica o resultado em vez de escrever cada linha sozinho. A aposentadoria do Gemini CLI em favor do Antigravity CLI não foi um simples rebatismo, foi o Google consolidando toda a sua estratégia de IA pra desenvolvedores em torno dessa única plataforma.

Se você ainda tem a memória muscular do Gemini CLI, o nível gratuito é a forma mais fácil de ver o que mudou. Se você está escolhendo entre as três ferramentas de código do Google, a resposta honesta é: Antigravity pra qualquer coisa que você quer resolvida de ponta a ponta, Gemini Code Assist se você não quer sair do seu IDE atual, e Jules pra tarefas que você fica feliz em enfileirar e esquecer.

---

*Fontes: [Google Developers Blog — Transitioning Gemini CLI to Antigravity CLI](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/), [Google Cloud — Gemini Code Assist overview](https://docs.cloud.google.com/gemini/docs/codeassist/overview), [AI Wiki — Antigravity](https://aiwiki.ai/wiki/antigravity), [Thinkpeak — Google Antigravity Pricing & Access 2026](https://thinkpeak.ai/google-antigravity-pricing-access-2026/).*
