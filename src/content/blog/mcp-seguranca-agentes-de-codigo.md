---
title: "MCP no Claude Code, Cursor e Copilot: 7 Cuidados de Segurança Antes de Instalar Qualquer Servidor"
description: "O MCP virou o jeito padrão de ligar agentes de IA a ferramentas, e também uma das maiores superfícies de ataque do desenvolvimento em 2026. Entenda tool poisoning, auto-execução e o que checar antes de instalar um servidor MCP."
category: "Ferramentas de IA para Código"
date: 2026-10-01
readingTime: "8 min"
image: "./images/mcp-seguranca-agentes-de-codigo.webp"
imageAlt: "Foto editorial por cima do ombro de um desenvolvedor à noite diante de um notebook com terminal desfocado, com um cadeado e uma chave de segurança USB sobre a mesa e uma luminária acesa ao lado"
---

Se você usa o Claude Code, o Cursor, o Copilot ou o Gemini CLI, provavelmente já instalou um servidor MCP. O Model Context Protocol é o que deixa o agente falar com o GitHub, o banco de dados, o Figma, o Slack e qualquer outra coisa que tenha um conector. É prático, e por isso mesmo virou alvo.

Entre janeiro e abril de 2026, pesquisadores divulgaram [mais de 40 CVEs contra implementações de MCP](https://dev.to/piiiico/mcp-security-vulnerabilities-in-2026-40-cves-and-counting-4pco), nos SDKs de Python, TypeScript, Java e Rust. Isso dá mais ou menos uma falha nova a cada quatro dias. O problema não é "MCP é ruim". É que um servidor MCP roda código na sua máquina, com as suas permissões, e o agente confia no que ele diz sobre si mesmo.

Este guia explica os três ataques que mais aparecem e termina com sete cuidados práticos. Se você ainda está montando seu fluxo de trabalho com agentes, vale ler antes [os 5 recursos do Claude Code que a maioria dos devs nunca ativa](/claude-code-recursos-ocultos/), porque várias das defesas abaixo (permissões, hooks, plan mode) vêm de lá.

## O Que um Servidor MCP Realmente Faz na Sua Máquina

Um servidor MCP é um programa. Quando você o configura, o seu editor ou CLI o inicia como um processo comum do sistema operacional, com o mesmo acesso que você tem aos seus arquivos, às chaves SSH e às variáveis de ambiente. Não existe sandbox por padrão.

Ele expõe ao modelo uma lista de ferramentas, cada uma com um nome e uma **descrição em texto**. O modelo lê essas descrições pra decidir quando e como chamar cada ferramenta. Essa é a fresta por onde os ataques entram: o texto que deveria só explicar a ferramenta também é lido como instrução.

## Os Três Ataques Mais Comuns

### 1. Tool poisoning (envenenamento de ferramenta)

Um servidor malicioso esconde instruções dentro da descrição de uma ferramenta. A ferramenta se apresenta como uma calculadora inocente, mas o texto oculto manda o modelo ler `~/.ssh/id_rsa` e enviar o conteúdo junto com a próxima chamada. Você vê "somar dois números". O agente vê uma ordem extra.

O benchmark MCPTox, de agosto de 2025, testou 45 servidores reais em 20 modelos de linguagem e registrou [36,5% de taxa média de sucesso do ataque](https://labs.cloudsecurityalliance.org/research/csa-research-note-mcp-tool-poisoning-auto-execution-20260701/), com um dos modelos obedecendo em 72,8% dos casos. Modelo melhor ajuda, mas não resolve.

### 2. Auto-execução ao abrir o projeto

Segundo uma nota de pesquisa da Cloud Security Alliance, de julho de 2026, Cursor, Claude Code, Gemini CLI, GitHub Copilot e Amazon Q Developer iniciam servidores MCP definidos na configuração do projeto assim que você abre a pasta e aceita o aviso de confiança no workspace. Depois desse "sim", não há segunda aprovação pra executar o código.

Na prática: clonar um repositório desconhecido, abrir no editor e clicar em "confiar" pode ser o bastante pra rodar um comando arbitrário. Em junho de 2026, um worm chamado Miasma plantou configurações de MCP com backdoor em 73 repositórios do GitHub, segundo a mesma nota.

### 3. Injeção de comando nos próprios servidores

Nem todo problema vem de servidor mal-intencionado. Muitos são só mal escritos. A análise dos CVEs de 2026 aponta que cerca de 43% das falhas são injeção de comando de shell, e o transporte STDIO do protocolo não sanitiza a string de comando, o que faz da execução de comandos a interface padrão. Até servidores de referência da Anthropic, como o `mcp-server-git`, tiveram vulnerabilidades corrigidas em janeiro de 2026.

## 7 Cuidados Antes de Instalar Qualquer Servidor MCP

**1. Trate o arquivo de configuração do MCP como código.** Mudanças em `.mcp.json` ou equivalentes devem passar por revisão no pull request, igual a um script de deploy. Foi esse o vetor do ataque MCPoison, divulgado pela Check Point em agosto de 2025: uma configuração já aprovada era alterada depois.

**2. Prefira servidores oficiais e com manutenção ativa.** Veja quem publica, quando foi o último commit e quantas pessoas realmente usam. Um conector "grátis" de autor desconhecido com poucos downloads é o perfil clássico de risco.

**3. Fixe a versão.** O caso Postmark, de setembro de 2025, foi um pacote de e-mail amplamente instalado que, numa atualização, passou a copiar em silêncio todo e-mail enviado pelo agente pra um domínio do atacante. Atualização automática de servidor MCP é atualização automática de código que roda como você.

**4. Dê o menor acesso possível.** Token de leitura em vez de escrita. Um repositório em vez da organização inteira. Uma pasta em vez do disco. Quase todo servidor aceita escopo menor, e quase ninguém configura.

**5. Nunca deixe chaves de produção no ambiente do agente.** Use credenciais de desenvolvimento, de vida curta, e mantenha segredos no `.env` fora do alcance do processo. É o mesmo hábito que já recomendamos em [Vibe Coding sem Bagunça: 6 Hábitos](/vibe-coding-6-habitos-sem-bagunca/), só que agora com mais motivo.

**6. Mantenha a aprovação manual de ações sensíveis.** Escrever arquivo, rodar comando, enviar mensagem e fazer push devem pedir confirmação. Desativar os avisos pra "ir mais rápido" é trocar segurança por segundos. Se o custo de uso é o que te incomoda, o problema é outro, e a [review do Claude Code](/claude-code-review-vale-o-preco/) mostra como controlar a cota sem abrir mão disso.

**7. Atualize o editor e a CLI.** Parte das falhas citadas já tem correção: por exemplo, o Cursor corrigiu as duas CVEs de 2025 na versão 1.3.9. Rodar ferramenta antiga é aceitar risco já resolvido.

## E Se Eu Só Uso o Chat, Sem Agentes?

Aí o risco cai bastante, porque não há processo local executando nada por você. O perigo cresce proporcionalmente ao quanto de autonomia você dá. Quem usa só o chat pra gerar trechos de código, como nos [12 comandos personalizados pra programadores](/chatgpt-comandos-para-programadores/), tem uma superfície de ataque muito menor do que quem deixa um agente ler o disco, usar o terminal e chamar APIs.

Isso não significa evitar agentes. Eles são a parte que mais acelera o trabalho, como mostramos na [comparação entre Claude Code, Antigravity e Copilot](/claude-code-vs-antigravity-vs-copilot/). Significa dar a eles o nível de confiança que você daria a um estagiário novo: acesso ao que precisa, supervisão no que importa.

## Lista Rápida pra Colar no Seu README Interno

- [ ] Todo servidor MCP usado está numa lista aprovada pelo time
- [ ] Mudanças na configuração de MCP exigem revisão
- [ ] Versões fixadas, sem atualização automática
- [ ] Tokens com escopo mínimo e prazo curto
- [ ] Nenhuma chave de produção acessível ao agente
- [ ] Ações de escrita e comandos pedem confirmação
- [ ] Editor e CLI atualizados

## Perguntas Frequentes

### O MCP é inseguro por natureza?

Não exatamente. O protocolo foi desenhado pra funcionalidade primeiro, e vários riscos vêm de decisões como rodar servidores sem isolamento e confiar em descrições em texto. O OWASP já publicou uma lista MCP Top 10, com riscos como gestão ruim de tokens, escalada de privilégio, tool poisoning, ataques à cadeia de suprimentos e servidores MCP "sombra" que ninguém aprovou. O ecossistema está amadurecendo, e as defesas existem.

### Claude Code, Cursor e Copilot são afetados igualmente?

A nota da CSA cita as cinco ferramentas como vulneráveis ao padrão de auto-execução de configuração de projeto, mas cada uma tem avisos, permissões e correções próprias. O comportamento muda de versão pra versão, então confira a documentação da sua ferramenta e mantenha tudo atualizado.

### Posso instalar MCP de um repositório que achei no GitHub?

Só depois de ler o código ou de confirmar que é de uma fonte confiável. Se vem de um autor desconhecido, rode em máquina virtual ou container, sem acesso às suas chaves, antes de levar pro seu ambiente real.

### Como sei se um servidor MCP já foi comprometido?

É difícil sem monitoramento. Sinais incluem descrições de ferramentas que mudaram depois da instalação, tráfego de rede inesperado e pedidos do agente pra ler arquivos sem relação com a tarefa. Por isso fixar versão e revisar a configuração valem mais que tentar detectar depois.

## Conclusão

O MCP não vai embora, e não deveria. Ele é o que transforma um assistente de chat num agente que realmente faz coisas. Mas cada servidor instalado é um programa com as suas permissões, e o agente acredita no que ele diz. Os sete cuidados acima levam uns vinte minutos pra aplicar e cortam a maior parte do risco real: confiança consciente, escopo mínimo, versão fixa e revisão de configuração.

## Leia Também

- [Estudos de caso de Claude Code, Codex, Copilot e Antigravity](/estudos-de-caso-ferramentas-ia-codigo/)
- [Google Antigravity explicado](/google-antigravity/)

---

*Fontes: [Cloud Security Alliance, MCP Tool Poisoning and IDE Auto-Execution](https://labs.cloudsecurityalliance.org/research/csa-research-note-mcp-tool-poisoning-auto-execution-20260701/), [DEV Community, MCP Security Vulnerabilities in 2026: 40+ CVEs and Counting](https://dev.to/piiiico/mcp-security-vulnerabilities-in-2026-40-cves-and-counting-4pco), [Cycode, OWASP MCP Top 10](https://cycode.com/blog/owasp-mcp-top-10/), [SC Media, Model Context Protocol overhaul introduces new security challenges for developers](https://www.scworld.com/brief/model-context-protocol-overhaul-introduces-new-security-challenges-for-developers).*
