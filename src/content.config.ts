import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Cada recurso es un archivo Markdown en src/content/recursos/<slug>.md
// Añadir un recurso = crear el archivo (y subir su audio a public/audio o su PDF a public/pdf si lo tiene).
const recursos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recursos' }),
  schema: z.object({
    title: z.string(),
    summary: z.object({ es: z.string(), ca: z.string(), en: z.string() }),
    kind: z.object({ es: z.string(), ca: z.string(), en: z.string() }),
    duration: z.string().optional(),    // "3 min" (solo audios)
    durationISO: z.string().optional(), // "PT3M13S"
    audio: z.string().optional(),       // "/audio/respira-en-paz.mp3"
    pdf: z.string().optional(),         // "/pdf/carta-a-los-padres.pdf"
    order: z.number().default(0),       // desempate a igual fecha: 1, 2, 3…
    lang: z.enum(['es', 'ca', 'en']).default('es'),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
  }),
});

// Cada artículo del blog es un archivo Markdown en src/content/blog/<slug>.md
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    summary: z.object({ es: z.string(), ca: z.string(), en: z.string() }),
    lang: z.enum(['es', 'ca', 'en']).default('es'),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(), // última revisión del texto (lastmod del sitemap)
    seoTitle: z.string().optional(),     // <title> con la búsqueda real; el h1 sigue siendo title
  }),
});

// Cada página de servicio es un archivo Markdown en src/content/servicios/<slug>.md → /<slug>/
const servicios = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/servicios' }),
  schema: z.object({
    title: z.string(),                   // h1
    seoTitle: z.string().optional(),     // <title> con la búsqueda real
    kicker: z.string(),                  // etiqueta sobre el h1 ("Ansiedad")
    summary: z.string(),                 // entradilla y descripción SEO
    lang: z.enum(['es', 'ca', 'en']).default('es'),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    order: z.number().default(0),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

export const collections = { recursos, blog, servicios };
