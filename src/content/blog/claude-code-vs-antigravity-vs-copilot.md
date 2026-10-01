---
title: "Claude Code, Antigravity ou Copilot: Qual Escolher pro Seu Tipo de Trabalho (e Quanto Cada Um Custa)"
description: "Os três cobram de jeitos diferentes: cota por janela de cinco horas, cota semanal e créditos por token. Veja preço, limites e qual ferramenta de IA de código faz mais sentido pra cada perfil de dev."
category: "Ferramentas de IA para Código"
date: 2026-09-28
readingTime: "7 min"
image: "./images/claude-code-vs-antigravity-vs-copilot.webp"
imageAlt: "Foto editorial de uma mesa de desenvolvedor com três notebooks lado a lado, cada um mostrando um editor de código desfocado com tema de cores diferente, ao lado de uma caneca e um caderno, luz quente de fim de tarde"
draft: false
---

Escolher uma ferramenta de IA de código ficou mais confuso do que parece, e o motivo não é a qualidade do modelo. É a cobrança. O Claude Code entrega uma cota que renova a cada cinco horas. O Antigravity, do Google, vem embutido nos planos Google AI. O GitHub Copilot trocou, em 1º de junho de 2026, as "requisições premium" por créditos calculados por token. Três ferramentas, três lógicas de preço, e um preço de tabela que não diz quanto você vai conseguir usar de verdade.

Reunimos os planos oficiais das três, separamos o que é confirmado do que só aparece em sites de terceiros, e montamos um guia de decisão por perfil. Se você quer saber se as promessas de cada uma se sustentam, vale ler também a [análise dos estudos de caso das quatro ferramentas](/estudos-de-caso-ferramentas-ia-codigo).

## Claude Code: Incluído no Plano Pago, com Cota por Janela

