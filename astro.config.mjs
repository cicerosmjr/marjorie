import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// Site estático para o Cloudflare Pages.
// Build: npm run build. Pasta de saída: dist.
export default defineConfig({
  site: 'https://marjoriecordeiro.adv.br',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('.txt'),
    }),
  ],
});
