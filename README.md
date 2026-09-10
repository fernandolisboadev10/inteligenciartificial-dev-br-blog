# inteligenciartificial.dev.br — projeto Astro

Versão em português do [inteligenciaartificialdev.com](https://inteligenciaartificialdev.com), adaptada como projeto Astro independente (repo próprio, sem compartilhar deploy com o `.com`).

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:4321`.

## Publicar um post novo

Crie um arquivo `.md` em `src/content/blog/`, seguindo o frontmatter dos exemplos:

```markdown
---
title: "Título do post"
description: "Resumo de uma linha, usado nos cards e no SEO."
category: "Engenharia de Prompt"   # ou: Ferramentas de IA para Código, Tutoriais, Estudos de Caso, Chatbots, Reviews
date: 2026-09-10
readingTime: "5 min"
---

Conteúdo em markdown normal aqui.
```

Site e posts são em português (público-alvo: Brasil). Os 8 posts atuais são
traduções dos artigos já publicados no `.com`.

## Gerar build de produção

```bash
npm run build
```

Isso gera a pasta `dist/` com HTML puro.

## Deploy (GitHub Pages)

O repo já tem `.github/workflows/deploy.yml` configurado com a action oficial
do Astro. Falta só:

1. Criar o repositório novo no GitHub (`inteligenciartificial-dev-br-blog`) e
   dar push neste código na branch `main`.
2. Em **Settings → Pages**, mudar "Source" pra **GitHub Actions**.
3. Configurar o domínio na Hostinger (onde o domínio está registrado) apontando
   pro GitHub Pages: registro `A` pros 4 IPs do GitHub Pages (ou `ALIAS`/`ANAME`
   se o provedor de DNS suportar) + `CNAME` de `www` pro domínio no
   `github.io`. O arquivo `public/CNAME` já está commitado com
   `inteligenciartificial.dev.br`.
4. Marcar "Enforce HTTPS" em Settings → Pages depois que o DNS propagar.
5. **Atenção**: o domínio hoje aponta pro WordPress atual. Repontar o DNS pro
   GitHub Pages tira o WordPress do ar nesse domínio — decida antes se quer
   migrar o conteúdo de lá, manter um backup, ou simplesmente substituir.

## Pendências antes de ir pro ar

- **Favicon .ico/.svg**: `public/favicon.png` e `public/images/robot-logo.png`
  já usam o mascote verde oficial. `public/favicon.ico` e `public/favicon.svg`
  ainda são o placeholder padrão do Astro — regenere os dois a partir do
  mascote se quiser cobrir navegadores mais antigos.
- **Verificação Bing Webmaster Tools**: removida (era do `.com`). Reative em
  `BaseLayout.astro` com um token novo depois de verificar o domínio novo.
- **IndexNow**: o job `indexnow` em `.github/workflows/deploy.yml` está
  comentado — a key antiga é do `.com`. Gere uma key nova pro domínio novo e
  reative o job.
- **Newsletter form** (`src/components/NewsletterForm.astro`): o `action` aponta
  pra um endpoint fictício. Troque pelo endpoint real do seu serviço de e-mail
  (ConvertKit, Mailchimp, Beehiiv, etc.)
- **Contact form** (`src/pages/contact.astro`): o `action` aponta pra um
  ID fictício do Formspree (`your-form-id`) — crie um formulário real no
  Formspree (ou serviço equivalente) e troque pelo endpoint real. O número
  de WhatsApp e o e-mail exibidos na página já são os reais.

## Estrutura

- `src/content/blog/` — posts em markdown
- `src/content.config.ts` — schema/categorias válidas dos posts
- `src/layouts/` — layout base e layout de post
- `src/components/` — Header, Footer, PostCard, AuthorBio, NewsletterForm
- `src/pages/` — todas as rotas do site
- `src/styles/global.css` — tokens de cor/tipografia (paleta verde + gradiente)
