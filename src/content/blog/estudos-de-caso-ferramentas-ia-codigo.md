---
title: "Investigamos os Estudos de Caso do Claude Code, Codex, Copilot e Antigravity. Veja Quais Realmente Se Sustentam"
description: "Anthropic, OpenAI, Microsoft e Google divulgam estudos de caso brilhantes pras próprias ferramentas de IA de código. Fomos atrás do que está sendo medido de verdade, quem publicou e se existe pesquisa independente por trás dos números."
category: "Estudos de Caso"
date: 2026-09-27
readingTime: "9 min"
image: "./images/estudos-de-caso-ferramentas-ia-codigo.webp"
imageAlt: "Foto editorial da mesa de um desenvolvedor com um notebook mostrando um editor de código desfocado ao lado de uma pilha de relatórios impressos cobertos de marcações de caneta destaque e post-its, luz suave de janela, profundidade de campo rasa"
draft: false
---

Toda ferramenta grande de IA de código já tem seu estudo de caso. A Anthropic tem clientes reportando produtividade 10 vezes maior. A OpenAI tem fundadores transformando o onboarding de novos funcionários num fluxo de trabalho de agente. O GitHub mostra o tempo de ciclo de pull request caindo dias. O Google tem uma companhia aérea gerando metade do código de QA dela de forma automática. Lendo um atrás do outro, parece que o setor inteiro já resolveu o problema.

Só que o número no título não é a parte interessante. A parte interessante é *quem mediu aquilo, como mediu, e se alguém de fora da empresa que vende a ferramenta conferiu*. Fomos atrás dos estudos de caso públicos dos quatro maiores nomes do setor, Claude Code, Codex da OpenAI, GitHub Copilot e Antigravity do Google, e separamos o que é evidência de verdade do que é só texto de marketing bem escrito.

## Claude Code (Anthropic): Números Fortes, Todos Autodeclarados

