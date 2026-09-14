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
