---
title: "12 Comandos Personalizados que Transformam o ChatGPT numa Ferramenta de Produtividade no Trabalho"
description: "Configure 12 comandos no estilo slash uma vez, e o ChatGPT para de escrever e-mails genéricos e passa a montar resumos de reunião técnica, standups e planos de migração para o seu time de programação e TI. Prontos pra copiar e colar."
category: "Prompts"
date: 2026-09-18
updated: 2026-11-01T21:08:00-03:00
translation: "chatgpt-comandos-productividad"
readingTime: "6 min"
image: "./images/chatgpt-comandos-produtividade.webp"
imageAlt: "Foto editorial de uma estação de trabalho de programador à noite: monitor ultrawide com editor de código em tema escuro e chat de IA ao lado, post-its coloridos com os comandos /email, /pauta, /resumo e /planilha na borda da tela, teclado mecânico com luz RGB, xícara de café, caderno e luminária, com as luzes da cidade ao fundo"
---

Escrever um prompt novo toda vez que você precisa de um resumo de planning, um e-mail pro cliente sobre prazo de entrega ou uma pauta de reunião técnica consome um tempo que ninguém tem sobrando no meio da sprint. O mesmo padrão que circula entre estudantes, ensinar ao modelo um punhado de comandos curtos uma única vez, funciona igual de bem pro trabalho, só que com formatos pensados pra rotina de quem programa e cuida de TI.

A ideia é a mesma. Você cola uma mensagem de configuração que define o que cada comando significa. A partir daí, digitar `/recap [suas anotações]` te devolve decisões, pendências e responsáveis já organizados, em vez de você reler a transcrição inteira sozinho.

Abaixo está um prompt de configuração funcional com 12 comandos, mais um exemplo de uso pra cada um. Cole a configuração uma vez no início de uma conversa (ou salve como instrução personalizada / instrução de Projeto, se o seu plano suportar), e use os comandos curtos no resto do seu dia de trabalho.

## O prompt de configuração

Cole isto uma vez, no topo de uma conversa nova:

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">setup.txt</span>
    <button class="copy-btn" data-copy-target="prompt-setup">Copiar</button>
  </div>
  <pre id="prompt-setup"><code>Você é meu assistente de produtividade pessoal. Trabalho com programação e TI, então use exemplos, termos e contexto desse mundo (código, deploy, incidentes, sprints, infraestrutura) sempre que fizer sentido. A partir de agora, sempre que uma mensagem começar com um dos comandos abaixo, responda usando exatamente aquele formato em vez de uma resposta normal. Ignore esta instrução para qualquer mensagem que não comece com um comando.

/email [contexto] -> Rascunho de e-mail profissional: assunto sugerido, saudação, corpo objetivo em no máximo 3 parágrafos curtos, e um fechamento com próximo passo claro.
/recap [anotações ou transcrição] -> Resumo de reunião em três blocos: Decisões, Pendências (com responsável se mencionado) e Próximos Passos.
/agenda [tópico ou objetivo da reunião] -> Pauta estruturada com 4 a 6 itens, cada um com tempo estimado em minutos, somando o total no final.
/followup [reunião ou conversa] -> E-mail de acompanhamento pós-reunião: agradecimento breve, lista do que foi combinado, e prazo de cada item.
/brief [projeto ou iniciativa] -> Resumo executivo de uma página: objetivo, escopo, principais riscos e prazo, em bullets curtos.
/decision [situação] -> Tabela de prós e contras com pelo menos 4 critérios cada lado, terminando com uma recomendação de uma frase.
/sheet [finalidade] -> Estrutura de planilha: lista de colunas sugeridas, tipo de dado de cada uma, e 1 ou 2 fórmulas úteis pra esse caso (pode ser um controle de bugs, um inventário de equipamentos ou um registro de incidentes).
/pitch [ideia] -> Duas versões: um elevator pitch de 3 frases, e uma versão de um parágrafo pra e-mail ou mensagem.
/objections [proposta ou situação] -> Liste as 4 objeções mais prováveis que um chefe, cliente ou colega levantaria, cada uma com uma resposta pronta.
/okr [objetivo] -> Quebre em 1 Objective claro e de 2 a 4 Key Results mensuráveis com número-alvo.
/standup [atividades] -> Formato de daily standup: O que fiz ontem, O que farei hoje, Bloqueios (ou "nenhum").
/delegate [tarefa complexa] -> Transforme a tarefa numa checklist de etapas menores, cada uma clara o bastante pra ser repassada a outra pessoa sem explicação extra.

Mantenha cada resposta focada e pronta pra usar, sem introduções ou explicações longas, a menos que eu peça explicitamente por isso.</code></pre>
</div>

Com isso configurado, aqui está pra que serve cada comando.

## /email

Use quando precisa mandar um e-mail rápido mas não quer soar seco nem gastar 10 minutos escolhendo as palavras certas: cobrar um prazo, pedir acesso a um servidor, responder a um cliente sobre um bug.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-email">Copiar</button>
  </div>
  <pre id="prompt-email"><code>/email Pedir pro time de infraestrutura confirmar a liberação do ambiente de staging, que já está atrasada 3 dias e está travando os testes, mantendo o tom educado</code></pre>
</div>

## /recap

O comando mais útil da lista pra quem sai de reunião em reunião. Cole as anotações cruas ou a transcrição automática e receba de volta só o que importa.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-recap">Copiar</button>
  </div>
  <pre id="prompt-recap"><code>/recap [cole aqui a transcrição ou suas anotações da reunião de planejamento da sprint com o time de desenvolvimento]</code></pre>
