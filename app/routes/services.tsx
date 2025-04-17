import Layout from './layout';
import '../index.css';

export default function Services() {
  return (
    <Layout>
      <div className='py-12 text-center px-6 md:px-24'>
        <h1 className='text-3xl font-bold tracking-widest text-black mb-10'>
          Our Services
        </h1>
        <div
          id='market'
          className='scroll-mt-16 w-full flex flex-col items-start mb-8'
        >
          <h2 className='text-xl font-bold tracking-wider text-black mb-2'>
            1. Event Flea Market
          </h2>
          <p>เรารับทำ</p>
          <div className='w-full mt-4 flex flex-col gap-4 md:grid md:grid-cols-2'>
            <img
              src='https://res.cloudinary.com/dhgny94kc/image/upload/v1744896094/65-5_mjkb7a.jpg'
              alt=''
              className='w-full h-[450px] object-cover rounded-md'
              loading='lazy'
            />
            <img
              src='https://res.cloudinary.com/dhgny94kc/image/upload/v1744896098/64-10_ttelqh.jpg'
              alt=''
              className='w-full h-[450px] object-cover rounded-md'
              loading='lazy'
            />
          </div>
        </div>
        <div
          id='production'
          className='scroll-mt-16 w-full flex flex-col items-start mb-8'
        >
          <h2 className='text-xl font-bold tracking-wider text-black mb-4'>
            2. Production
          </h2>
          <p>เรารับทำ</p>
          <div className='w-full mt-4 flex flex-col gap-4 md:grid md:grid-cols-2'>
            <img
              src='https://res.cloudinary.com/dhgny94kc/image/upload/v1744896139/64-3_b0nuev.jpg'
              alt=''
              className='w-full h-[450px] object-cover rounded-md'
              loading='lazy'
            />
            <img
              src='https://res.cloudinary.com/dhgny94kc/image/upload/v1744896129/S__45916166_iwdoav.jpg'
              alt=''
              className='w-full h-[450px] object-cover rounded-md'
              loading='lazy'
            />
          </div>
        </div>
        <div
          id='activity'
          className='scroll-mt-16 w-full flex flex-col items-start mb-8'
        >
          <h2 className='text-xl font-bold tracking-wider text-black mb-4'>
            3. Activity Service
          </h2>
          <p>เรารับทำ</p>
          <div className='w-full mt-4 flex flex-col gap-4 md:grid md:grid-cols-2'>
            <img
              src='https://res.cloudinary.com/dhgny94kc/image/upload/v1744896038/65-1_gtviyb.jpg'
              alt=''
              className='w-full h-[450px] object-cover rounded-md'
              loading='lazy'
            />
            <img
              src='https://res.cloudinary.com/dhgny94kc/image/upload/v1744896042/chinese_wfmnun.png'
              alt=''
              className='w-full h-[450px] object-cover rounded-md'
              loading='lazy'
            />
          </div>
        </div>
        <div
          id='workshop'
          className='scroll-mt-16 w-full flex flex-col items-start mb-8'
        >
          <h2 className='text-xl font-bold tracking-wider text-black mb-4'>
            4. Workshop
          </h2>
          <p>เรารับทำ</p>
          <div className='w-full mt-4 flex flex-col gap-4 md:grid md:grid-cols-2'>
            <img
              src='https://res.cloudinary.com/dhgny94kc/image/upload/v1744896260/workshop1_dzbpta.png'
              alt=''
              className='w-full h-[450px] object-cover rounded-md'
              loading='lazy'
            />
            <img
              src='https://res.cloudinary.com/dhgny94kc/image/upload/v1744896266/workshop2_byq1u2.png'
              alt=''
              className='w-full h-[450px] object-cover rounded-md'
              loading='lazy'
            />
          </div>
        </div>
        <div
          id='cooperate'
          className='scroll-mt-16 w-full flex flex-col items-start mb-8'
        >
          <h2 className='text-xl font-bold tracking-wider text-black mb-4'>
            5.Cooperate Event
          </h2>
          <p>เรารับทำ</p>
          <div className='w-full mt-4 flex flex-col gap-4 md:grid md:grid-cols-2'>
            <img
              src='https://res.cloudinary.com/dhgny94kc/image/upload/v1744895939/cooperation_zrsvjm.png'
              alt=''
              className='w-full h-[450px] object-cover rounded-md'
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
