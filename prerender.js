// Prerenders the single-page app to static HTML at build time.
// Runs after `vite build` (client) and `vite build --ssr` (server bundle):
// reads the built dist/index.html template, renders the app to a string, and
// inlines it into the #root placeholder so the deployed HTML is fully styled
// for crawlers and no-JS visitors (the client then hydrates it).

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const templatePath = resolve(root, 'dist/index.html');
const serverEntry = pathToFileURL(resolve(root, 'dist-ssr/entry-server.js')).href;

const template = readFileSync(templatePath, 'utf-8');

if (!template.includes('<!--app-html-->')) {
  throw new Error('prerender: "<!--app-html-->" placeholder not found in dist/index.html');
}

const { render } = await import(serverEntry);
const appHtml = render();

writeFileSync(templatePath, template.replace('<!--app-html-->', appHtml));
console.log(`✓ Prerendered dist/index.html (${appHtml.length} chars of app markup inlined)`);
