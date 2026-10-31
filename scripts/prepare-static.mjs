import { copyFile, writeFile } from 'node:fs/promises';
import { projects } from '../projects/web/src/app/content/projects.ts';
import { environment } from '../projects/web/src/environments/environment.ts';

const output = new URL('../dist/web/browser/', import.meta.url);
const paths = ['/', '/work', '/about', ...projects.map(({ id }) => `/work/${id}`)];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((path) => `  <url><loc>${new URL(path, environment.SITE_URL).href}</loc></url>`).join('\n')}
</urlset>
`;

await writeFile(new URL('sitemap.xml', output), sitemap);
await writeFile(
  new URL('robots.txt', output),
  `User-agent: *\nAllow: /\n\nSitemap: ${environment.SITE_URL}/sitemap.xml\n`,
);
// GitHub Pages serves this document with HTTP 404 for paths that do not exist.
await copyFile(new URL('not-found/index.html', output), new URL('404.html', output));
