const services = [
  {
    text: 'EVENT FLEA MARKET',
    image: '/images/service1.jpg',
  },
  {
    text: 'PRODUCTION',
    image: '/images/service1.jpg',
  },
  {
    text: 'ACTIVITIES SERVICE',
    image: '/images/service1.jpg',
  },
  {
    text: 'WORKSHOP',
    image: '/images/service1.jpg',
  },
  {
    text: 'COOPERATE EVENT',
    image: '/images/service1.jpg',
  },
];

export default function ServiceBox() {
  return (
    <section className='py-12 border-b border-gray-300 text-center'>
      <h2 className='text-2xl font-bold tracking-widest text-black mb-10'>
        OUR SERVICES
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4'>
        {services.map((service, index) => (
          <div key={index} className='flex justify-center'>
            <div className='w-full h-[200px] bg-white border-r border-b border-gray-200 rounded-lg shadow-sm flex flex-col'>
              <img
                className='w-full h-[100px] object-cover rounded-t-lg'
                src={service.image}
                alt=''
              />
              <div className='p-5 flex-1 flex items-center justify-center'>
                <p className='text-center font-normal text-gray-700'>
                  {service.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
