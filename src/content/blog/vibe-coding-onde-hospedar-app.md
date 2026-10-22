---
title: "Fiz Meu App com Vibe Coding. E Agora, Onde Hospedar? 5 Opções Comparadas"
description: "Seu app feito com Claude Code, Cursor ou Lovable roda no seu computador, mas e para o mundo? Comparamos Vercel, GitHub Pages, Netlify, Cloudflare e Render: plano gratuito, pegadinhas e um checklist de teste antes de divulgar o link."
category: "Estudos de Caso"
date: 2026-10-22T10:32:00-03:00
translation: "vibe-coding-donde-alojar-tu-app"
readingTime: "7 min"
image: "./images/vibe-coding-onde-hospedar-app.webp"
imageAlt: "Foto documental de dois desenvolvedores em um escritório de startup, um deles apontando para um monitor com código e um painel de app no ar enquanto a colega confere o app no celular, com colegas trabalhando ao fundo e a vista do Rio de Janeiro pela janela"
draft: false
---

Imagine o caso mais comum de 2026: você passou um fim de semana com o Claude Code, o Cursor, o Lovable ou o Bolt, e saiu com um app que funciona. Ele roda no seu computador, o botão salva, a tela bonita aparece. Aí vem a pergunta que ninguém respondeu no meio da empolgação: como isso vira um link que outra pessoa abre no celular?

Hospedar é a etapa em que muito projeto feito por IA trava. Este texto compara cinco caminhos, com o que cada plano gratuito oferece hoje e a pegadinha de cada um. Quase todos publicam a partir de um repositório Git, então, se o seu projeto ainda está bagunçado, passe antes pelos [6 hábitos do vibe coding sem bagunça](/vibe-coding-6-habitos-sem-bagunca/).

## A pergunta que decide tudo: seu app é estático ou tem backend?

Antes de escolher o serviço, descubra o que você construiu:

- **Site ou app estático:** só HTML, CSS e JavaScript no navegador. Landing page, portfólio, calculadora, jogo simples. É o caso mais fácil e mais barato.
- **Front-end com backend ou banco:** o app guarda dados, tem login ou chama uma API de IA com chave secreta. Aqui você precisa de um lugar que rode código no servidor, e é onde os planos gratuitos mais se diferenciam.

Na dúvida, pergunte ao assistente que você usou (comparamos alguns em [Claude Code, Antigravity ou Copilot](/claude-code-vs-antigravity-vs-copilot/)): "Esse projeto precisa de servidor ou é só estático? Liste as variáveis de ambiente que ele usa."

## Antes de publicar: o risco que acompanha o vibe coding

Um app feito por IA frequentemente nasce com a chave de API escrita direto no código, porque era o caminho mais rápido. Se esse repositório for público, a chave fica visível para qualquer pessoa. Nunca suba `.env`, chaves de API ou senhas para o GitHub. Se uma chave já foi commitada, apagar o arquivo não basta: revogue no painel do provedor e gere outra. O hábito 4 do texto sobre [vibe coding sem bagunça](/vibe-coding-6-habitos-sem-bagunca/) detalha como evitar isso.

## As 5 opções

### 1. Vercel

**Serve para:** front-end moderno (Next.js, Vite, React) e apps com funções de servidor leves. **Como publicar:** crie a conta, conecte o repositório do GitHub, escolha o projeto e clique em deploy. Cada push gera um novo deploy, e branches diferentes ganham um link de preview.

