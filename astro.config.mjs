import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

// Dominio de producción (Vercel sirve www como principal; el apex redirige).
export const SITE = 'https://www.margaritapsicologia.com';

// lastmod del sitemap: fecha `updated` (o `date`) del frontmatter de cada artículo y recurso.
function lastmods() {
  const out = new Map();
  for (const dir of ['blog', 'recursos']) {
    for (const f of readdirSync(`./src/content/${dir}`)) {
      if (!f.endsWith('.md')) continue;
      const fm = readFileSync(`./src/content/${dir}/${f}`, 'utf8').split(/\r?\n---/)[0];
      const pick = (re) => fm.match(re)?.[1];
      const d = pick(/^updated:\s*(\d{4}-\d{2}-\d{2})/m) ?? pick(/^date:\s*(\d{4}-\d{2}-\d{2})/m);
      if (d) out.set(`/${dir}/${f.slice(0, -3)}/`, d);
    }
  }
  return out;
}
const LASTMOD = lastmods();

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
      serialize(item) {
        const path = item.url.replace(SITE, '').replace(/^\/(ca|en)\//, '/');
        const d = LASTMOD.get(path);
        return d ? { ...item, lastmod: d } : item;
      },
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-ES', ca: 'ca-ES', en: 'en-US' },
      },
    }),
  ],
});
