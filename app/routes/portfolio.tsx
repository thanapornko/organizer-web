// // app/routes/portfolio.tsx
import type {
  MetaFunction,
  LinksFunction,
  LoaderFunctionArgs,
} from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import Layout from './layout';
import { useEffect, useState, useCallback } from 'react';

const ORG = 'Infinity9 Organizer';
const TITLE = `Portfolio | ${ORG}`;
const DESC =
  'รวมตัวอย่างผลงานจัดงานอีเวนท์ ตลาดนัด คอนเสิร์ต Roadshow Annual Party และงานโปรดักชัน ของ Infinity9 Organizer แบ่งตามปี 2017–2025';

type ProjectsMap = Record<string, string[]>;

const projects: ProjectsMap = {
  '2017': [
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045226/infinity9/2017/2017-2_jjedjc.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045225/infinity9/2017/2017-1_nts4hy.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045218/infinity9/2017/2017-7_vgkd6e.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045223/infinity9/2017/2017-5_tv6syj.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045220/infinity9/2017/2017-3_r2sq8v.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045216/infinity9/2017/2017-8_qaqh68.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045221/infinity9/2017/2017-4_atkfjl.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045218/infinity9/2017/2017-6_vqyk2i.jpg',
  ],
  '2018': [
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045369/infinity9/2018/2018-4_tv8upt.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045367/infinity9/2018/2018-3_brgtkd.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045365/infinity9/2018/2018-8_agmzun.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045364/infinity9/2018/2018-2_d0qs9a.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045362/infinity9/2018/2018-7_tfibwt.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045360/infinity9/2018/2018-9_fgtagl.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045358/infinity9/2018/2018-6_sctk5d.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045356/infinity9/2018/2018-5_nxq6yb.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045354/infinity9/2018/2018-1_eigaks.jpg',
  ],
  '2019': [
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045437/infinity9/2019/2019-6_yqhlxg.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045427/infinity9/2019/2019-4_gs4lac.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045429/infinity9/2019/2019-9_yddgx1.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045431/infinity9/2019/2019-7_j8v3ut.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045435/infinity9/2019/2019-8_rx3akj.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045439/infinity9/2019/2019-10_cz6dqk.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045433/infinity9/2019/2019-2_b5oi5z.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045425/infinity9/2019/2019-1_wxfyaa.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045423/infinity9/2019/2019-5_tdjlwh.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045421/infinity9/2019/2019-3_jkvg89.jpg',
  ],
  '2020': [
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1757993504/infinity9/2020/2020-1_hkdp7a.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1757993504/infinity9/2020/2020-2_vuwzj0.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1757993504/infinity9/2020/2020-4_m1tilg.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1757993505/infinity9/2020/2020-3_kaijer.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1757993637/infinity9/2020/2020-5_zbb1ci.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1757993632/infinity9/2020/2020-6_aozl7q.jpg',
  ],
  '2021': [
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045464/infinity9/2021/2021-4_mf1v5j.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045458/infinity9/2021/2021-9_i32jaf.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045462/infinity9/2021/2021-7_erbq3c.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045462/infinity9/2021/2021-8_wyoh3s.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045455/infinity9/2021/2021-3_sjxtry.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045453/infinity9/2021/2021-5_z5szjq.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045449/infinity9/2021/2021-6_tq19kc.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045451/infinity9/2021/2021-2_mlip52.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045447/infinity9/2021/2021-1_ck1arl.jpg',
  ],
  '2022': [
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045505/infinity9/2022/2022-12_ljdirp.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045503/infinity9/2022/2022-9_w4xao5.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045500/infinity9/2022/2022-8_u3xa9t.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045498/infinity9/2022/2022-10_c0crly.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045496/infinity9/2022/2022-4_kwmn4w.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045493/infinity9/2022/2022-7_xkftvd.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045491/infinity9/2022/2022-2_pgcgya.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045489/infinity9/2022/2022-6_v6zynf.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045479/infinity9/2022/2022-5_rkapol.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045486/infinity9/2022/2022-11_ks4z7b.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045484/infinity9/2022/2022-3_hzb8r6.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045482/infinity9/2022/2022-1_zokykk.jpg',
  ],
  '2023': [
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045541/infinity9/2023/2023-5_muddbt.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045538/infinity9/2023/2023-4_yh68bt.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045538/infinity9/2023/2023-3_vq2xyi.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045534/infinity9/2023/2023-10_qnxw5s.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045531/infinity9/2023/2023-9_hwepsc.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045529/infinity9/2023/2023-7_czbfum.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045526/infinity9/2023/2023-2_bkzvl7.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045524/infinity9/2023/2023-6_yklthq.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045522/infinity9/2023/2023-8_fh7orq.jpg',
  ],
  '2024': [
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045571/infinity9/2024/2024-9_dqsfje.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045568/infinity9/2024/2024-8_b9tqzn.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045566/infinity9/2024/2024-11_uj0vgt.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045563/infinity9/2024/2024-1_jokqpo.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045561/infinity9/2024/2024-10_zkzscb.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045558/infinity9/2024/2024-7_v61g5f.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045556/infinity9/2024/2024-6_l0zyy1.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045553/infinity9/2024/2024-5_oncqfh.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045551/infinity9/2024/2024-4_y95tmh.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045549/infinity9/2024/2024-3_kmkjvl.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045546/infinity9/2024/2024-2_xva6jo.jpg',
  ],
  '2025': [
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045660/infinity9/2025/2025-4_palj3p.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045657/infinity9/2025/2025-1_dpx71q.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045655/infinity9/2025/2025-11_rtaprl.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045653/infinity9/2025/2025-5_xkmhah.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045646/infinity9/2025/2025-6_k1nvkq.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045650/infinity9/2025/2025-8_vmqhyz.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045648/infinity9/2025/2025-12_wzbi9a.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045643/infinity9/2025/2025-2_auv8lq.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045583/infinity9/2025/2025-7_n0vvqs.jpg',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045581/infinity9/2025/2025-3_qvn3lp.jpg',
  ],
};

