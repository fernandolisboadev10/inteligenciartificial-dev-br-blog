---
title: "12 Comandos Personalizados que Transformam o ChatGPT (ou Claude) num Parceiro de Código"
description: "Configure 12 comandos no estilo slash uma vez, e a IA para de responder com textão e passa a explicar erro, revisar código, gerar testes e escrever mensagem de commit sob demanda. Prontos pra copiar e colar."
category: "Engenharia de Prompt"
date: 2026-09-28
readingTime: "7 min"
image: "./images/chatgpt-comandos-para-programadores.webp"
imageAlt: "Foto editorial em close-up da mesa de um desenvolvedor, tela do notebook com um editor de código desfocado ao lado de uma janela de chat, post-its coloridos na borda do monitor com nomes de comandos escritos à mão, luz de fim de tarde"
draft: false
---

Quem programa com ajuda de IA acaba escrevendo os mesmos prompts o dia inteiro: "explica esse erro", "revisa esse trecho", "escreve os testes disso". Cada vez, você reexplica o formato que quer, e cada vez a resposta vem com um parágrafo de introdução que ninguém pediu.

A saída é a mesma dos nossos artigos de [comandos para estudar](/chatgpt-comandos-para-estudar) e de [comandos para o trabalho](/chatgpt-comandos-produtividade): ensinar ao modelo um punhado de comandos curtos uma única vez. Depois disso, digitar `/bug [erro]` te devolve causa, correção e como evitar, direto ao ponto.

Abaixo está um prompt de configuração com 12 comandos pensados pra rotina de quem escreve código, mais um exemplo de uso pra cada um. Cole a configuração uma vez no começo de uma conversa (ou salve como instrução personalizada, se o seu plano suportar) e use os comandos no resto do dia.

## O prompt de configuração

Cole isto uma vez, no topo de uma conversa nova:

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">setup.txt</span>
    <button class="copy-btn" data-copy-target="prompt-setup">Copiar</button>
  </div>
  <pre id="prompt-setup"><code>Você é meu parceiro de programação. A partir de agora, sempre que uma mensagem começar com um dos comandos abaixo, responda usando exatamente aquele formato em vez de uma resposta normal. Ignore esta instrução para qualquer mensagem que não comece com um comando.

/explain [código] -> Explique o que o código faz em linguagem simples: resumo de uma frase, depois passo a passo em bullets curtos, e por fim qualquer armadilha ou comportamento surpreendente.
/bug [erro + código] -> Diagnóstico em três blocos: Causa provável, Correção (com o código corrigido) e Como evitar de novo. Se faltar informação pra ter certeza, diga qual.
/review [código] -> Revisão de código em três listas: Problemas (bugs e riscos), Melhorias (legibilidade e desempenho) e Pontos positivos. Ordene por gravidade e cite a linha ou trecho.
/test [função ou código] -> Escreva testes unitários cobrindo o caminho feliz, casos de borda e entradas inválidas. Pergunte qual framework de testes uso se eu não tiver dito.
/refactor [código] -> Refatore para ficar mais legível sem mudar o comportamento. Mostre o código novo e uma lista curta do que mudou e por quê.
/commit [diff ou descrição] -> Mensagem de commit no padrão Conventional Commits: título de até 72 caracteres e, se preciso, um corpo curto explicando o porquê.
/pr [diff ou descrição] -> Descrição de pull request com: Resumo, O que mudou (bullets), Como testar e Riscos ou pontos de atenção.
/docs [código] -> Documentação do código: comentário de cabeçalho no formato adequado à linguagem, com parâmetros, retorno e um exemplo de uso.
/regex [descrição] -> Uma expressão regular que resolve o pedido, uma explicação de cada parte e 3 exemplos que casam e 3 que não casam.
/sql [descrição da consulta e das tabelas] -> A consulta SQL pedida, uma explicação curta e uma observação sobre índices ou desempenho se fizer diferença.
/security [código] -> Aponte vulnerabilidades (injeção, exposição de dados, autenticação fraca, entradas não validadas), com gravidade e a correção sugerida pra cada uma.
/rubber [problema] -> Não resolva. Faça de 3 a 5 perguntas que me ajudem a achar a resposta sozinho, uma de cada vez, começando pela mais reveladora.

Mantenha cada resposta focada e pronta pra usar, sem introduções ou explicações longas, a menos que eu peça explicitamente. Nunca invente funções, bibliotecas ou opções que não existem: se não tiver certeza, diga.</code></pre>
</div>

Com isso configurado, aqui está pra que serve cada comando.

## /explain

Use quando você herdou um código que ninguém documentou, ou quando abriu uma biblioteca e quer entender antes de mexer. O bloco final, de armadilhas, costuma ser o mais valioso.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-explain">Copiar</button>
  </div>
  <pre id="prompt-explain"><code>/explain [cole aqui a função que você não entende]</code></pre>
</div>

## /bug

O comando mais usado da lista pra quem programa. Cole a mensagem de erro inteira junto com o trecho de código, porque a causa quase sempre está na combinação dos dois.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-bug">Copiar</button>
  </div>
  <pre id="prompt-bug"><code>/bug TypeError: Cannot read properties of undefined (reading 'map')
