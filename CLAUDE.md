# Web de Margarita Margenat — contexto para cada sesión

Brief completo: `Downloads/BRIEF-web-margarita-psicologia.md` (Lucía). Este archivo resume lo que no puede olvidarse. Lucía desarrolla; Margarita valida copy, imágenes y posicionamiento. **No hacer cambios grandes sin mostrar antes plan o captura.**

## Posicionamiento (opción C, híbrido jerarquizado)
- Público principal: mujeres adultas (~25-45) que se exigen mucho, viven pendientes de los demás, sienten ansiedad y culpa al priorizarse. Buscan una terapeuta cercana, no clínica-fría.
- Mensaje, hero y SEO apuntan a: **ansiedad · autoestima y autoexigencia · relaciones**. Coherente con Instagram @margaritapsicologia ("¿Te exiges demasiado? Te acompaño a dejar de ser tu peor enemiga y confiar en ti").
- Terapia infantil y acompañamiento a familias existen como servicios secundarios con página propia, sin protagonismo en la home.
- Solo online (videollamada). Geografía: "psicóloga online (España)", Barcelona como base, Catalunya como lugar de los retiros. No competir por "psicóloga Barcelona" presencial.
- Retiros y talleres son lo diferencial: sección **Encuentros** (`/encuentros/`, CA "Trobades", EN "Gatherings"; nombre elegido el 14-10-2026 porque la terapia es online y los encuentros son la ocasión de verse en persona) y una lista compacta en la home. El bloque rosa del retiro en la home se quitó ese día.

## Voz
Primera persona, directa, cálida, tuteando, frases cortas. Sin jerga clínica ni frases de taza. Evitar "espacio seguro", "sanar", "viaje", "empoderar" salvo que Margarita las use. Lenguaje neutro en género cuando se habla a quien lee (nada de "juntas").

