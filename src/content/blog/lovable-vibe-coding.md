---
title: "Lovable Vibe Coding: como criar seu primeiro app com IA"
description: "Aprenda a usar o Lovable para vibe coding com um prompt em português. Crie um quadro de pedidos, teste o fluxo e veja como publicar e usar o GitHub."
category: "Ferramentas de IA"
date: 2026-11-27T21:56:00-03:00
readingTime: "6 min"
image: "./images/lovable-vibe-coding.webp"
imageAlt: "Notebook exibindo um quadro de pedidos em colunas sobre uma mesa de trabalho de uma pequena gráfica"
draft: false
---

Com o Lovable, fazer vibe coding é descrever um app em linguagem natural, abrir a prévia que a IA gera e pedir ajustes a partir do que você vê. Um bom primeiro projeto é um quadro de pedidos para uma pequena gráfica. A tarefa cabe em uma tela: cadastrar o pedido, acompanhar a produção e marcar a entrega. O fluxo também ajuda a perceber a diferença entre uma tela convincente e um app que guarda os dados e funciona para a equipe.

O exemplo abaixo começa com pedidos fictícios e evolui em etapas. Se você ainda está escolhendo a plataforma, o [comparativo de ferramentas de vibe coding](/ferramentas-vibe-coding-criar-apps-ia/) mostra onde Lovable, Replit, Bolt e outras opções se encaixam.

## O que é Lovable vibe coding na prática?

Vibe coding é criar e ajustar software dando instruções à IA em vez de digitar cada linha de código. No Lovable, você conversa com a ferramenta dentro de um projeto, acompanha a prévia no navegador e pode continuar trabalhando sobre o código gerado. A plataforma também oferece publicação e um backend integrado com banco de dados e autenticação.

Esse fluxo encaixa bem em projetos que você consegue descrever por ações, como solicitar um orçamento, acompanhar um pedido ou editar um cadastro. Para um app que envolve pagamentos ou permissões diferentes para cada cargo, vale dividir o trabalho em etapas menores e definir como verificar cada uma. Os [seis hábitos para fazer vibe coding sem bagunça](/vibe-coding-6-habitos-sem-bagunca/) ajudam a organizar essas mudanças.

## 1. Comece com um fluxo que dá para conferir

Abra um projeto no Lovable e descreva quem vai usar o app e o que essa pessoa precisa fazer. A primeira versão do quadro da gráfica serve para responder a uma pergunta: quem está no balcão consegue identificar rapidamente quais trabalhos ainda estão em produção?

O editor oferece o **Chat mode** para discutir uma ideia, o **Plan mode** para elaborar um plano antes de alterar o código e o **Build mode** para aplicar mudanças ao projeto. Para essa primeira tela, você pode enviar o prompt abaixo diretamente no Build. Quando chegar a hora de adicionar login e persistência, use o Plan para revisar as decisões antes de mandar implementar.

### Prompt para copiar no Lovable

```text
Crie um app web em português do Brasil chamado Quadro da Gráfica.
Ele será usado pela equipe do balcão para acompanhar pedidos.

Mostre três colunas: Recebido, Em produção e Entregue. Cada cartão
deve mostrar o número do pedido, o serviço e o prazo em DD/MM/AAAA.

Inclua um botão Novo pedido. O formulário pede serviço e prazo,
valida os campos obrigatórios e coloca o cartão na coluna Recebido.
Use botões para mudar o status. No celular, empilhe as colunas.

Nesta etapa, use seis pedidos fictícios e mantenha as alterações
apenas durante a sessão da página. Deixe pagamentos, login e banco
de dados para uma etapa futura.
```

Abra a prévia, crie um pedido e mova o cartão até **Entregue**. Tente salvar o formulário sem preencher o prazo e veja se a mensagem indica o campo que falta. Reduza a largura da tela e confira se os botões continuam acessíveis. Como o prompt pede um protótipo temporário, é esperado que os dados voltem ao estado inicial ao recarregar a página.

