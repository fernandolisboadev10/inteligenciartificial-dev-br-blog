---
title: "12 Comandos Personalizados que Transformam o ChatGPT numa Ferramenta de Estudo"
description: "Configure 12 comandos no estilo slash uma vez, e o ChatGPT para de dar respostas genéricas e passa a montar mapas mentais, flashcards e palácios da memória sob demanda. Prontos pra copiar e colar."
category: "Engenharia de Prompt"
date: 2026-09-07
readingTime: "5 min"
image: "./images/chatgpt-study-commands.webp"
imageAlt: "Homem confiante usando um notebook à noite, cercado por rótulos neon brilhantes de comandos de estudo do ChatGPT como /mindmap, /flashcards e /quizboard"
---

Digitar um prompt novo e detalhado toda vez que você quer que o ChatGPT te faça perguntas ou resuma um capítulo cansa rápido. Existe um padrão mais simples que tem circulado entre estudantes nas redes sociais: ensinar ao modelo um punhado de comandos curtos uma única vez, e depois acioná-los com uma linha só pelo resto da sua sessão de estudo.

A ideia é direta. Você cola uma mensagem de configuração que define o que cada comando significa. A partir daí, digitar algo como `/flashcards Mitose vs Meiose` te dá um conjunto de flashcards formatado em vez de uma parede de texto que você precisa reorganizar sozinho.

Abaixo está um prompt de configuração funcional com 12 comandos, mais um exemplo de uso pra cada um. Cole a configuração uma vez no início de uma conversa (ou salve como instrução personalizada / instrução de Projeto, se o seu plano suportar), e depois use os comandos curtos em cada assunto que você estiver estudando.

## O prompt de configuração

Cole isto uma vez, no topo de uma conversa nova:

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">setup.txt</span>
    <button class="copy-btn" data-copy-target="prompt-setup">Copiar</button>
  </div>
  <pre id="prompt-setup"><code>Você é meu assistente de estudos pessoal. A partir de agora, sempre que uma mensagem começar com um dos comandos abaixo, responda usando exatamente aquele formato em vez de uma resposta normal. Ignore esta instrução para qualquer mensagem que não comece com um comando.

/mindmap [assunto] -> Monte um mapa mental em texto: uma ideia central, 4 a 6 ramos principais, 2 a 3 subpontos em cada ramo.
/cheatsheet [assunto] -> Cola de uma página: só definições-chave, fórmulas e fatos. Sem explicações longas.
/explodedview [assunto] -> Divida o assunto nas suas partes individuais, explicando o que cada uma faz e como se conecta com o resto.
/blueprint [assunto] -> Trilha de aprendizado passo a passo pra dominar esse assunto do zero, na ordem certa, com estimativas de tempo aproximadas.
/flowchart [assunto] -> Transforme o processo num fluxograma em texto usando setas: Início -> Etapa -> Decisão -> Fim.
/flashcards [assunto] -> Gere 10 flashcards de pergunta e resposta, um par por linha, formatados como P: / R:.
/diagram [assunto] -> Descreva um diagrama rotulado mostrando como as partes desse assunto se relacionam entre si.
/timeline [assunto] -> Liste eventos ou etapas principais em ordem cronológica, com uma linha de contexto cada.
/comparison [A] vs [B] -> Tabela comparativa com pelo menos 5 critérios, mostrando diferenças e semelhanças.
/conceptmap [assunto] -> Mapeie como os conceitos dentro desse assunto se conectam e se influenciam.
/memorypalace [assunto] -> Transforme os fatos principais num palácio da memória: associe cada um a um lugar vívido numa casa imaginária, em ordem.
/quizboard [assunto] -> Autoavaliação de 10 perguntas misturando múltipla escolha, verdadeiro/falso e resposta curta, com o gabarito no final.

Mantenha cada resposta focada em estudo e memorização, não em explicações gerais, a menos que eu peça explicitamente por uma.</code></pre>
</div>

Com isso configurado, aqui está pra que serve cada comando.

## /mindmap

Use quando você precisa do panorama geral antes dos detalhes — como um assunto se ramifica e onde tudo se encaixa em relação ao resto.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-mindmap">Copiar</button>
  </div>
  <pre id="prompt-mindmap"><code>/mindmap Fotossíntese</code></pre>
</div>

## /cheatsheet

Ótimo na noite anterior a uma prova, quando você já entende a matéria e só precisa de cada fórmula e definição num lugar só, sem enrolação.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-cheatsheet">Copiar</button>
  </div>
  <pre id="prompt-cheatsheet"><code>/cheatsheet Reações de Química Orgânica</code></pre>
