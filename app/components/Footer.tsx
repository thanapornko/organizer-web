import { FaInstagram, FaLine, FaPhoneAlt, FaTiktok } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-black text-white px-8 md:px-20 py-8'>
      <div className='flex flex-col gap-8 md:flex-row md:gap-24'>
        {/* Left Column */}
        <div className='w-1/2 xl:w-3/5'>
          <h4 className='text-lg font-semibold mb-3'>เกี่ยวกับเรา</h4>
          <p className='text-sm leading-relaxed'>
            Infinity 9 organizer
            เกิดจากการรวมตัวกลุ่มคนรุ่นใหม่ที่มีความเชี่ยวชาญจากหลากหลายสาขาอาชีพ
            เพื่อนำเสนอการจัดงานที่มีเอกลักษณ์เป็นที่น่าประทับใจ
            โดยคำนึงถึงประโยชน์และคุณค่าสูงสุดที่คู่ค้าจะได้รับ
          </p>
        </div>

        {/* Right Column */}
        <div className='w-1/2 \l:w-2/5 space-y-4'>
          <h4 className='text-lg font-semibold'>ติดต่อเรา</h4>
          <div className='flex items-center gap-3'>
            <FaPhoneAlt className='text-green-500' />
            <p className='text-sm'>094-529-9552 (คุณตั้ม)</p>
          </div>
          <div className='flex items-start gap-3'>
            <FaLocationDot className='text-red-500' />
            <p className='text-sm'>
              บริษัท ซีโร่ทูบิลเลี่ยนกรุ๊ป จำกัด เลขที่ 88/63 หมู่2 ต.บางเดื่อ
              อ.เมืองปทุม จ.ปทุมธานี 12000
            </p>
          </div>
          <div className='flex items-start'>
            <a
              href='https://www.facebook.com/infinity9organizer?locale=th_TH'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block'
              style={{ width: '200px' }}
            >
              <div className='flex items-center gap-3 hover:opacity-80 transition'>
                <FaFacebook className='text-blue-500 text-xl' />
                <p className='text-sm'>Infinity9 Organizer</p>
              </div>
            </a>
            <a
              href='https://www.tiktok.com/@infinity9organizer'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block'
            >
              <div className='flex items-center gap-3 hover:opacity-80 transition'>
                <FaTiktok className='text-white text-xl' />
                <p className='text-sm'>infinity9organizer</p>
              </div>
            </a>
          </div>
          <div className='flex items-start'>
            <a
              href='https://www.instagram.com/infinity9organizer/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block'
              style={{ width: '200px' }}
            >
              <div className='flex items-center gap-3 hover:opacity-80 transition'>
                <FaInstagram className='text-red-400 text-xl' />
                <p className='text-sm'>infinity9organizer</p>
              </div>
            </a>
            <a
              href='https://line.me/ti/p/~infi.9'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block'
            >
              <div className='flex items-center gap-3 hover:opacity-80 transition'>
                <FaLine className='text-green-400 text-xl' />
                <p className='text-sm'>infi.9</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
