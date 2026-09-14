---
title: "Demos o Mesmo Prompt de Pomodoro pro DeepSeek e pro ChatGPT (Grátis). Veja o Que Cada Um Construiu de Diferente."
description: "Mesmo prompt, palavra por palavra, os dois níveis gratuitos, zero edições depois. Testamos os dois timers Pomodoro na mão — pausar, retomar, trocar de aba — e encontramos diferenças reais no tratamento de atraso de tempo, acessibilidade e escopo."
category: "Estudos de Caso"
date: 2026-09-14
readingTime: "6 min"
image: "./images/deepseek-vs-chatgpt-timer-pomodoro.webp"
imageAlt: "Foto editorial em close-up de dois notebooks lado a lado numa mesa de madeira, cada tela mostrando uma interface de cronômetro regressivo desfocada, com um pequeno timer de cozinha em formato de tomate suavemente fora de foco em primeiro plano"
---

Demos ao nível gratuito do DeepSeek e ao nível gratuito do ChatGPT o mesmo prompt, exatamente igual, palavra por palavra, e não tocamos em nenhum dos dois resultados depois: sem edição de acompanhamento, sem "conserta isso", sem segunda tentativa. Só o primeiro resultado bruto de um prompt de app web de arquivo único, testado na mão — iniciar, pausar, retomar, resetar, e trocar de aba pra ver o que quebra.

Os dois widgets abaixo são o código real e sem edições que cada modelo produziu. Teste você mesmo antes de ler nossa opinião.

## O Prompt

<div class="prompt-card">
  <div class="prompt-card-bar">
    <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
    <span class="prompt-card-label">prompt.txt</span>
    <button class="copy-btn" data-copy-target="pomodoro-prompt">Copiar</button>
  </div>
  <pre id="pomodoro-prompt"><code>Build a Pomodoro timer web app. Requirements:
- 25 minute work session, 5 minute short break, automatically alternates between them
- Start, Pause, and Reset buttons
- Visible countdown timer (MM:SS)
- Clear indicator of whether it's currently "Work" or "Break"
- Play a sound or show a visual alert when a session ends
- Single self-contained HTML file: inline CSS and JS, no external libraries or CDN links
- Clean, minimal design

Give me the complete code in one HTML file, nothing else.</code></pre>
</div>

## O Que o ChatGPT Construiu

<iframe src="/demos/pomodoro-chatgpt.html" title="Timer Pomodoro do ChatGPT, ao vivo e interativo" loading="lazy" style="width:100%;max-width:100%;height:560px;border:1px solid var(--line);border-radius:12px;background:#f5f5f5;"></iframe>

O ChatGPT construiu exatamente o que o prompt descrevia e parou por aí. Um único `setInterval` conta o tempo regressivo uma vez por segundo, `Pause` o interrompe, `Start` cria um novo, `Reset` volta tudo pra 25:00. Ele toca um som de três notas pela Web Audio API quando uma sessão termina, e atualiza o título da aba do navegador em tempo real — um detalhe que ninguém pediu, mas genuinamente útil se você estiver fazendo Pomodoro numa aba em segundo plano.

O que ele não fez: tocar em nada fora dos seis itens da lista. Sem barra de progresso, sem atalhos de teclado, sem atributos de acessibilidade além do que um `<button>` simples já dá de graça.

## O Que o DeepSeek Construiu

<iframe src="/demos/pomodoro-deepseek.html" title="Timer Pomodoro do DeepSeek, ao vivo e interativo" loading="lazy" style="width:100%;max-width:100%;height:560px;border:1px solid var(--line);border-radius:12px;background:#f4f5f7;"></iframe>

O DeepSeek respondeu aos mesmos seis itens, e continuou. A contagem regressiva não é um decremento ingênuo — ela recalcula o tempo restante a partir do `Date.now()` comparado com um horário de término armazenado, a cada 100ms, o que significa que não sofre atraso mesmo se a aba for limitada em segundo plano, uma classe de bug real na abordagem "só faz `timeLeft--` a cada segundo" que o ChatGPT usou. Ele também trouxe uma barra de progresso, uma mudança de cor de vermelho (trabalho) pra verde (pausa), botões `Start`/`Pause` que se desabilitam corretamente conforme o estado, regiões `aria-live` pra leitores de tela, um fallback pra `prefers-reduced-motion`, vibração no celular ao fim da sessão, e atalhos de teclado (Espaço pra iniciar/pausar, R pra resetar) que nem estavam no prompt.

