// app/root.tsx
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import type {
  LoaderFunctionArgs,
  MetaFunction,
  LinksFunction,
} from '@remix-run/node';
import { json } from '@remix-run/node';
import './tailwind.css';

export async function loader({ request }: LoaderFunctionArgs) {
  const host = new URL(request.url).host;
  const isPreview = /vercel\.app|netlify\.app|pages\.dev|onrender\.com/i.test(
    host
  );
  return json({ isPreview });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => [
  {
    name: 'robots',
    content: data?.isPreview
      ? 'noindex,nofollow'
      : 'index,follow,max-image-preview:large',
  },
  { name: 'theme-color', content: '#0b0b12' },
  { name: 'color-scheme', content: 'light' },
  { name: 'format-detection', content: 'telephone=no,address=no,email=no' },
  { property: 'og:site_name', content: 'Infinity9 Organizer' },
  { name: 'twitter:card', content: 'summary_large_image' },
];

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;700&display=swap',
  },
  {
    rel: 'preconnect',
    href: 'https://res.cloudinary.com',
    crossOrigin: 'anonymous',
  },
  { rel: 'dns-prefetch', href: 'https://res.cloudinary.com' },

  { rel: 'icon', type: 'image/png', href: '/brandLogo.png' },
  { rel: 'apple-touch-icon', href: '/brandLogo.png' },

  { rel: 'manifest', href: '/site.webmanifest' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='th'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body className='min-h-screen antialiased bg-white text-black'>
        <a
          href='#main'
          className='sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:shadow'
        >
          ข้ามไปยังเนื้อหาหลัก
        </a>
        <div id='main'>{children}</div>
        <ScrollRestoration />
        <Scripts />
        <noscript>This site works best with JavaScript enabled.</noscript>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  return (
    <html lang='th'>
      <head>
        <Meta />
        <Links />
        <meta name='robots' content='noindex' />
        <title>เกิดข้อผิดพลาด</title>
      </head>
      <body>
        <h1>เกิดข้อผิดพลาด</h1>
        <Scripts />
      </body>
    </html>
  );
}
