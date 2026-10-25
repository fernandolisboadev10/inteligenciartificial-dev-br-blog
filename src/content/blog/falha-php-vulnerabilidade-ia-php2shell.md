---
title: "Falha PHP Achada com IA: o Que Fazer no Seu Site Hoje"
description: "A falha PHP2Shell foi achada com ajuda de IA. Veja o que a IA fez de fato, o que foi trabalho humano e o checklist para atualizar o PHP do seu site."
category: "Estudos de Caso"
date: 2026-10-25T16:01:00-03:00
translation: "vulnerabilidad-php-fallo-ia-php2shell"
readingTime: "8 min"
image: "./images/falha-php-vulnerabilidade-ia-php2shell.webp"
imageAlt: "Logo do PHP rachada por uma fissura laranja em uma sala de servidores, com uma esfera de rede neural azul projetando um feixe de luz sobre a falha"
draft: false
---

Em 21 de outubro de 2026, o projeto PHP publicou correções para duas falhas críticas no núcleo da linguagem, batizadas de PHP2Shell. O que as torna um caso para este blog é como foram achadas: pesquisadores usaram modelos de IA para encontrar e provar o problema em semanas, não em anos. A notícia quente, com a cobertura do dia a dia, é assunto do TechOnPlay. Aqui o foco é outro: o que a IA fez de fato, por que isso muda a corrida entre quem defende e quem ataca, e o que você faz hoje se tem um site ou sistema em PHP.

## O Que São as Duas Falhas do PHP

São duas vulnerabilidades, CVE-2026-109618 e CVE-2026-109619, ambas com nota 9,2 na escala CVSS 4.0. Permitem execução remota de código sem autenticação: alguém de fora consegue rodar comandos no servidor sem ter login nenhum. Segundo o php.net, a origem está na forma como o PHP lida com erros fatais de falta de memória durante uma requisição. Em certas situações, dados internos corrompidos ou "velhos" sobrevivem e são reutilizados por uma requisição seguinte, no mesmo processo.

O risco é maior em instalações com mod_php, em que o ataque pode acontecer antes de o código da aplicação rodar. A Wiz, que deu o nome PHP2Shell, descreve uma cadeia de quatro bugs e mostrou execução de código sem autenticação em WordPress, Drupal e Joomla. As versões afetadas vão do PHP 5.4, de 2012, até o 8.5. Na prática, quase toda versão usada na última década tem pelo menos uma das duas falhas.

Um cuidado com os números que circulam. Muita gente repetiu que a falha "afeta 70% da internet". Esse percentual é a fatia dos sites que usa PHP, não a fatia vulnerável: muitos servidores já foram corrigidos ou serão nos próximos dias. A Palo Alto Networks estimou 22,6 milhões de instâncias potencialmente vulneráveis, segundo a Fortune, mas é uma estimativa, não uma contagem de sites invadidos.

## Como a IA Achou a Falha

Duas equipes chegaram lá de forma independente. A Calif, empresa de red teaming com IA, usou o GPT-5.6 Sol, da OpenAI, dentro da iniciativa Patch the Planet, e identificou o problema em 1º de agosto. Já a Wiz começou em 19 de agosto, combinando a plataforma Wiz Atlas com o Gemini 4 Argon e o GPT-5.6 Sol. Segundo a Wiz, o Gemini ajudou na descoberta, na construção da prova de conceito, na detecção de ataques e na validação da correção. Para entender a família de modelos citada, vale ler o guia sobre os [modelos Sol, Terra e Lua do ChatGPT](/chatgpt-modelos-sol-terra-lua/).

O ponto mais interessante é o que a IA mudou no processo. O código do PHP tem milhões de linhas, e o tratamento de erro de falta de memória é um caminho raro, que quase ninguém testa. Era exatamente o tipo de trecho em que um humano gasta semanas para formular uma hipótese e mais semanas para montar uma prova. Um modelo lê esse código sem cansar, propõe onde o estado pode ficar inconsistente e ajuda a escrever e ajustar o teste que confirma a suspeita. A própria Wiz resume que, antes da IA, esse trabalho manual seria difícil de fazer e mais difícil ainda de escalar.

Há também um detalhe que desmonta a ideia de "IA descobriu sozinha". Segundo a Wikipedia, um desenvolvedor do núcleo do PHP já havia apontado, em 2024, o problema de memória por trás de uma das falhas, mas a equipe não chegou a um acordo sobre a correção e ainda não existia exploit. O que a IA trouxe foi a prova prática de que o defeito era grave. Quanto tempo o código esteve vulnerável, as fontes divergem; o seguro é dizer mais de uma década.

