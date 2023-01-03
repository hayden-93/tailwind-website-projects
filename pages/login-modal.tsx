import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const LoginModal = () => {
  return (
    <div className='h-full bg-rose-50'>
      <Head>
        <Link
          href='https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700&family=Rokkitt:wght@600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div className='max-w-screen-md mx-auto flex bg-white mt-10 rounded-2xl shadow-2xl'>
        <div className='py-14 px-16 space-y-6'>
          <div className='space-y-4'>
            <h2 className='font-display text-2xl font-semibold'>Log In</h2>
            <p className='text-gray-600 text-sm'>
              Log in to your account to upload or download pictures, videos or
              music.
            </p>
          </div>
          <div className='space-y-6'>
            <div className='justify-center items-center'>
              <input
                placeholder='Enter your email address'
                className='w-full p-5 border text-sm rounded'
              />
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-sm text-cyan-700'>Forgot Password?</span>
              <button className='flex p-5 bg-black text-white text-sm font-semibold rounded hover:bg-cyan-700'>
                Next
                <span className='pl-2'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <line x1='5' y1='12' x2='19' y2='12'></line>
                    <polyline points='12 5 19 12 12 19'></polyline>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <hr />
          <span className='block text-center text-gray-400'>
            Or log in with
          </span>
          <div className='flex space-x-4'>
            <button className='flex w-1/2 justify-center items-center space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150'>
              <Image
                src='/images/login-modal/facebook.png'
                alt='Facebook icon'
                width={24}
                height={24}
              />
              <span className='font-thin'>Facebook</span>
            </button>
            <button className='flex w-1/2 justify-center items-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150'>
              <Image
                src='/images/login-modal/google.png'
                alt='Google icon'
                width={24}
                height={24}
              />
              <span className='font-thin'>Google</span>
            </button>
          </div>
        </div>
        <div>
          <Image
            src='/images/login-modal/water.jpeg'
            alt='Water image'
            width={600}
            height={300}
            className='h-full rounded-r-lg'
          />
          <div className='group absolute right-72 top-20 flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full md:bg-white hover:cursor-pointer hover:-translate-y-0.5 transition duration-150'>
            <svg
              className='w-6 h-6 text-black group-hover:text-gray-600'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <line x1='18' y1='6' x2='6' y2='18' />
              <line x1='6' y1='6' x2='18' y2='18' />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
