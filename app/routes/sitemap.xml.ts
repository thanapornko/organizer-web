import type { LoaderFunctionArgs } from '@remix-run/node';

const routes = ['/', '/about-us', '/services', '/portfolio']; // เติม /contact ถ้ามี

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const base = `${url.protocol}//${url.host}`;
  const now = new Date().toISOString();

  const urls = routes
    .map(
      (path) => `
  <url>
    <loc>${base}${path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${path === '/' ? '1.0' : '0.8'}</priority>
  </url>`
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
