import type { LoaderFunctionArgs } from '@remix-run/node';

export async function loader({ request }: LoaderFunctionArgs) {
  const host = new URL(request.url).host;
  const isPreview = /vercel\.app|netlify\.app|pages\.dev|onrender\.com/i.test(
    host
  );

  const body = [
    'User-agent: *',
    isPreview ? 'Disallow: /' : 'Allow: /',
    `Sitemap: https://${host}/sitemap.xml`,
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
