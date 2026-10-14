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

// Cada encuentro (taller, retiro…) es un archivo Markdown en src/content/encuentros/<slug>.md (+ ca/ y en/ con el mismo slug).
// Si tiene `url` (web propia, como el retiro), no se genera página aquí: la tarjeta enlaza fuera.
const encuentros = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/encuentros' }),
  schema: z.object({
    title: z.string(),                   // h1
    kicker: z.string(),                  // tipo: "Taller de autoestima", "Retiro de mujeres"
    summary: z.string(),                 // una frase para la tarjeta y la descripción SEO
    when: z.string(),                    // "20, 21 y 22 de noviembre de 2026" o "Próxima edición por anunciar"
    notes: z.string().optional(),        // "Grupo reducido · Aportación voluntaria"
    upcoming: z.boolean().default(false),
    url: z.string().optional(),          // web propia (sin página aquí)
    cover: z.string(),                   // archivo en src/assets/encuentro-*.jpg
    coverAlt: z.string(),
    photos: z.array(z.object({ file: z.string(), alt: z.string() })).default([]),
    cta: z.object({ label: z.string(), msg: z.string() }).optional(), // botón WhatsApp de la página
    lang: z.enum(['es', 'ca', 'en']).default('es'),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { recursos, blog, servicios, encuentros };
