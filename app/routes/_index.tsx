import type { MetaFunction } from '@remix-run/node';
import ServiceBox from '~/components/ServiceBox';
import PreviewContent from '~/components/PreviewContent';
import Partner from '~/components/Partner';
import Layout from './layout';

export const meta: MetaFunction = () => {
  return [
    { title: 'Infinity9' },
    { name: 'description', content: 'Infinity9 Organizer' },
  ];
};

export default function Index() {
  return (
    <Layout>
      <div className='relative w-full h-[650px] overflow-hidden text-center'>
        <img
          src='https://res.cloudinary.com/dhgny94kc/image/upload/v1752046074/infinity9/banner_uuzw1l.jpg'
          alt='Banner'
          className='absolute inset-0 w-full h-full object-cover'
          loading='eager'
        />
        {/* content */}
        <div className='relative z-10 flex flex-col items-center justify-center h-full px-4 '>
          <p className='max-w-3xl mx-auto text-2xl text-white/90 animate-fade-in-up'>
            Infinity9 Organizer
          </p>
          <h1
            className='mt-6 text-6xl md:text-9xl font-extrabold text-purple-300 drop-shadow-[0_0_20px_rgba(215,166,255,0.8)] leading-tight animate-fade-in-up'
            style={{ animationDelay: '0.3s' }}
          >
            MAKE THE
            <br />
            CREATIVE EVENT
          </h1>

          <p
            className='mt-6 max-w-3xl mx-auto text-2xl text-white/90 animate-fade-in-up'
            style={{ animationDelay: '0.5s' }}
          >
            We specialize in creating impactful events, merging creativity and
            precision to deliver unforgettable, seamless experiences
          </p>
        </div>
      </div>

      <div className='px-6 md:px-24'>
        <ServiceBox />
        <PreviewContent />
        <Partner />
      </div>
    </Layout>
  );
}