## Home "Cielo" (EN PAUSA desde el 04-11-2026; guardada en la rama `cielo`)
**04-11-2026: Margarita prefiere la home anterior (papel y tinta con la luna) y producción vuelve a ella.** Cielo sigue completa en la rama git `cielo` y en https://cielo.margarita-psicologia.pages.dev para seguir probando borradores; `src/styles/cielo.css` y las fuentes Jost/Young Serif/Caveat siguen en master sin usarse. Lo que sigue describe Cielo tal como estuvo en producción el 03-11-2026.
La home (ES/CA/EN) es el boceto "Cielo" de gurí, elegido por Lucía el 02-11-2026 (maqueta en `_lab/bocetos/cielo.html`; los descartados, `manifiesto.html` y `marea.html`, y el lab de marcas `mirate.html` en la misma carpeta; publicados con noindex en lab.margarita-psicologia.pages.dev). `Home.astro` + `src/styles/cielo.css`, que solo actúa con `body.cielo` (prop `cielo` de `Base.astro`). **Las páginas interiores siguen en papel y tinta** (sección siguiente): pasarlas a Cielo es el paso pendiente.
- Toda la página es un solo degradado, del rosa del amanecer (#f3e1e3) al azul noche (#1a2436); sin papel, sin bloques, sin tarjetas: el texto flota, líneas finas como única separación. Tinta #1f2a3a arriba, blanco desde la frase hacia abajo.
- Tipografía **Jost** variable (200 para títulos, 300 texto), alojada en `public/fonts/jost.woff2` + `jost-italic.woff2`; **Young Serif** para el nombre del retiro y **Caveat** (variable) para el "Mírate con amor" escrito a mano. Precargadas en `Base.astro` cuando `cielo`; `font-display: block`.
- Orden: portada (gaviota del logo arriba a la derecha, título enorme y ligero, botón de contorno; el título escala con ancho Y alto de ventana, `min(7vw, 10.5vh)`, para que el botón entre siempre; en móvil la gaviota va en flujo sobre el título) · ¿Te reconoces? · la frase centrada · Soy Margarita (retrato redondo en blanco y negro fundido con el cielo) · Cómo empezamos + tarifas · Encuentros · Recursos (los 4 últimos) · cierre "¿Empezamos?" sobre la foto de la luna · pie noche.
- **Encuentros son cuadros-enlace de color**, no fotos (Lucía, 02-11-2026): el retiro en blanco con la hoguera (tinta + fucsia #d9408c) y "Presencia y Celebración" en Young Serif; "Mírate con amor" escrito a mano (Caveat) sobre rosa fuerte #d9a3ad con tinta blanca. Un encuentro nuevo sale en blanco con su nombre en Young Serif (`marca()` en `Home.astro`). Descartados: espejo de mano (parecía el símbolo de Venus), espejo de la reina dorado ("muy IA"), melocotón y ciruela.
- Cabecera transparente sobre el cielo, en Jost mayúsculas pequeñas; menú móvil desplegable blanco.

## Tanda 2 de bocetos (04-11-2026, en el lab)
Margarita está a gusto con papel y tinta pero quiere "algo que comunique sin ser tan texto editorial", con la misma información y el mismo diseño. `_lab/tanda2/gen.py` parte de `dist/index.html` y recompone solo ¿Te reconoces?, Cómo empezamos, Tarifas y Recursos (textos intactos): A Cuadros (cuadros de color como Encuentros), B Tinta (dibujos a mano con filtro de tinta), C Fotos (sus fotos como ancla, números grandes, hojas blancas). Publicadas con noindex en https://tanda2.margarita-psicologia.pages.dev (rama `tanda2` de Pages). Regenerar: `npm run build && python _lab/tanda2/gen.py` y desplegar `_lab/tanda2/out`. Pendiente: elección de Lucía y Marga; la elegida se lleva a `Home.astro` + `global.css` en ES/CA/EN.

## Sistema de diseño (rediseño "papel y tinta", páginas interiores; en la home desde el 14-10-2026 hasta el 03-11-2026)
Lucía rediseñó la web entera ese día (maqueta en `_lab/borrador/`, carpeta ignorada en git; la variante terracota descartada en `_lab/descartado/`). **Papel, tinta y un solo acento: el azul mar de su Instagram.** Nada de fondos de colores alternos: solo papel, un papel un punto más oscuro en Encuentros, y mar profundo en el cierre y el pie. El rosa del retiro ya no existe en esta web (el retiro vive en tribuconecta.site).
```css
:root {
  --color-bg:        #FAF6EF;  /* papel */
  --color-bg-2:      #F1EADF;  /* papel más oscuro: bloque Encuentros */
  --color-surface:   #FBF8F3;
  --color-ink:       #1B2430;  /* tinta azulada: texto */
  --color-ink-soft:  #5C5750;  /* texto secundario */
  --color-sea:       #2F5F78;  /* acento: cursiva del titular, etiquetas, flechas, "Leer/Escuchar" */
  --color-sea-deep:  #1E4457;  /* hover, cierre "¿Empezamos?" y pie */
  --color-sky-hi:    #7FA9CF;  /* subrayados y foco */
  --color-line:      #DCD4C7;  /* líneas finas: son la única separación entre cosas */
}
```
- Tipografía: **Cormorant Garamond** 400/500 + cursiva 400 (títulos grandes, frases de las listas) e **Inter** 400/500. Fuentes **alojadas en `public/fonts/`**, precargadas en `Base.astro` y con `font-display: block`: a Lucía le molesta mucho que la web se pinte con otra letra y cambie al cargar. No volver a Google Fonts.
- Esquema de todos los bloques de la home: **título a la izquierda, contenido a la derecha** (`.block.side`), líneas finas, botones planos (tinta o contorno), sin tarjetas ni sombras ni píldoras.
- Home, en este orden: portada partida (texto sobre papel | foto de la cala, en móvil el texto primero) · ¿Te reconoces? (tres líneas grandes, toda la fila es enlace) · la frase sobre el cielo con la gaviota (texto a la izquierda para no tapar al pájaro) · Margarita (retrato grande + texto) · Cómo empezamos (pasos apilados) · Tarifas · Encuentros (desde el 04-11-2026, los dos cuadros de color de Cielo, lo único que Margarita quiso conservar: retiro en blanco con la hoguera y el nombre en Young Serif, "Mírate con amor" a mano en Caveat sobre rosa fuerte #d9a3ad; pie con tipo en caps, nombre y fecha; en móvil uno debajo del otro) · Recursos (los tres últimos) · cierre "¿Empezamos?" enorme en mar profundo.
- Cabecera estática con línea debajo, sin botón; el botón flotante de WhatsApp aparece al pasar la portada.
- **Menos es más (feedback de Lucía, sept 2026):** nada de numeración de secciones, nada de etiquetas de sección, nada de párrafos de intro bajo cada título en la home, nada de enumeraciones largas. Si falta información (formación, testimonios), el bloque no se muestra.
- Su retrato NO va en la portada: solo en "Soy Margarita". Sin vídeo. `costa.jpg` es la foto de portada; `hero-wide.jpg` (gaviota) la de la pausa; `hero-tall.jpg` y `ocell.jpg` sin uso.
- Contraste AA mínimo (Lighthouse móvil tras el rediseño: 88 / 100 / 100 / 100; el LCP es la foto de la cala).

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
2. La página sale en `/<slug>/` (plantilla `src/pages/[slug].astro`, con schema Service + BreadcrumbList) y en el sitemap. Los tres puntos de "¿Te reconoces?" de la home enlazan a su página con `href` en `reconoces.items` (en los tres idiomas).
3. Las versiones CA y EN van en `src/content/servicios/ca/<slug>.md` y `en/<slug>.md` con el MISMO slug (así `Base` genera el hreflang); las sirven `src/pages/ca/[slug].astro` y `en/[slug].astro`. Las tres primeras (ansiedad, autoexigencia, terapia online) las aprobó Margarita el 08-10-2026 y están en producción en los tres idiomas.

## Cómo añadir un encuentro (taller, retiro…)
1. Crear `src/content/encuentros/<slug>.md` con el frontmatter de `mirate-con-amor.md`: `title`, `kicker` (tipo: "Taller de autoestima"), `summary` (una frase: tarjeta y descripción SEO), `when` (fecha en texto o "Próxima edición por anunciar"), `cover` + `coverAlt` (foto de la tarjeta), `lang`, `date`, `order`; opcionales `notes`, `upcoming: true` (sale primero con la etiqueta "Próximo"), `photos` (las de la página), `cta` (`label` y `msg` del botón de WhatsApp). El cuerpo es el texto de Margarita tal cual.
2. Si el encuentro tiene web propia (el retiro: tribuconecta.site), poner `url` y dejar el cuerpo vacío: la tarjeta enlaza fuera y no se genera página aquí.
3. Fotos en `src/assets/encuentro-<slug>-N.jpg` (reducidas a ≤ 2000 px y sin EXIF; comprobar que las participantes han dado permiso). Se muestran sin recortar, cada una con su proporción (`EncuentroFoto.astro`).
4. Versiones CA y EN en `src/content/encuentros/ca/<slug>.md` y `en/<slug>.md` con el MISMO slug. El índice `/encuentros/`, la página `/encuentros/<slug>/` (Event + migas), la lista de la home, el menú y el sitemap se generan solos.

## Qué NO hacer
- No inventar testimonios, formación, fotos "reales" ni datos de colegiatura.
- No usar verde salvia, lavanda, flores/velas/piedras, vídeo de fondo.
- Nada de pop-ups, chatbots, cookies de terceros, tono gurú.
- Todo cambio de texto va a los tres idiomas (ES raíz, `/ca/`, `/en/`) con `hreflang`.
