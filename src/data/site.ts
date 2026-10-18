// Textos, idioma e links do blog. Os componentes de layout leem tudo daqui,
// então o mesmo conjunto de componentes serve aos blogs ES e PT-BR.
export const site = {
  lang: 'pt-BR',
  locale: 'pt-BR',
  name: 'Inteligência Artificial Dev',
  categories: ['Chatbots', 'Prompts', 'Ferramentas de IA', 'Tutoriais', 'Estudos de Caso', 'Carreira'],
  // Artigos por página e quantos entram no mosaico da home (página 1).
  perPage: 9,
  featuredCount: 6,
  postHref: (slug: string) => `/${slug}`,
  alternate: (translation: string) => ({
    lang: 'es',
    href: `https://inteligenciaartificialdev.com/${translation}/`,
  }),
  t: {
    home: 'Início',
    menu: 'Alternar menu',
    theme: 'Alternar modo escuro',
    searchToggle: 'Alternar busca',
    searchPlaceholder: 'Buscar artigos…',
    searchLabel: 'Buscar artigos',
    latest: 'Acabou de sair',
    recent: 'Mais recentes',
    viewAll: 'Ver todos →',
    byCategory: 'Explorar por categoria',
    articles: 'artigos',
    blog: 'Blog',
    blogDesc: 'Engenharia de prompt, ferramentas de IA e fluxos de trabalho pra devs.',
    all: 'Todos',
    noResults: 'Nenhum artigo corresponde à sua busca.',
    inThisArticle: 'Neste artigo',
    published: 'Publicado',
    updated: 'Atualizado',
    prev: '← Anterior',
    next: 'Próximo →',
    related: 'Continue lendo',
    translationLink: 'Leer en español',
    shareLabel: 'Compartilhe',
    copyLink: 'Copiar link',
    copiedLink: 'Link copiado!',
    shareOn: 'Compartilhar no',
    shareKicker: 'Compartilhe conhecimento',
    shareTitle: 'Este conteúdo foi útil para você?',
    shareSub: 'Envie para alguém que também pode aproveitar.',
    copy: 'Copiar',
    copied: 'Copiado!',
    copyFallback: 'Pressione Ctrl+C',
    writtenBy: 'Escrito por',
    authorRole: 'Analista de sistemas · Redator de IA',
    authorBio:
      'Analista de sistemas independente e redator de tecnologia, apaixonado por IA e robótica. Criei o Inteligência Artificial Dev para separar o que é útil do que é ruído.',
    authorSocial: 'Redes sociais de Fernando Lisboa',
    onThisPage: 'Nesta página',
    pagination: 'Paginação',
    previous: 'Anterior',
    nextPage: 'Próxima',
  },
};

// "17 oct 2026" (ou "17 septiembre 2026" no formato longo), sem pontos nem "de".
export function fmtDate(date: Date, month: 'short' | 'long' = 'short'): string {
  const parts = new Intl.DateTimeFormat(site.locale, {
    day: '2-digit',
    month,
    year: 'numeric',
    timeZone: 'UTC',
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value.replace('.', '') ?? '';
  return `${get('day')} ${get('month')} ${get('year')}`;
}