</div>

## /explodedview

Bom pra qualquer coisa feita de partes que interagem — uma célula, um motor, uma lei. Isso força o modelo a nomear cada componente em vez de descrever o assunto como um bloco só.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-explodedview">Copiar</button>
  </div>
  <pre id="prompt-explodedview"><code>/explodedview Como Funciona uma Rede Neural</code></pre>
</div>

## /blueprint

Pra quando você está começando um assunto do zero absoluto e não sabe em que ordem aprender as coisas. Ele te dá uma ementa em vez de uma resposta.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-blueprint">Copiar</button>
  </div>
  <pre id="prompt-blueprint"><code>/blueprint Aprender Python do Zero</code></pre>
</div>

## /flowchart

Ideal pra processos com etapas e pontos de decisão — ciclos, algoritmos, fluxos de trabalho. Setas em texto já bastam pra enxergar o formato sem desenhar nada.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-flowchart">Copiar</button>
  </div>
  <pre id="prompt-flowchart"><code>/flowchart O Ciclo da Água</code></pre>
</div>

## /flashcards

O cavalo de batalha da repetição espaçada. Peça isso regularmente sobre o mesmo assunto e você vai receber ângulos ligeiramente diferentes a cada vez, o que é mais útil do que decorar um conjunto fixo.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-flashcards">Copiar</button>
  </div>
  <pre id="prompt-flashcards"><code>/flashcards Causas da Revolução Francesa</code></pre>
</div>

## /diagram

Uma versão mais solta do /explodedview — use quando você se importa mais com as relações do que com uma lista exaustiva de partes.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-diagram">Copiar</button>
  </div>
  <pre id="prompt-diagram"><code>/diagram O Sistema Imunológico Humano</code></pre>
</div>

## /timeline

Ordem importa nesse aqui — história, fases de projeto, estágios biológicos. Ele evita que você confunda sequência com importância.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-timeline">Copiar</button>
  </div>
  <pre id="prompt-timeline"><code>/timeline Principais Eventos da Segunda Guerra Mundial</code></pre>
</div>

## /comparison

Sempre que dois conceitos se confundem entre si, isso coloca eles lado a lado em vez de descrever cada um num parágrafo separado que você precisa cruzar sozinho.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-comparison">Copiar</button>
  </div>
  <pre id="prompt-comparison"><code>/comparison Mitose vs Meiose</code></pre>
</div>

## /conceptmap

Parecido com o /mindmap, mas focado em causa e efeito e influência em vez de hierarquia — útil pra assuntos como economia, onde tudo empurra tudo.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-conceptmap">Copiar</button>
  </div>
  <pre id="prompt-conceptmap"><code>/conceptmap Oferta e Demanda</code></pre>
</div>

## /memorypalace

A técnica clássica dos loci, gerada pra você. Ótimo pra listas ordenadas de fatos que são difíceis de decorar mecanicamente — nomes de nervos, ossos, capitais.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-memorypalace">Copiar</button>
  </div>
  <pre id="prompt-memorypalace"><code>/memorypalace Os 12 Nervos Cranianos</code></pre>
</div>

## /quizboard

Rode isso depois de tudo o resto pra checar o que realmente ficou. Formatos de pergunta misturados pegam lacunas que só os flashcards costumam deixar passar.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-quizboard">Copiar</button>
  </div>
  <pre id="prompt-quizboard"><code>/quizboard A Tabela Periódica</code></pre>
</div>

## Fazendo isso pegar

O prompt de configuração só dura na conversa atual, a menos que você salve em algum lugar permanente. Se você tem o ChatGPT Plus, cole em **Instruções Personalizadas** (Configurações → Personalização) ou nas instruções de um **Projeto**, pra que toda conversa nova dentro daquele projeto já conheça os comandos. Claude e Gemini têm o mesmo recurso através das próprias instruções persistentes ou funcionalidades de "Projetos" — o prompt em si não precisa mudar, só onde você o salva.

Você não precisa usar os 12. A maioria das pessoas se acomoda com três ou quatro que usa o tempo todo — geralmente /flashcards, /cheatsheet, e qualquer um que combine com a forma natural de pensar, mapas mentais pra quem aprende visualmente, linhas do tempo pra quem estuda história ou processos. Teste nos seus próximos exercícios de leitura e fique com os que realmente mudarem a forma como você revisa.
