import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { loadEnv } from 'vite';

const html = await readFile('dist/index.html', 'utf8');
const env = { ...loadEnv('production', process.cwd(), ''), ...process.env };
const origin = new URL(env.SITE_URL).origin;
for (const text of ['Academia Desafío Latam', 'PosicionAR!', 'PostgreSQL', 'Formación continua.', 'mailto:jeffverdu@gmail.com']) assert.ok(html.includes(text), `Falta contenido prerenderizado: ${text}`);
assert.equal((html.match(/<h1\b/g) || []).length, 1);
assert.ok(html.includes(`<link rel="canonical" href="${origin}/"`));
assert.ok(html.includes(`content="${origin}/social-preview.png"`));
const schema = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
assert.equal(schema['@type'], 'ProfilePage');
assert.equal(schema.mainEntity['@type'], 'Person');
assert.equal(schema.mainEntity.url, `${origin}/`);
assert.ok((await readFile('dist/sitemap.xml', 'utf8')).includes(`<loc>${origin}/</loc>`));
assert.ok((await readFile('dist/robots.txt', 'utf8')).includes(`Sitemap: ${origin}/sitemap.xml`));
for (const resource of ['social-preview.png', 'CV_Jeffrey_Verdu_Full_Stack_Developer_2026.pdf', 'portada-posicionar.webp', 'portada-posicionar-640.webp', 'portada-lsvservicellc.webp', 'portada-lsvservicellc-640.webp']) assert.ok((await stat(`dist/${resource}`)).size > 0);
console.log('SEO: contenido prerenderizado, metadatos, datos estructurados, sitemap y recursos correctos.');
