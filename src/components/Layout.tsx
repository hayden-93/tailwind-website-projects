import React from 'react';

import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: any) {
  return (
    <>
      <div className='bg-dark-slate5 text-black'>
        <div className='max-w-screen-2xl mx-auto'>
          <Header />
          <main className='flex-1'>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
}
