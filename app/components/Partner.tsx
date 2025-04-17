import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Partner() {
  const logos = [
    'https://res.cloudinary.com/dhgny94kc/image/upload/f_webp/v1744894906/logo2_ehc0m1.png',
    'https://res.cloudinary.com/dhgny94kc/image/upload/f_webp/v1744894906/logo3_fu5vur.png',
    'https://res.cloudinary.com/dhgny94kc/image/upload/f_webp/v1744894922/logo5_bpjqmv.png',
    'https://res.cloudinary.com/dhgny94kc/image/upload/f_webp/v1744894923/logo4_bhj9nk.png',
    'https://res.cloudinary.com/dhgny94kc/image/upload/f_webp/v1744894923/logo6_lqihtb.png',
    'https://res.cloudinary.com/dhgny94kc/image/upload/f_webp/v1744894923/logo8_wlige2.png',
    'https://res.cloudinary.com/dhgny94kc/image/upload/f_webp/v1744894924/logo10_wn88z1.png',
    'https://res.cloudinary.com/dhgny94kc/image/upload/f_webp/v1744894924/logo7_r3mf3l.png',
    'https://res.cloudinary.com/dhgny94kc/image/upload/f_webp/v1744894924/logo9_xetolm.png',
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
