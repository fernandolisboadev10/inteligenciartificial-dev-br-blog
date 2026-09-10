---
title: "A API do Grok da xAI É Mais Barata que o GPT-6 Astra e o Claude Opus 5. Fizemos as Contas."
description: "O modelo carro-chefe do Grok custa uma fração do GPT-6 Astra e é mais barato que o Claude Opus 5. Veja a matemática real por token, um exemplo de código funcional, e onde o preço baixo para de ser vantagem."
category: "Ferramentas de IA para Código"
date: 2026-09-08
readingTime: "7 min"
image: "./images/grok-api-pricing.webp"
imageAlt: "Foto editorial em close-up da tela de um notebook mostrando um editor de código desfocado e um gráfico de comparação de custo por token, com notas e moedas de dólar americano suavemente fora de foco na mesa em primeiro plano"
---

Toda página de preços de API parece razoável sozinha. Colocadas lado a lado, porém, a diferença entre a API do Grok da xAI e os dois maiores nomes do setor fica difícil de ignorar. Coletamos as taxas atuais por token do Grok, da OpenAI e das linhas de API da Anthropic, e rodamos a mesma carga de trabalho nas três pra ver quanto custa de verdade em dólares, não só em centavos-por-milhão-de-tokens numa página de marketing.

Versão resumida: no nível carro-chefe, o Grok 4.6 é aproximadamente 6x mais barato que o GPT-6 Astra e 3x mais barato que o Claude Opus 5 pra mesma mistura de entrada/saída. Não é o modelo mais barato do mercado em todos os níveis, mas no topo, a diferença é maior do que a maioria dos desenvolvedores provavelmente imagina.

## O Que a API do Grok Realmente É

A API do Grok é a plataforma de desenvolvedores da xAI pra chamar os modelos Grok de forma programática, separada do app de chat do Grok e separada do X Premium. Você não precisa de uma assinatura do X pra usá-la, e pagar pelo X não te dá créditos de API. É uma cobrança que você reconheceria de qualquer outro provedor de LLM: paga por token, medida por requisição, cobrada mensalmente ou pré-paga via créditos do console.

A API é compatível com o SDK da OpenAI, o que importa mais do que parece. Se você já tem código chamando a API da OpenAI, trocar pro Grok normalmente é só uma troca de URL base e chave de API, não uma reescrita.

## Como Conseguir uma Chave de API do Grok

1. Acesse [console.x.ai](https://console.x.ai) e cadastre-se com um e-mail. Sem lista de espera, sem exigência de X Premium.
2. Contas novas recebem **$25 em créditos grátis** pra começar a testar sem cartão.
3. Na barra lateral do console, abra **API Keys** → **Create API Key**.
4. Copie a chave imediatamente. Ela começa com `xai-` e a xAI não guarda o valor em texto puro, então se você a perder, precisa gerar uma nova.

Os limites de taxa aumentam conforme quanto você gastou desde 1º de janeiro de 2026: contas novas começam em torno de 150 requisições/segundo e 50M tokens/minuto, subindo pra 500 RPS e 100M TPM depois que você ultrapassa $5.000 em gasto acumulado. Suficiente pra prototipagem e a maioria dos apps em produção; algo a planejar se você está construindo em escala real.

## Um Exemplo de Código Funcional

Como a API espelha o SDK da OpenAI, esta é a integração inteira se você estiver usando Python:

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">grok_exemplo.py</span>
    <button class="copy-btn" data-copy-target="prompt-python">Copiar</button>
  </div>
  <pre id="prompt-python"><code>from openai import OpenAI
client = OpenAI(
    api_key="sua_chave_api_xai",
    base_url="https://api.x.ai/v1",
)
response = client.responses.create(
    model="grok-4.6",
    input="Explique a diferença entre uma condição de corrida e um deadlock.",
)
print(response.output_text)</code></pre>
</div>

Ou com curl puro, se você só quer testar se a chave funciona:

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">terminal</span>
    <button class="copy-btn" data-copy-target="prompt-curl">Copiar</button>
  </div>
  <pre id="prompt-curl"><code>curl https://api.x.ai/v1/responses \
  -H "Authorization: Bearer $XAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "grok-4.6",
    "input": "Explique a diferença entre uma condição de corrida e um deadlock."
  }'</code></pre>
</div>

O Grok suporta function calling e saídas estruturadas, então fluxos agênticos e de uso de ferramentas construídos pro formato de function-calling da OpenAI ou do Claude são portados com ajustes pequenos, não um redesenho.

## A Tabela de Preços

Aqui está o que cada provedor cobra por milhão de tokens em três níveis comparáveis: carro-chefe, intermediário/eficiente, e econômico/específico pra código.

