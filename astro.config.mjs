import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Dominio de producción (Vercel sirve www como principal; el apex redirige).
export const SITE = 'https://www.margaritapsicologia.com';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'ca', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-ES', ca: 'ca-ES', en: 'en-US' },
      },
    }),
  ],
});
