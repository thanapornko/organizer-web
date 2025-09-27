// app/routes/_index.tsx
import type {
  LinksFunction,
  MetaFunction,
  LoaderFunctionArgs,
} from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import ServiceBox from '~/components/ServiceBox';
import PreviewContent from '~/components/PreviewContent';
import Partner from '~/components/Partner';
import Layout from './layout';

// === Content config (แก้ได้ตามจริงของบริษัท) ===
const SITE_NAME = 'Infinity9 Organizer';
const TITLE = 'Infinity9 Organizer — Creative Event & Production';
const DESCRIPTION =
  'Infinity9 Organizer ผู้เชี่ยวชาญด้านการจัดงาน Exhibition, Concert, Conference, Flea Market และ Production ครบวงจร สร้างสรรค์งานคุณภาพอย่างมืออาชีพ';
const HERO_ORIGINAL =
  'https://res.cloudinary.com/dhgny94kc/image/upload/v1752046074/infinity9/banner_uuzw1l.jpg';

// แปลง URL Cloudinary ให้เสิร์ฟรูปอัตโนมัติ (webp/avif) + บีบอัด + ครอปเต็มเฟรม
const heroW = (w: number) =>
  HERO_ORIGINAL.replace('/upload/', `/upload/f_auto,q_auto,c_fill,w_${w}/`);

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const baseUrl = `${url.protocol}//${url.host}`;
  const canonical = `${baseUrl}/`;

  const ogImage = heroW(1200); // ใช้ 1200px เป็น OG
  const logo = `${baseUrl}/logo.png`; // ถ้ามีโลโก้ใน public/ วางไฟล์ชื่อ logo.png

  // JSON-LD: Organization + WebSite
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: baseUrl,
    logo,
  };
  const jsonLdWeb = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/search?q={query}`,
      'query-input': 'required name=query',
    },
  };

  return json({
    baseUrl,
    canonical,
    ogImage,
    logo,
    jsonLd,
    jsonLdWeb,
    hero: {
      src: heroW(1920),
      srcSet: [
        `${heroW(480)} 480w`,
        `${heroW(768)} 768w`,
        `${heroW(1280)} 1280w`,
        `${heroW(1920)} 1920w`,
        `${heroW(2560)} 2560w`,
      ].join(', '),
    },
  });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return [];
  return [
    { title: TITLE },
    { name: 'description', content: DESCRIPTION },
    // Robots
    { name: 'robots', content: 'index,follow,max-image-preview:large' },
    // Canonical
    { tagName: 'link', rel: 'canonical', href: data.canonical },
    // Open Graph
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: TITLE },
    { property: 'og:description', content: DESCRIPTION },
    { property: 'og:url', content: data.canonical },
    { property: 'og:image', content: data.ogImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:locale', content: 'th_TH' },
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: TITLE },
    { name: 'twitter:description', content: DESCRIPTION },
    { name: 'twitter:image', content: data.ogImage },
    // UI / PWA (ถ้ามีธีม)
    { name: 'theme-color', content: '#0b0b12' },
  ];
};

export const links: LinksFunction = () => {
  // พรีคอนเนค & พรีโหลดรูป LCP ให้มาไว
  return [
    {
      rel: 'preconnect',
      href: 'https://res.cloudinary.com',
      crossOrigin: 'anonymous',
    },
    { rel: 'dns-prefetch', href: 'https://res.cloudinary.com' },
    // Preload รูป LCP ขนาดใหญ่สุด (ให้เบราว์เซอร์รีเควสท์ตั้งแต่แรก)
    {
      rel: 'preload',
      as: 'image',
      href: heroW(1920),
      // เบราว์เซอร์สมัยใหม่รองรับ imagesrcset/imagesizes บน preload ได้
      imagesrcset: [
        `${heroW(768)} 768w`,
        `${heroW(1280)} 1280w`,
        `${heroW(1920)} 1920w`,
      ].join(', '),
      imagesizes: '100vw',
      fetchpriority: 'high' as any, // ให้ TypeScript เงียบถ้าชน type
    },
  ];
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <Layout>
      {/* JSON-LD (วางตรงนี้ก็อ่านได้โดย Google) */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data.jsonLd) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data.jsonLdWeb) }}
      />

      {/* HERO / LCP */}
      <div className='relative w-full h-[650px] overflow-hidden text-center'>
        <img
          src={data.hero.src}
          srcSet={data.hero.srcSet}
          sizes='100vw'
          width={1920}
          height={1080}
          alt='Infinity9 Organizer — Creative Event & Production Banner'
          className='absolute inset-0 w-full h-full object-cover'
          loading='eager'
          decoding='async'
          fetchPriority='high'
        />
        {/* content */}
        <div className='relative z-10 flex flex-col items-center justify-center h-full px-4 '>
          <p className='max-w-3xl mx-auto text-2xl text-white/90 animate-fade-in-up'>
            Infinity9 Organizer
          </p>
          <h1
            className='mt-6 text-6xl md:text-9xl font-extrabold text-purple-300 drop-shadow-[0_0_20px_rgba(215,166,255,0.8)] leading-tight animate-fade-in-up'
            style={{ animationDelay: '0.3s' }}
          >
            MAKE THE
            <br />
            CREATIVE EVENT
          </h1>

          <p
            className='mt-6 max-w-3xl mx-auto text-2xl text-white/90 animate-fade-in-up'
            style={{ animationDelay: '0.5s' }}
          >
            We specialize in creating impactful events, merging creativity and
            precision to deliver unforgettable, seamless experiences
          </p>
        </div>
      </div>

      <div className='px-6 md:px-24'>
        <ServiceBox />
        <PreviewContent />
        <Partner />
      </div>
    </Layout>
  );
}