## O Que Ainda Foi Trabalho Humano

Escolher o alvo foi decisão de gente: a Calif elegeu o PHP por seu impacto e foi procurar a PHP Foundation. Validar o resultado, reportar à equipe de segurança, negociar o prazo e escrever a correção também foram etapas humanas. A Wiz reportou o problema em 24 de agosto, o PHP reconheceu em 21 de setembro e os patches saíram em 21 de outubro. A OpenAI ainda liderou uma coalizão com Wiz, Calif, PHP Foundation, Cloudflare, Quarkslab e agências americanas para coordenar a divulgação.

Ou seja, a IA acelerou a parte de procurar e testar, e as pessoas continuaram responsáveis por decidir, verificar e consertar. É um padrão parecido com o de outros casos recentes de segurança com IA, como o dos [agentes que escaparam do sandbox e atingiram o Hugging Face](/hugging-face-invadido/).

## Por Que Isso Muda a Corrida Entre Defensores e Atacantes

A mesma capacidade serve aos dois lados. A OpenAI avisou que o que ajuda defensores a achar falhas também ajuda atacantes a montar ferramentas rápido, e os pesquisadores da Calif disseram que a IA torna práticas cadeias de exploração longas e complexas. A OpenAI disse esperar mais achados desse tipo nos próximos meses, segundo a imprensa.

O efeito mais concreto é o prazo. A Amazon registrou uma tentativa de exploração em 17 de outubro, quatro dias antes da divulgação, e a Cloudflare relatou dezenas de milhares de tentativas em 45 minutos depois do anúncio. Hoje o intervalo entre correção publicada e ataque em massa se conta em horas. Quem atualiza o PHP "quando der tempo" fica, na prática, exposto.

Agora a ressalva que a Exame fez questão de destacar e que vale repetir: achar a falha com IA não prova que os ataques estejam sendo conduzidos por IA, nem que houve vazamento de dados. Um site fora do ar pode estar em manutenção ou isolado por precaução, e foi o que aconteceu com vários serviços públicos na semana da divulgação, no Brasil inclusive. A Tecnoblog registrou a Anatel e o SEI inacessíveis em 21 de outubro. Sem confirmação do órgão, não dá para ligar cada indisponibilidade a um ataque.

## Versões Corrigidas do PHP

O php.net publicou as correções em 21 de outubro. Estas são as versões seguras:

| Série do PHP | Versão corrigida |
|---|---|
| 8.5 | 8.5.12 |
| 8.4 | 8.4.27 |
| 8.3 | 8.3.36 |
| 8.2 | 8.2.35 |

O PHP 8.2 chega ao fim de vida em 31 de dezembro de 2026, então planeje a migração para uma série mais nova. Para o 8.1 e anteriores não há atualização oficial do projeto: o caminho é migrar ou usar pacote corrigido do seu fornecedor. Hospedagens com cPanel e CloudLinux publicaram backports, e há pacotes de terceiros para versões antigas.

Um aviso sobre números de versão: em Ubuntu, Debian e Red Hat, a correção pode ser aplicada sem mudar o número da versão original. Por isso, ver "8.3.30" no painel não significa necessariamente que o servidor está vulnerável. Pergunte ao fornecedor se o pacote inclui a correção do PHP2Shell.

## Checklist Para Quem Tem Site ou Sistema em PHP

Vale para dono de WordPress e para quem mantém aplicação própria.

1. **Descubra qual PHP roda no servidor.** No WordPress, vá em Ferramentas, Saúde do Site, aba Informações, seção Servidor. Em outro caso, use `php -v` no terminal ou o painel da hospedagem.
2. **Atualize o PHP, não só o WordPress.** Atualizar o WordPress e os plugins não muda a versão do PHP. Na maior parte das hospedagens, a troca é feita no painel, em algo como "Selecionar versão do PHP". Se você não tem acesso, abra um chamado.
3. **Faça backup antes e teste depois.** Salve arquivos e banco, atualize e navegue pelas páginas principais, pelo login e pelo checkout, se houver.
4. **Reinicie e confirme.** Reinicie o PHP-FPM ou o Apache e verifique se a versão corrigida está de fato em uso, não só agendada.
5. **Está no PHP 8.1 ou anterior?** Sem suporte oficial. Migre ou exija o backport do fornecedor.
6. **Não consegue atualizar agora?** O php.net lista mitigações provisórias: para a CVE-2026-109619, desativar `session.upload_progress.enabled` na configuração do servidor, e para a CVE-2026-109618, ajustar limites de memória e de tamanho de envio conforme o aviso oficial. Um WAF, como o da Cloudflare, ajuda como paliativo, mas não substitui a atualização.
7. **Sistemas esquecidos contam.** Painéis internos, sites antigos e ferramentas de gestão em PHP muitas vezes ficam de fora das rotinas de atualização. É onde o risco persiste, segundo a Malwarebytes.

