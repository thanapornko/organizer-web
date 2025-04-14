const services = [
  {
    title: 'EVENT',
    icon: '🎉',
  },
  {
    title: 'CONCERT',
    icon: '🎵',
  },
  {
    title: 'CONFERENCE',
    icon: '👥',
  },
  {
    title: 'WEDDING',
    icon: '🌸',
  },
];

export default function ServiceBox() {
  return (
    <section className='py-12 border-b border-gray-300 text-center'>
      <h2 className='text-2xl font-bold tracking-widest text-black mb-10'>
        OUR SERVICES
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12'>
        {services.map((service, index) => (
          <div key={index} className='flex flex-col items-center gap-4'>
            <div className='w-40 h-40 flex items-center justify-center bg-black text-white text-6xl rounded-full'>
              {service.icon}
            </div>
            <h3 className='text-lg font-bold tracking-widest text-black'>
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
