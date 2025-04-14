import type { MetaFunction } from '@remix-run/node';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import NavBar from '~/components/Header';
import ServiceBox from '~/components/ServiceBox';
import PreviewContent from '~/components/PreviewContent';
import Partner from '~/components/Partner';
import Footer from '~/components/Footer';
import Layout from './layout';

const images = [
  'https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

export const meta: MetaFunction = () => {
  return [
    { title: 'Infinity9' },
    { name: 'description', content: 'Infinity9 Thai Organizer' },
  ];
};

export default function Index() {
  return (
    <Layout>
      {/* <div className='w-full max-h-[650px] overflow-hidden'>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className='w-full h-full object-cover'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
      <div
        className='w-full h-[650px] overflow-hidden bg-black text-white flex items-center justify-center text-center bg-cover bg-center'
        style={{ backgroundImage: "url('/images/banner.png')" }}
      >
        {/* animated neon lines */}
        <div className='absolute w-[200%] h-[200%] neon-lines z-0'></div>

        {/* content */}
        <div className='relative z-10 px-4'>
          <h1 className='text-6xl md:text-9xl font-extrabold text-purple-300 drop-shadow-[0_0_20px_rgba(215,166,255,0.8)] leading-tight animate-fade-in-up'>
            MAKE THE
            <br />
            CREATIVE EVENT
          </h1>

          <p
            className='mt-6 max-w-3xl mx-auto text-2xl text-white/90 animate-fade-in-up'
            style={{ animationDelay: '0.4s' }}
          >
            We specialize in creating impactful events, merging creativity and
            precision to deliver unforgettable, seamless experiences
          </p>
        </div>
      </div>

      <div className='px-4 md:px-32'>
        <ServiceBox />
        <PreviewContent />
        <Partner />
      </div>
    </Layout>
  );
}
