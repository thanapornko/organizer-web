import PreviewButton from './PreviewButton';

export default function PreviewContent() {
  return (
    <div className='py-16 border-b border-gray-300'>
      <div className='flex flex-col lg:flex-row gap-10'>
        {/* Image */}
        <img
          src='https://res.cloudinary.com/dhgny94kc/image/upload/v1752061340/infinity9/tumcover_kpu470.jpg'
          className='w-full lg:w-[500px] h-[300px] sm:h-[400px] lg:h-full object-cover rounded-lg flex-shrink-0'
          alt='Event Preview'
        />

        {/* Text Content */}
        <div className='flex flex-col justify-between gap-8'>
          <div>
            <h2 className='text-2xl font-semibold tracking-widest mb-4 text-black'>
              ความคิดสร้างสรรค์ การันตีคุณภาพงาน และ การบริการ ความซื่อสัตย์
              และหัวใจที่พร้อมบริการ
            </h2>
            <p className='text-lg font-medium tracking-wide text-black'>
              "เราผลิตและสร้างสรรค์ผลงานที่คำนึงที่ความต้องการของลูกค้า
              และทำงานอย่างตรงไปตรงมา เพื่อมอบประสบการณ์ที่ดีที่สุด
              ทีมงานของเราเปี่ยมไปด้วย Passion และไอเดียแปลกใหม่
              สร้างความเป็นเอกลักษณ์ ความแตกต่างที่ไม่เหมือนใคร ความซื่อสัตย์
              และหัวใจที่พร้อมบริการ คือ จุดแข็งหลักที่ลูกค้า ทั้ง B2B และ B2C
              มั่นใจและวางใจที่จะทำงานร่วมกับบริษัทของเรา ตลอดระยะเวลา 9 ปี
              ที่ผ่านมา"
            </p>
          </div>

          <PreviewButton />
        </div>
      </div>
    </div>
  );
}
