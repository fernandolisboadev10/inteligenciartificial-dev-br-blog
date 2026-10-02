---
title: "Mantenedores de Open Source Estão Fechando a Porta para Pull Requests Feitos por IA. Veja Como Contribuir Sem Ser Banido."
description: "O cURL encerrou seu programa de bug bounty, o Ghostty restringiu código de IA e o tldraw fecha PRs externos automaticamente. O que é 'AI slop' para quem mantém projetos e um checklist de 7 passos para usar IA em open source do jeito certo."
category: "Ferramentas de IA para Código"
date: 2026-10-02
readingTime: "7 min"
image: "./images/slop-de-ia-pull-requests-open-source.webp"
imageAlt: "Foto editorial por cima do ombro de um mantenedor de open source cansado, à noite, diante de um monitor com uma lista enorme e desfocada de pull requests, luz quente de abajur e uma xícara de café sobre a mesa de madeira"
draft: false
---

Se você já usou uma ferramenta de IA para corrigir um bug no projeto de outra pessoa e abriu um pull request, provavelmente conhece a sensação: funcionou, os testes passaram e levou dez minutos. Agora olhe do outro lado da tela. Um mantenedor, quase sempre sem receber nada por isso, abre a caixa de entrada e encontra o décimo quinto pull request escrito por IA da semana, a maioria deles errada com muita confiança.

Esse segundo ponto de vista é o motivo de vários projetos conhecidos estarem mudando as regras. A tendência já ganhou até nome: "AI Slopageddon", termo usado pela analista da RedMonk Kate Holterhoff para a enxurrada de contribuições geradas por IA que os mantenedores não conseguem acompanhar.

Este artigo mostra o que está acontecendo, por que isso importa mesmo se você contribui só de vez em quando e traz um checklist para usar IA em open source sem virar o problema.

## O Que os Mantenedores Estão Fazendo

