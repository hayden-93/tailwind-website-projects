import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div className='grid grid-cols-3'>
        <Link href='/email-subscribe-card'>
          <Image
            src='/images/email-subscribe-card/emailsubscribe.png'
            alt='Email Card Image'
            width={300}
            height={300}
            className='rounded'
          />
        </Link>
      </div>
    </div>
  );
}
