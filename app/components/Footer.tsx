import { FaInstagram, FaLine, FaPhoneAlt, FaTiktok } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';

const ORG_NAME = 'Infinity9 Organizer';
const COMPANY_LEGAL = 'บริษัท ซีโร่ทูบิลเลี่ยนกรุ๊ป จำกัด';
const SITE_URL = 'https://www.your-domain.tld'; // ← เปลี่ยนเป็นโดเมนจริง
const LOGO_URL = '/logo.png'; // ถ้าเก็บโลโก้ไว้ public/logo.png
const PHONE = '+66945299552';
const PHONE_DISPLAY = '094-529-9552 (คุณตั้ม)';

// ปักพิกัด Google Maps (ถ้าไม่มีปล่อยว่างได้)
const MAP_URL =
  'https://www.google.com/maps/search/?api=1&query=88%2F63+%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B9%882+%E0%B8%95.%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%94%E0%B8%B7%E0%B9%88%E0%B8%AD+%E0%B8%AD.%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B8%9B%E0%B8%97%E0%B8%B8%E0%B8%A1+%E0%B8%9B%E0%B8%97%E0%B8%B8%E0%B8%A1%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5+12000';

export default function Footer() {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: ORG_NAME,
    legalName: COMPANY_LEGAL,
    url: SITE_URL,
    logo: SITE_URL + LOGO_URL,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: PHONE,
        contactType: 'customer service',
        areaServed: 'TH',
        availableLanguage: ['th', 'en'],
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '88/63 หมู่ 2 ต.บางเดื่อ',
      addressLocality: 'อ.เมืองปทุม',
      addressRegion: 'ปทุมธานี',
      postalCode: '12000',
      addressCountry: 'TH',
    },
    sameAs: [
      'https://www.facebook.com/infinity9organizer?locale=th_TH',
      'https://www.tiktok.com/@infinity9organizer',
      'https://www.instagram.com/infinity9organizer/',
      'https://line.me/ti/p/~infi.9',
    ],
  };

  return (
    <footer
      role='contentinfo'
      className='bg-black text-white px-8 md:px-20 pt-8 pb-4'
    >
      {/* JSON-LD: ใส่ครั้งเดียวทั้งเว็บพอ ถ้าไปวางที่อื่นแล้ว ให้ลบอันซ้ำ */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      <div className='flex flex-col gap-10 md:flex-row md:gap-24'>
        {/* Left Column */}
        <section className='w-full md:w-1/2 xl:w-3/5'>
          <h2 className='text-lg font-semibold mb-3'>{ORG_NAME}</h2>
          <p className='text-sm leading-relaxed'>
            {ORG_NAME}{' '}
            เกิดจากการรวมตัวกลุ่มคนรุ่นใหม่ที่มีความเชี่ยวชาญจากหลากหลายสาขาอาชีพ
            เพื่อนำเสนอการจัดงานที่มีเอกลักษณ์น่าประทับใจ
            โดยคำนึงถึงประโยชน์และคุณค่าสูงสุดที่คู่ค้าจะได้รับ
          </p>
        </section>

        {/* Right Column */}
        <section
          className='w-full md:w-2/5 space-y-4'
          aria-labelledby='contact-heading'
        >
          <h2 id='contact-heading' className='text-lg font-semibold'>
            ติดต่อเรา
          </h2>

          <address className='not-italic text-sm space-y-3'>
            <div className='flex items-center gap-3'>
              <FaPhoneAlt
                aria-hidden
                className='text-green-500 text-base md:text-xl'
              />
              <a href={`tel:${PHONE}`} className='hover:underline'>
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className='flex items-start gap-3'>
              <FaLocationDot
                aria-hidden
                className='text-red-500 text-base md:text-xl'
              />
              <p>
                {COMPANY_LEGAL} เลขที่ 88/63 หมู่ 2 ต.บางเดื่อ อ.เมืองปทุม
                จ.ปทุมธานี 12000{' '}
              </p>
            </div>
          </address>

          <nav aria-label='โซเชียลมีเดีย'>
            <ul className='flex flex-col lg:flex-row lg:items-start gap-4'>
              <li>
                <a
                  href='https://www.facebook.com/infinity9organizer?locale=th_TH'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Facebook: Infinity9 Organizer'
                  className='inline-flex items-center gap-3 hover:opacity-80 transition'
                >
                  <FaFacebook
                    aria-hidden
                    className='text-blue-500 text-base md:text-xl'
                  />
                  <span className='text-sm'>Infinity9 Organizer</span>
                </a>
              </li>
              <li>
                <a
                  href='https://www.tiktok.com/@infinity9organizer'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='TikTok: infinity9organizer'
                  className='inline-flex items-center gap-3 hover:opacity-80 transition'
                >
                  <FaTiktok
                    aria-hidden
                    className='text-white text-base md:text-xl'
                  />
                  <span className='text-sm'>infinity9organizer</span>
                </a>
              </li>
            </ul>

            <ul className='mt-4 flex flex-col lg:flex-row lg:items-start gap-4'>
              <li>
                <a
                  href='https://www.instagram.com/infinity9organizer/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Instagram: infinity9organizer'
                  className='inline-flex items-center gap-3 hover:opacity-80 transition'
                >
                  <FaInstagram
                    aria-hidden
                    className='text-red-400 text-base md:text-xl'
                  />
                  <span className='text-sm'>infinity9organizer</span>
                </a>
              </li>
              <li>
                <a
                  href='https://line.me/ti/p/~infi.9'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='LINE: infi.9'
                  className='inline-flex items-center gap-3 hover:opacity-80 transition'
                >
                  <FaLine
                    aria-hidden
                    className='text-green-400 text-base md:text-xl'
                  />
                  <span className='text-sm'>infi.9</span>
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </div>

      {/* ลิงก์ระบบ/กฎหมาย ช่วย internal linking & trust */}
      <div className='mt-8 border-t border-white/10 pt-4 text-xs text-white/70 flex flex-wrap gap-x-6'>
        <span>
          © {new Date().getFullYear()} {ORG_NAME}
        </span>
      </div>
    </footer>
  );
}
