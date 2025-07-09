const services = [
  {
    text: 'Event Flea Market',
    image:
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1752044681/infinity9/servicesHomepage/event_nukog5.jpg',
    link: '/services#market',
  },
  {
    text: 'Production',
    image:
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1752044680/infinity9/servicesHomepage/production_udb3ex.jpg',
    link: '/services#production',
  },
  {
    text: 'Activity Service',
    image:
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1752044681/infinity9/servicesHomepage/activity_whjoe3.jpg',
    link: '/services#activity',
  },
  {
    text: 'Workshop',
    image:
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1752044682/infinity9/servicesHomepage/workshop_gx41n4.jpg',
    link: '/services#workshop',
  },
  {
    text: 'Cooperate Event',
    image:
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1752044681/infinity9/servicesHomepage/cooperate_gzhab7.jpg',
    link: '/services#cooperate',
  },
];

export default function ServiceBox() {
  return (
    <section className='py-12 border-b border-gray-300 text-center'>
      <div className='relative inline-block mb-12'>
        <h2 className='text-2xl md:text-3xl font-bold tracking-widest text-[#5790c3] relative inline-block px-4 py-2 bg-[#5790c3]/10'>
          OUR SERVICES
        </h2>
        <div className='absolute left-0 right-0 bottom-0 translate-y-full h-[6px] bg-[#eb993b]'></div>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6'>
        {services.map((service, index) => (
          <div key={index} className='flex'>
            <a href={service.link} className='w-full group h-full'>
              <div className='h-full flex flex-col p-3 bg-white shadow-lg hover:-translate-y-1 group-hover:bg-[#ecf2f8] transition-transform duration-800'>
                {/* Image */}
                <div className='h-[200px] overflow-hidden'>
                  <img
                    src={service.image}
                    alt=''
                    className='w-full h-full object-cover group-hover:scale-103 transition-transform duration-800'
                  />
                </div>

                {/* Text */}
                <div className='p-5 flex-1 flex items-center justify-center bg-white group-hover:bg-[#ecf2f8] transition-transform duration-800'>
                  <p className='text-center text-gray-800 font-medium tracking-wide text-lg'>
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