// --- Cloudinary helper (แทรนส์ฟอร์มรูปให้เร็ว/เล็ก) ---
const cld = (url: string, params: string) =>
  url.replace('/upload/', `/upload/${params}/`);

const thumbSrc = (url: string, w: number, h: number) =>
  cld(url, `f_auto,q_auto,c_fill,w_${w},h_${h}`);

const ogSrc = (url: string) => cld(url, 'f_auto,q_auto,c_fill,w_1200,h_630');

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const baseUrl = `${url.protocol}//${url.host}`;
  const canonical = `${baseUrl}/portfolio`;

  // หา OG image จากปีล่าสุด ภาพแรก
  const latestYear = Object.keys(projects).sort(
    (a, b) => Number(b) - Number(a)
  )[0];
  const firstOfLatest = projects[latestYear]?.[0];
  const ogImage = firstOfLatest ? ogSrc(firstOfLatest) : undefined;

  // JSON-LD: Breadcrumb + CollectionPage (สรุปผลงานรายปี) — limit 3 รูป/ปี กัน payload ยาวไป
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
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: canonical },
    ],
  };

  const collectionLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: TITLE,
    description: DESC,
    url: canonical,
    about: { '@type': 'Organization', name: ORG, url: baseUrl + '/' },
    hasPart: Object.entries(projects).map(([year, list]) => ({
      '@type': 'ImageGallery',
      name: `ผลงานปี ${year}`,
      datePublished: year,
      image: list.slice(0, 3).map((src) => ({
        '@type': 'ImageObject',
        contentUrl: src,
        representativeOfPage: false,
      })),
    })),
  };

  return json({ canonical, ogImage, breadcrumbLd, collectionLd });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return [];
  const entries: ReturnType<MetaFunction> = [
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
    entries.push(
      { property: 'og:image', content: data.ogImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' }
    );
  }
  return entries;
};

