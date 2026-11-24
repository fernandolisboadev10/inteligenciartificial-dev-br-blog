---
title: "3 IAs grátis para usar quando você trava no código"
description: "Veja quando usar ChatGPT, GitHub Copilot e Gemini para entender um erro, completar código no VS Code e montar um protótipo sem pagar assinatura."
category: "Ferramentas de IA"
date: 2026-11-24T14:58:00-03:00
translation: "3-ias-gratis-para-programar"
readingTime: "4 min"
image: "./images/ias-gratis-programar-capa.webp"
imageAlt: "Programador escrevendo JavaScript em um notebook perto da janela"
draft: false
---

Você digita `abc` no campo de minutos de um cronômetro e a tela mostra `NaN`. Dá para usar uma IA para descobrir de onde veio o erro, outra para completar a validação no VS Code e uma terceira para ver se a interface funciona antes de mexer no seu projeto.

**Use o ChatGPT para entender o erro, o GitHub Copilot para escrever no editor e o Gemini Canvas para prototipar no navegador.** Os três têm opção gratuita. A melhor escolha depende do ponto em que você travou.

Para testar, basta um cronômetro em HTML e JavaScript. O campo deve aceitar minutos inteiros de 1 a 60. Comece anotando o que aconteceu e o que deveria acontecer. Se precisar de ideias para descrever bugs, veja estes [comandos para programadores](/chatgpt-comandos-para-programadores) e o guia de [engenharia de prompt para devs](/prompt-engineering-para-devs).

## 1. ChatGPT para descobrir de onde veio o erro

![Programador diante de um notebook com o logo do ChatGPT na tela](./images/ias-gratis-programar-chatgpt.webp)

Quando a mensagem de erro parece clara para todo mundo menos para você, cole no chat o trecho que lê o campo e a mensagem que aparece na tela. Nesse exemplo, o valor do campo chega como texto. Ao executar `Number('abc')`, o JavaScript devolve `NaN`, e a contagem não tem um número válido para usar.

**Prompt para copiar**

> Meu cronômetro em JavaScript mostra NaN quando digito abc e clico em Iniciar. O campo deve aceitar apenas números inteiros de 1 a 60. Vou colar o trecho que lê o campo. Explique onde nasce o NaN, sugira a menor correção possível e dê três entradas para eu testar. Preserve o restante da função.

Confira se a resposta também trata o campo vazio. `Number('')` dá `0`, então verificar só se o valor é `NaN` deixa esse caso escapar. Se o chat sugerir reescrever o cronômetro inteiro, peça que aponte a linha onde a validação deve entrar.

**O que dá para usar de graça.** O chat de texto basta para esse exercício. A OpenAI indica limites para mensagens com anexos e para o tamanho do contexto no plano Free.

## 2. GitHub Copilot para completar código no VS Code

![Programador com uma ilustração do símbolo do GitHub Copilot no notebook](./images/ias-gratis-programar-github-copilot.webp)

Se você já sabe a regra de validação, pode partir direto para o editor. No VS Code, configure o GitHub Copilot, entre com sua conta do GitHub e abra o arquivo JavaScript do cronômetro. Escreva o comentário e a assinatura da função, depois use a sugestão inline como ponto de partida.

```js
// Recebe o texto do campo e retorna true apenas para minutos inteiros de 1 a 60.
function minutosValidos(valor) {
```

Antes de aceitar a sugestão, veja se ela rejeita `2.5` e `61`. Uma implementação pode converter o texto com `Number(valor)` e verificar se o resultado é inteiro e está no intervalo. Se o seu campo precisa aceitar somente dígitos de `0` a `9`, explicite essa regra. A conversão numérica também reconhece notações como `1e1`.

**O que dá para usar de graça.** O Copilot Free inclui até **2.000 conclusões de código por mês**. O chat e outros recursos de IA têm uma cota própria de créditos. [Planos do GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans).

## 3. Gemini Canvas para testar a interface no navegador

![Programador usando um notebook com o logo do Gemini na tela](./images/ias-gratis-programar-gemini.webp)

O Canvas ajuda quando a dúvida é visual. Onde aparece o aviso? O botão funciona de novo depois que você corrige o valor? Abra o Gemini, selecione **Canvas** e peça um protótipo pequeno para conferir esses detalhes na prévia.

**Prompt para copiar**

> No Canvas, crie um cronômetro regressivo em um único HTML, com CSS e JavaScript. Inclua um campo de minutos e os botões Iniciar e Reiniciar. Aceite apenas inteiros de 1 a 60. Se o valor for inválido, mostre “Digite um número inteiro de 1 a 60” logo abaixo do campo e mantenha o contador parado. Deixe o código visível para eu revisar.

Na prévia, comece com o campo vazio e depois tente `1`. Em seguida, clique duas vezes em **Iniciar**. Se a contagem acelerar, confira se cada clique está criando um novo intervalo. Esse é um detalhe fácil de perceber quando a interface está funcionando na tela.

**O que dá para usar de graça.** O Canvas está disponível sem assinatura Google AI e segue os limites de uso do Gemini. [Limites e recursos do Gemini](https://support.google.com/gemini/answer/16275805?hl=pt-BR).

## Um teste rápido para decidir qual vale a pena usar

Pegue um bug pequeno do seu código. Antes de abrir qualquer ferramenta, escreva duas entradas que deveriam funcionar e duas que deveriam falhar. Para o cronômetro, `1` e `60` devem iniciar a contagem. `0` e `61` devem mostrar o aviso. Depois, teste `2.5` e o campo vazio para pegar erros que passam despercebidos.

Se você ainda não sabe por que falha, comece no **ChatGPT**. Se já sabe o que precisa mudar, use o **Copilot** no arquivo. Se quer ver como o fluxo responde aos cliques, abra o **Gemini Canvas**. A ferramenta vale o seu tempo quando você consegue explicar a correção e repetir o teste por conta própria.

### Fontes consultadas

Planos e limites consultados em 24 de novembro de 2026.

- [OpenAI, planos do ChatGPT](https://chatgpt.com/pricing/)
- [GitHub, configuração do Copilot para uso individual](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot/set-up-for-self)
- [Google, como criar e editar no Canvas](https://support.google.com/gemini/answer/16047321?hl=pt-BR)
