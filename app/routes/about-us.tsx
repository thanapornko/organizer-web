import Layout from './layout';

export default function AboutUs() {
  return (
    <Layout>
      <div className='pt-12 text-center px-6 md:px-24'>
        <h1 className='text-3xl font-bold tracking-widest text-black mb-10 underline'>
          เกี่ยวกับเรา
        </h1>
        <p>
          Infinity 9 organizer
          เกิดจากการรวมตัวกลุ่มคนรุ่นใหม่ที่มีความเชี่ยวชาญจากหลากหลายสาขาอาชีพ
          เพื่อนำเสนอการจัดงานที่มีเอกลักษณ์เป็นที่น่าประทับใจ
          โดยคำนึงถึงประโยชน์และคุณค่าสูงสุดที่คู่ค้าจะได้รับ
          ภายใต้หลักการทำงานที่ยึดถือ “ความคิดสร้างสรรค์” “ความซื่อสัตย์” และ
          “ความรัก” เป็นหลักสำคัญในการผลักดันผลงานให้มีคุณภาพ
        </p>
        <br />
        <p>
          โดยในปี 2025 นี้ Infinity 9 organizer
          มีความมุ่งมั่นที่จะสร้างสรรค์ผลงานที่หลากหลายมากยิ่งขึ้น
          ทั้งในรูปแบบของงาน Event Market
          ที่เราได้นำเสนอและประสบความสำเร็จเป็นอย่างดีตลอดปี 2017 – 2024
          รวมถึงขยายการจัดงานในรูปแบบของ Road Show, Company’s Annual Party ,
          Supplier event และ Live Band
          เพื่อตอบสนองความต้องการของลูกค้าและเข้าถึงทุกเพศทุกวัย
          รวมถึงการเสาะแสวงหาพันธมิตร (Collaboration)
          หลากหลายวงการเพื่อสร้างสรรค์งานใหม่ๆและไม่ลืมที่จะส่งต่อกำไรกลับคืนสู่สังคมตามปณิธานของ
          Infinity 9 organizer อีกด้วย
        </p>
      </div>

      <h1 className='text-3xl font-bold tracking-widest text-black pt-16 text-center px-6 md:px-24 underline'>
        ความเป็นมา
      </h1>
      <div className='pt-8 px-6 md:px-24'>
        <div className='relative border-l-4 border-gray-200 max-w-3xl mx-auto space-y-8'>
          {/* Year: 2017 */}
          <div className='ml-6'>
            <div className='absolute -left-3 top-1 w-6 h-6 bg-pink-500 rounded-full border-4 border-white shadow' />
            <h3 className='text-lg font-semibold text-gray-800 text-start'>
              2017 – Events & Mini concert
            </h3>
            <p className='text-sm text-gray-600 mt-2 text-start'>
              เริ่มต้นจัดอีเวนท์มีทั้งพื้นที่ขายสินค้าและกิจกรรมพิเศษภายในงาน
              อาทิ มินิคอนเสิร์ต กิจกรรมวันตรุษจีน กิจกรรมวันเด็ก
              ลานเบียร์ช่วงปีใหม่
            </p>
          </div>

          {/* Year: 2018 */}
          <div className='ml-6'>
            <div className='absolute -left-3 top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow' />
            <h3 className='text-lg font-semibold text-gray-800 text-start'>
              2021 – Outsource for Department Store
            </h3>
            <p className='text-sm text-gray-600 mt-2 text-start'>
              ขยายธุรกิจ รับงานออกแบบงานอีเว้นท์ ให้ห้างใหญ่ๆ อาทิ เดอะมอล์
              เซนทรัลล์
            </p>
          </div>

          {/* Year: 2022 */}
          <div className='ml-6'>
            <div className='absolute -left-3 top-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow' />
            <h3 className='text-lg font-semibold text-gray-800 text-start'>
              2022 – New Service Line “Cooperate with Department Store”
            </h3>
            <p className='text-sm text-gray-600 mt-2 text-start'>
              ขยายไลน์ธุรกิจเพิ่มขึ้น โดยการ co-event ร่วมกับทางห้าง
              งานรวมร้านอาหารดัง ตามธีม ทำเป็นรอบ ทุกๆ 4 เดือน
            </p>
          </div>

          {/* Year: 2023 */}
          <div className='ml-6'>
            <div className='absolute -left-3 top-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow' />
            <h3 className='text-lg font-semibold text-gray-800 text-start'>
              2023 – New Service line “Production Supplier”
            </h3>
            <p className='text-sm text-gray-600 mt-2 text-start'>
              ขยายไลน์ธุรกิจด้านงานผลิต ท้ังกลุ่มลูกค้า B2B และ B2C
              ผลิตตกแต่งงานปีใหม่ ผลิตชิ้นงาน branding
              งานออกแบบและติดตั้งร้านค้า งานตกแต่งร้านค้า
            </p>
          </div>

          {/* Year: 2025 */}
          <div className='ml-6'>
            <div className='absolute -left-3 top-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow' />
            <h3 className='text-lg font-semibold text-gray-800 text-start'>
              2025 – Upcoming “Outsource for Cooperate Dining ”
            </h3>
            <p className='text-sm text-gray-600 mt-2 text-start'>
              งานจัดเลี้ยงประชุมสัมมนา งานจัดเลี้ยงภายในบริษัท
              งานจัดเลี้ยงนอกสถานที่
            </p>
          </div>
        </div>
      </div>

      <div className='pt-16 pb-12 text-center px-6 md:px-24 '>
        <h1 className='text-3xl font-bold tracking-widest text-black mb-10 underline'>
          ปณิทานของเรา
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto'>
          <div className='bg-[#E11D48] shadow-md rounded-xl p-6 border'>
            <h3 className='text-xl font-semibold text-white mb-2'>Passion</h3>
            <p className='text-sm text-white'>
              เราทำงานด้วยความหลงใหลและเชื่อมั่นว่าสิ่งที่ดีเริ่มจากใจที่รักในสิ่งที่ทำ
            </p>
          </div>

          <div className='bg-[#0E7490] shadow-md rounded-xl p-6 border'>
            <h3 className='text-xl font-semibold text-white mb-2'>Integrity</h3>
            <p className='text-sm text-white'>
              ความซื่อสัตย์ต่อคู่ค้าและลูกค้า
              คือรากฐานของความไว้วางใจที่เรายึดมั่น
            </p>
          </div>

          <div className='bg-[#10B981] shadow-md rounded-xl p-6 border'>
            <h3 className='text-xl font-semibold text-white mb-2'>
              Collaboration
            </h3>
            <p className='text-sm text-white'>
              เราเชื่อในพลังของการร่วมมือ
              เพื่อสร้างสรรค์สิ่งที่ยิ่งใหญ่ไปด้วยกัน
            </p>
          </div>
          <div className='bg-[#7f34cb] shadow-md rounded-xl p-6 border'>
            <h3 className='text-xl font-semibold text-white mb-2'>
              Work & Service
            </h3>
            <p className='text-sm text-white'>
              การทำงานที่มีคุณภาพ และบริการด้วยหัวใจ คือนิยามของ Infinity 9
              Organizer
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