**Plano gratuito (Hobby):** segundo a [página oficial do plano](https://vercel.com/docs/plans/hobby), inclui 100 GB de transferência rápida de dados e 1 milhão de invocações de funções por mês, além de até 50 domínios por projeto. **Pegadinha:** o Hobby é só para uso pessoal e não comercial. Se o app vai gerar receita ou servir a uma empresa, o plano pago é o correto. Estourar um limite, em regra, trava o recurso por 30 dias.

### 2. GitHub Pages

**Serve para:** apenas sites estáticos. Nenhum backend. **Como publicar:** no repositório, abra Settings, depois Pages, e escolha a origem da publicação (uma branch ou um fluxo de GitHub Actions). O endereço sai no formato `usuario.github.io/repositorio`.

**Plano gratuito:** pelas [regras de limites do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits), o site publicado pode ter até 1 GB, com um limite flexível de 100 GB de banda por mês e 10 builds por hora. **Pegadinha:** na conta GitHub Free, o repositório precisa ser público. Tudo que está nele fica visível, inclusive um `.env` esquecido. O serviço também não é permitido como hospedagem gratuita para negócio online ou loja.

### 3. Netlify

**Serve para:** sites estáticos e front-ends com funções simples; é parecido com a Vercel no fluxo (repositório conectado, deploy a cada push, previews). **Como publicar:** importe o repositório e confirme o comando de build.

**Plano gratuito:** hoje é medido em créditos. O Free traz 300 por mês, e um deploy de produção custa 15 créditos, enquanto cada GB transferido custa 10, segundo a página de preços e o anúncio do novo modelo (links em Fontes). **Pegadinha:** ao atingir o limite, os projetos pausam até o próximo ciclo de cobrança. Isso significa que muitos deploys de teste gastam o crédito do mês, e o site pode sair do ar justamente quando você divulga o link. O plano Free também não inclui a detecção de chaves expostas que o plano Personal tem.

### 4. Cloudflare (Workers com arquivos estáticos, ou Pages)

**Serve para:** sites estáticos de graça e com muito tráfego, e apps com um pouco de lógica de servidor. **Como publicar:** conecte o repositório no painel da Cloudflare e defina o comando de build e a pasta de saída. A própria documentação da Cloudflare diz para começar projetos novos com Workers, que cobre a maioria dos usos do Pages.

**Plano gratuito:** requisições a arquivos estáticos são gratuitas e ilimitadas, e o Pages Free permite 500 builds por mês. O código dinâmico no Workers Free tem 100.000 requisições por dia. **Pegadinha:** a interface dá duas opções (Pages e Workers) e isso confunde iniciante. Além disso, o código de servidor roda num ambiente próprio, não num Node.js comum, então um backend gerado por IA pode precisar de ajustes.

### 5. Render

**Serve para:** o app com backend de verdade (Node, Python) e banco de dados. É a opção mais próxima de "um servidor meu". **Como publicar:** conecte o repositório, escolha entre site estático ou serviço web e informe os comandos de build e de start. Sites estáticos são gratuitos.

**Plano gratuito:** segundo a [documentação do plano gratuito](https://render.com/docs/free), cada espaço de trabalho tem 750 horas de instância por mês. **Pegadinha:** o serviço web gratuito dorme após 15 minutos sem acesso e leva cerca de 1 minuto para acordar, então o primeiro visitante vê uma tela de carregamento. O banco Postgres gratuito expira 30 dias depois de criado, com 14 dias de carência até ser apagado. Para o próprio Render, a camada gratuita serve para testes e projetos de hobby, não para produção.

## Comparativo rápido

| Opção | Estático | Backend/banco | Pegadinha principal |
|---|---|---|---|
| Vercel | Sim | Funções de servidor | Plano gratuito só para uso não comercial |
| GitHub Pages | Sim | Não | Repositório público no plano Free |
| Netlify | Sim | Funções simples | Créditos mensais; site pausa ao acabar |
| Cloudflare | Sim, ilimitado | Workers | Dois produtos; ambiente diferente de Node |
| Render | Sim | Sim, com banco | Dorme após 15 min; banco grátis expira em 30 dias |

## Se você é X, use Y

- **Portfólio ou landing page sem servidor:** Cloudflare ou GitHub Pages (neste, só se o repositório puder ser público sem risco).
- **App Next.js ou Vite que você quer mostrar rápido, com previews:** Vercel, enquanto for projeto pessoal.
- **App com backend e banco, ainda em teste:** Render, sabendo do sono do serviço e do prazo do banco.
- **Vai gerar receita ou atender cliente:** nenhum plano gratuito está confortável. Considere o pago.

## Checklist antes de divulgar o link

1. **Chaves fora do repositório.** `.env` no `.gitignore`, um `.env.example` só com os nomes, e as chaves cadastradas no painel do serviço (variáveis de ambiente).
2. **Repositório revisado.** Procure por `sk-`, `key`, `token` e `password` no código e no histórico antes de torná-lo público.
3. **Teste no celular real,** não só no modo responsivo do navegador.
4. **Use o link de preview** para testar antes de ir para produção, e mande-o a duas pessoas.
5. **Teste o fluxo completo:** cadastro, formulário, qualquer coisa que grave dados.
6. **Domínio próprio,** se o app for para valer. O endereço padrão do serviço é bom para teste, mas ruim para divulgar.
7. **Saiba o que acontece quando o plano gratuito acaba:** pausa, dorme, expira ou cobra? Defina limite de gasto na chave da API de IA, para uma visita viral não virar uma fatura.

## Conclusão

Publicar um app feito com IA é mais simples do que parece, e o erro que mais custa não é escolher o serviço errado, é publicar uma chave de API junto com o código. Comece pela pergunta estático ou backend, escolha a opção da tabela que combina com isso, rode o checklist e só então divulgue o link. Para um panorama do que dá para esperar das ferramentas de código, vale ler também o [estudo de caso sobre as ferramentas de IA de código](/estudos-de-caso-ferramentas-ia-codigo/).

## Leia Também

- [Vibe coding sem bagunça: 6 hábitos](/vibe-coding-6-habitos-sem-bagunca/)
- [Claude Code, Antigravity ou Copilot: qual escolher](/claude-code-vs-antigravity-vs-copilot/)
- [MCP no Claude Code, Cursor e Copilot: 7 cuidados de segurança](/mcp-seguranca-agentes-de-codigo/)

---

*Fontes (consultadas em 22 de outubro de 2026; confira sempre os limites atuais nas páginas oficiais):*

- *[Vercel: plano Hobby](https://vercel.com/docs/plans/hobby)*
- *[GitHub: limites do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)*
- *[GitHub: criar um site no GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)*
- *[Netlify: preços](https://www.netlify.com/pricing/)*
- *[Netlify: Personal vs Free](https://www.netlify.com/pricing/personal-vs-free)*
- *[Netlify: anúncio dos planos por créditos](https://www.netlify.com/changelog/netlify-pricing-update-introducing-credit-based-plans/)*
- *[Cloudflare Pages: limites](https://developers.cloudflare.com/pages/platform/limits/)*
- *[Cloudflare Workers: preços](https://developers.cloudflare.com/workers/platform/pricing/)*
- *[Render: plano gratuito](https://render.com/docs/free)*
