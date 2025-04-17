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
          <div className='w-full grid grid-cols-2 gap-4 mt-4'>
            <img
              src='/images/market1.png'
              alt=''
              className='w-full h-[450px] object-cover rounded-md'
              loading='lazy'
            />
            <img
              src='/images/market2.png'
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
          <div className='w-full grid grid-cols-2 gap-4 mt-4'>
            <img
              src='/images/production1.png'
              alt=''
              className='w-full h-[450px] object-cover rounded-md'
              loading='lazy'
            />
            <img
              src='/images/production2.png'
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
          <div className='w-full grid grid-cols-2 gap-4 mt-4'>
            <img
              src='/images/activity1.png'
              alt=''
              className='w-full h-[450px] object-cover rounded-md'
              loading='lazy'
            />
            <img
              src='/images/activity2.png'
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
          <div className='w-full grid grid-cols-2 gap-4 mt-4'>
            <img
              src='/images/workshop1.png'
              alt=''
              className='w-full h-[450px] object-cover rounded-md'
              loading='lazy'
            />
            <img
              src='/images/workshop2.png'
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
          <div className='w-full grid grid-cols-2 gap-4 mt-4'>
            <img
              src='/images/market1.png'
              alt=''
              className='w-full h-[450px] object-cover rounded-md'
              loading='lazy'
            />
            <img
              src='/images/market2.png'
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