## Lado a Lado

<div style="max-width:900px;margin:24px auto;overflow-x:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table style="width:100%;border-collapse:collapse;background:#ffffff;box-shadow:0 1px 4px rgba(0,0,0,0.08);border-radius:8px;overflow:hidden;">
    <thead>
      <tr style="background:var(--ink-deep);color:#ffffff;">
        <th style="padding:14px 16px;text-align:left;font-size:14px;">Comportamento</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">ChatGPT (grátis)</th>
        <th style="padding:14px 16px;text-align:left;font-size:14px;">DeepSeek (grátis)</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;">Método do timer</td>
        <td style="padding:12px 16px;"><code>setInterval</code>, decrementa uma vez/seg</td>
        <td style="padding:12px 16px;font-weight:600;"><code>Date.now()</code> recalculado a cada 100ms</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;">Pausar / retomar</td>
        <td style="padding:12px 16px;">Correto, sem atraso no nosso teste</td>
        <td style="padding:12px 16px;">Correto, resistente a atraso por design</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;">Alerta de fim de sessão</td>
        <td style="padding:12px 16px;">Som de 3 notas, atualiza título da aba</td>
        <td style="padding:12px 16px;">Som + vibração no celular + flash no cartão</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;">Estado dos botões</td>
        <td style="padding:12px 16px;">Sempre clicáveis</td>
        <td style="padding:12px 16px;font-weight:600;">Start/Pause se desabilitam conforme o estado</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:12px 16px;">Acessibilidade</td>
        <td style="padding:12px 16px;">Nenhuma além dos botões nativos</td>
        <td style="padding:12px 16px;font-weight:600;"><code>aria-live</code>, suporte a movimento reduzido</td>
      </tr>
      <tr style="border-bottom:1px solid #eee;background:#fafafa;">
        <td style="padding:12px 16px;">Atalhos de teclado</td>
        <td style="padding:12px 16px;">Nenhum</td>
        <td style="padding:12px 16px;">Espaço pra iniciar/pausar, R pra resetar</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;">Escopo vs. o prompt</td>
        <td style="padding:12px 16px;font-weight:600;">Bateu exatamente</td>
        <td style="padding:12px 16px;">Foi bem além, sem ser pedido</td>
      </tr>
    </tbody>
  </table>
</div>

## O Que Não Conseguimos Verificar Totalmente

A interface do DeepSeek mostrou um indicador visível de "pensou por 17 segundos" antes de devolver o código; o nível gratuito do ChatGPT não expõe essa etapa, então não existe um número equivalente pra comparar. Subjetivamente, a resposta do ChatGPT pareceu mais rápida do início ao fim, mas não usamos cronômetro nisso, então trate como impressão, não como medição. Estamos sinalizando isso em vez de disfarçar: um modelo mostra o raciocínio, o outro não, e isso vale a pena saber mesmo sem um número limpo dos dois lados.

## Conclusão

Nenhum dos dois modelos entregou código quebrado. Essa é a primeira descoberta que vale a pena parar pra pensar: a história de "IA escreve código cheio de bugs" é fácil de repetir, e simplesmente não aconteceu aqui, numa tarefa pequena o suficiente pra caber na cabeça. A diferença real foi o escopo. O ChatGPT leu seis itens e entregou seis itens, corretamente, sem nada a mais. O DeepSeek leu os mesmos seis itens e decidiu que um timer Pomodoro também precisava de cronometragem resistente a atraso, suporte a acessibilidade e atalhos de teclado — nada disso foi pedido.

Qual é "melhor" depende do que você está fazendo com ele. Prototipando uma ideia de interface que você vai reescrever de qualquer jeito? A saída enxuta e literal do ChatGPT é mais fácil de ler e simplificar. Lançando algo que uma pessoa de verdade vai usar num dia inteiro de trabalho, trocando de aba e deixando em segundo plano o tempo todo? A atenção não solicitada do DeepSeek a atraso e acessibilidade é a diferença entre um brinquedo e uma ferramenta.

Os dois timers continuam ativos acima. Pause um, troque de aba por um minuto, volte, e veja qual dos dois ainda diz a verdade.
