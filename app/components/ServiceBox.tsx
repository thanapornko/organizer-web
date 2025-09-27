import { Link } from '@remix-run/react';

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
    text: 'Corporate Event',
    image:
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1752044681/infinity9/servicesHomepage/cooperate_gzhab7.jpg',
    link: '/services#cooperate',
  },
];

// Cloudinary helper (ไม่กระทบสไตล์)
const cld = (url: string, w: number, h: number) =>
  url.replace('/upload/', `/upload/f_auto,q_auto,c_fill,w_${w},h_${h}/`);

export default function ServiceBox() {
  // JSON-LD (เบาๆ เพิ่มได้ ไม่กระทบ UI)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Our Services',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.text,
      url: s.link,
    })),
  };

  return (
    <section className='py-12 border-b border-gray-300 text-center'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className='relative inline-block mb-12'>
        <h2 className='text-2xl md:text-3xl font-bold tracking-widest text-[#5790c3] relative inline-block px-4 py-2 bg-[#5790c3]/10'>
          OUR SERVICES
        </h2>
        <div className='absolute left-0 right-0 bottom-0 translate-y-full h-[6px] bg-[#eb993b]'></div>
      </div>

      <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6'>
        {services.map((service, index) => {
          // เตรียมรูปให้ไว (คง h-[200px] เดิม)
          const s480 = cld(service.image, 480, 360);
          const s640 = cld(service.image, 640, 480);
          const s800 = cld(service.image, 800, 600);
          const srcSet = `${s480} 480w, ${s640} 640w, ${s800} 800w`;
          const sizes =
            '(min-width:1280px) 18vw, (min-width:1024px) 30vw, (min-width:640px) 45vw, 100vw';

          return (
            <div key={index} className='flex'>
              <Link
                to={service.link}
                prefetch='intent'
                className='w-full group h-full'
              >
                <div className='h-full flex flex-col p-3 bg-white shadow-lg hover:-translate-y-1 group-hover:bg-[#ecf2f8] transition-transform duration-800'>
                  {/* Image */}
                  <div className='h-[200px] overflow-hidden'>
                    <img
                      src={s640}
                      srcSet={srcSet}
                      sizes={sizes}
                      width={640}
                      height={480}
                      alt={`${service.text} — ตัวอย่างงานบริการโดย Infinity9 Organizer`}
                      className='w-full h-full object-cover group-hover:scale-103 transition-transform duration-800'
                      loading='lazy'
                      decoding='async'
                    />
                  </div>

                  {/* Text */}
                  <div className='p-5 flex-1 flex items-center justify-center bg-white group-hover:bg-[#ecf2f8] transition-transform duration-800'>
                    <p className='text-center text-gray-800 font-medium tracking-wide text-lg'>
                      {service.text}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
