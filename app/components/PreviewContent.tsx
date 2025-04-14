import PreviewButton from './PreviewButton';

export default function PreviewContent() {
  return (
    <div className='py-16 border-b border-gray-300'>
      <div className='flex flex-col lg:flex-row gap-10'>
        {/* Image */}
        <img
          src='https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          className='w-full lg:w-[500px] h-[500px] object-cover rounded-lg flex-shrink-0'
          alt='Event Preview'
        />

        {/* Text Content */}
        <div className='flex flex-col justify-between gap-10'>
          <div>
            <h2 className='text-2xl font-semibold tracking-widest mb-4 text-black'>
              Unforgettable Moments: A Glimpse Into Our Events
            </h2>
            <p className='text-lg font-medium tracking-wide text-black'>
              "From corporate gatherings to intimate celebrations, we bring
              visions to life with seamless execution and creative excellence.
              Whether it’s a conference, concert, or wedding, our team turns
              ideas into reality with passion and precision. Let us craft
              unforgettable moments that leave a lasting impression."
            </p>
          </div>

          <PreviewButton />
        </div>
      </div>
    </div>
  );
}