Para quem é dev, mais três pontos. Descreva a versão do PHP na sua imagem de contêiner e fixe uma versão corrigida, em vez de depender de `latest`. Revise os logs das últimas semanas atrás de requisições de upload incomuns seguidas de erros de memória, respostas HTTP 500 repetidas, cookies `PHPSESSID` anormalmente grandes e reinício estranho de workers. E automatize o aviso de nova versão do PHP, para que a próxima janela de correção não dependa de alguém lembrar.

Quem é só visitante não precisa fazer nada no computador ou no navegador: a falha está no servidor.

## O Que Isso Ensina a Quem Usa IA Para Programar

Revisar código com IA é útil, e este caso mostra o motivo: ela acha o que o olho humano deixa passar. Mas ela não atualiza o seu servidor. Quem publica apps e sites com ajuda de IA herda o risco do ambiente onde hospeda, e isso inclui runtime, dependências e painel. O guia sobre [onde hospedar um app feito com vibe coding](/vibe-coding-onde-hospedar-app/) ajuda a escolher um lugar em que a atualização do runtime não fique só na sua memória. E, se o seu fluxo usa agentes com acesso ao terminal, os [cuidados de segurança com MCP](/mcp-seguranca-agentes-de-codigo/) continuam valendo.

## Para Acompanhar

O php.net mantém a lista de avisos no [arquivo de notícias do projeto](https://www.php.net/archive/2026.php), onde estão as versões e as mitigações oficiais. A [análise técnica da Wiz](https://www.wiz.io/blog/php2shell-php-rce) traz a cronologia da descoberta, e a [reportagem da Fortune](https://fortune.com/2026/10/21/ai-tools-discovered-the-php-vulnerability-that-could-take-down-70-of-the-internet-now-the-race-is-on-to-patch-it-before-ai-powered-hackers-attack/) resume o debate sobre a corrida entre defesa e ataque.

Dados conferidos em 25 de outubro de 2026. Versões, números e detalhes podem mudar: em 23 de outubro, o php.net publicou um aviso informativo sobre a CVE-2026-115560, ligada ao recurso de progresso de upload, e prometeu um advisory completo na próxima versão. Antes de agir, confirme as informações no site oficial do PHP.

---

## Fontes

- [PHP, avisos de outubro de 2026](https://www.php.net/archive/2026.php)
- [Wiz Research, PHP2Shell](https://www.wiz.io/blog/php2shell-php-rce)
- [Fortune, 21/10/2026](https://fortune.com/2026/10/21/ai-tools-discovered-the-php-vulnerability-that-could-take-down-70-of-the-internet-now-the-race-is-on-to-patch-it-before-ai-powered-hackers-attack/)
- [CNBC, 23/10/2026](https://www.cnbc.com/2026/10/23/php-vulnerabilities-ai-cybersecurity.html)
- [Wikipedia, PHP2Shell](https://en.wikipedia.org/wiki/PHP2Shell)
- [Exame, IA derrubou sites: entenda as falhas no PHP](https://exame.com/tecnologia/ia-derrubou-sites-entenda-as-falhas-no-php-e-o-risco-para-quem-navega/)
- [Tecnoblog, falha grave no PHP](https://tecnoblog.net/noticias/falha-grave-no-php-pode-tirar-sites-e-servicos-publicos-do-ar/)
- [Malwarebytes, PHP2Shell](https://www.malwarebytes.com/pt-br/blog/bugs/2026/10/php2shell-why-websites-are-going-offline-for-emergency-security-updates)
- [WPBeginner, como proteger seu site WordPress](https://www.wpbeginner.com/pt/news/critical-php-flaws-found-how-to-protect-your-wordpress-site/)
