---
title: "Claude Code Mods: a Anthropic Deixou Você Reescrever o Agente com TypeScript. Veja o Que Dá Para Fazer e o Risco Que Vem Junto."
description: "A Anthropic lançou os mods do Claude Code, pequenas funções em TypeScript que reescrevem prompts, bloqueiam chamadas de ferramenta, decidem permissões e redigem segredos. Entenda como funcionam, o que dá para construir e um checklist de segurança antes de instalar o primeiro."
category: "Ferramentas de IA para Código"
date: 2026-10-03
readingTime: "7 min"
draft: false
---

Até esta semana, mudar o comportamento do Claude Code significava mexer em arquivos de configuração, escrever scripts de shell e torcer para o evento certo existir. Em 1º de outubro de 2026, a Anthropic abriu outra porta: os **mods**, pequenas funções em TypeScript que se encaixam nos eventos internos do agente e mudam o que ele faz.

A ideia é simples de explicar e grande nas consequências. O Claude Code deixa de ser só uma ferramenta que você usa e passa a ser uma ferramenta que você programa. Este artigo explica o que são os mods, o que eles conseguem fazer, como começar e, principalmente, por que você precisa tratar cada mod como um programa instalado na sua máquina.

## O Que São os Mods

Segundo o [anúncio oficial da Anthropic](https://claude.com/blog/claude-code-mods), um mod pode reescrever um prompt, adicionar uma interface nova, substituir um recurso embutido ou criar uma funcionalidade inteira. Eles funcionam ligando-se a eventos que o Claude Code emite durante o trabalho, e vários mods podem ser empilhados, rodando na ordem em que foram carregados.

Na prática, um único mod pode:

- **Reescrever o prompt** antes de ele chegar ao modelo.
- **Bloquear, reescrever ou repetir** uma chamada de ferramenta.
- **Aprovar ou negar** pedidos de permissão.
- **Redigir segredos** que apareceriam na saída de uma ferramenta.
- **Editar a interface**, incluindo painéis ao lado da conversa, faixas acima do prompt e botões.

Outro ponto que chama atenção: a própria Anthropic converteu três recursos que já eram do produto, o painel de diff, o carregador de `agents.md` e a telemetria, em mods. Isso indica que o sistema é infraestrutura de verdade, e não um experimento de fim de semana.

## Como Instalar e Onde Funciona

Os mods viajam dentro de plugins, então a instalação segue o fluxo que você já conhece. De acordo com a [cobertura da Cellcog](https://cellcog.ai/blog/claude-code-mods/), os requisitos são:

- Claude Code na versão **2.1.287 ou superior**.
- Instalação pelo comando `/plugin install nome@marketplace` e recarga com `/reload-plugins`.
- Suporte no **terminal** e na aba **Code do app desktop**. Em outros ambientes, não.

Nas versões compatíveis os mods já vêm ligados por padrão, sem flag extra para ativar. Se você preferir não escrever nada, a Anthropic diz que também dá para pedir ao próprio Claude que gere o mod, instale e recarregue na mesma sessão.

## O Que Dá Para Construir

Os exemplos mais úteis para o dia a dia de quem programa são os que automatizam disciplina que a gente costuma esquecer:

1. **Filtro de segredos.** Um mod que varre a saída das ferramentas e apaga chaves de API e tokens antes de o modelo enxergá-los.
2. **Guarda de comandos perigosos.** Um mod que bloqueia `rm -rf`, `git push --force` ou qualquer comando que você nunca quer que o agente rode sozinho.
3. **Padronizador de prompts.** Um mod que acrescenta ao seu pedido as regras do projeto, como estilo de código e pastas proibidas, sem você repetir isso toda hora.
4. **Painel próprio.** Um painel ao lado da conversa mostrando custo da sessão, arquivos tocados ou o plano em andamento.

Se quiser testar sem escrever código, peça ao Claude. Um prompt de partida:

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="mod-prompt">Copiar</button>
  </div>
  <pre id="mod-prompt"><code>Crie um mod para o Claude Code que redija segredos na saída das
ferramentas. Ele deve trocar por [REDIGIDO] qualquer valor que
pareça chave de API, token ou senha em variáveis de ambiente e
arquivos .env.

Antes de instalar, mostre o código completo e explique, linha por
linha, quais arquivos e variáveis o mod lê e se ele faz alguma
chamada de rede. Só instale depois que eu aprovar.</code></pre>
</div>

A última frase é a parte importante. Você quer ver o código antes de ele existir na sua máquina, mesmo quando foi o próprio Claude quem escreveu.

## O Risco: um Mod É Código Com as Suas Permissões

Aqui está o ponto que não pode passar batido. A documentação da Anthropic é direta: mods rodam com o mesmo acesso à sua máquina que o próprio Claude Code, não ficam em sandbox, e você só deve instalar mods de fontes em que confia.

Segundo a [Cellcog](https://cellcog.ai/blog/claude-code-mods/), um mod carregado pode ler e gravar arquivos em qualquer lugar que a sua conta alcance, acessar variáveis de ambiente e chaves de API, ver cada prompt e cada chamada de ferramenta, aprovar chamadas automaticamente e gastar o seu uso da API. A única barreira que se mantém firme é que um mod não consegue alterar a própria tela de pedido de permissão, embora possa pré-aprovar chamadas.

Para quem acompanha o tema de segurança em agentes de código, isso soa familiar. É o mesmo tipo de risco de cadeia de suprimentos que discutimos no artigo sobre [segurança de MCP em agentes de código](/blog/mcp-seguranca-agentes-de-codigo): uma extensão aparentemente útil, instalada com um comando, ganha acesso amplo ao seu ambiente. A diferença é que aqui a extensão fica dentro do agente, no ponto exato em que as decisões são tomadas.

### Controles que a Anthropic oferece

- `claude plugin validate` para inspecionar um mod antes de instalar.
- `--safe-mode` para desligar todos os mods numa sessão.
- `disableAllHooks` para desligar todos globalmente.
- Em planos **Team e Enterprise**, um mod embutido chamado `sec-default` carrega primeiro e impede ações arriscadas, como passar por cima de uma negação de permissão. Administradores podem ler o código dele e restringir quais mods carregam.

## Checklist de 6 Passos Antes de Instalar um Mod

Este é o processo mínimo que eu seguiria antes de instalar qualquer mod que não escrevi:

1. **Confira a origem.** Prefira mods do diretório oficial ou de autores que você consegue identificar. Link aleatório de rede social não conta.
2. **Leia o código inteiro.** Um mod útil costuma ter poucas dezenas de linhas. Se tem centenas e você não entende, não instale.
3. **Procure rede e arquivos.** Qualquer `fetch`, envio para URL externa ou leitura de `~/.ssh`, `.env` e similares é sinal vermelho.
4. **Rode `claude plugin validate`** e só depois instale.
5. **Teste num projeto descartável** antes de usar no repositório de trabalho ou numa máquina com credenciais de produção.
6. **Saiba como desligar.** Memorize o `--safe-mode` antes de precisar dele.

## Atenção Com Material Desencontrado

Como o lançamento é muito recente, já circulam guias de terceiros com detalhes diferentes entre si, como nomes de eventos e flags de ativação que não aparecem no anúncio oficial. Trate esses detalhes com cuidado e confirme na documentação da Anthropic antes de copiar código de blog, incluindo este. Neste artigo usei só o que aparece no anúncio oficial e nas coberturas que o confirmam.

## O Que Levar Daqui

Os mods transformam o Claude Code numa plataforma: o agente passa a ter um ponto de extensão que qualquer pessoa consegue usar. Isso é uma ótima notícia para quem quer automatizar segurança e padronização, e uma superfície de ataque nova para quem instalar sem ler.

Se for lembrar de uma coisa: um mod roda com as suas permissões, então trate o primeiro como trataria qualquer programa que você baixa e executa na sua máquina.

*Fontes: [Anthropic, anúncio dos Claude Code Mods](https://claude.com/blog/claude-code-mods); [Cellcog, "Claude Code Mods: What They Can Do and What They Can Reach"](https://cellcog.ai/blog/claude-code-mods/); [AI Weekly](https://aiweekly.co/alerts/anthropic-launches-claude-code-mods-typescript-agent-hooks).*
