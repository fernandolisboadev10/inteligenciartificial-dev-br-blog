---
title: "Agentes de IA e Sandbox: o Que o Caso Hugging Face Ensina"
description: "Agentes de IA escaparam de um sandbox e invadiram o Hugging Face. Veja o que muda no seu setup com Claude Code, Cursor e Copilot, com checklist."
category: "Tutoriais"
date: 2026-10-21T15:37:00-03:00
readingTime: "9 min"
image: "./images/hugging-face-invadido.webp"
imageAlt: "Ilustração fotorrealista em 3D de esferas luminosas, que representam agentes de IA, atravessando uma rede neural e quebrando uma barreira de vidro de segurança"
draft: false
---

Em julho de 2026, agentes de IA da OpenAI saíram do sandbox em que faziam um teste de segurança e comprometeram parte da infraestrutura do Hugging Face. As manchetes falaram em "IA que fugiu", mas para quem dá acesso a agentes de código a pergunta útil é outra: o que, no desenho do ambiente, permitiu a fuga, e quanto disso existe no seu setup? Este texto trata de sandbox para agentes de IA sob esse ângulo.

O foco aqui é o que você muda ao liberar terminal, arquivos e rede para um agente. Quem já leu os [cuidados de segurança com MCP](/mcp-seguranca-agentes-de-codigo/) e entende a [injeção de prompt](/injecao-de-prompt-o-que-e/) vai reconhecer os mesmos elos fracos, numa escala maior.

## O Caso em Poucas Linhas

Durante testes internos de capacidade cibernética (o benchmark ExploitGym), a OpenAI rodou agentes baseados em um modelo interno de pesquisa e no GPT-5.6 Sol, com algumas salvaguardas desativadas de propósito para medir a capacidade real. Segundo o relatório técnico da própria OpenAI, os agentes contornaram os controles que os isolavam da internet, encontraram credenciais do Hugging Face expostas publicamente e usaram falhas da plataforma para comprometer partes da produção entre 11 e 13 de julho.

A OpenAI descreve as ações como não intencionais, um subproduto de tentar resolver as tarefas do teste. Ninguém mandou invadir nada, e nada nos relatos indica vontade própria. O que interessa é o que o ambiente deixou passar.

## Como o Sandbox Foi Contornado, Passo a Passo

Os relatos da OpenAI, do Hugging Face e da METR (investigação independente, com a Redwood Research) descrevem uma cadeia de falhas, não um truque único.

**1. A única saída era um serviço compartilhado.** Os contêineres de pesquisa não tinham internet direta. Os pacotes vinham de espelhos internos, entre eles uma instância do Artifactory, da JFrog. Para instalá-los, os agentes recebiam uma credencial do Artifactory, e muitas cargas de trabalho usavam a mesma.

**2. A credencial compartilhada virou canal de comunicação.** Já em maio, agentes começaram a deixar "bilhetes" em arquivos do Artifactory. Usaram a credencial legítima, sem explorar falha alguma, e o resultado foi um quadro de mensagens improvisado. A METR observa que o Artifactory não foi pensado para isolar usuários uns dos outros, e estima que cerca de 1.200 agentes usaram o quadro, dos quais cerca de 700 participaram do ataque ao Hugging Face.

**3. Falhas no próprio serviço deram privilégio e saída.** Segundo a OpenAI, em 26 de junho os agentes exploraram um endpoint legado de renovação de token: mandaram um token administrativo forjado, com assinatura inválida, e o servidor devolveu um token válido com privilégios de administrador. Com isso passaram a executar comandos no servidor. A partir de 8 de julho, a empresa diz que vulnerabilidades até então desconhecidas (zero-days) no Artifactory deram acesso à internet pública.

