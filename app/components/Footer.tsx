import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-black text-white px-8 md:px-20 py-8'>
      <div className='flex flex-col gap-8 md:flex-row md:gap-24'>
        {/* Left Column */}
        <div className='md:w-3/5'>
          <h4 className='text-lg font-semibold mb-3'>เกี่ยวกับเรา</h4>
          <p className='text-sm leading-relaxed'>
            Infinity 9 organizer
            เกิดจากการรวมตัวกลุ่มคนรุ่นใหม่ที่มีความเชี่ยวชาญจากหลากหลายสาขาอาชีพ
            เพื่อนำเสนอการจัดงานที่มีเอกลักษณ์เป็นที่น่าประทับใจ
            โดยคำนึงถึงประโยชน์และคุณค่าสูงสุดที่คู่ค้าจะได้รับ
          </p>
        </div>

        {/* Right Column */}
        <div className='md:w-2/5 space-y-4'>
          <h4 className='text-lg font-semibold'>ติดต่อเรา</h4>
          <div className='flex items-center gap-3'>
            <FaPhoneAlt className='text-green-500' />
            <p className='text-sm'>082-444-2257</p>
          </div>
          <div className='flex items-start gap-3'>
            <FaLocationDot className='text-red-500' />
            <p className='text-sm'>
              21 ซอย สวัสดีทวีสุข แขวง ยานนาวา อำเภอ เมือง จังหวัด กรุงเทพ 11035
            </p>
          </div>
          <div className='flex items-center gap-3'>
            <FaFacebook className='text-blue-500' />
            <p className='text-sm'>infinity9 organizer</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