export const links: LinksFunction = () => [
  { rel: 'canonical', href: '/portfolio' },
  {
    rel: 'preconnect',
    href: 'https://res.cloudinary.com',
    crossOrigin: 'anonymous',
  },
  { rel: 'dns-prefetch', href: 'https://res.cloudinary.com' },
];

export default function Portfolio() {
  const data = useLoaderData<typeof loader>();
  const [selected, setSelected] = useState<string | null>(null);

  // ปิดด้วย ESC
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setSelected(null);
  }, []);
  useEffect(() => {
    if (selected) document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [selected, onKeyDown]);

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

      <div className='pt-12 px-6 md:px-24'>
        <div className='relative inline-block mb-6'>
          <h1 className='text-3xl font-bold tracking-widest text-[#5790c3] relative inline-block px-4 py-2 bg-[#5790c3]/10'>
            Portfolio
            <div
              className='absolute top-[2px] right-[-20px] w-0 h-0 
                 border-y-[26px] border-l-[20px] 
                 border-y-transparent border-l-[#5790c3]/10'
            />
          </h1>
          <div className='absolute left-0 right-0 bottom-0 translate-y-full h-[6px] bg-[#eb993b]' />
        </div>
        <p className='text-gray-600'>
          ตัวอย่างผลงานของเราตลอดระยะเวลาที่ผ่านมา
        </p>
      </div>

      {/* Loop by year */}
      {Object.entries(projects).map(([year, images]) => (
        <section
          key={year}
          className='px-6 md:px-24 py-12'
          aria-labelledby={`year-${year}`}
        >
          <h2
            id={`year-${year}`}
            className='text-xl font-semibold text-black mb-6 border-b pb-2'
          >
            ปี {year}
          </h2>

          <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6'>
            {images.map((src, idx) => {
              const alt = `ผลงาน ${ORG} ปี ${year} — ภาพที่ ${idx + 1}`;
              const s320 = thumbSrc(src, 320, 240);
              const s480 = thumbSrc(src, 480, 360);
              const s640 = thumbSrc(src, 640, 480);
              const s800 = thumbSrc(src, 800, 600);
              const srcSet = `${s320} 320w, ${s480} 480w, ${s640} 640w, ${s800} 800w`;
              const sizes =
                '(min-width:1280px) 18vw, (min-width:768px) 30vw, 45vw';

              return (
                <article
                  key={idx}
                  className='overflow-hidden rounded-xl shadow'
                >
                  <button
                    type='button'
                    className='block w-full'
                    onClick={() => setSelected(src)}
                    aria-label={`เปิดดูภาพเต็ม: ${alt}`}
                  >
                    <div className='aspect-[4/3] w-full overflow-hidden'>
                      <img
                        src={s640}
                        srcSet={srcSet}
                        sizes={sizes}
                        width={640}
                        height={480}
                        alt={alt}
                        className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
                        loading='lazy'
                        decoding='async'
                      />
                    </div>
                  </button>
                </article>
              );
            })}
          </div>
        </section>
      ))}

      {/* Full Image Modal */}
      {selected && (
        <div
          className='fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4'
          role='dialog'
          aria-modal='true'
          aria-label='ดูภาพขนาดเต็ม'
          onClick={() => setSelected(null)}
        >
          <div
            className='max-w-[90%] max-h-[90%]'
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={cld(selected, 'f_auto,q_auto')}
              alt='full-view'
              className='max-w-full max-h-[90vh] rounded-lg shadow-lg'
              decoding='async'
            />
            <div className='mt-3 text-center'>
              <button
                onClick={() => setSelected(null)}
                className='px-4 py-2 rounded-md bg-white/90 hover:bg-white text-black text-sm'
              >
                ปิด
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