Segundo a [reportagem do InfoQ sobre o assunto](https://www.infoq.com/news/2026/02/ai-floods-close-projects/), as respostas até agora não são sutis:

- O **cURL** encerrou seu programa de bug bounty em janeiro de 2026. O mantenedor Daniel Stenberg tocava o programa havia seis anos e pagou cerca de US$ 86 mil no total. Em 2025, aproximadamente 20% dos envios eram gerados por IA, e a taxa de relatórios válidos tinha caído para cerca de 5%.
- O **Ghostty**, emulador de terminal, passou a proibir código gerado por IA enviado sem aprovação prévia. O criador, Mitchell Hashimoto, deixou claro que a regra não é contra a IA em si. Nas palavras dele: "This is not an anti-AI stance. This is an anti-idiot stance." (em tradução livre: "Isso não é ser contra IA. É ser contra quem não pensa.")
- O **tldraw** configurou o repositório para fechar automaticamente todos os pull requests externos. O criador, Steve Ruiz, descobriu que os próprios scripts de IA dele geravam issues mal escritas, que por sua vez atraíam PRs alucinados num ciclo vicioso.
- O **Gentoo Linux e o NetBSD** foram além e baniram contribuições de IA por completo.

Repare no que esses casos têm em comum. Nenhum mantenedor está dizendo que código feito com ajuda de IA é ruim por natureza. Eles reagem ao volume e à falta de esforço. Gerar um pull request hoje custa quase nada para quem contribui, mas revisar continua custando tempo real para o mantenedor, e esse desequilíbrio é o que está quebrando o sistema.

![Close-up de uma tela de notebook mostrando uma fila desfocada e interminável de pull requests abertos, com uma mão cansada sobre o trackpad](./images/slop-de-ia-pull-requests-open-source-queue.webp)

## Por Que Isso Importa Para Você, Mesmo Que Não Seja Mantenedor

Para quem está começando no Brasil, o open source costuma ser o primeiro portfólio público. Quem busca a primeira vaga ou o primeiro estágio em tecnologia escuta o conselho de "contribua com projetos abertos", e é comum esse movimento esquentar em outubro, com eventos como o Hacktoberfest, que incentivam novos contribuidores a abrir PRs. Só que um PR feito às pressas com IA pode te queimar justamente nos projetos em que você queria ser reconhecido.

Dois motivos para prestar atenção:

1. **As regras estão mudando sob os seus pés.** Guias de contribuição que não diziam nada sobre IA um ano atrás podem hoje exigir declaração de uso, aprovação prévia ou proibir tudo. Um PR que seria bem-vindo em 2024 pode te bloquear hoje.
2. **A primeira impressão conta.** Um PR fechado e marcado como spam num projeto que você admira é um péssimo começo, e mantenedores se lembram de nomes.

Existe ainda uma barreira que o público brasileiro conhece bem: quase todo `CONTRIBUTING.md` é escrito em inglês. A tentação de colar o texto numa IA, pedir uma descrição "bonita" e enviar sem revisar é grande, e é exatamente o tipo de PR genérico que mantenedores aprendem a reconhecer à primeira linha. Escrever em um inglês simples e seu vale mais do que um texto polido que você não consegue defender.

## Como Um PR "Slop" Aparece na Prática

Os mantenedores descrevem os mesmos padrões o tempo todo. Se a sua contribuição tem algum destes, espere que seja fechada:

- **Correção de um problema que ninguém reportou.** A IA achou algo que parecia um bug e "consertou", sem issue vinculada e sem conversa prévia.
- **Descrição que não bate com o diff.** O texto do PR é polido e genérico, mas o código muda outra coisa, ou muito mais do que o descrito.
- **Uma limpeza enorme e sem relação.** Reformatação, variáveis renomeadas e "melhorias" misturadas com a mudança real.
- **Código que o autor não sabe explicar.** A primeira pergunta da revisão recebe uma resposta vaga, ou o mesmo texto com cara de colado.
- **Testes que não testam nada.** Passam porque afirmam o que o código já faz, e não o que ele deveria fazer.
- **Relato de bug inventado.** Um relatório de bug ou de segurança descrevendo um comportamento que não existe, exatamente o que afogou o programa de bounty do cURL.

## Checklist de 7 Passos Para Usar IA em Open Source

Este é o processo que mantém a IA no papel de ferramenta, e não de canhão de spam. Passe por ele antes de clicar em "Create pull request".

### 1. Leia as regras de contribuição primeiro

Abra o `CONTRIBUTING.md` e procure qualquer menção a IA, LLMs ou código "gerado". Se o projeto proíbe ou restringe, a questão está encerrada. Não discuta e não tente esconder. Escolha outro projeto ou contribua de um jeito permitido, como triagem de issues ou melhoria de documentação feita à mão.

### 2. Comece a partir de uma issue existente

Procure uma issue que já tenha sido reconhecida por um mantenedor, de preferência com rótulos como "good first issue" ou "help wanted". Se não houver, abra uma discussão antes e pergunte se a mudança é desejada. Um comentário como "Quero trabalhar nisso, pode ser?" custa trinta segundos e evita uma revisão desperdiçada.

### 3. Reproduza o problema você mesmo

Antes de pedir uma correção para a IA, rode o projeto e veja o bug com seus próprios olhos. Se você não consegue reproduzir, não consegue verificar a correção, e essa é a linha entre uma contribuição e um palpite.

### 4. Mantenha a mudança do tamanho do problema

Diga à IA para mexer só no necessário:

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="minimal-prompt">Copiar</button>
  </div>
  <pre id="minimal-prompt"><code>Corrija apenas o bug descrito abaixo, com a menor mudança possível.
Não reformate código, não renomeie nada e não refatore partes
não relacionadas. Siga exatamente o estilo de código já usado
neste arquivo.

Depois da correção, liste cada arquivo e linha que você alterou e
explique por que cada mudança é necessária. Se não tiver certeza
de que a causa raiz é a que descrevi, diga isso em vez de chutar.

[cole o texto da issue e o arquivo relevante]</code></pre>
</div>

A última frase importa. Dar ao modelo permissão para dizer "não tenho certeza" reduz as respostas confiantes e erradas, que formam a maior parte do slop.

### 5. Leia o seu próprio diff como um revisor

Abra o diff e leia cada linha como se outra pessoa tivesse escrito. Se há uma linha que você não consegue explicar, peça à IA que explique e confira a explicação na documentação, ou apague a linha. Você precisa conseguir defender cada mudança numa revisão de código sem colar nada de volta num chat.

### 6. Rode os testes reais do projeto e adicione um que falhe antes

Rode a suíte de testes existente localmente. Se for adicionar um teste, confirme que ele falha sem a sua correção e passa com ela. Um teste que passa nos dois casos não prova nada.

### 7. Escreva a descrição você mesmo e declare o uso de IA

Escreva a descrição do pull request com as suas palavras: qual era o problema, como você reproduziu, o que mudou e como testou. Quando o projeto pedir, ou mesmo quando não pedir, inclua uma linha como "Usei um assistente de IA para rascunhar a correção e revisei e testei tudo eu mesmo." Ser transparente gera confiança. Ser pego escondendo acaba com ela.

![Caderno aberto com um checklist manuscrito ao lado de um notebook mostrando um diff de código desfocado, sobre uma mesa de madeira clara com luz suave da manhã](./images/slop-de-ia-pull-requests-open-source-checklist.webp)

## Para Mantenedores: Defesas Que Não Exigem um Banimento

Se você mantém um projeto e está se afogando, fechar contribuições não é a única saída. Com base no que os projetos afetados já tentaram, vale considerar medidas mais leves:

- **Exigir uma issue vinculada e aprovada** antes de abrir um pull request.
- **Colocar uma política de IA no `CONTRIBUTING.md`.** Diga com clareza o que é permitido, o que exige declaração e o que será fechado.
- **Usar um template de PR com uma caixa de confirmação** de que o contribuidor reproduziu o problema e rodou os testes.
- **Pedir o raciocínio.** Uma pergunta como "por que você escolheu esta abordagem em vez do helper que já existe?" filtra rapidamente a maior parte do conteúdo sem revisão.

A história do tldraw serve de alerta também. Se você automatiza a criação ou a triagem de issues com IA, revise o que ela produz, porque issues geradas de forma ruim atraem PRs gerados de forma ruim.

## O Que Levar Daqui

A IA não tornou as contribuições a open source ruins. Ela as tornou baratas de produzir, e o custo de revisar não caiu junto. Os contribuidores que vão continuar sendo bem recebidos são os que tratam a IA como um jeito de trabalhar mais rápido num problema que entendem, e não como um jeito de pular o entendimento.

Se for lembrar de uma coisa: a IA pode escrever o código, mas quem precisa responder por ele é você.

*Fonte das mudanças de política dos mantenedores e dos números: [InfoQ, "AI 'Vibe Coding' Threatens Open Source as Maintainers Face Crisis".](https://www.infoq.com/news/2026/02/ai-floods-close-projects/)*