</div>

## /agenda

Bom pra qualquer reunião que você está organizando e não quer que vire papo sem fim. Os tempos estimados também servem de desculpa educada pra cortar uma discussão que se alongou.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-agenda">Copiar</button>
  </div>
  <pre id="prompt-agenda"><code>/agenda Reunião de 30 minutos pra decidir se o time vai migrar o banco de dados de MySQL para PostgreSQL neste trimestre</code></pre>
</div>

## /followup

Rode isso logo depois de qualquer reunião com decisões. Ter o combinado por escrito, com prazo, evita o "eu não lembro de ter concordado com isso" duas semanas depois.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-followup">Copiar</button>
  </div>
  <pre id="prompt-followup"><code>/followup Reunião com o cliente onde ficou combinado que eles mandam a documentação da API até sexta e nós entregamos a primeira versão da integração em 5 dias úteis depois disso</code></pre>
</div>

## /brief

Pra quando alguém acima de você pede "me manda um resumo disso" e você tem 20 páginas de contexto na cabeça, não no papel. Força tudo a caber numa tela.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-brief">Copiar</button>
  </div>
  <pre id="prompt-brief"><code>/brief Migração do pipeline de deploy do Jenkins para o GitHub Actions</code></pre>
</div>

## /decision

Sempre que uma escolha te deixa em cima do muro, isso obriga a comparar critério por critério em vez de ficar girando os mesmos dois argumentos na cabeça.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-decision">Copiar</button>
  </div>
  <pre id="prompt-decision"><code>/decision Reescrever o módulo legado em TypeScript agora vs esperar o próximo trimestre e só corrigir os bugs críticos</code></pre>
</div>

## /sheet

Útil antes de abrir o Excel ou o Google Sheets do zero. Você chega na planilha já sabendo quais colunas criar e quais fórmulas vai precisar, em vez de remontar a estrutura na marra depois.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-sheet">Copiar</button>
  </div>
  <pre id="prompt-sheet"><code>/sheet Controlar os bugs e débitos técnicos do time por sprint, com prioridade e responsável</code></pre>
</div>

## /pitch

Pra vender uma ideia em dois tamanhos diferentes: a versão de elevador, pra quando você tem 15 segundos no corredor, e a versão de e-mail, pra quando alguém pede mais detalhe por escrito.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-pitch">Copiar</button>
  </div>
  <pre id="prompt-pitch"><code>/pitch Criar um canal interno só pra compartilhar post-mortems de incidentes em produção</code></pre>
</div>

## /objections

Roda antes de uma negociação ou apresentação importante, pra chegar com resposta pronta em vez de travar na hora que alguém levanta o ponto óbvio que você não tinha pensado.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-objections">Copiar</button>
  </div>
  <pre id="prompt-objections"><code>/objections Propor pro tech lead que todo código passe a exigir code review em pull request antes de ir pra produção</code></pre>
</div>

## /okr

Transforma uma intenção vaga tipo "deixar o sistema mais estável" em algo que dá pra medir no fim do trimestre, sem precisar saber de cor o formato certo de Objective e Key Result.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-okr">Copiar</button>
  </div>
  <pre id="prompt-okr"><code>/okr Reduzir o tempo médio de resolução de incidentes em produção (MTTR)</code></pre>
</div>

## /standup

Pra quem participa de daily meeting e sempre trava na hora de organizar o que fez ontem em frases curtas em vez de um relato inteiro.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-standup">Copiar</button>
  </div>
  <pre id="prompt-standup"><code>/standup Terminei o endpoint de login com JWT, hoje vou escrever os testes de integração, mas ainda espero acesso ao ambiente de staging</code></pre>
</div>

## /delegate

Use quando uma tarefa é grande demais pra jogar em cima de alguém como está. Isso quebra ela em pedaços pequenos o bastante pra outra pessoa pegar sem precisar te chamar a cada dúvida.

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">exemplo</span>
    <button class="copy-btn" data-copy-target="prompt-delegate">Copiar</button>
  </div>
  <pre id="prompt-delegate"><code>/delegate Migrar a aplicação do servidor local da empresa para a nuvem (AWS)</code></pre>
</div>

## Fazendo isso pegar

O prompt de configuração só dura na conversa atual, a menos que você salve em algum lugar permanente. Se você tem o ChatGPT Plus, Team ou Enterprise, cole em **Instruções Personalizadas** (Configurações → Personalização) ou nas instruções de um **Projeto**, pra que toda conversa nova já conheça os comandos. Claude e Gemini têm o mesmo recurso através das próprias instruções persistentes ou "Projetos" e "Gems". O prompt em si não precisa mudar, só onde você o salva.

Você não precisa usar os 12. A maioria das pessoas se acomoda com três ou quatro que encaixam na própria rotina: geralmente /recap e /followup pra quem vive de reunião, /standup e /delegate pra quem trabalha em time de desenvolvimento, /email e /decision pra quem lida com clientes e outros times. Teste na sua próxima semana de trabalho e fique com os que realmente economizarem tempo de verdade.

## Leia Também

- [12 comandos personalizados do ChatGPT para estudar](/chatgpt-comandos-para-estudar/)
- [12 comandos personalizados pra programadores](/chatgpt-comandos-para-programadores/)
- [ChatGPT grátis ou pago: Go, Plus ou Free? Preços em reais](https://techonplay.com.br/chatgpt-gratis-ou-pago/)
