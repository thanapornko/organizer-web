import Layout from './layout';
import { useState } from 'react';

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = {
    '2020': [
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1751704925/63-3_wvuhqe.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1751704926/63-10_unmg94.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1751704926/63-9_c6p3sa.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1751704926/63-8_ttq6bt.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1751704925/63-7_b8uwob.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1751704925/63-4_rhwbce.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1751704925/63-6_tfimf7.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1751704925/63-2_hgn4dn.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1751704925/63-5_luvp55.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1751704924/63-1_dikhbf.jpg',
    ],
    '2021': [
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1751705182/64-10_rphv5f.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1751705182/64-11_fnbi6f.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1751705181/64-9_olnwbk.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1751705181/64-8_swiyy7.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1751705181/64-7_jobupb.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1751705180/64-6_dopvnt.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1751705180/64-5_ngjtur.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1751705180/64-4_ix7mxa.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1751705180/64-3_yybwgt.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1751705179/64-2_onwjkw.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1751705179/64-1_ydiovg.jpg',
    ],
    '2022': [
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1751705511/65-12_nnmw2t.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1751705511/65-11_nt1xt8.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1751705510/65-10_omlgmx.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1751705509/65-9_ruejm4.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1751705509/65-8_zzbwfb.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1751705507/65-7_tlawsn.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1751705507/65-5_ynierp.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1751705507/65-4_myrrl9.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1751705507/65-6_noyn5m.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1751705506/65-3_o1zmq6.jpg',
      'https://res.cloudinary.com/dhgny94kc/image/upload/v1751705506/65-2_tnqfpy.jpg',
    ],
    '2023': [],
    '2024': [],
    '2025': [],
  };

  return (
    <Layout>
      <div className='pt-12 text-center px-6 md:px-24'>
        <h1 className='text-3xl font-bold tracking-widest text-black mb-6'>
          Portfolio
        </h1>
        <p className='text-gray-600'>
          ตัวอย่างผลงานของเราตลอดระยะเวลาที่ผ่านมา
        </p>
      </div>

      {/* Loop by year */}
      {Object.entries(projects).map(([year, images]) => (
        <section key={year} className='px-6 md:px-24 py-12'>
          <h2 className='text-xl font-semibold text-black mb-6 border-b pb-2'>
            ปี {year}
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6'>
            {images.map((src, idx) => (
              <div
                key={idx}
                className='overflow-hidden rounded-xl shadow cursor-pointer'
                onClick={() => setSelectedImage(src)}
              >
                <img
                  src={src}
                  alt={`portfolio-${year}-${idx}`}
                  className='w-full h-64 object-cover hover:scale-105 transition-transform duration-300'
                />
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Full Image Modal */}
      {selectedImage && (
        <div
          className='fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center'
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt='full-view'
            className='max-w-[90%] max-h-[90%] rounded-lg shadow-lg'
          />
        </div>
      )}
    </Layout>
  );
}