## 2. Acrescente persistência e login

Se o quadro fez sentido, peça ao Lovable para planejar a próxima etapa. O backend integrado, também chamado de Lovable Cloud, pode armazenar os pedidos e cuidar da autenticação. Defina a regra de acesso no pedido: toda a equipe autorizada pode ver e mover os pedidos, e quem está fora da equipe fica sem acesso aos registros.

> Planeje como salvar os pedidos no backend integrado e restringir o quadro às contas autorizadas da equipe. Explique como autorizar uma conta, quais regras de acesso serão aplicadas no banco e como verificar o comportamento com uma conta autorizada e outra sem acesso. Preserve as três colunas e os campos existentes.

Depois de revisar o plano, peça a implementação em Build. Continue usando dados fictícios para confirmar que o pedido permanece no quadro após recarregar a página e que uma mudança de status feita por um integrante aparece para outro ao atualizar a tela. Confira também se uma conta sem autorização fica impedida de ler ou alterar os registros. A proteção precisa existir nas regras do backend, inclusive quando alguém abre o link diretamente. [Backend integrado do Lovable](https://docs.lovable.dev/features/cloud)

## 3. Publique e confira o endereço final

Quando o fluxo estiver pronto para demonstração, abra **Publish** no editor, escolha o endereço e confira quem pode acessar o app. O Lovable sugere um endereço `lovable.app` e roda verificações automáticas de segurança antes da publicação. Na página publicada, repita o teste de acesso e confirme o comportamento com os mesmos dados fictícios.

O site publicado exibe a versão selecionada no momento do envio. Se você corrigir um campo ou ajustar as regras no editor, confira a prévia e use **Publish changes** para levar a atualização ao endereço final. [Documentação de publicação](https://docs.lovable.dev/features/publish)

## Dá para usar o Lovable de graça?

Sim. Em 27 de novembro de 2026, o plano **Free** incluía cinco créditos diários de construção, com limite de 30 por mês. O modo Build cobra conforme o trabalho realizado, então cinco créditos podem render quantidades diferentes de alterações. O plano também inclui a opção de sincronizar o código com Git e permite publicar para até dez pessoas convidadas por projeto. Domínio próprio é um recurso dos planos pagos.

O uso do backend em Cloud e dos recursos de IA dentro do app também é medido em créditos. Confira o painel **Plans & credit usage** do workspace para acompanhar o que o projeto consome durante a construção e depois que entra em uso. [Documentação de créditos e consumo](https://docs.lovable.dev/introduction/credits-and-usage)

## Dá para levar o código do Lovable para o GitHub?

Sim. A sincronização com o GitHub permite manter o código em um repositório e continuar o trabalho no seu editor. O repositório guarda o código e pode conter as migrações que descrevem a estrutura do banco. Os registros, as chaves privadas e a configuração dos serviços precisam de atenção própria na hora de mover o app. Se você pretende hospedar fora da plataforma, veja o [comparativo de onde hospedar um app feito com vibe coding](/vibe-coding-onde-hospedar-app/).

Para decidir se o Lovable atende ao seu projeto, experimente o fluxo inteiro com uma tarefa pequena. No quadro da gráfica, o teste é simples: um integrante cria o pedido, outro consegue localizá-lo e concluir a entrega e só a equipe autorizada acessa o histórico. Se essas três ações funcionarem, você tem uma base concreta para decidir o que vale construir a seguir.

## Fontes

- [Lovable Docs sobre os modos do agente](https://docs.lovable.dev/features/agent-mode)
- [Lovable Docs sobre planejamento no Plan mode](https://docs.lovable.dev/features/plan-mode)
- [Lovable Docs sobre planos de assinatura](https://docs.lovable.dev/introduction/subscription-plans)
- [Lovable Docs sobre sincronização Git](https://docs.lovable.dev/integrations/git-sync-overview)
