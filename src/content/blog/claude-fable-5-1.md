---
title: "Claude Fable 5.1 Explicado: Benchmarks, Preços e Novidades"
description: "O Claude Fable 5.1 da Anthropic chega com uma pontuação quase perfeita no SWE-bench e um preço mais baixo. Veja o que mudou, o que é o Mythos 5.1, e quanto custa."
category: "Chatbots"
date: 2026-09-07
readingTime: "7 min"
image: "./images/claude-fable-5-1.webp"
imageAlt: "Livro ornamentado brilhante irradiando luz quente e padrões de rede neural, ilustrando o Claude Fable 5.1"
---

A Anthropic lançou o Claude Fable 5.1 em 1º de setembro de 2026, e o número de destaque é difícil de ignorar: 95,0% no SWE-bench Verified, uma das pontuações mais altas que qualquer modelo já registrou nesse benchmark. Ele já está disponível de forma geral na API do Claude, AWS, Google Cloud e Microsoft Azure, acessível como `claude-fable-5-1`.

Se você ainda está no Fable 5, ou só viu o nome "Mythos 5.1" circulando e não sabia bem como ele se relaciona, aqui vai o resumo em português claro.

## O Que o Claude Fable 5.1 Realmente É

O Fable 5.1 é o novo carro-chefe da Anthropic, construído pra avançar ainda mais em código, trabalho de conhecimento e resolução de problemas de longa duração. A Anthropic diz que ele empata ou supera o Fable 5 em esforço de raciocínio baixo e médio, e abre uma vantagem nítida nos níveis de esforço mais altos, a configuração que você usaria numa tarefa genuinamente difícil, não numa pergunta rápida.

Ele vem com uma janela de contexto de 1 milhão de tokens e pode gerar até 128.000 tokens por resposta, espaço suficiente pra guardar uma base de código grande ou um documento de pesquisa longo numa única conversa.

## Fable 5.1 vs. Mythos 5.1: Qual a Diferença?

Aqui está a parte que confunde as pessoas: Fable 5.1 e Mythos 5.1 são o mesmo modelo por baixo, vestindo duas roupas diferentes.

O **Fable 5.1** é a versão que todo mundo recebe, com as barreiras de segurança de produção da Anthropic totalmente ativas. O **Mythos 5.1** é o mesmo modelo com proteções cibernéticas e biológicas mais soltas, e é apenas por convite, restrito a organizações verificadas de cibersegurança e ciências da vida que têm uma necessidade legítima de capacidades que as proteções padrão, do contrário, restringiriam.

Essa diferença não é só teórica. No Terminal-Bench 4.0, o Mythos 5.1 pontua 60,9% contra 55,8% do Fable 5.1, um custo de performance real que vem de manter o modelo público mais seguro por padrão.

## O Salto de Benchmark em Relação ao Fable 5

Os números avançam bastante nesse lançamento, não só nas bordas:

- **Terminal-Bench-Science**: 24,7% → 52,6%, mais que o dobro da pontuação do Fable 5
- **Terminal-Bench 4.0** (código): 42,0% → 55,8%
- **SWE-bench Verified**: 95,0%
- **SWE-bench Pro**: 81,2, uma vantagem discreta sobre o Fable 5 e o Opus 5
- **ProofBench v1.1** (provas matemáticas formais): 100% perfeito

Os saltos em ciência e código são os que mais chamam atenção. Dobrar uma pontuação de benchmark num único lançamento é incomum, e sinaliza que a Anthropic ajustou essa geração especificamente pra trabalho técnico longo e em múltiplas etapas, em vez de só polir a conversa geral.

## Preço: Mais Barato Apesar de Mais Inteligente

O Fable 5.1 custa $10 por milhão de tokens de entrada e $50 por milhão de tokens de saída, cerca de 25% mais barato que o Fable 5 no geral, e até 45% mais barato em cargas de trabalho fortemente agênticas, em que o modelo fica chamando ferramentas e iterando repetidamente.

