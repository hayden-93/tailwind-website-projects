import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Shortly = () => {
  return (
    <div>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <header>
        <nav className='relative container mx-auto p-6'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-20'>
              <Image
                src='/images/shortly/logo.svg'
                alt=''
                width={121}
                height={33}
              />
              <div className='hidden space-x-8 font-bold lg:flex'>
                <Link
                  href='#'
                  className='text-shortly-grayishViolet hover:text-shortly-veryDarkViolet'
                >
                  Features
                </Link>
                <Link
                  href='#'
                  className='text-shortly-grayishViolet hover:text-shortly-veryDarkViolet'
                >
                  Pricing
                </Link>
                <Link
                  href='#'
                  className='text-shortly-grayishViolet hover:text-shortly-veryDarkViolet'
                >
                  Resources
                </Link>
              </div>
            </div>
            <div className='hidden items-center space-x-6 font-bold text-shortly-grayishViolet lg:flex'>
              <div className='hover:text-shortly-veryDarkViolet'>Login</div>
              <Link
                href='#'
                className='py-3 px-8 font-bold text-white bg-shortly-cyan rounded-full hover:opacity-70'
              >
                Sign Up
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <div></div>
    </div>
  );
};

export default Shortly;
