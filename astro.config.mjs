// @ts-check
import { readFileSync, readdirSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import rehypeExternalLinks from 'rehype-external-links';

const blogDir = new URL('./src/content/blog/', import.meta.url);
const dateBySlug = new Map();

for (const file of readdirSync(blogDir)) {
  if (!file.endsWith('.md')) continue;
  const content = readFileSync(new URL(file, blogDir), 'utf-8');
  const match = content.match(/^date:\s*(\S+)/m);
  if (match) {
    dateBySlug.set(file.replace(/\.md$/, ''), new Date(match[1]));
  }
}

// https://astro.build/config
export default defineConfig({
  site: 'https://inteligenciartificial.dev.br',
  redirects: {
    '/chatgpt-detector-false-positives': '/chatgpt-detector-falsos-positivos',
    '/chatgpt-sol-terra-luna-models': '/chatgpt-modelos-sol-terra-lua',
    '/chatgpt-study-commands': '/chatgpt-comandos-para-estudar',
    '/gemini-student': '/gemini-estudante',
    '/grok-api-pricing': '/grok-api-preco',
    '/claude-code-hidden-features': '/claude-code-recursos-ocultos',
    '/deepseek-vs-chatgpt-pomodoro-timer': '/deepseek-vs-chatgpt-timer-pomodoro',
  },
  integrations: [
    sitemap({
      serialize(item) {
        const slug = new URL(item.url).pathname.replace(/^\/|\/$/g, '');
        const date = dateBySlug.get(slug);
        if (date) item.lastmod = date;
        return item;
      },
    }),
  ],
  markdown: {
    processor: unified({
      rehypePlugins: [
        [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
      ],
    }),
  },
});