A mudança maior está no preço de cache. Tokens de entrada em cache agora custam $0,25 por milhão, uma queda em relação aos $1,00 do Fable 5, um corte de 75%. Pra qualquer coisa que reaproveita um prompt de sistema longo ou contexto de base de código em várias requisições, essa diferença soma rápido.

## Fable 5.1 em um Relance

<div style="max-width:900px;margin:24px auto;overflow-x:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table style="width:100%;border-collapse:collapse;background:#ffffff;box-shadow:0 1px 4px rgba(0,0,0,0.08);border-radius:8px;overflow:hidden;">
    <thead>
      <tr style="background:var(--ink-deep);color:#ffffff;">
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Métrica</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Fable 5</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Fable 5.1</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Mythos 5.1</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">🧪 Terminal-Bench-Science</td>
        <td style="padding:12px 16px;">24,7%</td>
        <td style="padding:12px 16px;">52,6%</td>
        <td style="padding:12px 16px;">—</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;">💻 Terminal-Bench 4.0</td>
        <td style="padding:12px 16px;">42,0%</td>
        <td style="padding:12px 16px;">55,8%</td>
        <td style="padding:12px 16px;">60,9%</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">✅ SWE-bench Verified</td>
        <td style="padding:12px 16px;">—</td>
        <td style="padding:12px 16px;">95,0%</td>
        <td style="padding:12px 16px;">—</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;">📤 Preço de leitura de cache</td>
        <td style="padding:12px 16px;">$1,00/M</td>
        <td style="padding:12px 16px;">$0,25/M</td>
        <td style="padding:12px 16px;">$0,25/M</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;font-weight:600;">🔐 Acesso</td>
        <td style="padding:12px 16px;">Geral</td>
        <td style="padding:12px 16px;">Geral</td>
        <td style="padding:12px 16px;">Somente convite</td>
      </tr>
    </tbody>
  </table>
</div>

## Perguntas Frequentes

### O que é o Claude Fable 5.1?

É o mais novo modelo carro-chefe da Anthropic, lançado em 1º de setembro de 2026, focado em código, trabalho de conhecimento e resolução de problemas de longa duração. Está disponível pela API do Claude, AWS, Google Cloud e Microsoft Azure.

### O Claude Fable 5.1 é o mesmo que o Mythos 5.1?

São o mesmo modelo por baixo. O Fable 5.1 roda com todas as proteções de produção da Anthropic. O Mythos 5.1 tem restrições cibernéticas e biológicas mais soltas e é somente por convite, limitado a organizações verificadas de cibersegurança e ciências da vida.

### Quanto custa o Claude Fable 5.1?

$10 por milhão de tokens de entrada e $50 por milhão de tokens de saída, com entrada em cache a $0,25 por milhão. Isso é cerca de 25% mais barato que o Fable 5 no geral, e até 45% mais barato em cargas de trabalho agênticas.

### Qual é a janela de contexto do Claude Fable 5.1?

1 milhão de tokens, com saída máxima de 128.000 tokens por resposta.

## Conclusão

O Fable 5.1 não é um lançamento de ponto menor. Dobrar um benchmark de ciência, empurrar as pontuações de código pra além de 95% no SWE-bench Verified, e cortar os preços de cache em 75%, tudo no mesmo lançamento, é muita coisa pra acontecer de uma vez. Se você constrói agentes de código ou pesquisa pesada sobre o Claude, vale a pena migrar; o ganho de performance e o corte de preço apontam na mesma direção.

---

*Fontes: [Anthropic — Introducing Claude Fable 5.1 and Claude Mythos 5.1](https://www.anthropic.com/claude-fable-and-mythos-5-1), [VentureBeat — Claude Fable 5.1 and Mythos 5.1 arrive with a 75% cost reduction](https://venturebeat.com/technology/anthropics-claude-fable-5-1-and-mythos-5-1-arrive-with-a-75-cost-reduction-for-fable-cache-reads), [Vellum — Claude Fable 5.1 & Mythos 5.1 Benchmarks Explained](https://www.vellum.ai/blog/claude-fable-5-1-mythos-5-1-benchmarks-explained), [llm-stats.com — Claude Fable 5.1](https://llm-stats.com/models/claude-fable-5-1).*
