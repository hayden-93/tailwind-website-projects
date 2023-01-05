import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='text-black p-4'>
      <nav>
        <Link href='/' className=''>
          Back to Projects
        </Link>
      </nav>
    </header>
  );
}
