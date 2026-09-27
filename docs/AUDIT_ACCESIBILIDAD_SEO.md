# Accesibilidad y SEO: correcciones verificadas

Actualizado el 27 de septiembre de 2026. Pruebas sobre el build de producción local; cambios sin publicar.

## Cambios implementados

- Reflow sin desbordamiento a 320, 390, 768 y 1440 px con line-height 1.5, letter-spacing .12em, word-spacing .16em y margen inferior de párrafos 2em. Correo y títulos pueden partir palabras largas sin ocultar contenido.
- Foco programático en el destino del enlace de salto. Las pestañas cambian de color sin interpolar contrastes insuficientes y muestran selección en colores forzados.
- HTML prerenderizado a partir de los mismos componentes React, con hidratación. Sin JavaScript se muestran navegación y las tres áreas técnicas; los controles que requieren JavaScript se ocultan. Los detalles de proyectos son nativos.
- Canonical, Open Graph, Twitter, imagen social 1200 × 630, datos ProfilePage/Person, robots.txt y sitemap.xml para https://jeffreyverdu.vercel.app/.
- CV de dos páginas con idioma español, árbol de etiquetas y encabezados; revisión visual de ambas páginas y conservación de la fuente original. No se afirma conformidad PDF/UA.
- Capturas WebP responsivas: 197.694 bytes combinadas a tamaño completo frente a 1.864.385 bytes de los PNG (89,4 % menos). Variantes de 640 px: 55.412 bytes combinadas. PNG originales archivados.
- Colores secundarios recurrentes centralizados en variables CSS.

## Evidencia de validación

- Build TypeScript/Vite y ESLint: correctos.
- Navegación, pestañas mediante teclado, detalles, copia de correo y su error, menú móvil/Escape, descarga del CV y movimiento reducido: correctos en seis anchos de 320 a 1440 px.
- axe-core 4.13.0: cero infracciones en siete estados. El menú abierto conserva cuatro comprobaciones de contraste indeterminadas por superposición; no se presentan como criterios aprobados automáticamente.
- HTML sin JavaScript contiene experiencia, proyectos, conocimientos, formación y contacto; metadatos y sitemap verificados contra el dominio indicado.
- Sin errores de ejecución/hidratación observados. El endpoint de Analytics de Vercel devuelve 404 en el servidor local de preview, donde ese servicio no existe; se excluye de la comprobación de recursos locales.

## Pendiente fuera de esta verificación

Una sesión manual con NVDA/VoiceOver y pruebas exhaustivas de todos los criterios WCAG. El etiquetado del PDF necesita revisión con tecnologías de asistencia antes de declarar conformidad. Tras publicar, comprobar respuesta del dominio, rastreo, sitemap y cobertura en Search Console. Estas comprobaciones no equivalen a certificación WCAG ni garantizan posicionamiento.

---

## Auditoría anterior a las correcciones (histórico)

# Auditoría de accesibilidad y SEO

Fecha: 27 de septiembre de 2026. Alcance: versión local del portfolio rediseñado. Auditoría de lectura y pruebas; no se aplicaron correcciones a raíz de esta consulta.

## Resultado

La base es buena, pero no corresponde declarar accesibilidad completa ni SEO técnico terminado. La revisión visual independiente del rediseño concluyó `ship`; ese resultado no es una certificación WCAG ni una auditoría de indexación en producción.

La implementación mantiene una identidad coherente, contenido profesional verificable y controles funcionales. El detector de Impeccable no informó hallazgos. No se detectaron errores de ejecución ni enlaces internos sin destino en las pruebas realizadas.

