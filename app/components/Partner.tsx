import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Partner() {
  const logos = [
    '/images/logo2.png',
    '/images/logo3.png',
    '/images/logo4.png',
    '/images/logo5.png',
    '/images/logo6.png',
    '/images/logo7.png',
    '/images/logo8.png',
    '/images/logo9.png',
  ];

  return (
    <div className='py-12 border-b border-gray-300 text-center'>
      <h2 className='text-2xl md:text-3xl font-bold tracking-widest text-black mb-10'>
        OUR PARTNERS
      </h2>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          360: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
          1920: {
            slidesPerView: 5,
          },
        }}
      >
        {logos.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Partner logo ${index + 2}`}
              className='w-[200px] h-[200px] object-contain mx-auto'
              loading='lazy'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
