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
        <section id='hero' className=''>
          <div className='container flex flex-col-reverse mx-auto p-6 lg:flex-row'>
            <div className='flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52'>
              <h1 className='text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left'>
                More than shorter links
              </h1>
              <p className='text-2xl text-center text-gray-400 lg:max-w-md lg:text-left'>
                build your brands recognition and get detailed insights on how
                your links are performing.
              </p>
              <div className='mx-auto lg:mx-0'>
                <Link
                  href='#'
                  className='py-5 px-10 text-2xl font-bold text-white bg-shortly-cyan rounded-full lg:py-4 hover:opacity-70'
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className='mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2'>
              <Image
                src='/images/shortly/illustration-working.svg'
                alt='Hero image - person sat working'
                width={733}
                height={482}
                className=''
              />
            </div>
          </div>
        </section>
      </header>
      <div></div>
    </div>
  );
};

export default Shortly;
