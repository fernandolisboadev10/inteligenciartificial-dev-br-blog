---
title: "Prompt Engineering Para Devs: O Que Funciona, O Que Virou Mito e Como Medir"
description: "Prompt engineering para devs sem frases mágicas: contrato de entrada e saída, JSON validado, versionamento e um teste real com 5 modelos e 24 casos."
category: "Prompts"
date: 2026-10-19T22:11:47-03:00
readingTime: "9 min"
image: "./images/prompt-engineering-para-devs.webp"
imageAlt: "Foto editorial da mesa de um desenvolvedor com um notebook mostrando um editor de código e uma tabela de resultados de testes ao lado de cadernos com anotações à mão, luz suave de fim de tarde, profundidade de campo rasa"
draft: false
---

Prompt engineering para devs não tem a ver com descobrir a frase certa. Tem a ver com tratar o prompt como qualquer outra interface do seu sistema: entrada definida, saída verificável, versão no repositório e um teste que avisa quando algo quebra. Se você está no caminho descrito em [como virar engenheiro de IA em 2026](/como-virar-engenheiro-de-ia-2026/), essa é provavelmente a habilidade que mais aparece no dia a dia.

Para não ficar só na opinião, rodei um experimento: o mesmo prompt de extração de dados em três versões e cinco modelos, com gabarito. Método, números e limitações estão mais adiante.

## Prompt Engineering Para Devs Hoje: O Que Mudou e o Que Virou Mito

Em 2023 o repertório era feito de truques: "você é um especialista de classe mundial", gorjetas imaginárias, "respire fundo", ameaças, caixa alta. Os modelos de raciocínio atuais fazem sozinhos a etapa que esses truques tentavam forçar. O guia de prompts da OpenAI descreve a diferença: modelos de raciocínio funcionam bem com objetivos de alto nível, enquanto os modelos GPT convencionais pedem instruções explícitas e precisas.

Na prática, o que virou mito foi isto:

- **Frase mágica.** Nenhuma expressão substitui especificar o que você quer.
- **"Pense passo a passo" em tudo.** Num modelo que já raciocina, teste se a instrução ainda ajuda. Pode só gastar tokens.
- **O prompt gigante e sagrado.** Com regras demais, ninguém sabe qual causou o erro.

O que continua valendo é a engenharia: objetivo claro, instrução separada de dado, formato de saída fixo e medição. É um contrato entre seu código e o modelo.

## Anatomia de um Prompt de Produção

Um prompt de produção costuma ter seis blocos: papel (system), contexto, tarefa, restrições, formato de saída e exemplos. O papel pode ser uma linha. O que pesa é a **tarefa**, as **restrições** (inclusive o que fazer quando a informação não existe) e o **formato**.

O prompt abaixo é a versão B do experimento, com o texto condensado. Ele define cada campo, trata o caso "não está no texto" e proíbe texto fora do JSON:

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">extracao-pedidos.txt</span>
    <button class="copy-btn" data-copy-target="prompt-extracao">Copiar</button>
  </div>
  <pre id="prompt-extracao"><code>Você extrai dados de e-mails de clientes de uma loja online brasileira.

Devolva SOMENTE um objeto JSON, sem texto antes ou depois e sem bloco de código, com exatamente estas chaves:
- "cliente": nome de quem escreve; null se não houver
- "pedido": número do pedido, só dígitos, string; null se não houver (protocolo, CPF, telefone e CEP não contam)
- "produto": produto principal; null se não houver
- "valor": total do pedido já feito, em reais, número com ponto decimal; null se não houver compra
- "data": data da compra, AAAA-MM-DD (ano 2026 se ausente); null se não aparecer (entrega não conta)
- "intencao": "reclamacao" (problema sem pedir troca nem cancelamento), "duvida", "cancelamento", "elogio" ou "troca"

Se uma informação não está no texto, use null. Não invente nada.

&lt;email&gt;
{{texto_do_email}}
&lt;/email&gt;</code></pre>
</div>

A tag em volta do e-mail ajuda o modelo a separar dado de instrução, mas não é uma barreira: texto malicioso ainda pode tentar virar ordem, como explicamos em [injeção de prompt](/injecao-de-prompt-o-que-e/). Valide a saída sempre.

## Técnicas com Critério de Uso

