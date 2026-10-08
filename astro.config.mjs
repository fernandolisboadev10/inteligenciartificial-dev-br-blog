// @ts-check
import { readFileSync, readdirSync } from 'node:fs';
import { defineConfig, fontProviders } from 'astro/config';
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
    '/trump-super-inteligencia-ordem-executiva-desenvolvedores': '/trump-super-inteligencia-ordem',
    '/mesmo-prompt-landing-page-claude-gpt-gemini-deepseek': '/mesmo-prompt-landing-page-ia',
    '/chatgpt-plus-claude-pro-google-ai-pro-qual-assinar': '/chatgpt-claude-google-qual-assinar',
    '/openai-devday-2026-gpt-6-1-sol-codex-cloud': '/openai-devday-2026',
  },
  // Self-hosted fonts: no Google Fonts round trips, preloaded and with metric-matched fallbacks.
  fonts: [
    { provider: fontProviders.google(), name: 'Inter', cssVariable: '--f-inter', weights: [400, 500, 600, 700], styles: ['normal'], subsets: ['latin'], fallbacks: ['sans-serif'] },
    { provider: fontProviders.google(), name: 'Fraunces', cssVariable: '--f-fraunces', weights: [400, 500, 600], styles: ['normal'], subsets: ['latin'], fallbacks: ['serif'] },
    { provider: fontProviders.google(), name: 'IBM Plex Mono', cssVariable: '--f-plex-mono', weights: [400, 500], styles: ['normal'], subsets: ['latin'], fallbacks: ['monospace'] },
  ],
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
