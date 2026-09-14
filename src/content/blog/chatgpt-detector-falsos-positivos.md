---
title: "Alimentamos Detectores de IA com Redações Escritas por Humanos. Eles Marcaram Alunos de Verdade como Trapaceiros."
description: "Detectores de IA marcaram uma redação de 1841 e um artigo da Wikipédia de 2012 como 'falsos' no nosso próprio teste. Aqui estão os dados reais sobre falsos positivos, e como se proteger."
category: "Tutoriais"
date: 2026-09-08
readingTime: "9 min"
image: "./images/chatgpt-detector-falsos-positivos.webp"
imageAlt: "Foto editorial em close-up de uma redação impressa com frases destacadas em vermelho e uma caneta vermelha em cima, ao lado de um notebook mostrando uma pontuação de detecção de IA desfocada"
---

Em fevereiro de 2026, um juiz federal ordenou que a Adelphi University apagasse uma acusação de plágio contra um aluno chamado Orion Newby. O professor dele tinha passado um trabalho de Civilizações Mundiais pelo detector de IA do Turnitin, que marcou o texto como gerado por IA. Newby, que recebe apoio através do programa da universidade para alunos com deficiências de aprendizagem e neurológicas, apresentou verificações independentes da Grammarly e do ZeroGPT, ambas afirmando que a redação foi escrita por um humano. Mesmo assim, a Adelphi o puniu. Foi preciso um processo judicial e seis dígitos em custos legais pra reverter isso.

Esse caso hoje é citado como a primeira vez que um aluno venceu um processo federal por uma falsa acusação de plágio por IA. Não é um erro isolado. Pra ver o tamanho real do problema, fizemos nosso próprio teste: escrita humana real, com décadas de idade, passada por um detector de IA em atividade, lado a lado com texto que geramos nós mesmos.

## O Que Testamos

Montamos quatro amostras, cada uma claramente identificada pelo que ela realmente é:

- **Amostra A — Humana, literária**: A abertura do ensaio "Self-Reliance" de Ralph Waldo Emerson, publicado em 1841. Inequivocamente humana, escrita 179 anos antes do ChatGPT existir.
- **Amostra B — Humana, simples/enciclopédica**: O parágrafo de abertura do artigo "Fotossíntese" da Wikipédia, retirado de uma revisão de maio de 2012, muito antes de modelos de linguagem grandes escreverem conteúdo pra web. Usado sob a licença CC BY-SA da Wikipédia.
- **Amostra C — 100% gerada por IA**: Um parágrafo explicando como funciona a memória imunológica, escrito pelo Claude (modelo de IA da Anthropic) pra este teste, sem nenhuma edição.
- **Amostra D — Gerada por IA, depois editada**: O mesmo parágrafo da Amostra C, reescrito com contrações, transições informais e estrutura de frases mais solta, simulando um aluno que fez o rascunho com IA e depois reescreveu com a própria voz.

Passamos as quatro pelo detector gratuito de IA da Sapling, uma das ferramentas mais estabelecidas do setor. Também tentamos o GPTZero, o ZeroGPT e o detector do Quillbot, mas não conseguimos completar testes anônimos em nenhum deles; cada um exigia uma conta pra ver o resultado ou bloqueava totalmente o envio automatizado, o que já vale a pena notar; essas ferramentas ficaram mais difíceis de verificar casualmente desde 2023, não mais fáceis.

## Os Resultados

<div style="max-width:900px;margin:24px auto;overflow-x:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table style="width:100%;border-collapse:collapse;background:#ffffff;box-shadow:0 1px 4px rgba(0,0,0,0.08);border-radius:8px;overflow:hidden;">
    <thead>
      <tr style="background:var(--ink-deep);color:#ffffff;">
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Amostra</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Escrita de verdade por</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Veredito da Sapling</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;">A — Emerson, 1841</td>
        <td style="padding:12px 16px;">Humano</td>
        <td style="padding:12px 16px;font-weight:600;color:var(--rose);">84,2% Falso</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;">B — Wikipédia, 2012</td>
        <td style="padding:12px 16px;">Humano</td>
        <td style="padding:12px 16px;font-weight:600;color:var(--rose);">100,0% Falso</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;">C — Parágrafo de IA</td>
        <td style="padding:12px 16px;">IA</td>
        <td style="padding:12px 16px;font-weight:600;">100,0% Falso</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;">D — IA, depois editado</td>
        <td style="padding:12px 16px;">IA + edição humana</td>
        <td style="padding:12px 16px;font-weight:600;">100,0% Falso</td>
      </tr>
    </tbody>
  </table>
