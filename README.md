# Portfolio de Jeffrey Verdú

Portfolio profesional en español para presentar experiencia Full Stack, proyectos, conocimientos técnicos, formación y contacto. Construido con React, TypeScript y Vite.

## Desarrollo

```sh
npm ci
npm run dev
```

## Verificación y compilación

```sh
npm run lint
npm run build
npm run preview
```

`dist/` contiene el sitio listo para publicar. El rediseño local no publica cambios automáticamente.

## Contenido y diseño

- `src/data/portfolio.ts`: proyectos, conocimientos y formación.
- `src/components/pages/Main.tsx`: navegación, presentación y explorador de áreas técnicas.
- `src/components/layout/PortfolioSections.tsx`: experiencia, proyectos, formación y contacto.
- `src/index.css`: sistema visual, diseño responsivo y movimiento reducido.
- `public/CV_Jeffrey_Verdu_Full_Stack_Developer_2026.pdf`: CV descargable.
- `PRODUCT.md` y `DESIGN.md`: contexto del portfolio y reglas de diseño.

Las fuentes se sirven localmente desde `public/fonts/`, con sus licencias SIL OFL. Las capturas de proyectos son las originales; los recursos visuales anteriores que ya no se utilizan quedan en `assets/original-portfolio/`.

El explorador admite flechas izquierda/derecha, Inicio y Fin. El menú móvil admite Escape. El correo tiene enlace directo y copia al portapapeles con mensaje de error si el navegador no lo permite.

## Accesibilidad y SEO

La compilación prerenderiza React con Vite y genera HTML legible sin JavaScript; el navegador hidrata ese mismo contenido para activar las interacciones. El menú y las áreas técnicas siguen siendo visibles si JavaScript está desactivado.

`.env.production` define `SITE_URL=https://jeffreyverdu.vercel.app`. Al cambiar de dominio, actualiza ese valor (o la variable del entorno de compilación). El build genera canonical, Open Graph, Twitter Cards, ProfilePage/Person, `robots.txt` y `sitemap.xml`. La imagen social está en `public/social-preview.png`. Sin SITE_URL se omiten las URLs absolutas; un origen inválido hace fallar la compilación.

Las capturas se sirven como WebP con variantes de 640 px. Los PNG originales y el CV previo se conservan en `assets/original-portfolio/`. El CV descargable tiene etiquetas estructurales y su fuente editable está en `docs/cv-accesible.html`; se exportó con Chromium usando impresión A4, `tagged: true` y `outline: true`.

Ejecuta `npm run check:seo` después de compilar para comprobar el HTML generado y sus recursos. La revisión de accesibilidad, sus resultados y limitaciones están en `docs/AUDIT_ACCESIBILIDAD_SEO.md`. La validación manual con lector de pantalla y la indexación del despliegue siguen pendientes.
