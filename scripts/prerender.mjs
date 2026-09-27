import { createServer, loadEnv } from 'vite';
import { readFile, writeFile } from 'node:fs/promises';

const env = { ...loadEnv('production', process.cwd(), ''), ...process.env };
const configuredUrl = env.SITE_URL?.trim();
let origin;
if (configuredUrl) {
  const url = new URL(configuredUrl);
  if (url.protocol !== 'https:' || url.username || url.password || url.pathname !== '/' || url.search || url.hash) {
    throw new Error('SITE_URL debe ser el origen HTTPS del portfolio, sin rutas ni credenciales.');
  }
  origin = url.origin;
}
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const { render } = await server.ssrLoadModule('/src/entry-server.tsx');
  let html = await readFile('dist/index.html', 'utf8');
  html = html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`);
  const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
  const meta = (key, value, property = false) => `<meta ${property ? 'property' : 'name'}="${key}" content="${escape(value)}" />`;
  const title = 'Jeffrey Verdú | Full Stack Developer';
  const description = 'Desarrollo con Ruby on Rails, React, TypeScript y PostgreSQL. Experiencia, proyectos y formación de Jeffrey Verdú, Santiago de Chile.';
  const tags = [meta('og:title', title, true), meta('og:description', description, true), meta('og:type', 'profile', true), meta('og:locale', 'es_CL', true), meta('twitter:card', 'summary_large_image'), meta('twitter:title', title), meta('twitter:description', description)];
  const person = { '@type': 'Person', name: 'Jeffrey Verdú Hernández', jobTitle: 'Full Stack Developer', sameAs: ['https://www.linkedin.com/in/jeffverdu'], knowsAbout: ['Ruby on Rails', 'React', 'TypeScript', 'PostgreSQL', 'Docker'], homeLocation: { '@type': 'Place', name: 'Santiago, Chile' } };
  if (origin) {
    tags.push(`<link rel="canonical" href="${escape(origin)}/" />`, meta('og:url', `${origin}/`, true), meta('og:image', `${origin}/social-preview.png`, true), meta('og:image:width', '1200', true), meta('og:image:height', '630', true), meta('og:image:alt', 'Jeffrey Verdú, desarrollador Full Stack. Rails, React, TypeScript y Docker.', true), meta('twitter:image', `${origin}/social-preview.png`));
    person.url = `${origin}/`;
    await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escape(origin)}/</loc></url></urlset>\n`);
  } else console.warn('SITE_URL pendiente: se omiten canonical, sitemap y URLs sociales absolutas.');
  const schema = { '@context': 'https://schema.org', '@type': 'ProfilePage', ...(origin ? { url: `${origin}/` } : {}), mainEntity: person };
  tags.push(`<script type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>`);
  html = html.replace('</head>', `${tags.join('\n')}\n</head>`);
  await writeFile('dist/index.html', html);
  await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n${origin ? `Sitemap: ${origin}/sitemap.xml\n` : ''}`);
} finally { await server.close(); }