| Dimensión | Evaluación orientativa / 4 | Evidencia y límite |
|---|---:|---|
| Accesibilidad | 3 | Sin infracciones automáticas en siete estados estables; pendiente corregir espaciado personalizado y revisión con lector de pantalla. |
| Rendimiento | 3 | JavaScript 166,21 kB, CSS 19,30 kB antes de gzip; fuentes locales. Capturas PNG mejorables. |
| Diseño responsivo | 3 | Sin desbordamiento normal entre 320 y 1440 px; sí con espaciado de texto personalizado. |
| Sistema de estilos | 3 | Variables de color y tipografía; algunos valores secundarios aún literales. No se ofrece modo oscuro. |
| Integridad de implementación | 4 | Contenido real, sistema visual consistente, interacciones con propósito, detector sin hallazgos. |
| Total | 16/20 | Buena base; valoración de esta auditoría, no puntuación Lighthouse ni certificación. |

## Accesibilidad comprobada

- axe-core 4.13.0, reglas WCAG 2 A/AA, 2.1 A/AA, 2.2 AA y buenas prácticas: siete estados entre escritorio (1440 px) y móvil (390 px). Se probaron las tres pestañas, un proyecto expandido y menú móvil abierto. Resultado estable: cero infracciones, 46 reglas aprobadas por estado. En el menú abierto quedaron cuatro nodos de contraste para revisión manual.
- La primera ejecución, sin esperar el fin de las transiciones, midió colores intermedios de las pestañas y marcó contraste bajo. Se repitió tras 350 ms para evaluar el estado estable. No se presenta el primer resultado como una infracción permanente; tampoco se afirma que la prueba estable certifique todos los fotogramas de una transición.
- Navegación con teclado de las pestañas: flechas, Inicio y Fin; foco visible y correspondencia entre pestaña y panel.
- Menú móvil: apertura, cierre con Escape, selección de destino y retorno del foco al botón al cerrar con Escape.
- Semántica: idioma español, un `h1`, encabezados jerárquicos, navegación, contenido principal, regiones identificadas, botones y enlaces nativos.
- Capturas de proyectos con texto alternativo descriptivo. Iconos decorativos ocultos a tecnologías de asistencia.
- Enlace para saltar al contenido, preferencia de movimiento reducido y mensajes de estado para la copia del correo, incluida la alternativa cuando el portapapeles falla.
- Pruebas funcionales a 320, 390, 768, 1024, 1280 y 1440 px, sin desbordamiento horizontal con los estilos predeterminados.

