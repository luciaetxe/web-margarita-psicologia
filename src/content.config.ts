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
    lang: z.enum(['es', 'ca', 'en']).default('es'),
    date: z.coerce.date(),
  }),
});

export const collections = { recursos };