<div style="max-width:900px;margin:24px auto;overflow-x:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table style="width:100%;border-collapse:collapse;background:#ffffff;box-shadow:0 1px 4px rgba(0,0,0,0.08);border-radius:8px;overflow:hidden;">
    <thead>
      <tr style="background:var(--ink-deep);color:#ffffff;">
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Nível</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">🧠 Modelo</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">📥 Entrada / 1M</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">📤 Saída / 1M</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;" rowspan="3">🚀 Carro-chefe</td>
        <td style="padding:12px 16px;">Grok 4.6</td>
        <td style="padding:12px 16px;">$2,00</td>
        <td style="padding:12px 16px;">$6,00</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;">GPT-6 Astra</td>
        <td style="padding:12px 16px;">$10,00</td>
        <td style="padding:12px 16px;">$50,00</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;">Claude Opus 5</td>
        <td style="padding:12px 16px;">$5,00</td>
        <td style="padding:12px 16px;">$25,00</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;" rowspan="3">⚙️ Intermediário</td>
        <td style="padding:12px 16px;">Grok 4.3</td>
        <td style="padding:12px 16px;">$1,25</td>
        <td style="padding:12px 16px;">$2,50</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;">GPT-5.6 Terra</td>
        <td style="padding:12px 16px;">$2,00</td>
        <td style="padding:12px 16px;">$12,00</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;">Claude Sonnet 5</td>
        <td style="padding:12px 16px;">$2,00</td>
        <td style="padding:12px 16px;">$10,00</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;" rowspan="3">💸 Econômico / código</td>
        <td style="padding:12px 16px;">Grok Build 0.1</td>
        <td style="padding:12px 16px;">$1,00</td>
        <td style="padding:12px 16px;">$2,00</td>
      </tr>
      <tr style="background:#fafafa;">
        <td style="padding:12px 16px;">GPT-5.6 Luna</td>
        <td style="padding:12px 16px;">$0,20</td>
        <td style="padding:12px 16px;">$1,20</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;">Claude Haiku 4.5</td>
        <td style="padding:12px 16px;">$1,00</td>
        <td style="padding:12px 16px;">$5,00</td>
      </tr>
    </tbody>
  </table>
</div>

*Os níveis carro-chefe e intermediário do Grok aproximadamente dobram de preço quando o prompt de uma única requisição ultrapassa 200K tokens (o Grok 4.6 vai pra $4/$12); o GPT-6 Astra sobe de forma parecida acima de 272K tokens de entrada.*

## Fizemos as Contas

Taxas por milhão de tokens não significam muito até você aplicá-las numa carga de trabalho real. Digamos que você roda um assistente de código com IA em produção que processa **10 milhões de tokens de entrada e 2 milhões de tokens de saída por mês** — uma carga realista pra uma ferramenta interna de um time pequeno com uso diário constante.

<div style="max-width:900px;margin:24px auto;overflow-x:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table style="width:100%;border-collapse:collapse;background:#ffffff;box-shadow:0 1px 4px rgba(0,0,0,0.08);border-radius:8px;overflow:hidden;">
    <thead>
      <tr style="background:var(--ink-deep);color:#ffffff;">
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Nível</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">🧠 Modelo</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">💵 Custo mensal</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">🚀 Carro-chefe</td>
        <td style="padding:12px 16px;">Grok 4.6</td>
        <td style="padding:12px 16px;font-weight:600;color:var(--teal);">$32</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;"></td>
        <td style="padding:12px 16px;">Claude Opus 5</td>
        <td style="padding:12px 16px;">$100</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;"></td>
        <td style="padding:12px 16px;">GPT-6 Astra</td>
        <td style="padding:12px 16px;">$200</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;font-weight:600;">⚙️ Intermediário</td>
        <td style="padding:12px 16px;">Grok 4.3</td>
        <td style="padding:12px 16px;font-weight:600;color:var(--teal);">$17,50</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;"></td>
        <td style="padding:12px 16px;">Claude Sonnet 5</td>
        <td style="padding:12px 16px;">$40</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;"></td>
        <td style="padding:12px 16px;">GPT-5.6 Terra</td>
        <td style="padding:12px 16px;">$44</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;font-weight:600;">💸 Econômico / código</td>
        <td style="padding:12px 16px;">GPT-5.6 Luna</td>
        <td style="padding:12px 16px;font-weight:600;color:var(--teal);">$4,40</td>
      </tr>
      <tr style="background:#fafafa;">
        <td style="padding:12px 16px;"></td>
        <td style="padding:12px 16px;">Grok Build 0.1</td>
        <td style="padding:12px 16px;">$14</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;"></td>
        <td style="padding:12px 16px;">Claude Haiku 4.5</td>
        <td style="padding:12px 16px;">$20</td>
      </tr>
    </tbody>
  </table>
</div>

Duas coisas chamam atenção. Primeiro, no nível carro-chefe, o Grok 4.6 não é só mais barato, está numa classe de preço diferente: $32 contra $100 do Claude Opus 5 e $200 do GPT-6 Astra pro mesmo uso. Segundo, o Grok não é automaticamente a opção mais barata em todo lugar — o GPT-5.6 Luna fica abaixo de todos os níveis do Grok na ponta econômica, porque o Luna é o modelo deliberadamente enxuto e de alto volume da OpenAI. O barato tem um teto e um piso em cada provedor; a vantagem do Grok se concentra no topo.

