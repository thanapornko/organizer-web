import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaSnowflake, FaUniversity } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Partner() {
  return (
    <div className='py-12 border-b border-gray-300 text-center'>
      <h2 className='text-2xl md:text-3xl font-bold tracking-widest text-black mb-10'>
        OUR PARTNERS
      </h2>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className='mySwiper'
      >
        {[...Array(3)].map((_, i) => (
          <SwiperSlide key={i * 2}>
            <FaSnowflake className='text-black text-[180px] mx-auto' />
          </SwiperSlide>
        ))}
        {[...Array(3)].map((_, i) => (
          <SwiperSlide key={i * 2 + 1}>
            <FaUniversity className='text-black text-[180px] mx-auto' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