</div>

"Falso" é o rótulo da própria Sapling pra texto que ela acredita ser gerado por IA. No nosso pequeno teste, ela marcou as duas amostras humanas com a mesma confiança que marcou o texto de IA de verdade. Ela acertou nossos dois parágrafos de IA, incluindo o levemente editado, mas isso não é grande consolo quando ela também chamou um ensaio de 1841 de "falso" com 84% de confiança.

Queremos ser transparentes sobre os limites disso: é um detector, quatro amostras, uma única rodada. Não é uma pesquisa científica. É uma demonstração de que um detector real, atualmente comercializado, pode falhar em escrita humana real da forma mais básica possível, exatamente o tipo de falha descrito na pesquisa abaixo, em escala muito maior.

## Os Detectores de IA Realmente Funcionam?

Nosso teste é um eco pequeno e informal de um problema muito maior e bem documentado.

Um [estudo de Stanford](https://www.sciencedirect.com/science/article/pii/S2666389923001307) publicado na revista *Patterns* passou 91 redações reais do TOEFL, escritas por falantes não nativos de inglês, por sete detectores comerciais de IA. Em média, **61,3% foram marcadas como geradas por IA**. Redações de falantes nativos de inglês foram marcadas em apenas **5,1%** das vezes. A explicação dos pesquisadores: a escrita de não nativos tende a usar estruturas de frase mais simples e previsíveis, e os detectores confundem essa baixa variabilidade com a "assinatura" de uma máquina, não de uma pessoa.

Esse viés se acumula. A [Common Sense Media](https://getcoai.com/news/ai-detection-tools-disadvantage-black-students-study-finds/) entrevistou mais de mil adolescentes americanos e descobriu que alunos negros foram falsamente acusados de usar IA a uma taxa aproximadamente **duas vezes maior** que alunos brancos ou latinos, 20% contra 7% e 10%. Pesquisas separadas encontraram disparidades parecidas para alunos neurodivergentes, incluindo os com TDAH e autismo.

O Turnitin, o detector mais usado nas escolas americanas, originalmente afirmava uma **taxa de falso positivo de 1%**. Em junho de 2023, a empresa reconheceu que a taxa real era mais alta, sem publicar um número corrigido. Os [próprios testes do Washington Post](https://lawlibguides.sandiego.edu/c.php?g=1443311&p=10721367) encontraram uma taxa de falso positivo mais próxima de 50% numa amostra menor. Até a OpenAI, a empresa que popularizou o texto de IA que essas ferramentas tentam pegar, desistiu do próprio classificador: ele identificava corretamente apenas 26% do texto escrito por IA, marcava incorretamente texto humano como IA em 9% das vezes, e a OpenAI [descontinuou a ferramenta completamente em julho de 2023](https://www.searchenginejournal.com/openai-shuts-down-flawed-ai-detector/492565/) por "baixa taxa de precisão".

A resposta institucional seguiu os dados. Mais de 25 universidades, incluindo MIT, Yale, NYU, UC Berkeley e Vanderbilt, baniram ou restringiram o uso de detectores de IA em casos de má conduta acadêmica. A University of Pittsburgh desativou completamente o detector de IA do Turnitin, concluindo que a ferramenta não era confiável o suficiente pra usar sem um risco substancial de acusações falsas.

## Como Se Proteger de um Falso Positivo

Se você escreve seu próprio trabalho e ainda está preocupado em ser marcado, alguns hábitos realmente ajudam:

- **Escreva e salve numa plataforma com histórico de versões.** O histórico de versões do Google Docs, ou qualquer ferramenta que registre a data dos seus rascunhos, é uma evidência muito mais forte que a pontuação de um detector, em qualquer direção. É exatamente esse tipo de evidência que ajudou no caso de Newby.
- **Mantenha seu rastro de pesquisa.** Histórico do navegador, fontes salvas e anotações mostrando seu trabalho se desenvolvendo ao longo do tempo sustentam melhor um "sim, eu escrevi isso" do que qualquer coisa depois do fato.
- **Não confie num detector pra se defender, e não deixe que um te acuse também.** Se um detector marcar seu trabalho, pergunte que outra evidência está sendo usada. Uma pontuação percentual sozinha, em qualquer direção, não é prova de nada, segundo as próprias universidades que já chegaram a essa conclusão.
- **Se você usou IA e editou por conta própria, essa edição pode não te salvar.** Nossa Amostra D mostra que um parágrafo de IA levemente reescrito foi marcado com a mesma força que o não editado. Uma paráfrase leve não bate essas ferramentas de forma confiável, em nenhuma das duas direções, seja usando isso pra esconder o uso de IA ou temendo que isso esconda uma escrita humana honesta.
- **Conheça a política real da sua instituição**, não só o software dela. Muitas escolas, seguindo o exemplo de Pitt e Vanderbilt, agora exigem que a pontuação de um detector seja respaldada por outras evidências antes de qualquer ação disciplinar. Se a sua não diz isso explicitamente, pergunte.

## Perguntas Frequentes

### Os detectores de IA conseguem diferenciar de forma confiável escrita humana de escrita por IA?

Não de forma consistente. Nosso próprio teste pequeno marcou dois textos inequivocamente humanos como "Falso" com a mesma confiança que marcou texto de IA de verdade. Pesquisas revisadas por pares, com amostras muito maiores, confirmam isso, com taxas de falso positivo variando de cerca de 5% até 61%, dependendo do perfil de quem escreveu.

### Qual detector de IA é mais preciso?

Nenhum dos principais, incluindo Turnitin, GPTZero, Sapling e ZeroGPT, publicou taxas de falso positivo baixas o suficiente pra universidades tratarem uma pontuação como prova isolada. Mais de 25 grandes universidades agora exigem evidências adicionais antes de agir com base no resultado de um detector.

### Por que os detectores marcam tanto falantes não nativos de inglês e escrita simples?

Os detectores em geral funcionam medindo "perplexidade", o quão previsível é um texto. Estruturas de frase mais simples, comuns na escrita em inglês de não nativos e em prosa simples e densa em informação, como artigos antigos da Wikipédia, soam estatisticamente previsíveis, o mesmo sinal que os detectores usam pra identificar texto de IA. O estilo de escrita é o problema, não quem escreve.

### Editar um texto gerado por IA ajuda a passar por um detector?

Não de forma confiável, pelo menos contra o detector que testamos. Nosso parágrafo de IA levemente reescrito (Amostra D) foi marcado com a mesma confiança que a versão não editada. Uma reescrita mais pesada pode reduzir a pontuação de detecção em algumas ferramentas, mas não há um limite consistente, o que funciona nos dois sentidos: não é uma forma confiável de esconder o uso de IA, e também não é uma forma confiável de provar que você não usou.

### O que fazer se eu for falsamente acusado de usar IA?

Reúna evidências independentes: histórico de versões, anotações de pesquisa, histórico do navegador e rascunhos. Aponte, com calma, que a pontuação de um detector sozinha não é considerada prova confiável pelas políticas atuais de muitas universidades, e pergunte que evidência adicional está sendo usada contra você antes de aceitar qualquer resultado.

## Conclusão

Os detectores de IA não estão mentindo quando devolvem uma porcentagem, mas esse número é bem menos significativo do que parece. No nosso próprio teste rápido, um ensaio de 185 anos de um dos escritores mais famosos dos EUA foi marcado como 84% falso, e um parágrafo da Wikipédia com uma década foi marcado como 100% falso. Pesquisas maiores e revisadas por pares mostram a mesma falha em escala, atingindo com mais força falantes não nativos de inglês, alunos negros e alunos neurodivergentes. Universidades que de fato estudaram suas próprias ferramentas de detecção chegaram, em geral, à mesma conclusão: uma pontuação é um sinal, não um veredito. Trate assim, seja você um aluno preocupado em ser falsamente acusado ou um professor decidindo o que fazer com uma marcação.

---

*Fontes: [CBS New York — Orion Newby vence processo de plágio por IA](https://www.cbsnews.com/newyork/news/orion-newby-adelphi-university-ai-plagiarism-accusations/), [Liang et al., "GPT detectors are biased against non-native English writers," Patterns (2023)](https://www.sciencedirect.com/science/article/pii/S2666389923001307), [estudo da Common Sense Media via CO/AI](https://getcoai.com/news/ai-detection-tools-disadvantage-black-students-study-finds/), [Vanderbilt University — Guidance on AI Detection](https://www.vanderbilt.edu/brightspace/2023/08/16/guidance-on-ai-detection-and-why-were-disabling-turnitins-ai-detector/), [Search Engine Journal — OpenAI Shuts Down Flawed AI Detector](https://www.searchenginejournal.com/openai-shuts-down-flawed-ai-detector/492565/), [University of San Diego — The Problems with AI Detectors](https://lawlibguides.sandiego.edu/c.php?g=1443311&p=10721367). Teste de detecção ao vivo rodado no [Sapling AI Detector](https://sapling.ai/ai-content-detector), setembro de 2026.*
