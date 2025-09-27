// app/routes/about-us.tsx
import type {
  MetaFunction,
  LinksFunction,
  LoaderFunctionArgs,
} from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import Layout from './layout';

const ORG_NAME = 'Infinity9 Organizer';
const PAGE_TITLE = `เกี่ยวกับเรา | ${ORG_NAME}`;
const PAGE_DESC =
  'รู้จัก Infinity9 Organizer ทีมคนรุ่นใหม่ผู้เชี่ยวชาญด้านการจัดงาน Event, Market, Roadshow, Annual Party และ Production ครบวงจร ตั้งมั่นด้วยความคิดสร้างสรรค์ ความซื่อสัตย์ และความรักต่อผลงาน.';

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const baseUrl = `${url.protocol}//${url.host}`;
  const canonical = `${baseUrl}/about-us`;

  // JSON-LD: Breadcrumb + AboutPage (+อ้างอิงองค์กร)
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
      {
        '@type': 'ListItem',
        position: 2,
        name: 'เกี่ยวกับเรา',
        item: canonical,
      },
    ],
  };

  const aboutPageLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: PAGE_TITLE,
    description: PAGE_DESC,
    url: canonical,
    mainEntity: {
      '@type': 'Organization',
      name: ORG_NAME,
      url: baseUrl + '/',
      // เติมโลโก้/โซเชียลได้ถ้ามี:
      // logo: baseUrl + '/logo.png',
      // sameAs: ['https://www.facebook.com/...','https://www.instagram.com/...']
    },
  };

  return json({ baseUrl, canonical, breadcrumbLd, aboutPageLd });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return [];
  return [
    { title: PAGE_TITLE },
    { name: 'description', content: PAGE_DESC },
    { name: 'robots', content: 'index,follow,max-image-preview:large' },

    // Open Graph
    { property: 'og:site_name', content: ORG_NAME },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: PAGE_TITLE },
    { property: 'og:description', content: PAGE_DESC },
    { property: 'og:url', content: data.canonical },
    { property: 'og:locale', content: 'th_TH' },

    // Twitter
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: PAGE_TITLE },
    { name: 'twitter:description', content: PAGE_DESC },
  ];
};

export const links: LinksFunction = () => [
  { rel: 'canonical', href: '/about-us' },
];

