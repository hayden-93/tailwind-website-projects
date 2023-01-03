import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='max-w-screen-md mx-auto mt-10'>
      <div className='grid grid-cols-3 gap-2'>
        <Link href='/email-subscribe-card'>
          <Image
            src='/images/email-subscribe-card/emailsubscribe.png'
            alt='Email Card Image'
            width={300}
            height={300}
            className='rounded h-full'
          />
        </Link>
        <Link href='/image-gallery'>
          <Image
            src='/images/image-gallery/image-gallery.png'
            alt='Image Gallery'
            width={300}
            height={300}
            className='rounded'
          />
        </Link>
        <Link href='/login-modal'>
          <Image
            src='/images/login-modal/login-modal.png'
            alt='Image Gallery'
            width={300}
            height={300}
            className='rounded'
          />
        </Link>
      </div>
    </div>
  );
}
