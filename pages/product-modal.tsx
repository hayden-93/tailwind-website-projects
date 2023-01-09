import React from 'react';

import Image from 'next/image';

const ProductModal = () => {
  return (
    <div className='min-h-screen py-48 bg-slate-100'>
      <div className='max-w-screen-md mx-auto flex p-10 bg-white rounded-2xl shadow-2xl'>
        <div>
          <Image
            src='/images/product-modal/headphone.png'
            alt='Headphones'
            width={240}
            height={240}
            className='rounded-l-2xl'
          />
        </div>
        <div className='flex flex-col px-24 space-y-6'>
          <div className='space-y-4'>
            <label className='py-1 px-2 bg-black text-white font-light text-xs rounded-2xl'>
              Free shipping
            </label>
            <h2 className='text-lg capitalize'>
              Razer kraken kitty edt gaming headset quartz
            </h2>
          </div>
          <div className='space-y-2'>
            <span className='block text-xs line-through'>$799</span>
            <span className='block text-4xl font-bold'>$599</span>
            <p className='text-xxs font-light'>
              This offer is valid until April 3rd or as long as stock lasts!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
