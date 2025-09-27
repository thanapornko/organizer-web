import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Partner() {
  const logos = [
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045904/infinity9/partner/logo1_mr7u2x.png',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045962/infinity9/partner/logo2_g2tg4w.png',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045907/infinity9/partner/logo3_pwd92n.png',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045959/infinity9/partner/logo4_enl0dj.png',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045912/infinity9/partner/logo5_dbrdk1.png',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045915/infinity9/partner/logo6_qdoszr.png',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045957/infinity9/partner/logo7_cj0o2o.png',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045965/infinity9/partner/logo8_d9vtw0.png',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045918/infinity9/partner/logo9_cykcwt.png',
    'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045910/infinity9/partner/logo10_esfdml.png',
  ];

  // Cloudinary helpers
  const cld = (url: string, w = 240, h = 240) =>
    url.replace('/upload/', `/upload/f_auto,q_auto,c_fit,w_${w},h_${h}/`);
  const srcSet = (url: string) =>
    `${cld(url, 160, 160)} 160w, ${cld(url, 240, 240)} 240w, ${cld(
      url,
      320,
      320
    )} 320w`;

  // JSON-LD: ItemList ของโลโก้
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Our Partners',
    itemListElement: logos.map((u, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: { '@type': 'ImageObject', contentUrl: u },
    })),
  };

  return (
    <section
      className='py-12 border-b border-gray-300 text-center'
      aria-labelledby='partners-heading'
    >
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className='relative inline-block mb-12'>
        <h2
          id='partners-heading'
          className='text-2xl md:text-3xl font-bold tracking-widest text-[#5790c3] relative inline-block px-4 py-2 bg-[#5790c3]/10'
        >
          OUR PARTNERS
        </h2>
        <div className='absolute left-0 right-0 bottom-0 translate-y-full h-[6px] bg-[#eb993b]' />
      </div>

      <Swiper
        modules={[Navigation, A11y]}
        navigation
        a11y={{
          prevSlideMessage: 'เลื่อนไปโลโก้ก่อนหน้า',
          nextSlideMessage: 'เลื่อนไปโลโก้ถัดไป',
        }}
        aria-label='แกลเลอรีโลโก้พันธมิตร'
        breakpoints={{
          360: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1440: { slidesPerView: 4 },
          1920: { slidesPerView: 5 },
        }}
      >
        {logos.map((src, i) => {
          // ถ้ามีชื่อพาร์ตเนอร์จริง แนะนำแทน alt ให้ตรงแบรนด์
          const alt = `โลโก้พันธมิตร ลำดับที่ ${i + 1}`;
          const url240 = cld(src, 240, 240);
          return (
            <SwiperSlide key={src}>
              <figure className='mx-auto w-[200px] h-[200px]'>
                <img
                  src={url240}
                  srcSet={srcSet(src)}
                  sizes='200px'
                  width={200}
                  height={200}
                  alt={alt}
                  className='w-[200px] h-[200px] object-contain'
                  loading='lazy'
                  decoding='async'
                />
                <figcaption className='sr-only'>{alt}</figcaption>
              </figure>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