export default function AboutUs() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data.aboutPageLd) }}
      />

      <div className='pt-12 text-center px-6 md:px-24'>
        {/* H1 เดี่ยวสำหรับหน้า */}
        <h1 className='text-3xl font-bold tracking-widest text-black mb-10 underline'>
          เกี่ยวกับเรา
        </h1>

        <p>
          Infinity 9 organizer
          เกิดจากการรวมตัวกลุ่มคนรุ่นใหม่ที่มีความเชี่ยวชาญจากหลากหลายสาขาอาชีพ
          เพื่อนำเสนอการจัดงานที่มีเอกลักษณ์เป็นที่น่าประทับใจ
          โดยคำนึงถึงประโยชน์และคุณค่าสูงสุดที่คู่ค้าจะได้รับ
          ภายใต้หลักการทำงานที่ยึดถือ “ความคิดสร้างสรรค์” “ความซื่อสัตย์” และ
          “ความรัก” เป็นหลักสำคัญในการผลักดันผลงานให้มีคุณภาพ
        </p>
        <br />
        <p>
          โดยในปี 2025 นี้ Infinity 9 organizer
          มีความมุ่งมั่นที่จะสร้างสรรค์ผลงานที่หลากหลายมากยิ่งขึ้น
          ทั้งในรูปแบบของงาน Event Market
          ที่เราได้นำเสนอและประสบความสำเร็จเป็นอย่างดีตลอดปี 2017 – 2024
          รวมถึงขยายการจัดงานในรูปแบบของ Road Show, Company’s Annual Party ,
          Supplier event และ Live Band
          เพื่อตอบสนองความต้องการของลูกค้าและเข้าถึงทุกเพศทุกวัย
          รวมถึงการเสาะแสวงหาพันธมิตร (Collaboration)
          หลากหลายวงการเพื่อสร้างสรรค์งานใหม่ๆและไม่ลืมที่จะส่งต่อกำไรกลับคืนสู่สังคมตามปณิธานของ
          Infinity 9 organizer อีกด้วย
        </p>
      </div>

      {/* ความเป็นมา */}
      <section aria-labelledby='history-heading' className='px-6 md:px-24'>
        <h2
          id='history-heading'
          className='text-3xl font-bold tracking-widest text-black pt-16 text-center underline'
        >
          ความเป็นมา
        </h2>

        {/* ใช้ <ol> + <time> เพื่อความชัดเจนเชิงความหมาย */}
        <div className='pt-8'>
          <ol className='relative border-l-4 border-gray-200 max-w-3xl mx-auto space-y-8'>
            <li className='ml-6'>
              <span className='absolute -left-3 top-1 w-6 h-6 bg-pink-500 rounded-full border-4 border-white shadow' />
              <h3 className='text-lg font-semibold text-gray-800 text-start'>
                <time dateTime='2017'>2017</time> – Events &amp; Mini concert
              </h3>
              <p className='text-sm text-gray-600 mt-2 text-start'>
                เริ่มต้นจัดอีเวนท์มีทั้งพื้นที่ขายสินค้าและกิจกรรมพิเศษภายในงาน
                อาทิ มินิคอนเสิร์ต กิจกรรมวันตรุษจีน กิจกรรมวันเด็ก
                ลานเบียร์ช่วงปีใหม่
              </p>
            </li>

            <li className='ml-6'>
              <span className='absolute -left-3 top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow' />
              <h3 className='text-lg font-semibold text-gray-800 text-start'>
                <time dateTime='2021'>2021</time> – Outsource for Department
                Store
              </h3>
              <p className='text-sm text-gray-600 mt-2 text-start'>
                ขยายธุรกิจ รับงานออกแบบงานอีเว้นท์ ให้ห้างใหญ่ๆ อาทิ เดอะมอล์
                เซนทรัลล์
              </p>
            </li>

            <li className='ml-6'>
              <span className='absolute -left-3 top-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow' />
              <h3 className='text-lg font-semibold text-gray-800 text-start'>
                <time dateTime='2022'>2022</time> – New Service Line “Cooperate
                with Department Store”
              </h3>
              <p className='text-sm text-gray-600 mt-2 text-start'>
                ขยายไลน์ธุรกิจเพิ่มขึ้น โดยการ co-event ร่วมกับทางห้าง
                งานรวมร้านอาหารดัง ตามธีม ทำเป็นรอบ ทุกๆ 4 เดือน
              </p>
            </li>

            <li className='ml-6'>
              <span className='absolute -left-3 top-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow' />
              <h3 className='text-lg font-semibold text-gray-800 text-start'>
                <time dateTime='2023'>2023</time> – New Service line “Production
                Supplier”
              </h3>
              <p className='text-sm text-gray-600 mt-2 text-start'>
                ขยายไลน์ธุรกิจด้านงานผลิต ท้ังกลุ่มลูกค้า B2B และ B2C
                ผลิตตกแต่งงานปีใหม่ ผลิตชิ้นงาน branding
                งานออกแบบและติดตั้งร้านค้า งานตกแต่งร้านค้า
              </p>
            </li>

            <li className='ml-6'>
              <span className='absolute -left-3 top-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow' />
              <h3 className='text-lg font-semibold text-gray-800 text-start'>
                <time dateTime='2025'>2025</time> – Upcoming “Outsource for
                Cooperate Dining”
              </h3>
              <p className='text-sm text-gray-600 mt-2 text-start'>
                งานจัดเลี้ยงประชุมสัมมนา งานจัดเลี้ยงภายในบริษัท
                งานจัดเลี้ยงนอกสถานที่
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* ปณิธาน/ค่านิยม */}
      <section
        aria-labelledby='values-heading'
        className='pt-16 pb-12 text-center px-6 md:px-24'
      >
        <h2
          id='values-heading'
          className='text-3xl font-bold tracking-widest text-black mb-10 underline'
        >
          ปณิทานของเรา
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto'>
          <article className='bg-[#5790c3] shadow-md rounded-xl p-6 border'>
            <h3 className='text-xl font-semibold text-white mb-2'>Passion</h3>
            <p className='text-sm text-white'>
              เราทำงานด้วยความหลงใหลและเชื่อมั่นว่าสิ่งที่ดีเริ่มจากใจที่รักในสิ่งที่ทำ
            </p>
          </article>

          <article className='bg-[#eb993b] shadow-md rounded-xl p-6 border'>
            <h3 className='text-xl font-semibold text-white mb-2'>Integrity</h3>
            <p className='text-sm text-white'>
              ความซื่อสัตย์ต่อคู่ค้าและลูกค้า
              คือรากฐานของความไว้วางใจที่เรายึดมั่น
            </p>
          </article>

          <article className='bg-[#eb993b] shadow-md rounded-xl p-6 border'>
            <h3 className='text-xl font-semibold text-white mb-2'>
              Collaboration
            </h3>
            <p className='text-sm text-white'>
              เราเชื่อในพลังของการร่วมมือ
              เพื่อสร้างสรรค์สิ่งที่ยิ่งใหญ่ไปด้วยกัน
            </p>
          </article>

          <article className='bg-[#5790c3] shadow-md rounded-xl p-6 border'>
            <h3 className='text-xl font-semibold text-white mb-2'>
              Work &amp; Service
            </h3>
            <p className='text-sm text-white'>
              การทำงานที่มีคุณภาพ และบริการด้วยหัวใจ คือนิยามของ Infinity 9
              Organizer
            </p>
          </article>
        </div>
      </section>
    </Layout>
  );
}
