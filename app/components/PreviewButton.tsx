import { Link } from '@remix-run/react';

export default function PreviewButton() {
  return (
    <div className='flex justify-center'>
      <Link
        to='/about-us'
        prefetch='intent'
        aria-label='อ่านเพิ่มเติมเกี่ยวกับ Infinity9 Organizer'
        title='อ่านเพิ่มเติมเกี่ยวกับ Infinity9 Organizer'
        className='inline-flex items-center rounded bg-black px-4 py-2
                   text-white font-medium transition
                   hover:bg-violet-950 focus:outline-none
                   focus-visible:ring-2 focus-visible:ring-violet-500
                   focus-visible:ring-offset-2 focus-visible:ring-offset-white'
      >
        อ่านเพิ่มเติมเกี่ยวกับเรา
      </Link>
    </div>
  );
}
