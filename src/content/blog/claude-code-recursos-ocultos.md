---
title: "5 Recursos do Claude Code que a Maioria dos Devs Nunca Ativa"
description: "Plan mode, memória automática, subagentes, skills e hooks transformam o Claude Code de uma janela de chat num fluxo de trabalho de verdade. Veja como cada um funciona na prática, com configuração real."
category: "Reviews"
date: 2026-09-12
readingTime: "8 min"
image: "./images/claude-code-recursos-ocultos.webp"
imageAlt: "Foto editorial em close-up do notebook de um desenvolvedor à noite mostrando uma sessão de agente de código de IA num terminal escuro, com um segundo monitor suavemente desfocado ao fundo mostrando um editor de código"
---

A maioria dos desenvolvedores que experimenta o Claude Code usa ele do mesmo jeito: abre um terminal, digita um pedido, lê o diff, aprova, repete. É uma forma válida de tirar valor da ferramenta, e é exatamente como ela é vendida num guia rápido. Também é só uma fração do que realmente existe ali.

Por baixo do loop de chat tem um conjunto de recursos construídos especificamente pras partes de programar-com-IA que ficam chatas em escala: revisar um plano antes que ele toque no disco, não reexplicar a mesma preferência toda sessão, impedir que uma tarefa grande de exploração inunde sua janela de contexto, e aplicar uma regra pra que ela não possa ser pulada por acidente. Nenhum desses exige um plugin ou gambiarra. Eles já vêm prontos, documentados, e na maioria das vezes desligados por padrão ou simplesmente não usados porque ninguém foi atrás.

Aqui estão cinco, o que cada um realmente resolve, e a configuração de verdade pra ligar.

## 1. Plan Mode: Revisar Antes de Qualquer Coisa Tocar no Disco

O fluxo padrão deixa o Claude ler arquivos, decidir uma abordagem e começar a editar num movimento só, pedindo aprovação ferramenta por ferramenta conforme avança. O plan mode divide isso em dois: o Claude lê o código e propõe um plano completo primeiro, em texto puro, com zero edições de arquivo, e só começa a mudar alguma coisa depois que você aprova.

Isso importa mais em mudanças onde o risco não é "o código ficou correto" e sim "ele entendeu a tarefa do jeito que eu quis dizer". Um pedido vago como "limpa o fluxo de autenticação" pode ser interpretado de uma dúzia de formas razoáveis. Revisar o plano custa 30 segundos; revisar (e reverter) uma implementação errada espalhada por oito arquivos custa muito mais.

Ative pra sessão atual apertando `Shift+Tab` até a barra de status mostrar `⏸ plan mode on`, ou comece uma sessão já nesse modo:

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">terminal</span>
    <button class="copy-btn" data-copy-target="plan-mode-cmd">Copiar</button>
  </div>
  <pre id="plan-mode-cmd"><code>claude --permission-mode plan</code></pre>
</div>

Depois que você aprova um plano, o Claude executa ele sob suas configurações normais de permissão. Você também pode abrir o plano no seu próprio editor de texto e editar à mão antes de aprovar, o que é mais rápido do que digitar correções de volta no chat pra qualquer coisa maior que uma frase.

## 2. Memória Automática: Ela Para de Reaprender a Mesma Coisa Toda Sessão

Toda sessão do Claude Code começa com uma janela de contexto vazia. Sem memória, isso significa reexplicar "a gente usa pnpm, não npm" ou "o ambiente de staging precisa de um Redis local" toda vez que o assunto aparece, pra sempre.

A memória automática resolve isso fazendo o Claude escrever suas próprias anotações enquanto você trabalha, baseado em correções que você dá e em padrões que ele não consegue derivar só do código. Ele salva quatro tipos de anotação, marcadas por categoria: seu papel e preferências, feedback que você deu (correções e confirmações), contexto contínuo do projeto como prazos ou decisões, e referências pra onde as coisas vivem fora do repositório (um projeto no Linear, um dashboard no Grafana).

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">~/.claude/projects/&lt;projeto&gt;/memory/</span>
    <button class="copy-btn" data-copy-target="memory-tree">Copiar</button>
  </div>
  <pre id="memory-tree"><code>memory/
├── MEMORY.md            # índice, uma linha por memória, carregado toda sessão
├── feedback_testing.md  # "não mockar o banco de dados em testes de integração"
├── project_deadline.md  # "congelamento do staging começa em 5 de março pro release mobile"
└── reference_tracker.md # "bugs são rastreados no projeto INGEST do Linear"</code></pre>
</div>

