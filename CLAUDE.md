# Web de Margarita Margenat — contexto para cada sesión

Brief completo: `Downloads/BRIEF-web-margarita-psicologia.md` (Lucía). Este archivo resume lo que no puede olvidarse. Lucía desarrolla; Margarita valida copy, imágenes y posicionamiento. **No hacer cambios grandes sin mostrar antes plan o captura.**

## Posicionamiento (opción C, híbrido jerarquizado)
- Público principal: mujeres adultas (~25-45) que se exigen mucho, viven pendientes de los demás, sienten ansiedad y culpa al priorizarse. Buscan una terapeuta cercana, no clínica-fría.
- Mensaje, hero y SEO apuntan a: **ansiedad · autoestima y autoexigencia · relaciones**. Coherente con Instagram @margaritapsicologia ("¿Te exiges demasiado? Te acompaño a dejar de ser tu peor enemiga y confiar en ti").
- Terapia infantil y acompañamiento a familias existen como servicios secundarios con página propia, sin protagonismo en la home.
- Solo online (videollamada). Geografía: "psicóloga online (España)", Barcelona como base, Catalunya como lugar de los retiros. No competir por "psicóloga Barcelona" presencial.
- Retiros y talleres son lo diferencial: bloque destacado en la home y página permanente `/retiros`.

## Voz
Primera persona, directa, cálida, tuteando, frases cortas. Sin jerga clínica ni frases de taza. Evitar "espacio seguro", "sanar", "viaje", "empoderar" salvo que Margarita las use. Lenguaje neutro en género cuando se habla a quien lee (nada de "juntas").

## Sistema de diseño (del feed de Instagram, no de plantilla)
**Mar y Costa Brava.** Granate y fucsia son de la web del retiro (tribuconecta.site): aquí solo un **acento rosa pequeño y únicamente en el bloque del retiro** (`--color-rose #D62E7F`: etiqueta y botón), decidido con Margarita el 15-09-2026. Tampoco verde salvia ni lavanda. Sí otros colores de naturaleza que salen en el feed (arena, madera, atardecer), con moderación.
```css
:root {
  --color-bg:        #F3EEE6;  /* arena clara: fondo principal */
  --color-surface:   #FBF8F3;  /* blanco roto */
  --color-ink:       #1B2430;  /* tinta azulada: texto */
  --color-ink-soft:  #5C5750;  /* texto secundario */
  --color-sea:       #2F5F78;  /* mar profundo: marca, títulos destacados, botones, cursivas */
  --color-sea-deep:  #1E4457;  /* hover del mar */
  --color-sky:       #C9D8E0;  /* cielo sobre el mar: secciones alternas */
  --color-sky-hi:    #7FA9CF;  /* azul del cartel de trekking: subrayados, hover, detalles */
  --color-sand:      #D9CBB8;  /* arena de cartel: bloques tipo póster con tipografía */
  --color-wood:      #A9743F;  /* madera: detalle muy puntual */
  --color-dusk:      #E6C3BC;  /* rosa atardecer: rarísimo, nunca fondo grande */
  --color-line:      #E1D9CC;  /* separadores */
}
```
- Display: Instrument Serif (o Fraunces); títulos grandes, interlineado ajustado, una palabra en cursiva en color mar. Texto: Inter 400/500. `font-display: swap` + preconnect.
- Hero: foto de cielo/mar de la Costa Brava hecha por Margarita (`src/assets/ocell.jpg`, gaviota) con el titular encima. **Su retrato NO va en el hero**: solo en "Sobre mí". Sin vídeo. `costa.jpg` reservada para retiros.
- Layout: mucho aire, ancho de lectura 65-72 caracteres, secciones alternando arena, cielo y arena-cartel.
- **Menos es más (feedback de Lucía, sept 2026):** nada de numeración de secciones (01, 02…), nada de etiquetas de sección, nada de párrafos de intro bajo cada título, nada de enumeraciones largas. Cada bloque cabe en una pantalla y tiene un solo trabajo. Si falta información (formación, testimonios), el bloque no se muestra: no se ponen placeholders visibles.
- Home = cinco bloques: cartel · ¿Te reconoces? · la frase ("No eres tú…") · cómo empezamos + tarifas · Margarita (foto) — y un cierre con botón.
- Nada de botones píldora, tarjetas en cuadrícula ni cajas decorativas. Contraste AA mínimo.

