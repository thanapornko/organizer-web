import { Link } from '@remix-run/react';

export default function PreviewButton() {
  return (
    <div className='flex justify-center'>
      <Link to='/about-us'>
        <button className='bg-black text-white font-medium py-2 px-4 rounded hover:bg-violet-950 transition duration-300'>
          อ่านเพิ่มเติม
        </button>
      </Link>
    </div>
  );
}