O Claude Code não tem plano próprio. Ele vem incluído nos planos pagos da Anthropic, e o plano Free não o inclui. Segundo a [página de preços da Anthropic](https://claude.com/pricing), o Pro custa US$ 20 por mês (ou US$ 17 no plano anual), e o Max custa a partir de US$ 100 por mês, com opções de 5x ou 20x mais uso que o Pro.

O ponto mais importante é que o Claude Code e o app do Claude dividem a mesma cota. Todos os planos usam uma janela móvel de cinco horas, e os planos pagos têm um limite semanal por cima disso. A Anthropic não publica quantidade exata de tokens ou mensagens: o próprio site diz que o quanto você consegue fazer depende do tamanho e da complexidade das conversas, do modelo escolhido e dos recursos usados.

**Na prática:** o custo é previsível (uma mensalidade fixa), mas o limite é opaco. Quem usa o Claude Code o dia inteiro em tarefas longas e autônomas costuma esbarrar na cota do Pro e acaba olhando para o Max.

## Google Antigravity: Vem nos Planos Google AI, com Camada Gratuita

O Antigravity funciona diferente: não é uma assinatura separada, é uma camada dos planos Google AI. Pela [documentação oficial](https://antigravity.google/docs/plans/), existem três níveis:

- **Base (gratuito):** cota que renova toda semana, só com modelos Gemini.
- **Google AI Pro:** cota maior, renovada a cada cinco horas até bater o limite semanal, também só com modelos Gemini.
- **Google AI Ultra:** a maior cota, com acesso a modelos de terceiros além dos Gemini.

Todos os níveis incluem autocompletar ilimitado. Quem esgota a cota no Pro ou no Ultra pode comprar créditos de IA para continuar usando.

A documentação oficial não traz valores em dólar. Sites de terceiros, como o [CloudZero](https://www.cloudzero.com/blog/google-antigravity-pricing/), listam cerca de US$ 19,99 para o Pro, US$ 99,99 para o Ultra 5x e US$ 199,99 para o Ultra 20x, mas confira o preço atual na página do Google antes de assinar.

**Na prática:** é a única das três com uma camada gratuita de verdade para o agente, o que facilita testar. O detalhe é que os modelos de terceiros, como os da Anthropic, só aparecem no nível mais alto. E, como vimos na análise de estudos de caso, ele ainda tem a base de evidência pública mais rasa do grupo.

## GitHub Copilot: Créditos por Token e Autocompletar de Graça

O Copilot é o que mais mudou. Segundo o [anúncio do GitHub](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/), desde 1º de junho de 2026 todos os planos usam créditos de IA em vez de requisições premium. O consumo é calculado por tokens (entrada, saída e cache), com base nos preços de API de cada modelo.

Os preços de tabela não mudaram:

- **Pro:** US$ 10 por mês, com US$ 10 em créditos mensais.
- **Pro+:** US$ 39 por mês, com US$ 39 em créditos mensais.
- **Business:** US$ 19 por usuário, com US$ 19 em créditos.
- **Enterprise:** US$ 39 por usuário, com US$ 39 em créditos.

Autocompletar e sugestões de próxima edição continuam incluídos em todos os planos e **não gastam créditos**. Quem gasta crédito é o chat, o modo agente, a revisão de código e o Copilot CLI. Organizações também podem juntar os créditos não usados numa reserva comum.

**Na prática:** o Copilot é o mais barato para entrar e o melhor para quem só quer autocompletar dentro do editor. Mas, no uso agêntico pesado, o crédito mensal acaba rápido, porque agora cada tarefa longa consome tokens no preço de API.

## Lado a Lado

<div style="max-width:900px;margin:24px auto;overflow-x:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table style="width:100%;border-collapse:collapse;background:#ffffff;color:#1a1a1a;box-shadow:0 1px 4px rgba(0,0,0,0.08);border-radius:8px;overflow:hidden;">
    <thead>
      <tr style="background:var(--ink-deep);color:#ffffff;">
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Ferramenta</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">💰 Entrada paga</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">📏 Como o limite funciona</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">🆓 Camada gratuita</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">Claude Code</td>
        <td style="padding:12px 16px;">US$ 20/mês (Pro)</td>
        <td style="padding:12px 16px;">Janela de 5 horas + limite semanal, cota não publicada</td>
        <td style="padding:12px 16px;">Não inclui Claude Code</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;">Antigravity</td>
        <td style="padding:12px 16px;">Google AI Pro (cerca de US$ 20, confira)</td>
        <td style="padding:12px 16px;">Janela de 5 horas até o limite semanal, créditos extras</td>
        <td style="padding:12px 16px;">Sim, cota renovada por semana</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;font-weight:600;">GitHub Copilot</td>
        <td style="padding:12px 16px;">US$ 10/mês (Pro)</td>
        <td style="padding:12px 16px;">Créditos mensais gastos por token, autocompletar grátis</td>
        <td style="padding:12px 16px;">Sim, com limites</td>
      </tr>
    </tbody>
  </table>
</div>

## Qual Escolher por Perfil

![Close-up de duas mãos segurando três cartões brancos em leque sobre uma mesa, com um notebook mostrando um editor de código desfocado ao fundo](./images/claude-code-vs-antigravity-vs-copilot-perfis.webp)

**Você está começando ou só quer testar sem gastar:** Antigravity no nível gratuito ou o plano gratuito do Copilot. O Claude Code exige plano pago, então não é a porta de entrada mais barata.

**Você programa o dia inteiro e quer principalmente autocompletar:** Copilot Pro. Por US$ 10 você tem autocompletar sem consumir crédito, e o agente fica como extra ocasional.

**Você delega tarefas longas e autônomas (migrações, refatorações grandes):** Claude Code no Pro para testar, com o Max no radar se a cota acabar. É o caso em que a cota por janela de cinco horas mais importa, e em que mais vale testar no seu próprio código antes de assinar o plano caro.

**Você já paga o Google AI e quer um agente incluso:** Antigravity, sabendo que o preview público e a falta de certificações de compliance documentadas pesam para uso corporativo.

**Você decide por um time:** Copilot Business ou Enterprise é o mais fácil de administrar, com orçamento por usuário e reserva comum de créditos. Só não trate nenhuma das três como escolha definitiva: teste no seu código, com o seu critério de sucesso.

## Perguntas Frequentes

### O Claude Code é gratuito?

Não. Segundo a página de preços da Anthropic, o Claude Code está incluído nos planos pagos (Pro, Max, Team e Enterprise), sem custo extra, mas o plano Free não o inclui.

### O Google Antigravity tem plano gratuito?

Sim. O nível base é gratuito, com uma cota que renova toda semana e acesso aos modelos Gemini. Os planos pagos renovam a cota a cada cinco horas.

### O que mudou no preço do GitHub Copilot em 2026?

Desde 1º de junho de 2026, o Copilot troca as requisições premium por créditos de IA calculados por token. Os preços mensais de tabela continuaram os mesmos, mas o uso de chat e agente passou a gastar créditos no preço de API de cada modelo.

### O autocompletar do Copilot gasta créditos?

Não. Autocompletar e sugestões de próxima edição estão incluídos em todos os planos e não consomem créditos. Só chat, modo agente, revisão de código e Copilot CLI gastam.

### Qual dos três é o mais barato?

Pela tabela, o Copilot Pro, a US$ 10 por mês. Mas o mais barato de verdade depende do uso: com agente pesado, o crédito do Copilot acaba rápido, e uma mensalidade com cota maior pode sair mais em conta.

## Conclusão

Nenhuma das três é a melhor em tudo, e o preço de tabela quase não ajuda a decidir. Copilot é a entrada mais barata e a melhor para autocompletar. Antigravity é a que deixa você testar de graça. Claude Code é a que faz mais sentido para delegar trabalho longo, desde que você aceite uma cota que não é publicada. O caminho mais seguro é começar pela camada mais barata da ferramenta que combina com o seu tipo de trabalho, medir por uma semana quanto da cota você realmente gasta, e só então subir de plano.

## Leia Também

- [Review do Claude Code em 2026: vale o preço?](/claude-code-review-vale-o-preco/)
- [Google Antigravity explicado](/google-antigravity/)
- [MCP no Claude Code, Cursor e Copilot: 7 cuidados de segurança](/mcp-seguranca-agentes-de-codigo/)
- [5 recursos do Claude Code que a maioria dos devs nunca ativa](/claude-code-recursos-ocultos/)

---

*Fontes: [Anthropic, planos e preços](https://claude.com/pricing), [Google Antigravity, documentação de planos](https://antigravity.google/docs/plans/), [GitHub, Copilot passa a cobrar por uso](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/), [CloudZero, preços do Google Antigravity](https://www.cloudzero.com/blog/google-antigravity-pricing/).*
