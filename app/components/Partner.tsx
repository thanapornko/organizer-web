import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
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

  return (
    <div className='py-12 border-b border-gray-300 text-center'>
      <div className='relative inline-block mb-12'>
        <h2 className='text-2xl md:text-3xl font-bold tracking-widest text-[#5790c3] relative inline-block px-4 py-2 bg-[#5790c3]/10'>
          OUR PARTNERS
        </h2>
        <div className='absolute left-0 right-0 bottom-0 translate-y-full h-[6px] bg-[#eb993b]'></div>
      </div>

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