## Datos fijos
- Email margaritamp99@gmail.com · WhatsApp +34 639 66 49 82 (`https://wa.me/34639664982`) · Instagram @margaritapsicologia.
- Precios (24-09-2026): "Adultos" como cabecera de grupo, debajo "1 h → 80 €" y "Packs de 4, 6 u 8 sesiones → Precio reducido, a consultar" (ya no existe la sesión de 1 h 30); "Infantil y familias · se concreta en la llamada" en una sola línea. Debajo de las tarifas, una nota pequeña recordando la llamada gratuita de valoración (`empezamos.note`). Seguimiento por WhatsApp entre sesiones incluido. Llamada de valoración gratuita, 15 min. Datos en `src/data/precios.json`.
- Margarita **no está colegiada ni quiere estarlo**: no pedir ni mostrar número de colegiada. (Formación: [MARGARITA APORTA].)
- Dominio: **https://www.margaritapsicologia.com** (Namecheap, comprado 15-09-2026; Cloudflare Pages, proyecto `margarita-psicologia`, desde 08-10-2026; `www` es la principal y el apex redirige con una Redirect Rule de Cloudflare en la zona, "apex -> www"; Pages ignora `_redirects` entre dominios). Está en `astro.config.mjs` (`SITE`) y en `public/robots.txt`. Search Console dado de alta el 25-09-2026 como propiedad de Dominio (verificada por TXT en Namecheap, que gestiona Margarita) y sitemap enviado.

## Cómo añadir un recurso
1. Crear `src/content/recursos/<slug>.md` con el frontmatter de los que ya existen (`respira-en-paz.md` para audio, `carta-a-los-padres.md` para PDF): `title`, `summary` (es/ca/en), `kind` (es/ca/en), `lang`, `date`; opcionales `duration`, `durationISO`, `audio`, `pdf`, `order`. El cuerpo es el texto de la página (en PDFs, el texto íntegro del documento, para que se pueda leer sin descargar). Un recurso puede ser solo texto, sin audio ni PDF (los de octubre de 2026 lo son). Si varios llegan el mismo día, llevan la misma `date` y `order: 1, 2, 3…` para fijar el orden en las listas.
2. Si lleva audio, convertir a MP3 mono 96 kbps y guardarlo en `public/audio/`. Si es un PDF de Margarita, guardarlo en `public/pdf/<slug>.pdf` (la página muestra el botón "Descargar en PDF" y el enlace de la lista pasa de "Escuchar" a "Leer").
3. Si el ejercicio pide dejar de leer hasta haber hecho algo ("Deja de leer aquí"), la segunda parte va dentro de `<details><summary>…</summary>` con las palabras de Margarita en el `summary` (ver `escucha-tu-propia-voz.md`). Una pregunta o frase central va como cita (`> …`).
4. Nada más: la página `/recursos/<slug>/`, el índice `/recursos/` (3 idiomas), el bloque "Recursos" de la home (3 últimos) y el sitemap se generan solos.

## Cómo añadir un artículo del blog
1. Crear `src/content/blog/<slug>.md` con el frontmatter del que ya existe (`autoexigencia-de-sobrevivir-a-vivir.md`): `title`, `summary` (es/ca/en, es la entradilla y la descripción SEO), `lang`, `date`; opcionales `seoTitle` (el `<title>` de la pestaña con la búsqueda real, p. ej. "Me cuesta decir que no: por qué pasa y cómo poner límites"; el h1 y el título al compartir siguen siendo `title`) y `updated` (fecha de la última revisión del texto: alimenta `dateModified` y el `lastmod` del sitemap; también vale en recursos). El cuerpo es el artículo en Markdown, con el texto de Margarita tal cual (solo se corrigen erratas; su voz en femenino se respeta). Para que Google pueda sacar fragmentos, dos o tres subtítulos `##` cortos en cada artículo, en su voz, sin tocar los párrafos (desde 06-10-2026).
2. Nada más: la página `/blog/<slug>/` (BlogPosting + migas), el índice `/blog/` en ES/CA/EN (fecha, minutos de lectura, "en castellano" si toca), el enlace "Blog" del menú y el sitemap se generan solos. Los artículos no salen en la home.

## Cómo añadir una página de servicio
1. Crear `src/content/servicios/<slug>.md` con el frontmatter de los que existen (`psicologa-online-ansiedad.md`): `title` (h1), `seoTitle` (el `<title>` tal cual, máx. 60 caracteres, con la búsqueda real), `kicker`, `summary` (entradilla y descripción SEO), `lang`, `date`, `order`, `faq` (preguntas y respuestas: salen al final como `<details>` y como FAQPage en el schema). El cuerpo es la página en Markdown, en la voz de Margarita; enlazar recursos y artículos relacionados.
2. La página sale en `/<slug>/` (plantilla `src/pages/[slug].astro`, con schema Service + BreadcrumbList) y en el sitemap. Los tres puntos de "¿Te reconoces?" de la home enlazan a su página con `href` en `reconoces.items` (solo ES por ahora; en CA/EN `href: ''`).
3. Estado 08-10-2026: las tres primeras (ansiedad, autoexigencia, terapia online) son BORRADOR en la rama `seo-preview`, pendientes del visto bueno de Margarita, publicadas con noindex en https://seo-preview.margarita-psicologia.pages.dev. Cuando apruebe: fusionar en `master`, hacer CA y EN, desplegar.

## Qué NO hacer
- No inventar testimonios, formación, fotos "reales" ni datos de colegiatura.
- No usar verde salvia, lavanda, flores/velas/piedras, vídeo de fondo.
- Nada de pop-ups, chatbots, cookies de terceros, tono gurú.
- Todo cambio de texto va a los tres idiomas (ES raíz, `/ca/`, `/en/`) con `hreflang`.
