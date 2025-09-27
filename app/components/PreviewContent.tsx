import PreviewButton from './PreviewButton';

const cld = (url: string, w: number, h: number) =>
  url.replace('/upload/', `/upload/f_auto,q_auto,c_fill,w_${w},h_${h}/`);

export default function PreviewContent() {
  const base =
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752061340/infinity9/tumcover_kpu470.jpg';
  const s640 = cld(base, 640, 480);
  const s800 = cld(base, 800, 600);
  const s1000 = cld(base, 1000, 750);
  const s1280 = cld(base, 1280, 960);
  const srcSet = `${s640} 640w, ${s800} 800w, ${s1000} 1000w, ${s1280} 1280w`;
  const sizes = '(min-width:1024px) 500px, (min-width:640px) 100vw, 100vw';

  return (
    <section
      className='py-16 border-b border-gray-300'
      aria-labelledby='preview-heading'
    >
      <div className='flex flex-col lg:flex-row gap-10'>
        {/* Image */}
        <figure className='w-full lg:w-[500px] flex-shrink-0'>
          <img
            src={s1000}
            srcSet={srcSet}
            sizes={sizes}
            width={1000}
            height={750}
            className='w-full h-[300px] sm:h-[400px] lg:h-full object-cover rounded-lg'
            alt='ภาพตัวอย่างงานอีเวนท์โดย Infinity9 Organizer'
            loading='lazy'
            decoding='async'
          />
          <figcaption className='sr-only'>
            ตัวอย่างงานอีเวนท์ของ Infinity9 Organizer
          </figcaption>
        </figure>

        {/* Text Content */}
        <article className='flex flex-col justify-between gap-8'>
          <div>
            <h2
              id='preview-heading'
              className='text-2xl font-semibold tracking-widest mb-4 text-black'
            >
              ความคิดสร้างสรรค์ การันตีคุณภาพงาน และ การบริการ ความซื่อสัตย์
              และหัวใจที่พร้อมบริการ
            </h2>

            <blockquote className='text-lg font-medium tracking-wide text-black'>
              “เราผลิตและสร้างสรรค์ผลงานที่คำนึงที่ความต้องการของลูกค้า
              และทำงานอย่างตรงไปตรงมา เพื่อมอบประสบการณ์ที่ดีที่สุด
              ทีมงานของเราเปี่ยมไปด้วย Passion และไอเดียแปลกใหม่
              สร้างความเป็นเอกลักษณ์ ความแตกต่างที่ไม่เหมือนใคร ความซื่อสัตย์
              และหัวใจที่พร้อมบริการ คือ จุดแข็งหลักที่ลูกค้า ทั้ง B2B และ B2C
              มั่นใจและวางใจที่จะทำงานร่วมกับบริษัทของเรา ตลอดระยะเวลา 9 ปี
              ที่ผ่านมา”
            </blockquote>
          </div>

          <PreviewButton />
        </article>
      </div>
    </section>
  );
}