A página de clientes da Anthropic é a mais específica das quatro. A [Classmethod](https://claude.com/customers/classmethod), uma integradora de nuvem japonesa, reporta ganhos de produtividade de até 10 vezes e diz que 99% de um projeto open-source que construiu (o "rulesync") foi implementado usando o Claude Code. A [HubSpot](https://claude.com/customers/hubspot) diz que o Claude Code acelerou uma migração completa de frontend durante o rebranding de 2025 da empresa, um trabalho que de outra forma teria levado meses. Internamente, a própria Anthropic publicou a história de um engenheiro que deixou o Claude Code rodar de forma semiautônoma numa classe inteira de erros de API em produção. O resultado: mais de 800 correções individuais aplicadas e uma taxa de erro reduzida em mil vezes.

São afirmações concretas e específicas, não aquele "aumento de produtividade" vago de sempre, e isso merece crédito. Mas todas elas vêm ou da própria página de clientes da Anthropic ou do próprio blog de engenharia da empresa. Não existe um estudo independente no meio disso, ninguém de fora auditando o "99%" ou o "mil vezes", e estudo de caso de cliente é, por natureza, opt-in: empresa com resultado decepcionante não manda depoimento.

**Nota: B+.** As especificações mais bem documentadas das quatro ferramentas, zero verificação independente.

## Codex (OpenAI): Nomes Reais, mas o Número Principal É Uso, Não Resultado

O estudo de caso de setembro da OpenAI traz três empresas nomeadas, Basis, Clay e Exa Labs, cada uma transformando um processo de negócio específico (onboarding de novos funcionários, fluxos de vendas, integrações) num fluxo de trabalho de agente Codex bem delimitado, em vez de um mandato genérico de "usem mais IA". O CFO da Virgin Atlantic, separadamente, atribuiu ganhos de produtividade em várias áreas ao Codex e ao ChatGPT Enterprise.

O número que a OpenAI usa como carro-chefe, porém, é uma estatística de uso: o Codex já responde por 64% dos tokens combinados de Codex e ChatGPT gerados por clientes empresariais. É um número real, mensurável e provavelmente correto, mas ele mostra que a adoção está acontecendo, não que o código resultante é bom. Uma fatia alta de tokens é consistente tanto com uma ferramenta que as pessoas amam usar quanto com uma ferramenta que exige muita ida e volta pra sair certo. O estudo de caso não distingue entre as duas hipóteses.

**Nota: B-.** Clientes nomeados e específicos, mas o número de destaque mede engajamento, não qualidade.

## GitHub Copilot (Microsoft): A Evidência Mais Contestada, o Que a Torna a Mais Honesta

A própria pesquisa do GitHub, feita em parceria com a Accenture, reporta ganhos operacionais reais: o tempo médio até abrir um pull request caiu de 9,6 dias pra 2,4 dias, o volume de PRs subiu 10,6%, e o tempo de ciclo caiu 3,5 horas. Dados de pesquisa por cima disso mostram satisfação alta, 88% dizem que completam tarefas mais rápido, 90% se sentem mais realizados no trabalho, 73% relatam ficar mais tempo em estado de flow.

Aqui está o que diferencia o Copilot das outras três ferramentas: existe um [estudo de caso longitudinal independente, com metodologia mista e sem financiamento de fornecedor, publicado no arXiv](https://arxiv.org/abs/2509.20353), que analisou produtividade de desenvolvedores com e sem o Copilot, e não encontrou mudança estatisticamente significativa na atividade de commits depois da adoção. Isso contradiz diretamente os números de satisfação, e é um dado genuinamente útil justamente porque ninguém da Microsoft assinou embaixo dele. Desenvolvedor *sentir* que está mais produtivo e desenvolvedor *entregar* mensuravelmente mais estão se mostrando duas afirmações diferentes, e o Copilot é a única das quatro ferramentas em que um estudo externo de fato testou essa lacuna.

**Nota: A-.** Não porque o resultado seja o melhor, mas porque é a única ferramenta com pesquisa independente de verdade pra colocar ao lado dos próprios números do fornecedor.

## Antigravity (Google): A Evidência Mais Fraca, e Uma Bandeira Vermelha em Aberto

O número principal do Google é a AirAsia gerando mais de 50% do código de QA em produção através do Antigravity, publicado no próprio blog do Google. Fora isso, comparações independentes da ferramenta descrevem a base de estudos de caso como rasa: uma análise do setor apontou que o Antigravity "ainda está no início da maturidade empresarial, com evidência limitada de implantação pública", segue em preview público, não tem certificações de compliance documentadas até meados de 2026, e teve uma vulnerabilidade de RCE (execução remota de código) reportada publicamente. O Gemini Code Assist, o outro produto de código do Google, está numa situação parecida, com um único estudo de caso referenciado (Dun & Bradstreet) e nenhum número específico associado a ele.

Parte disso é simplesmente uma questão de idade: o Antigravity foi lançado em novembro de 2025 e ainda não teve tempo de acumular a biblioteca de estudos de caso que as outras três ferramentas têm. Mas "ainda cedo demais pra ter evidência" e "ter evidência" são estados diferentes, e por enquanto o Antigravity está no primeiro deles.

**Nota: C.** A base de estudos de caso mais rasa das quatro, mais uma divulgação de segurança sem resolução que vale a pena conhecer antes de apostar fluxos de trabalho de produção nela.

## Qualidade da Evidência, Lado a Lado

<div style="max-width:900px;margin:24px auto;overflow-x:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table style="width:100%;border-collapse:collapse;background:#ffffff;box-shadow:0 1px 4px rgba(0,0,0,0.08);border-radius:8px;overflow:hidden;">
    <thead>
      <tr style="background:var(--ink-deep);color:#ffffff;">
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Ferramenta</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">🏆 Alegação principal</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">🔍 Estudo independente?</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">📋 Nota</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">Claude Code</td>
        <td style="padding:12px 16px;">Produtividade 10x, 99% de um código-fonte (Classmethod)</td>
        <td style="padding:12px 16px;">Não</td>
        <td style="padding:12px 16px;font-weight:600;color:var(--teal);">B+</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;">Codex</td>
        <td style="padding:12px 16px;">64% dos tokens empresariais de Codex+ChatGPT</td>
        <td style="padding:12px 16px;">Não</td>
        <td style="padding:12px 16px;">B-</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">GitHub Copilot</td>
        <td style="padding:12px 16px;">Tempo de PR caiu de 9,6 pra 2,4 dias</td>
        <td style="padding:12px 16px;">Sim (arXiv, resultado misto)</td>
        <td style="padding:12px 16px;font-weight:600;color:var(--teal);">A-</td>
      </tr>
      <tr style="background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;">Antigravity</td>
        <td style="padding:12px 16px;">50%+ do código de QA da AirAsia</td>
        <td style="padding:12px 16px;">Não, mais uma divulgação de RCE em aberto</td>
        <td style="padding:12px 16px;">C</td>
      </tr>
    </tbody>
  </table>
</div>

## O Padrão Que Se Repete nas Quatro

Três coisas se mantêm verdadeiras não importa qual ferramenta você está olhando, e vão continuar verdadeiras pra qualquer ferramenta que substitua essas quatro daqui a um ou dois anos.

**Estudo de caso publicado por fornecedor é um teto, não uma média.** As empresas se voluntariam com os melhores resultados que tiveram. Se um estudo de caso diz "10x", esse é o número do cliente que aceitou ser citado, não a mediana entre todo mundo que usa o produto.

**Volume de uso e qualidade de código são métricas diferentes, e os estudos de caso costumam misturar as duas.** "% do código escrito por IA" e "tokens gerados" mostram que as pessoas estão delegando trabalho pra ferramenta. Não mostram se esse trabalho precisou de retrabalho, introduziu bugs, ou realmente foi pra produção.

**A existência de pesquisa independente é, em si, o sinal mais forte.** Não é que o estudo acadêmico sobre o Copilot faça a ferramenta parecer melhor, o resultado dele foi, na verdade, menos favorável que a pesquisa do próprio fornecedor. É que a existência de escrutínio externo significa que alguém teve acesso a dados de uso reais e nenhum incentivo pra fazer a ferramenta parecer boa. Isso vale mais do que mais um depoimento cheio de elogios.

## Como Ler o Estudo de Caso de Qualquer Ferramenta de IA de Código

![Close-up de uma mão marcando uma linha num relatório de pesquisa impresso com uma caneta destaque, um notebook com um editor de código desfocado ao fundo](./images/estudos-de-caso-ferramentas-ia-codigo-checklist.webp)

Um checklist de cinco perguntas que continua valendo não importa quais ferramentas estejam no topo quando você estiver lendo isso:

1. **Quem publicou?** Uma página de cliente hospedada no domínio do próprio fornecedor é, antes de tudo, texto de marketing. Trate todo número dela como o melhor cenário possível, não a média.
2. **O que está sendo medido de verdade?** Fatia de uso, pesquisa de satisfação e qualidade do código entregue são três coisas diferentes. Saiba qual delas está por trás do número de destaque.
3. **Existe uma base de comparação?** "88% dizem que estão mais rápidos" é uma sensação. "O tempo de abertura de PR caiu de 9,6 pra 2,4 dias" é uma medição. Só uma das duas pode estar errada de um jeito que você perceberia.
4. **Existe algum estudo independente pra essa ferramenta?** Procure especificamente por ele. A existência importa mais do que a conclusão.
5. **O que não foi mencionado?** Nenhuma divulgação de segurança, nenhuma certificação de compliance, nenhum caso de falha, num produto novo ou em crescimento acelerado, isso costuma ser uma lacuna na evidência, não prova de que não há nada a reportar.

## Perguntas Frequentes

### Estudos de caso de ferramentas de IA de código são confiáveis?

São confiáveis como evidência de que *alguma coisa* funcionou pra *alguém*, nas condições que o fornecedor escolheu publicar. Trate os números específicos como o melhor cenário possível, não como uma média, a menos que uma fonte independente confirme.

### Qual ferramenta de IA de código tem mais pesquisa independente por trás?

O GitHub Copilot, com folga, é a única das quatro com um estudo longitudinal publicado e sem financiamento de fornecedor, mesmo que as conclusões desse estudo compliquem em vez de confirmar os números de marketing.

### Uma porcentagem alta de "código escrito por IA" significa que a ferramenta é melhor?

Não, sozinha. Ela mede quanto trabalho está sendo delegado pra ferramenta, não se esse código foi pra produção sem retrabalho ou sem introduzir mais bugs. Combine esse número com uma métrica de qualidade ou de defeitos antes de tratar isso como vitória.

### O Google Antigravity está pronto pra uso empresarial em produção?

Está mais atrás das outras três em evidência pública: menos implantações documentadas, nenhuma certificação de compliance até meados de 2026, e uma vulnerabilidade de RCE reportada publicamente. Isso não descarta a ferramenta, mas significa fazer sua própria avaliação em vez de confiar na biblioteca de estudos de caso dela.

### Estudos de caso sozinhos devem decidir qual ferramenta de IA de código um time adota?

Não. Eles são um filtro inicial pra saber quais ferramentas valem um teste de verdade, não um substituto pra testar no seu próprio código, com sua própria definição de sucesso.

## Conclusão

Colocando os estudos de caso das quatro maiores ferramentas de IA de código lado a lado, a diferença real não está em qual delas tem o número maior, está em quais têm alguma evidência além da própria página de marketing. Claude Code e Codex têm clientes específicos e nomeados e nenhuma verificação externa. Antigravity tem o registro mais raso das quatro e uma bandeira de segurança em aberto. Copilot é o ponto fora da curva: a única ferramenta com escrutínio acadêmico independente, e esse escrutínio não simplesmente confirmou a história do fornecedor. Isso não é motivo pra escolher o Copilot por padrão, é motivo pra ir atrás do mesmo tipo de escrutínio, ou da falta dele, antes de confiar no estudo de caso de qualquer ferramenta sobre ela mesma.

---

*Fontes: [Anthropic — Estudo de caso Classmethod](https://claude.com/customers/classmethod), [Anthropic — Estudo de caso HubSpot](https://claude.com/customers/hubspot), [Anthropic — Como a IA está transformando o trabalho na Anthropic](https://www.anthropic.com/research/how-ai-is-transforming-work-at-anthropic), [OpenAI — Da assistência à execução: como empresas colocam a IA pra trabalhar](https://openai.com/index/how-enterprises-put-ai-to-work/), [RuntimeWire — Basis, Clay e Exa sobre fluxos de agente do Codex da OpenAI](https://runtimewire.com/article/basis-clay-exa-agent-workflows-openai-codex), [Blog do GitHub — Quantificando o impacto do Copilot com a Accenture](https://github.blog/news-insights/research/research-quantifying-github-copilots-impact-in-the-enterprise/), [arXiv — Produtividade de Desenvolvedores Com e Sem o GitHub Copilot](https://arxiv.org/abs/2509.20353), [Blog do Google Cloud — Expandindo o Antigravity pra empresas](https://cloud.google.com/blog/products/ai-machine-learning/expanding-google-antigravity-for-enterprise-customers/), [Augment Code — Antigravity vs. Gemini Code Assist](https://www.augmentcode.com/tools/google-antigravity-vs-gemini-code-assist).*

## Leia Também

- [Review do Claude Code em 2026: vale o preço?](/claude-code-review-vale-o-preco/)
- [Claude Code, Antigravity ou Copilot: qual escolher](/claude-code-vs-antigravity-vs-copilot/)
- [O mesmo prompt de landing page em quatro modelos](/mesmo-prompt-landing-page-claude-gpt-gemini-deepseek/)