No se realizó una sesión con NVDA o VoiceOver, ni una evaluación exhaustiva de todos los criterios WCAG y combinaciones de navegador/tecnología de asistencia. [W3C explica que una herramienta automática por sí sola no determina conformidad](https://www.w3.org/WAI/test-evaluate/).

## Hallazgos priorizados

### P1 · Adaptación insuficiente al espaciado personalizado

- Ubicación: `src/index.css`, reglas de `.knowledge-layout`, `.knowledge-intro h2`, `.contact-layout h2` y `.contact-email`.
- Prueba: interlineado 1,5, espaciado entre letras 0,12 em, entre palabras 0,16 em y separación inferior de párrafos 2 em.
- Resultado: desbordamiento de 34 px a 320 px y de 17 px a 390 px. En el ancho menor, el título de conocimientos fuerza la columna a superar el ancho disponible; el título y el enlace de contacto también necesitan un tratamiento de ajuste.
- Impacto: quienes aumentan el espaciado para leer encuentran contenido fuera del área visible y desplazamiento horizontal. Debe corregirse y volver a comprobarse para los criterios de redistribución y espaciado del texto (WCAG 1.4.10 y 1.4.12).
- Recomendación: columnas con mínimo cero, permitir ajuste de palabras donde sea necesario y evitar que el tamaño mínimo de una palabra imponga el ancho del bloque. Mantener el espaciado elegido por la persona.
- Siguiente acción: `$impeccable adapt`.

### P2 · Contenido principal dependiente de JavaScript

- Ubicación: `index.html:14`, `src/main.tsx` y configuración Vite.
- Evidencia: el HTML inicial contiene un `div` vacío; con JavaScript desactivado no hay texto del portfolio en el cuerpo.
- Impacto: lectores o robots que no ejecuten JavaScript no reciben el contenido. Esto no significa que Google sea incapaz de indexarlo: Google puede renderizar JavaScript, pero recomienda considerar prerenderizado o renderizado en servidor. [Documentación de Google](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).
- Recomendación: evaluar generación estática/prerenderizado para esta página de contenido principalmente estable, conservando React para las interacciones.
- Siguiente acción: `$impeccable harden`.

### P2 · Metadatos de publicación y de enlaces compartidos pendientes

- Ubicación: `index.html` y `public/`.
- Ya existe: título con nombre y especialidad, descripción, `lang="es"`, viewport, favicon y ausencia de `noindex` en el HTML.
- Ausente: URL canónica, Open Graph/Twitter Cards y JSON-LD de perfil/persona. Tampoco hay `robots.txt` ni `sitemap.xml` en el proyecto.
- Impacto: las vistas previas al compartir no están controladas y no se declara de forma explícita la URL preferida ni la entidad profesional.
- Recomendación: usar el dominio real de producción para canonical y URLs sociales; añadir imagen y descripción de presentación, y datos estructurados verificables. Evaluar sitemap y robots al publicar. No todos estos archivos o metadatos son obligatorios para indexar un sitio de una sola página, ni garantizan posicionamiento.
- Pendiente externo: comprobar HTTPS, códigos de respuesta, cabeceras de robots, indexación y Search Console una vez publicado. No se auditó un dominio de producción.
- Siguiente acción: `$impeccable harden`.

### P2 · CV en PDF sin estructura etiquetada

- Ubicación: `public/CV_Jeffrey_Verdu_Full_Stack_Developer_2026.pdf`, archivo original del usuario.
- Evidencia: no hay `/StructTreeRoot` ni `/MarkInfo`; sí existe idioma `es`.
- Impacto: falta la estructura semántica que facilita navegación y orden de lectura fiables en lectores de pantalla. La ausencia de etiquetas no demuestra que todo el texto sea ilegible, pero impide tratarlo como un PDF accesible verificado.
- Recomendación: exportar una versión etiquetada y comprobar su orden de lectura. Mantener la información profesional disponible en HTML.
- Siguiente acción: revisión específica del documento; no se modificó el CV durante esta auditoría.

### P2 · Capturas de proyectos pesadas

- Ubicación: `public/portada-lsvservicellc.png` (~1,65 MB) y `public/portada-posicionar.png` (~219 kB).
- Ya existe: carga diferida, dimensiones y decodificación asíncrona.
- Impacto: transferencia innecesaria en conexiones móviles, aunque las imágenes no bloquean la portada.
- Recomendación: generar versiones WebP/AVIF y tamaños adaptados manteniendo fieles las capturas originales. Medir Core Web Vitals en producción; no hay datos de usuarios reales en esta auditoría.
- Siguiente acción: `$impeccable optimize`.

### P3 · Centralización parcial de estilos secundarios

- Ubicación: `src/index.css`.
- Evidencia: las variables principales conviven con colores secundarios literales, por ejemplo en experiencia y estados de controles.
- Impacto: futuras modificaciones de contraste o color requieren revisar varios selectores. No se identificó una infracción de contraste estable causada por ello.
- Recomendación: completar la centralización si se amplía el sistema visual; no es un bloqueo de publicación.
- Siguiente acción: `$impeccable extract`.

## Orden recomendado

1. Corregir el comportamiento con espaciado personalizado y comprobarlo en móvil.
2. Completar la revisión manual con lector de pantalla y preparar el CV etiquetado.
3. Definir el dominio de producción y cerrar metadatos, enlaces compartidos y estrategia de prerenderizado.
4. Optimizar las imágenes y medir rendimiento e indexación tras publicar.
5. Ejecutar `$impeccable polish` después de las correcciones.

Las evidencias locales de las pruebas están en `.impeccable/review/accessibility-seo.json`, `text-spacing.json` y `validation.json` (archivos de trabajo ignorados por Git).
