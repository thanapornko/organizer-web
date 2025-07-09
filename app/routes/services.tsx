import Layout from './layout';
import '../index.css';

export default function Services() {
  const services = [
    {
      id: 'market',
      title: '1. Event Flea Market',
      description:
        'ประสบการณ์การจัด event flea market กว่า 10 ปี เราสร้างสรรค์ผลงานใหม่ๆตลอดเวลา เพื่อเสิร์ฟความสุขและความสนุกให้กับลูกค้า หมุนเวียนการจัดในพื้นที่ห้างสรรพสินค้าต่างๆทั่วกรุงเทพและปริมณฑลตลอด 10 ปีที่ผ่านมา',
      images: [
        'https://res.cloudinary.com/dhgny94kc/image/upload/v1752044726/infinity9/1.eventMarketFlea/event4_cnr5pi.jpg',
        'https://res.cloudinary.com/dhgny94kc/image/upload/v1752044727/infinity9/1.eventMarketFlea/event2_pznamr.jpg',
        'https://res.cloudinary.com/dhgny94kc/image/upload/v1752044729/infinity9/1.eventMarketFlea/event3_bvfb9n.jpg',
        'https://res.cloudinary.com/dhgny94kc/image/upload/v1752044725/infinity9/1.eventMarketFlea/event1_s2aycv.jpg',
        'https://res.cloudinary.com/dhgny94kc/image/upload/v1752044728/infinity9/1.eventMarketFlea/event5_zhqbn6.jpg',
      ],
    },
    {
      id: 'production',
      title: '2. Production',
      description:
        'ด้วยประสบการณ์การการทำงานกว่า 10 ปี ทำให้เรามีทีมงานที่รับผลิตโครงสร้างและอุปกรณ์ตกแต่งต่างๆ เรารับทำร้านเฟรนไชส์ ให้กับแบรนด์ต่างๆ รวมไปถึงโปรดักซ์ชั่นงานตกแต่งให้กับห้างสรรพสินค้าตามเทศกาลต่างๆ',
      images: [
        'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045095/infinity9/2.production/production1_mih6ia.jpg',
        'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045099/infinity9/2.production/production3_e9jfgd.jpg',
        'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045096/infinity9/2.production/production4_xflcbd.jpg',
        'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045097/infinity9/2.production/production5_trjblc.jpg',
        'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045097/infinity9/2.production/production6_yjh62y.jpg',
        'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045100/infinity9/2.production/production2_pmvfzw.jpg',
      ],
    },
    {
      id: 'activity',
      title: '3. Activity Service',
      description:
        'กิจกรรมไม่ว่าจะขนาดเล็กขนาดใหญ่ เพื่อส่งเสริมการตลาดของห้างสรรพสินค้าหรือบริษัทต่างๆ เรายินดีให้คำปรึกษาและจัดงานออกมาตามความประสงค์ของผู้ว่าจ้าง',
      images: [
        'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045121/infinity9/3.activity/activity7_lv73xp.png',
        'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045120/infinity9/3.activity/activity2_pdrbpk.jpg',
        'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045119/infinity9/3.activity/activity4_kbhqap.jpg',
        'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045117/infinity9/3.activity/activity6_lapdkq.jpg',
        'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045116/infinity9/3.activity/activity3_n67vmp.jpg',
        'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045115/infinity9/3.activity/activity5_denhhu.jpg',
        'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045114/infinity9/3.activity/activity1_fnahhw.jpg',
      ],
    },
    {
      id: 'workshop',
      title: '4. Workshop',
      description:
        'กิจกรรมที่ให้ลูกค้ามีส่วนร่วม เราได้จัดกิจกรรมต่างๆให้เข้ากับช่วงเวลานั้น เพื่อเพิ่มการมีส่วนร่วมของลูกค้า และทุกครั้งได้รับการตอบรับเป็นอย่างดี',
      images: [
        'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045147/infinity9/4.workshop/workshop1_qe0i73.png',
        'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045149/infinity9/4.workshop/workshop2_bv4q6p.png',
        'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045146/infinity9/4.workshop/workshop3_dsvrsq.jpg',
        'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045150/infinity9/4.workshop/workshop4_gmtyfw.png',
        'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045145/infinity9/4.workshop/workshop5_llvqiz.jpg',
      ],
    },
    {
      id: 'cooperate',
      title: '5. Cooperate Event',
      description:
        'ในปี 2024 เราได้ขยายขอบเขตการจัดงานไปถึง Cooperate event โดยได้รับจัดงานตั้งแต่งาน เทศกาล งานเลี้ยง งานสังสรรค์ งานเกษียณอำลา งานเปิดตัวสินค้า รวมไปถึงงานประชุมต่างๆให้กับบริษัทต่างๆเพิ่มขึ้น',
      images: [
        'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045213/infinity9/5.cooperate/cooperate1_uvpjlb.jpg',
        'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045170/infinity9/5.cooperate/cooperate2_u5nci5.jpg',
        'https://res.cloudinary.com/dhgny94kc/image/upload/v1752045313/infinity9/5.cooperate/cooperate3_tunljk.jpg',
      ],
    },
  ];

  return (
    <Layout>
      <div className='py-12 px-6 md:px-24'>
        <div className='relative inline-block mb-12'>
          <h1 className='text-3xl font-bold tracking-widest text-[#5790c3] relative inline-block px-4 py-2 bg-[#5790c3]/10'>
            Our Services
            <div className='absolute top-[2px] right-[-20px] w-0 h-0 border-y-[26px] border-l-[20px] border-y-transparent border-l-[#5790c3]/10'></div>
          </h1>
          <div className='absolute left-0 right-0 bottom-0 translate-y-full h-[6px] bg-[#eb993b]'></div>
        </div>

        {services.map((service) => (
          <div
            key={service.id}
            id={service.id}
            className='scroll-mt-16 w-full flex flex-col items-start mb-8 border-b border-gray-200'
          >
            <h2 className='text-xl font-bold tracking-wider text-black mb-4'>
              {service.title}
            </h2>
            <p>{service.description}</p>
            <div className='w-full mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14'>
              {service.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=''
                  className='w-full h-[350px] object-cover rounded-md'
                  loading='lazy'
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