Ela vem ligada por padrão, é local à máquina, e é compartilhada entre todos os worktrees do mesmo repositório. Rode `/memory` dentro de uma sessão pra navegar, editar ou apagar o que foi salvo; é tudo markdown puro, nada escondido. Se o Claude começar a assumir algo errado sobre seu fluxo de trabalho, geralmente é um arquivo de memória desatualizado que vale a pena abrir e corrigir direto, em vez de corrigir no chat toda vez.

## 3. Subagentes: Tire a Exploração Grande e Bagunçada da Sua Thread Principal

Peça pro Claude "descobrir como funciona a renovação de token nesse código" e a resposta honesta exige ler uma dúzia de arquivos, a maioria becos sem saída. Faça isso na sua conversa principal e sua janela de contexto enche de conteúdo de arquivo que você nunca mais vai olhar, empurrando pra fora as coisas que realmente importam pra tarefa.

Subagentes resolvem isso rodando essa exploração numa janela de contexto completamente separada, com suas próprias ferramentas e até seu próprio modelo, e reportando de volta só um resumo. Os três já prontos, Explore, Plan e general-purpose, cobrem a maioria dos casos sem nenhuma configuração. Você também pode definir os seus pra um trabalho repetido, tipo um revisor de código somente leitura que só recebe `Read`, `Grep` e `Glob`, nunca `Write` ou `Edit`.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">.claude/agents/security-auditor.md</span>
    <button class="copy-btn" data-copy-target="subagent-example">Copiar</button>
  </div>
  <pre id="subagent-example"><code>---
name: security-auditor
description: Audit code for security vulnerabilities
tools: Read, Grep, Glob
model: opus
---

You are a security expert. Review code for vulnerabilities, injection
risks, authentication issues, and compliance concerns.</code></pre>
</div>

O ganho prático além de uma janela de contexto mais limpa: você pode rotear exploração pra um modelo mais barato e rápido tipo o Haiku enquanto mantém sua conversa principal num modelo mais forte, e rodar vários subagentes em partes independentes de uma tarefa ao mesmo tempo, em vez de em série.

## 4. Skills: Empacote um Fluxo de Trabalho Uma Vez, Pare de Reexplicar

Instruções do CLAUDE.md carregam em toda sessão, precisando ou não, o que é ótimo pra um punhado de regras fixas mas desperdício pra um procedimento de várias etapas que você só usa de vez em quando, tipo "como a gente corta um release" ou "nosso template de descrição de PR". Skills resolvem essa lacuna: são arquivos markdown que carregam só quando invocados, seja por nome ou automaticamente quando seu pedido bate com a descrição deles.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">.claude/skills/pr-summary/SKILL.md</span>
    <button class="copy-btn" data-copy-target="skill-example">Copiar</button>
  </div>
  <pre id="skill-example"><code>---
description: Summarize a pull request's diff and flag anything risky
---

PR diff:
!`gh pr diff`

Summarize the changes above in 2-3 bullet points, then list anything
that looks risky: missing error handling, untested paths, or breaking
changes to a public API.</code></pre>
</div>

Essa sintaxe de `!` seguido de um comando entre crases roda o comando de shell uma vez e cola o resultado direto no prompt antes mesmo do Claude ver, o que é um jeito barato de trazer dado ao vivo (um diff, o fim de um log, resultado de teste) sem uma ida e volta extra. Um time que empacota seus cinco procedimentos mais comuns como skills consegue um resultado consistente de qualquer pessoa que roda `/pr-summary`, em vez de cinco pedidos ligeiramente diferentes digitados no chat.

## 5. Hooks: Regras que o Claude Não Consegue Driblar na Conversa

CLAUDE.md e memória são os dois contexto, não aplicação forçada. O Claude lê e tenta seguir, mas um pedido vago ou incomum ainda pode escapar de uma instrução que só existe num arquivo markdown. Hooks são diferentes: são comandos de shell que disparam automaticamente em pontos específicos da sessão, tipo antes de uma ferramenta rodar ou depois de um arquivo ser editado, e eles executam independente do que o Claude decidir fazer.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">.claude/settings.json</span>
    <button class="copy-btn" data-copy-target="hooks-example">Copiar</button>
  </div>
  <pre id="hooks-example"><code>{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "${CLAUDE_PROJECT_DIR}/.claude/hooks/check-style.sh",
            "timeout": 30
          }
        ]
      }
    ]
  }
}</code></pre>
</div>

O exemplo acima roda um script de lint automaticamente depois de toda edição de arquivo, então desvio de estilo é pego na hora em vez de só na revisão de código. O mesmo mecanismo, no evento `PreToolUse`, pode bloquear um comando perigoso totalmente, tipo um script que inspeciona um comando de shell antes dele rodar e recusa executar qualquer coisa parecida com `rm -rf`. Essa é a diferença real de uma instrução: uma instrução pede com educação, um hook nem pede.

