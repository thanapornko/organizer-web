// app/routes/services.tsx
import type {
  MetaFunction,
  LinksFunction,
  LoaderFunctionArgs,
} from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import Layout from './layout';
import '../index.css';

const ORG = 'Infinity9 Organizer';
const TITLE = `Our Services | ${ORG}`;
const DESC =
  'บริการหลักของ Infinity9 Organizer: Event Flea Market, Production, Activity Service, Workshop และ Corporate Event ครบวงจรสำหรับงานอีเวนท์และโปรดักชัน.';

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  images: string[];
};

const services: ServiceItem[] = [
  {
    id: 'market',
    title: '1. Event Flea Market',
    description:
      'ประสบการณ์การจัด event flea market กว่า 10 ปี เราสร้างสรรค์ผลงานใหม่ๆตลอดเวลา เพื่อเสิร์ฟความสุขและความสนุกให้กับลูกค้า หมุนเวียนการจัดในพื้นที่ห้างสรรพสินค้าต่างๆทั่วกรุงเทพและปริมณฑลตลอด 10 ปีที่ผ่านมา',
    images: [
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1752044726/infinity9/1.eventMarketFlea/event4_cnr5pi.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1752044727/infinity9/1.eventMarketFlea/event2_pznamr.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1752044729/infinity9/1.eventMarketFlea/event3_bvfb9n.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1752044725/infinity9/1.eventMarketFlea/event1_s2aycv.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1752044728/infinity9/1.eventMarketFlea/event5_zhqbn6.jpg',
    ],
  },
  {
    id: 'production',
    title: '2. Production',
    description:
      'ด้วยประสบการณ์การการทำงานกว่า 10 ปี ทำให้เรามีทีมงานที่รับผลิตโครงสร้างและอุปกรณ์ตกแต่งต่างๆ เรารับทำร้านเฟรนไชส์ ให้กับแบรนด์ต่างๆ รวมไปถึงโปรดักซ์ชั่นงานตกแต่งให้กับห้างสรรพสินค้าตามเทศกาลต่างๆ',
    images: [
      // แก้ URL ที่พิมพ์ผิดจาก "https:res..." -> "https://res..."
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1753773098/infinity9/2.production/production2_epflci.png',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1753773092/infinity9/2.production/production4_otczls.png',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1753773092/infinity9/2.production/production5_o3shve.png',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1753773092/infinity9/2.production/production1_t1u2bs.png',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1753773092/infinity9/2.production/production6_dusd9l.png',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1753773092/infinity9/2.production/production3_yyvoav.png',
    ],
  },
  {
    id: 'activity',
    title: '3. Activity Service',
    description:
      'กิจกรรมไม่ว่าจะขนาดเล็กขนาดใหญ่ เพื่อส่งเสริมการตลาดของห้างสรรพสินค้าหรือบริษัทต่างๆ เรายินดีให้คำปรึกษาและจัดงานออกมาตามความประสงค์ของผู้ว่าจ้าง',
    images: [
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045121/infinity9/3.activity/activity7_lv73xp.png',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045120/infinity9/3.activity/activity2_pdrbpk.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045119/infinity9/3.activity/activity4_kbhqap.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045117/infinity9/3.activity/activity6_lapdkq.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045116/infinity9/3.activity/activity3_n67vmp.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045115/infinity9/3.activity/activity5_denhhu.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045114/infinity9/3.activity/activity1_fnahhw.jpg',
    ],
  },
  {
    id: 'workshop',
    title: '4. Workshop',
    description:
      'กิจกรรมที่ให้ลูกค้ามีส่วนร่วม เราได้จัดกิจกรรมต่างๆให้เข้ากับช่วงเวลานั้น เพื่อเพิ่มการมีส่วนร่วมของลูกค้า และทุกครั้งได้รับการตอบรับเป็นอย่างดี',
    images: [
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045147/infinity9/4.workshop/workshop1_qe0i73.png',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045149/infinity9/4.workshop/workshop2_bv4q6p.png',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045146/infinity9/4.workshop/workshop3_dsvrsq.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045150/infinity9/4.workshop/workshop4_gmtyfw.png',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045145/infinity9/4.workshop/workshop5_llvqiz.jpg',
    ],
  },
  {
    id: 'cooperate',
    title: '5. Corporate Event', // แนะนำสะกด Corporate แทน Cooperate
    description:
      'ในปี 2024 เราได้ขยายขอบเขตการจัดงานไปถึง Corporate event โดยได้รับจัดงานตั้งแต่งาน เทศกาล งานเลี้ยง งานสังสรรค์ งานเกษียณอำลา งานเปิดตัวสินค้า รวมไปถึงงานประชุมต่างๆให้กับบริษัทต่างๆเพิ่มขึ้น',
    images: [
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045213/infinity9/5.cooperate/cooperate1_uvpjlb.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045170/infinity9/5.cooperate/cooperate2_u5nci5.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045313/infinity9/5.cooperate/cooperate3_tunljk.jpg',
    ],
  },
];

// ---------- Helpers (Cloudinary & URL) ----------
const sanitize = (u: string) => u.replace(/^https:(?=[^/])/, 'https://'); // แก้ https:res...
const cld = (url: string, params: string) =>
  sanitize(url).replace('/upload/', `/upload/${params}/`);

const thumb = (url: string, w: number, h: number) =>
  cld(url, `f_auto,q_auto,c_fill,w_${w},h_${h}`);

const ogFrom = (url: string) => cld(url, 'f_auto,q_auto,c_fill,w_1200,h_630');