| Técnica | Use quando | Evite quando | Antes → depois |
|---|---|---|---|
| Zero-shot | A tarefa é comum e o formato é simples | A regra é sutil ou o formato é incomum | "Classifique este chamado" → "Classifique em bug, melhoria ou dúvida. Responda só o rótulo." |
| Few-shot | O formato ou a regra é difícil de descrever em palavras | Os exemplos são parecidos entre si e viciam o modelo | Adicionar 3 exemplos diversos, incluindo um caso com campo ausente |
| Chain-of-thought | Problema de vários passos num modelo que não raciocina sozinho | O modelo já raciocina, ou a saída precisa ser só JSON | "Resolva" → "Mostre o raciocínio e, no fim, a resposta em uma linha" |
| Decomposição | A tarefa mistura subtarefas independentes | A tarefa é simples | Um prompt de "analise o contrato" vira extração de cláusulas, classificação de risco e resumo |
| Prompt chaining | Cada etapa depende da anterior e pode ser validada | Latência e custo são críticos | Extrair → validar → só então redigir a resposta |

A base do chain-of-thought está no paper de [Wei et al. (2022)](https://arxiv.org/abs/2201.11903), que mostra exemplos com passos intermediários melhorando o desempenho em tarefas de aritmética, senso comum e raciocínio simbólico, e descreve o efeito como algo que aparece em modelos suficientemente grandes. Com modelos de raciocínio, isso muitas vezes já vem embutido.

Para prompts curtos de uso diário, veja [12 comandos personalizados para programadores](/chatgpt-comandos-para-programadores/). Aqui o foco é o prompt que roda dentro de um sistema.

## Saída Estruturada: JSON, Schema e Falha

Se outro código vai consumir a resposta, texto livre não serve. Três camadas ajudam:

1. **Peça o formato no prompt** e, quando a API do provedor oferecer modo de saída estruturada com schema, use-o.
2. **Valide no seu código** com Pydantic, Zod ou JSON Schema: chaves exatas, tipos, valores de enum.
3. **Trate a falha** como caso normal, não como exceção rara.

```python
for tentativa in range(3):
    texto = chamar_modelo(prompt)
    try:
        dado = Pedido.model_validate_json(texto)  # Pydantic
        break
    except ValidationError as erro:
        prompt = prompt + f"\n\nSua resposta anterior era inválida: {erro}. Corrija."
else:
    enviar_para_revisao_humana(email)
```

Limite as tentativas, registre cada falha e tenha um destino para o que não passou. Validar o formato não valida o conteúdo: um JSON perfeito pode trazer o valor errado, e por isso existe a próxima seção.

## Parâmetros Que Importam

- **Temperatura:** para extração e classificação, use valor baixo. Nos testes abaixo usei 0,3. Alguns modelos ignoram o parâmetro: a documentação de estratégias de prompt do Google informa que modelos Gemini 4 e 3.6 ou posteriores ignoram valores customizados de temperatura, top_p e top_k.
- **Top-p:** mexa em temperatura ou em top-p, não nos dois, para saber o que mudou o resultado.
- **Limite de tokens de saída:** é a pegadinha mais cara. Veja o que aconteceu no experimento mais adiante.
- **Custo:** tokens de entrada mais tokens de saída. Exemplos aumentam a entrada, mas podem encurtar a saída.

## Como Testar e Medir

A Anthropic recomenda ter, antes de mexer no prompt, [critérios de sucesso definidos e um jeito empírico de testá-los](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview). Na prática:

- **Conjunto de casos com gabarito.** De 20 a 50 já ajuda, e precisa incluir os casos chatos: campo ausente, dado parecido com outro, texto bagunçado.
- **Métrica por campo,** não só "acertou tudo", para saber onde falha.
- **Várias execuções,** porque a resposta varia de uma chamada para outra.
- **Comparação entre versões e entre modelos.** Trocar de modelo é uma mudança de código: rode o conjunto de casos antes de promover.

### O Experimento: Três Versões do Mesmo Prompt, Cinco Modelos

**Método.** Escrevi 24 e-mails de suporte sintéticos em português, com gabarito de 6 campos (cliente, pedido, produto, valor, data da compra e intenção). As armadilhas: CPF, telefone e protocolo que não são pedido, parcelamento, valor por extenso, data de entrega ao lado da data de compra, preço de produto ainda não comprado e e-mail sem nome. Três versões: **A**, ingênua ("Extraia os dados deste e-mail: nome, pedido, produto, valor, data e o que o cliente quer"); **B**, o prompt estruturado da seção 2; **C**, igual ao B mais 3 exemplos. Cada versão rodou 3 vezes por modelo, com temperatura 0,3, via OpenRouter em 19/10/2026. Modelos: Claude Haiku 5.5, GPT-6 Luna, Qwen3.7 Flash, Ling 3.1 Flash e Granite 4.2 8B. O gasto total, com testes descartados, foi de cerca de US$ 0,39.

**Resultado da versão A.** Nenhuma das 360 respostas (5 modelos × 24 casos × 3 execuções) veio em JSON. Todas eram texto em Markdown, que código não consome sem outra etapa de interpretação. Olhando só o conteúdo, com checagem leniente (o valor aparece em algum ponto do texto), nome, pedido, produto, valor e data estavam certos em praticamente todos os casos. A exceção foi a intenção, reconhecida em 78% a 92% das respostas por uma heurística de palavras-chave minha, que pode subestimar.

**Resultado das versões B e C**, média de acerto por campo, correção estrita contra o gabarito:

| Modelo | B (estrutura + formato) | C (B + 3 exemplos) |
|---|---|---|
| Claude Haiku 5.5 | 100% | 100% |
| GPT-6 Luna | 100% | 100% |
| Qwen3.7 Flash | 99,5% | 99,5% |
| Ling 3.1 Flash | 96,5% | 99,8% |
| Granite 4.2 8B | 90,3% | 94,4% |

O que isso mostra, com honestidade:

- **A estrutura trouxe saída utilizável, não conteúdo melhor.** Nesta tarefa o prompt ingênuo já extraía bem. O ganho foi formato fixo, enum para a intenção e tratamento de campo ausente.
- **Few-shot só ajudou o modelo menor.** No Ling, de 96,5% para 99,8%. Haiku e Luna já estavam no teto.
- **Exemplo não substitui teste.** O Qwen errou o mesmo caso em 2 das 3 execuções de B e de C: a cliente perguntava o prazo de uma cadeira ainda não comprada, e o modelo pôs o preço de vitrine (1499) em "valor". Na versão C isso persistiu, apesar de um exemplo parecido no prompt.
- **O limite de tokens quebrou mais que o prompt.** No Granite, toda resposta que chegou estava certa; os 90,3% e 94,4% vêm de respostas vazias (7 e 4 de 72) por esgotar o limite de 8.000 tokens. Numa primeira rodada com limite de 1.500, Qwen e Granite vieram vazios em 59 a 64 das 72 chamadas estruturadas. Pelo comportamento, parecem gastar tokens em raciocínio interno antes de responder.

**Limitações.** Dados sintéticos, tarefa simples, só português, gabarito e script escritos por mim. Notas perto de 100% não valem para tarefas difíceis, e a diferença entre B e C, fora o Ling, está no ruído. Outro teste com um prompt só e vários modelos: [o mesmo prompt de landing page](/mesmo-prompt-landing-page-ia/). Em custo, o Haiku ficou em torno de US$ 0,00015 por e-mail nas três versões.

## Versionar e Manter Prompts

Trate prompt como código de produção:

- **Arquivo no repositório,** não string perdida no meio da função, com variáveis explícitas como `{{texto_do_email}}`.
- **Revisão em pull request,** com o resultado da avaliação no PR e um changelog curto: o que mudou e qual foi a nota antes e depois.
- **Fixe a versão do modelo.** A OpenAI recomenda [travar aplicações de produção em um snapshot datado](https://developers.openai.com/api/docs/guides/prompt-engineering), porque snapshots da mesma família podem se comportar de forma diferente. A avaliação roda a cada troca.
- **Contexto e RAG:** injete só os trechos relevantes, delimitados como dado, e meça de novo quando mudar a busca.

## Erros Comuns e Checklist Final

Os erros mais comuns: ajustar o prompt sem conjunto de casos, tratar um acerto isolado como prova, esquecer o caso "não encontrado", limite de tokens baixo demais e trocar de modelo sem rodar a avaliação. Antes de subir um prompt, confira:

1. A tarefa, as restrições e o formato de saída estão escritos, sem ambiguidade?
2. Existe instrução para o que fazer quando a informação falta?
3. A saída é validada por schema e as falhas têm destino?
4. Há um conjunto de casos com gabarito e métrica por campo?
5. O limite de tokens comporta raciocínio mais resposta?
6. O prompt está no repositório, com revisão e a versão do modelo fixada?
7. O dado externo é tratado como dado, não como ordem?

*Fontes: [Anthropic, Prompt engineering overview](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview), [OpenAI, Prompt engineering](https://developers.openai.com/api/docs/guides/prompt-engineering), [Google, Prompt design strategies (Gemini API)](https://ai.google.dev/gemini-api/docs/prompting-strategies), [Wei et al., Chain-of-Thought Prompting Elicits Reasoning in Large Language Models (2022)](https://arxiv.org/abs/2201.11903). Consultadas em 19 de outubro de 2026. Experimento próprio, rodado em 19 de outubro de 2026.*