## Qual Resolve o Que Está Te Incomodando

<div style="max-width:900px;margin:24px auto;overflow-x:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table style="width:100%;border-collapse:collapse;background:#ffffff;box-shadow:0 1px 4px rgba(0,0,0,0.08);border-radius:8px;overflow:hidden;">
    <thead>
      <tr style="background:var(--ink-deep);color:#ffffff;">
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Se o que te incomoda é...</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Use</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Onde fica</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;">Edições chutadas errado em pedidos vagos</td>
        <td style="padding:12px 16px;font-weight:600;">Plan Mode</td>
        <td style="padding:12px 16px;"><code>Shift+Tab</code>, sem config</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;">Repetir a mesma correção toda sessão</td>
        <td style="padding:12px 16px;font-weight:600;">Memória Automática</td>
        <td style="padding:12px 16px;">Ligada por padrão, <code>/memory</code> pra inspecionar</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;">Janela de contexto enchendo de leituras sem saída</td>
        <td style="padding:12px 16px;font-weight:600;">Subagentes</td>
        <td style="padding:12px 16px;"><code>.claude/agents/*.md</code></td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;">Redigitar o mesmo procedimento de várias etapas</td>
        <td style="padding:12px 16px;font-weight:600;">Skills</td>
        <td style="padding:12px 16px;"><code>.claude/skills/*/SKILL.md</code></td>
      </tr>
      <tr>
        <td style="padding:12px 16px;">Uma regra que nunca pode ser pulada</td>
        <td style="padding:12px 16px;font-weight:600;">Hooks</td>
        <td style="padding:12px 16px;"><code>.claude/settings.json</code></td>
      </tr>
    </tbody>
  </table>
</div>

## Perguntas Frequentes

### Esses recursos exigem um plano específico do Claude Code?

Não. Plan mode, memória automática, subagentes, skills e hooks fazem parte do CLI principal e funcionam do mesmo jeito, seja você autenticado por uma assinatura Claude ou por uma chave de API do Anthropic Console.

### A memória automática é compartilhada com meu time ou entre máquinas?

Não. A memória automática é local à máquina, guardada no seu próprio diretório `~/.claude/`. Ela é compartilhada entre todos os worktrees git do mesmo repositório na sua máquina, mas não com colegas de time e não sincroniza pra outro computador. Arquivos CLAUDE.md, por outro lado, são feitos pra serem commitados e compartilhados via controle de versão.

### Um hook realmente consegue impedir o Claude de fazer algo?

Sim, e esse é o ponto. Um hook de `PreToolUse` pode inspecionar uma chamada de ferramenta proposta e retornar uma decisão de negar antes dela executar, o que é reforçado pelo próprio Claude Code, não pelo Claude escolhendo obedecer. Esse é o mecanismo certo pra qualquer coisa que o CLAUDE.md não conseguiu prevenir de forma confiável.

### Qual é a diferença real entre uma skill e um subagente?

Uma skill carrega instruções na sua conversa atual; um subagente roda numa janela de contexto completamente separada e devolve só um resumo. Use uma skill pra um procedimento que deve guiar a conversa atual, e um subagente pra exploração ou trabalho que você quer isolado pra não consumir seu contexto principal.

### Onde eu vejo o que realmente está carregado numa sessão?

Rode `/context` dentro de uma sessão. Ele lista todo CLAUDE.md, regra e arquivo de memória que realmente carregou, que é o jeito mais rápido de debugar uma instrução que não parece estar fazendo efeito.

## Conclusão

Plan mode, memória automática, subagentes, skills e hooks resolvem cinco incômodos específicos e nada glamourosos: chutes errados em pedidos vagos, correções repetidas, uma janela de contexto lotada, procedimentos redigitados, e regras que dá pra driblar na conversa. Nenhum deles precisa de plugin, upgrade de assinatura, ou mais que um arquivo de configuração pra ligar. Se você só usou o Claude Code como uma caixa de chat num terminal até agora, escolher um desses que resolve um problema que você tem essa semana é um uso melhor de vinte minutos do que ler o resto da documentação do início ao fim.

---

*Fontes: [Claude Code — Visão Geral](https://code.claude.com/docs/en/overview), [Claude Code — Como o Claude Lembra do Seu Projeto](https://code.claude.com/docs/en/memory), [Claude Code — Subagentes](https://code.claude.com/docs/en/sub-agents), [Claude Code — Skills](https://code.claude.com/docs/en/skills), [Claude Code — Hooks](https://code.claude.com/docs/en/hooks), [Claude Code — Fluxos de Trabalho Comuns](https://code.claude.com/docs/en/common-workflows).*