// ---------- Loader ----------
export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const baseUrl = `${url.protocol}//${url.host}`;
  const canonical = `${baseUrl}/services`;

  // เลือกภาพแรกของบริการแรกเป็น OG
  const firstImg = services[0]?.images[0];
  const ogImage = firstImg ? ogFrom(firstImg) : undefined;

  // JSON-LD
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'หน้าแรก',
        item: baseUrl + '/',
      },
      { '@type': 'ListItem', position: 2, name: 'Services', item: canonical },
    ],
  };

  const collectionLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: TITLE,
    description: DESC,
    url: canonical,
    about: { '@type': 'Organization', name: ORG, url: baseUrl + '/' },
    hasPart: services.map((s) => ({
      '@type': 'Service',
      name: s.title.replace(/^\d+\.\s*/, ''), // ตัดเลขนำหน้า
      description: s.description,
      areaServed: { '@type': 'Country', name: 'Thailand' },
      provider: { '@type': 'Organization', name: ORG, url: baseUrl + '/' },
      url: `${canonical}#${s.id}`,
      image: s.images.slice(0, 3).map((src) => sanitize(src)),
    })),
  };

  return json({ canonical, ogImage, breadcrumbLd, collectionLd });
}

// ---------- Meta & Links ----------
export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return [];
  const m: ReturnType<MetaFunction> = [
    { title: TITLE },
    { name: 'description', content: DESC },
    { name: 'robots', content: 'index,follow,max-image-preview:large' },
    { property: 'og:site_name', content: ORG },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: TITLE },
    { property: 'og:description', content: DESC },
    { property: 'og:url', content: data.canonical },
    { property: 'og:locale', content: 'th_TH' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: TITLE },
    { name: 'twitter:description', content: DESC },
  ];
  if (data.ogImage) {
    m.push(
      { property: 'og:image', content: data.ogImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' }
    );
  }
  return m;
};

export const links: LinksFunction = () => [
  { rel: 'canonical', href: '/services' },
  {
    rel: 'preconnect',
    href: 'https://res.cloudinary.com',
    crossOrigin: 'anonymous',
  },
  { rel: 'dns-prefetch', href: 'https://res.cloudinary.com' },
];

export default function Services() {
  const data = useLoaderData<typeof loader>();

  return (
    <Layout>
      {/* JSON-LD */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data.breadcrumbLd) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data.collectionLd) }}
      />

      <div className='py-12 px-6 md:px-24'>
        {/* Internal nav ช่วย UX/SEO */}
        <div className='relative inline-block mb-6'>
          <h1 className='text-3xl font-bold tracking-widest text-[#5790c3] relative inline-block px-4 py-2 bg-[#5790c3]/10'>
            Our Services
            <div className='absolute top-[2px] right-[-20px] w-0 h-0 border-y-[26px] border-l-[20px] border-y-transparent border-l-[#5790c3]/10' />
          </h1>
          <div className='absolute left-0 right-0 bottom-0 translate-y-full h-[6px] bg-[#eb993b]' />
        </div>

        <p className='text-gray-600 mb-4'>
          ตัวอย่างบริการหลักที่เราให้บริการสำหรับงานอีเวนท์และโปรดักชันครบวงจร
        </p>

        <nav aria-label='ลิงก์ไปส่วนบริการ' className='mb-10'>
          <ul className='flex flex-wrap gap-2'>
            {services.map((s) => (
              <li key={s.id}>
                <div
                  className='inline-flex items-center rounded-full bg-[#5790c3] px-3 py-1.5
                     text-sm font-medium text-white shadow-sm transition
                     hover:bg-[#4f83b8]
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5790c3]
                     focus-visible:ring-offset-2 focus-visible:ring-offset-white cursor-default select-none'
                >
                  {s.title.replace(/^\d+\.\s*/, '')}
                </div>
              </li>
            ))}
          </ul>
        </nav>

        {services.map((service) => (
          <section
            key={service.id}
            id={service.id}
            className='scroll-mt-16 w-full flex flex-col items-start mb-12 border-b border-gray-200'
            aria-labelledby={`${service.id}-heading`}
          >
            <h2
              id={`${service.id}-heading`}
              className='text-xl font-bold tracking-wider text-black mb-4'
            >
              {service.title}
            </h2>
            <p>{service.description}</p>

            <div className='w-full mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10'>
              {service.images.map((img, index) => {
                const alt = `${service.title.replace(
                  /^\d+\.\s*/,
                  ''
                )} — ภาพตัวอย่างงานที่ ${index + 1} โดย ${ORG}`;
                const s320 = thumb(img, 320, 240);
                const s480 = thumb(img, 480, 360);
                const s640 = thumb(img, 640, 480);
                const s800 = thumb(img, 800, 600);
                const srcSet = `${s320} 320w, ${s480} 480w, ${s640} 640w, ${s800} 800w`;
                const sizes =
                  '(min-width:1024px) 31vw, (min-width:640px) 48vw, 100vw';

                return (
                  <figure key={img + index} className='relative w-full'>
                    <div className='relative w-full aspect-[4/3] overflow-hidden rounded-md'>
                      <img
                        src={s640}
                        srcSet={srcSet}
                        sizes={sizes}
                        width={640}
                        height={480}
                        alt={alt}
                        className='absolute inset-0 w-full h-full object-cover'
                        loading='lazy'
                        decoding='async'
                      />
                    </div>
                    <figcaption className='sr-only'>{alt}</figcaption>
                  </figure>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </Layout>
  );
}
