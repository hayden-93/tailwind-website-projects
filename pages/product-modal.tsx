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
            <p className='text-xxs font-light text-gray-500'>
              This offer is valid until April 3rd or as long as stock lasts!
            </p>
          </div>
          <div className='group'>
            <button className='w-full transition-all duration-150 bg-blue-700 text-white border-b-8 border-b-blue-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-t-blue-700 group-hover:shadow-lg'>
              <span className='block px-8 py-4 duration-150 bg-blue-500 rounded-lg group-hover:bg-blue-700'>
                Add to cart
              </span>
            </button>
          </div>
          <div className='flex items-center space-x-3 group'>
            <span className='w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping'></span>
            <span className='text-xs'>50+ pcs. in stock</span>
          </div>
          <div className='flex space-x-2 items-baseline'>
            <button className='flex justify-center items-center p-3 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150'>
              <Image
                src='/images/product-modal/weight.png'
                alt='Scales image'
                width={24}
                height={24}
              />
              <span className='text-xs'>Add to cart</span>
            </button>
            <div>
              <button className='flex justify-center items-center p-3 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150'>
                <Image
                  src='/images/product-modal/heart.png'
                  alt='Heart image'
                  width={24}
                  height={24}
                />
                <span className='text-xs'>Add to wishlist</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