[cole aqui o componente onde o erro acontece]</code></pre>
</div>

## /review

Bom pra rodar antes de abrir um pull request, como uma primeira leitura crítica. A ordem por gravidade evita que um problema sério fique escondido no meio de sugestões de estilo.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-review">Copiar</button>
  </div>
  <pre id="prompt-review"><code>/review [cole aqui o arquivo ou a função que você acabou de escrever]</code></pre>
</div>

## /test

Pra quando você escreveu a função e ainda não tem coragem de escrever os testes. Os casos de borda e as entradas inválidas são justamente os que a gente esquece.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-test">Copiar</button>
  </div>
  <pre id="prompt-test"><code>/test Usando Jest, a função calcularDesconto(preco, percentual) que retorna o preço final com desconto aplicado</code></pre>
</div>

## /refactor

Use em código que funciona mas dá vergonha de mostrar. A regra de "não mudar o comportamento" está no comando de propósito: refatorar e alterar a lógica ao mesmo tempo é receita pra bug.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-refactor">Copiar</button>
  </div>
  <pre id="prompt-refactor"><code>/refactor [cole aqui a função de 80 linhas cheia de if aninhado]</code></pre>
</div>

## /commit

Elimina o "fix stuff" e o "ajustes" do histórico. Cole o resultado do `git diff` e receba uma mensagem que faz sentido daqui a seis meses.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-commit">Copiar</button>
  </div>
  <pre id="prompt-commit"><code>/commit [cole aqui o resultado do git diff --staged]</code></pre>
</div>

## /pr

Pra descrições de pull request que o revisor realmente consegue seguir. O bloco "Como testar" é o que mais economiza tempo pra quem vai revisar.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-pr">Copiar</button>
  </div>
  <pre id="prompt-pr"><code>/pr Adicionei paginação na listagem de pedidos, com 20 itens por página, e um teste pro caso de página vazia</code></pre>
</div>

## /docs

Útil quando o código está pronto e a documentação ficou pra "depois". O exemplo de uso incluído no comando é o que costuma faltar em documentação escrita à mão.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-docs">Copiar</button>
  </div>
  <pre id="prompt-docs"><code>/docs [cole aqui a função pública que outras pessoas do time vão usar]</code></pre>
</div>

## /regex

Ninguém decora expressão regular. O comando obriga o modelo a mostrar exemplos que casam e que não casam, o que é a única forma confiável de saber se a regex faz o que você quer.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-regex">Copiar</button>
  </div>
  <pre id="prompt-regex"><code>/regex Validar um CEP brasileiro, com ou sem hífen</code></pre>
</div>

## /sql

Pra consultas que você sabe descrever em português mas trava na hora de escrever o JOIN. Passe os nomes das tabelas e colunas, senão o modelo vai chutar.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-sql">Copiar</button>
  </div>
  <pre id="prompt-sql"><code>/sql Tabelas: clientes(id, nome) e pedidos(id, cliente_id, valor, data). Quero os 10 clientes que mais gastaram no último mês</code></pre>
</div>

## /security

Não substitui uma auditoria de verdade, mas pega o erro básico antes de ele ir pra produção: consulta montada com texto do usuário, senha em log, rota sem checagem de permissão.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-security">Copiar</button>
  </div>
  <pre id="prompt-security"><code>/security [cole aqui a rota de login e a função que consulta o banco]</code></pre>
</div>

## /rubber

O comando mais diferente da lista: em vez de dar a resposta, ele te faz perguntas. É a técnica do patinho de borracha, em que explicar o problema em voz alta já revela a solução. Serve pra quando você quer aprender, não só resolver.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-rubber">Copiar</button>
  </div>
  <pre id="prompt-rubber"><code>/rubber Meu formulário salva os dados mas a lista não atualiza até eu recarregar a página</code></pre>
</div>

## Fazendo isso pegar

O prompt de configuração só dura na conversa atual, a menos que você salve em algum lugar permanente. No ChatGPT, cole em **Instruções Personalizadas** (Configurações, Personalização) ou nas instruções de um **Projeto**. No Claude, use as instruções de um **Projeto**. No Gemini, dá pra criar um **Gem**. O texto não muda, só o lugar onde você o salva.

Se você usa o Claude Code, existe um caminho ainda mais direto: comandos e skills que ficam salvos no seu projeto. Explicamos como em [5 Recursos do Claude Code que a Maioria dos Devs Nunca Ativa](/claude-code-recursos-ocultos).

Duas regras valem pra qualquer ferramenta de IA de código. Primeiro, **nunca cole chaves de API, senhas ou dados de clientes** num prompt, mesmo com instrução personalizada ativada. Segundo, **trate tudo que a IA devolve como rascunho**: rode os testes, leia a correção antes de aplicar e confira se a função ou a biblioteca citada realmente existe. Vale ler também [Vibe Coding sem Bagunça](/vibe-coding-6-habitos-sem-bagunca), que trata desse cuidado com mais profundidade.

Você não precisa usar os 12. A maioria dos devs fica com quatro ou cinco: geralmente /bug, /review, /test e /commit. Teste na sua próxima semana de trabalho e fique com os que realmente economizarem tempo.