## Onde o Grok Realmente Ganha ou Perde

**Ele ganha em custo-benefício no topo.** Avaliações independentes da Vals AI colocam o Grok 4.6 em torno de 95,6% no SWE-bench Verified, na mesma faixa dos ~96% relatados pelo Claude Opus 5 e bem à frente do que a maioria dos modelos intermediários pontua, por uma fração do preço do Opus 5. Se sua carga de trabalho depende de um modelo de nível carro-chefe de qualquer forma, o Grok é a forma mais barata de entrar nessa faixa de performance agora.

**Ele ganha em acesso a dados em tempo real.** A API do Grok tem busca na web e no X embutida como uma ferramenta chamável ($5 por 1.000 chamadas), algo que a OpenAI e a Anthropic não oferecem nativamente da mesma forma — normalmente você teria que montar sua própria integração de busca. Pra qualquer coisa que precisa de informação atual no meio da conversa, isso é uma conveniência real, não só uma nota de rodapé de preço.

**Ele perde em maturidade de ecossistema.** OpenAI e Anthropic têm anos a mais de ferramentas de terceiros, integrações de frameworks, bibliotecas de avaliação e respostas no Stack Overflow construídas em torno delas. A API compatível com a OpenAI do Grok fecha a maior parte dessa lacuna pro uso básico, mas pra qualquer coisa que depende de recursos específicos do SDK de um provedor, você vai encontrar menos exemplos.

**Ele perde no fundo do poço da faixa de preço.** Se sua carga de trabalho é de alto volume e baixa complexidade (classificação, extração simples, completions curtas), o GPT-5.6 Luna ou um modelo igualmente enxuto vai vencer o Grok em custo puro.

## Quando Vale a Pena Trocar

Se você está rodando cargas de trabalho de nível carro-chefe e o preço é um item de linha real, não uma reflexão tardia, testar o Grok 4.6 contra seu provedor atual é uma jogada de baixo risco: $25 em créditos grátis cobrem uma avaliação significativa antes de você comprometer um cartão. Se seu app já depende fortemente de ferramentas específicas da OpenAI ou da Anthropic (recursos no estilo Assistants, integrações do Model Context Protocol do Claude, fine-tuning específico do provedor), o custo de migração pode superar a economia por token, a menos que você esteja numa escala em que a diferença de preço vire dinheiro real.

Pra quem constrói um agente de código ou fluxo de vibe coding avaliando o [Antigravity do Gemini](/google-antigravity) ou ferramentas baseadas em Claude na escolha de modelo, o Grok agora é um item de linha legítimo nessa comparação, não só uma curiosidade.

## Perguntas Frequentes

### A API do Grok é grátis?

Não de forma contínua, mas contas novas recebem $25 em créditos grátis, suficiente pra rodar avaliações reais de carga de trabalho antes de pagar qualquer coisa. Depois disso, é pagamento por token como qualquer outro grande provedor.

### Preciso do X Premium ou do SuperGrok pra usar a API?

Não. A API do Grok, o X Premium e o SuperGrok são cobrados de forma completamente separada. Você pode usar a API sem nenhuma assinatura do X.

### A API do Grok é compatível com o SDK da OpenAI?

Sim. Aponte o SDK Python ou Node da OpenAI pra `https://api.x.ai/v1` com sua chave da xAI, e a maioria das integrações existentes da OpenAI funciona com mudanças mínimas.

### Qual modelo do Grok devo usar pra programação?

O Grok Build 0.1 é o modelo específico pra código da xAI, a $1/$2 por milhão de tokens, mais barato que o Grok 4.6 de uso geral pra esse caso de uso. Pras pontuações mais altas de benchmark de código, o próprio Grok 4.6 é a opção mais forte (e mais cara).

## Conclusão

O número de destaque se confirma na matemática real: no nível carro-chefe, a API do Grok é dramaticamente mais barata que o GPT-6 Astra e significativamente mais barata que o Claude Opus 5, sem uma queda correspondente na performance de benchmark. Não é um desconto universal, porém. Cargas de trabalho de nível econômico têm opções mais baratas em outros lugares, e o ecossistema em torno do Grok ainda está alcançando os dois provedores estabelecidos. Se seu caso de uso está no topo, onde a qualidade do modelo realmente importa, vale os vinte minutos que leva pra gastar os créditos grátis e ver a diferença de preço na sua própria carga de trabalho.

---

*Fontes: [xAI — API Docs: Models & Pricing](https://docs.x.ai/docs/models), [xAI — API Quickstart](https://docs.x.ai/developers/quickstart), [xAI — Grok API](https://x.ai/api), [Vals AI — Grok 4.6 SWE-bench results](https://benchlm.ai/models/grok-4-6), [BenchLM — Claude API Pricing](https://benchlm.ai/anthropic/api-pricing), [BenchLM — OpenAI API Pricing](https://benchlm.ai/openai/api-pricing).*
