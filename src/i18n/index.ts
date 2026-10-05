import { es } from './es';
import { ca } from './ca';
import { en } from './en';

export type Lang = 'es' | 'ca' | 'en';
export type Dict = typeof es;

export const dicts: Record<Lang, Dict> = { es, ca, en };
export const langs: Lang[] = ['es', 'ca', 'en'];
export const ogLocale: Record<Lang, string> = { es: 'es_ES', ca: 'ca_ES', en: 'en_US' };

/** Ruta raíz de cada idioma (ES sin prefijo). */
export const base = (lang: Lang) => (lang === 'es' ? '/' : `/${lang}/`);

export const WA_NUMBER = '34639664982';
export const EMAIL = 'margaritamp99@gmail.com';
export const INSTAGRAM = 'margaritapsicologia';

export const waLink = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

/** Orden de listas: lo más reciente primero; a igual fecha, por `order` (1, 2, 3…). */
export const byNewest = <T extends { data: { date: Date; order?: number } }>(a: T, b: T) =>
  b.data.date.valueOf() - a.data.date.valueOf() || (a.data.order ?? 0) - (b.data.order ?? 0);

/** Minutos de lectura a ~200 palabras por minuto (mínimo 1). */
export const readingTime = (text: string) => Math.max(1, Math.round(text.trim().split(/\s+/).length / 200));

/** Fecha larga en el idioma de la página: "17 de septiembre de 2026". */
export const fmtDate = (d: Date, lang: Lang) =>
  new Intl.DateTimeFormat({ es: 'es-ES', ca: 'ca-ES', en: 'en-GB' }[lang], { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(d);
