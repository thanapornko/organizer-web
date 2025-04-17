const services = [
  {
    text: 'Event Flea Market',
    image:
      'https://res.cloudinary.com/dhgny94kc/image/upload/f_webp/v1744895819/63-1_tsykjc.jpg',
    link: '/services#market',
  },
  {
    text: 'Production',
    image:
      'https://res.cloudinary.com/dhgny94kc/image/upload/f_webp/v1744895880/production_ravsp3.png',
    link: '/services#production',
  },
  {
    text: 'Activity Service',
    image:
      'https://res.cloudinary.com/dhgny94kc/image/upload/f_webp/v1744895893/activity_jkxqd5.png',
    link: '/services#activity',
  },
  {
    text: 'Workshop',
    image:
      'https://res.cloudinary.com/dhgny94kc/image/upload/f_webp/v1744895896/workshop_qhjiuz.png',
    link: '/services#workshop',
  },
  {
    text: 'Cooperate Event',
    image:
      'https://res.cloudinary.com/dhgny94kc/image/upload/f_webp/v1744895939/cooperation_zrsvjm.png',
    link: '/services#cooperate',
  },
];

export default function ServiceBox() {
  return (
    <section className='py-12 border-b border-gray-300 text-center'>
      <h2 className='text-2xl font-bold tracking-widest text-black mb-10'>
        OUR SERVICES
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 '>
        {services.map((service, index) => (
          <div key={index} className='flex'>
            <a href={service.link} className='w-full group h-full'>
              <div className='h-full flex flex-col rounded-lg shadow-sm transform transition duration-300 group-hover:scale-105 group-hover:bg-violet-950 bg-slate-950 group-hover:shadow-lg'>
                {/* Fixed-height image container */}
                <div className='h-[180px] overflow-hidden p-2 pb-0 rounded-t-lg'>
                  <img
                    className='w-full h-full object-cover'
                    src={service.image}
                    alt=''
                  />
                </div>

                {/* Text Section */}
                <div className='p-5 flex-1 flex items-center justify-center rounded-b-lg'>
                  <p className='text-center font-medium text-white tracking-wider'>
                    {service.text}
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
