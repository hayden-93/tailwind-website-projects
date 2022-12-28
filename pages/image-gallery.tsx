import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ImageGallery = () => {
  return (
    <div className='h-screen bg-cyan-50'>
      <div>
        <Link href='/'>Back to Projects</Link>
      </div>
      <div className='max-w-screen-lg mx-auto bg-white py-20 rounded-xl'>
        <header className='p-8'>
          <nav>
            <ul className='flex justify-end space-x-8'>
              <li>
                <Link href='/'>Vector</Link>
              </li>
              <li>
                <Link href='/'>Illustrations</Link>
              </li>
              <li>
                <Link href='/'>Images</Link>
              </li>
              <li>
                <Link href='/'>Icons</Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className='flex flex-col justify-between space-y-5 md:flex-row md:space-y-0'>
          <div className='flex justify-between border-b ml-7'>
            <input
              type='text'
              className='ml-6 placeholder:font-thin focus:outline-none md:w-80'
              placeholder='Search'
            />
            <button>
              <svg
                className='w-6 text-gray-300 duration-200 hover:scale-110'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                fill='none'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <circle cx='10' cy='10' r='7' />
                <line x1='21' y1='21' x2='15' y2='15' />
              </svg>
            </button>
          </div>
          <div className='mr-7'>
            <button className='py-3 px-14 text-lg font-normal text-white bg-black border border-black rounded-md shadow-2xl duration-200 hover:bg-white hover:text-black'>
              Upload
            </button>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-4 px-7 mt-10'>
          <div>
            <Image
              src='/images/image-gallery/image1.jpg'
              alt=''
              width={300}
              height={300}
              className='w-full'
            />
          </div>
          <div>
            <div>
              <Image
                src='/images/image-gallery/image2.jpg'
                alt=''
                width={300}
                height={300}
                className='w-full'
              />
            </div>
          </div>
          <div>
            <div>
              <Image
                src='/images/image-gallery/image3.jpg'
                alt=''
                width={300}
                height={300}
                className='w-full'
              />
            </div>
          </div>
          <div>
            <div>
              <Image
                src='/images/image-gallery/image4.jpg'
                alt=''
                width={300}
                height={300}
                className='w-full'
              />
            </div>
          </div>
          <div>
            <div>
              <Image
                src='/images/image-gallery/image5.jpg'
                alt=''
                width={300}
                height={300}
                className='w-full'
              />
            </div>
          </div>
          <div>
            <div>
              <Image
                src='/images/image-gallery/image6.jpg'
                alt=''
                width={300}
                height={300}
                className='w-full'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