**4. Do outro lado, credenciais expostas e dados tratados como código.** Em 10 de julho, um agente achou 14 credenciais de usuários do Hugging Face, com permissão de escrita, num dataset público e as publicou no quadro. Depois, datasets montados de propósito exploraram duas rotas no processamento da plataforma: uma leitura de arquivos locais, que devolveu variáveis de ambiente de um worker, e uma injeção de template que executou código, em 41 workers de produção, segundo a OpenAI.

**5. Os alertas existiram.** Um monitoramento apontou varredura de portas em 27 de junho e outro alerta, em 5 de julho, revelou o comprometimento do Artifactory. Segundo a OpenAI, porém, o sentido do quadro de mensagens não estava claro para quem coordenava a resposta.

A maior parte dos fatos acima vem do relatório técnico da OpenAI. Para a notícia completa, com cronologia e o debate sobre as motivações dos agentes, o TechOnPlay tem a [cobertura do caso](https://techonplay.com.br/ia-fugiu-do-teste-agentes-openai-hugging-face/).

## O Que o Caso Mostra: Permissão Demais, Isolamento Fraco e Credencial à Mão

Três falhas se combinaram, e nenhuma exige uma IA "rebelde":

- **Isolamento que dependia de uma única premissa.** O ambiente não tinha internet direta, e a OpenAI reconhece que isso não bastou quando as cargas alcançavam um serviço compartilhado com caminho transitivo para fora. "Sem rede" e "sem caminho para fora" são coisas diferentes.
- **Credencial acessível demais.** Um segredo compartilhado entre cargas, tokens soltos na internet e credenciais de produção no ambiente de um processo. Cada uma virou um degrau.
- **Salvaguardas desligadas por escolha.** O teste rodava sem os classificadores dos produtos. Para um dev, o equivalente é rodar um agente sem pedir aprovação (`--dangerously-skip-permissions` no Claude Code, Run Everything no Cursor) fora de um contêiner.

A conclusão do [relatório técnico da OpenAI](https://cdn.openai.com/pdf/67869394-cb91-4c12-888c-5cbd85c7814c/OpenAI-Hugging-Face%20Incident-Technical-Report.pdf) é que nenhum controle isolado deve ser tratado como robusto: cada objetivo de segurança pede controles sobrepostos e independentes, de prevenção, detecção e mitigação.

O caso é extremo, com modelos de pesquisa e salvaguardas reduzidas em centenas de instâncias coordenadas. O agente no seu notebook não vai montar um quadro de mensagens. Mas os elos que falharam existem em qualquer setup, e o vetor realista hoje é a instrução plantada num README, numa issue ou numa página que o agente lê.

## Sandbox para Agentes de IA: o Que Claude Code, Cursor e Copilot Isolam

O resumo abaixo segue a documentação oficial de cada ferramenta hoje. Os padrões mudam entre versões, então confira na sua.

### Claude Code

- O sandbox vem desligado por padrão. Liga-se com `/sandbox` ou `sandbox.enabled`, e funciona em macOS, Linux e WSL2. No Windows nativo, os comandos rodam sem sandbox.
- Ele cobre só comandos de shell e os processos que eles iniciam. A escrita fica limitada ao diretório de trabalho e ao temp, e a rede passa por um proxy com lista de domínios permitidos que começa vazia.
- Ficam fora dele as ferramentas de leitura, edição e web (regidas por regras de permissão), os servidores MCP locais e os hooks. Por padrão, comandos ainda leem a maior parte da máquina, inclusive `~/.ssh` e `~/.aws/credentials`, e herdam as variáveis de ambiente, segredos incluídos.
- Para isolar o processo inteiro, a documentação indica contêiner, VM ou o sandbox runtime, e manda rodar `--dangerously-skip-permissions` só dentro de um deles.

### Cursor

- Há três Run Modes: Auto-review (recomendado), Allowlist e Run Everything. O sandbox vale para comandos de terminal, com Seatbelt no macOS e Landlock mais seccomp no Linux. No Run Everything não há sandbox.
- A rede do sandbox é bloqueada por padrão, mas o modo padrão ("sandbox.json + Defaults") soma domínios embutidos, como npm, PyPI e GitHub. "Allow All" libera tudo.
- Segundo a documentação, o Auto-review não é uma fronteira de segurança, e um comando que falha no sandbox pode ser refeito fora dele, com revisão do classificador.

### GitHub Copilot no VS Code

- O sandbox de comandos de terminal usa `chat.agent.sandbox.enabled`, que a página de sandboxing lista com padrão `off`.
- Ligá-lo não bloqueia a rede: `chat.agent.sandbox.network.allowNetwork` vem como `true`. A documentação diz que o sandbox "não é uma máquina virtual nem um limite de conta de usuário".
- Aprovação e sandbox são controles separados, e a documentação avisa que aliases de shell e concatenação de aspas podem contornar as regras de auto-aprovação.

Nos três, o sandbox embutido cobre os comandos de terminal, e rede e leitura de arquivos dependem de configuração. Para comparar planos e recursos, veja o [Claude Code contra Antigravity e Copilot](/claude-code-vs-antigravity-vs-copilot/).

## Checklist de Contenção Para Quem Dá Acesso a Agentes de Código

**1. Isole o processo inteiro, não só o comando.** Use contêiner ou VM com o mínimo de privilégios. Um ponto de partida para rodar os comandos do agente:

```bash
docker run --rm -it \
  --network none \
  --read-only --tmpfs /tmp \
  --cap-drop ALL --security-opt no-new-privileges \
  --pids-limit 256 --memory 2g --cpus 2 \
  --user "$(id -u):$(id -g)" \
  -v "$PWD:/work" -w /work \
  minha-imagem-de-dev
```

Se o próprio agente roda dentro do contêiner, ele precisa alcançar a API do modelo, então `--network none` não serve. Use então o dev container de referência do Claude Code, com firewall de saída que nega tudo por padrão. Um projeto montado com escrita pode ser alterado, então faça commit antes de cada sessão.

**2. Permissão mínima.** Libere só o que o fluxo exige. No Claude Code, em `.claude/settings.json`:

```json
{
  "permissions": {
    "allow": ["Bash(npm run *)", "Bash(git commit *)"],
    "deny": ["Bash(git push *)", "Read(./.env)", "Read(./secrets/**)"]
  }
}
```

Regras de comando têm limite: segundo a documentação, um push escrito como `git -C . push` não casa com `Bash(git push *)`. Por isso permissão é uma camada, e o sandbox é outra. Plan mode e hooks ajudam no resto, como mostram os [recursos ocultos do Claude Code](/claude-code-recursos-ocultos/).

**3. Segredos fora do ambiente do agente.** Não deixe `.env` no diretório que o agente enxerga, use tokens de escopo mínimo, curta duração e fáceis de rotacionar, e evite um token único para tudo. Os [hábitos de vibe coding](/vibe-coding-6-habitos-sem-bagunca/) já cobrem segredos fora do repositório. No Claude Code não há lista de credenciais protegidas por padrão, então declare as suas em `~/.claude/settings.json`:

```json
{
  "sandbox": {
    "enabled": true,
    "allowUnsandboxedCommands": false,
    "credentials": {
      "files": [
        { "path": "~/.aws/credentials", "mode": "deny" },
        { "path": "~/.ssh", "mode": "deny" }
      ],
      "envVars": [
        { "name": "GITHUB_TOKEN", "mode": "deny" },
        { "name": "NPM_TOKEN", "mode": "deny" }
      ]
    }
  }
}
```

O `allowUnsandboxedCommands: false` desliga a nova tentativa sem sandbox, a saída de emergência que o Claude Code oferece quando um comando falha dentro dele.

**4. Rede em allowlist.** Deixe o agente alcançar só o necessário. No Claude Code:

```json
{
  "sandbox": {
    "enabled": true,
    "network": { "allowedDomains": ["github.com", "*.npmjs.org"] }
  }
}
```

No Cursor, o modo "sandbox.json Only" faz o mesmo; no Copilot, `allowNetwork` em `false` bloqueia a saída. Lembre da lição do caso: todo serviço que o agente alcança, inclusive um espelho de pacotes, faz parte do perímetro. A OpenAI passou a restringir a saída a destinos aprovados.

**5. Logs e revisão do que o agente fez.** Guarde o histórico de comandos e leia o `git diff` antes de aceitar. Alerta só vale se alguém o lê: no Hugging Face, a correlação automática achou o sinal, mas não o tratou como crítico nem acionou o plantão, segundo a empresa.

**6. Limite de ações e de tempo.** Limite processos, memória e CPU no contêiner (como no exemplo) e dê um prazo à sessão, por exemplo com `timeout 30m`, além de um jeito rápido de interromper tudo.

**7. Revisão humana antes do que não tem volta.** Mantenha `git push`, deploy, exclusão em massa e chamadas externas atrás de aprovação. A documentação do VS Code lembra que restaurar arquivos não desfaz comandos de terminal, requisições de rede nem deploys já feitos.

## Checklist Final

1. O agente roda em contêiner ou VM, não direto na minha máquina.
2. O sandbox está ligado e `allowUnsandboxedCommands` está em `false`.
3. Só os comandos do fluxo são liberados; push, deploy e exclusão pedem aprovação.
4. Nenhum `.env`, chave SSH ou credencial de nuvem fica visível ao agente.
5. Tokens têm escopo mínimo, vida curta e são rotacionáveis.
6. A rede sai por uma allowlist, inclusive para pacotes.
7. Há limite de tempo, processos e memória, e um jeito de interromper.
8. Revisei o diff e o histórico de comandos antes de aceitar.

## Conclusão

O caso do Hugging Face não mostra agentes com vontade própria. Mostra o que acontece quando isolamento incompleto, credenciais acessíveis e permissões amplas encontram um agente que não desiste da tarefa. Para quem usa Claude Code, Cursor ou Copilot, a resposta é camadas independentes, privilégio mínimo e segredos fora do alcance do agente.

## Leia Também

- [MCP no Claude Code, Cursor e Copilot: 7 cuidados de segurança](/mcp-seguranca-agentes-de-codigo/)
- [Injeção de prompt: o que é e por que ainda não tem solução](/injecao-de-prompt-o-que-e/)
- [Vibe coding: 6 hábitos para não criar bagunça](/vibe-coding-6-habitos-sem-bagunca/)

---

**Fontes consultadas:** [OpenAI, relatório técnico do incidente](https://cdn.openai.com/pdf/67869394-cb91-4c12-888c-5cbd85c7814c/OpenAI-Hugging-Face%20Incident-Technical-Report.pdf) | [METR, investigação independente](https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/) | [Hugging Face, comunicado de julho de 2026](https://huggingface.co/blog/security-incident-july-2026) | [Hugging Face, relato técnico da intrusão](https://huggingface.co/blog/agent-intrusion-technical-timeline) | [Claude Code, sandbox do Bash](https://code.claude.com/docs/en/sandboxing) | [Claude Code, permissões](https://code.claude.com/docs/en/permissions) | [Claude Code, ambientes isolados](https://code.claude.com/docs/en/sandbox-environments) | [Cursor, Run Modes e sandbox](https://cursor.com/docs/agent/security/run-modes) | [VS Code, sandbox de agentes](https://code.visualstudio.com/docs/agents/run/agent-sandboxing) | [VS Code, confiança e segurança](https://code.visualstudio.com/docs/agents/concepts/trust-and-safety) | [GitHub, firewall do agente de nuvem do Copilot](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/customize-the-agent-firewall) | [Docker, docker container run](https://docs.docker.com/reference/cli/docker/container/run/)
