import React from 'react';

import Head from 'next/head';
import Image from 'next/image';

const ClipboardWebsite = () => {
  return (
    <div className='font-Bai-Jamjuree text-sm'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;600&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div>
        <div className='flex justify-center items-center'>
          <div className='absolute'>
            <Image
              src='/images/clipboard-website/bg-header-desktop.png'
              alt='Header background image'
              width={1440}
              height={810}
              className='relative'
            />
          </div>
          <svg width='125' height='125' className='mt-24'>
            <g stroke='#26BBA4' strokeWidth='10' fill='none' fillRule='evenodd'>
              <circle cx='62.5' cy='62.5' r='57.5' />
              <path
                d='M85.481 85.481c-12.692 12.692-33.27 12.692-45.962 0s-12.692-33.27 0-45.962 33.27-12.692 45.962 0'
                strokeLinecap='round'
              />
            </g>
          </svg>
        </div>
        <div className='max-w-screen-sm mx-auto mt-16 space-y-4'>
          <h1 className='text-neutral-clipboard-dark-blue text-3xl font-medium text-center'>
            A history of everything you copy
          </h1>
          <p className='max-w-lg mx-auto text-neutral-clipboard-blue text-center'>
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
          <div className='flex justify-center items-center space-x-2 py-6'>
            <button className='py-2 px-6 bg-primary-clipboard-cyan text-white text-xs rounded-full shadow-sm shadow-primary-clipboard-cyan hover:cursor-pointer'>
              Download for iOS
            </button>
            <button className='py-2 px-6 bg-primary-clipboard-light-blue text-white text-xs rounded-full shadow-sm shadow-primary-clipboard-light-blue hover:cursor-pointer'>
              Download for Mac
            </button>
          </div>
        </div>
        <div className='mt-20 text-center space-y-4'>
          <h2 className='max-w-screen-sm mx-auto text-neutral-clipboard-dark-blue text-2xl font-medium'>
            Keep track of your snippets
          </h2>
          <p className='max-w-screen-sm mx-auto text-neutral-clipboard-blue'>
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
          <div className='py-20'>
            <div className='flex space-x-8'>
              <Image
                src='/images/clipboard-website/image-computer.png'
                alt='Mac computer'
                width={600}
                height={300}
                className=''
              />
              <div className='max-w-xl space-y-8 px-36 self-center text-left'>
                <div>
                  <span className='text-neutral-clipboard-dark-blue font-semibold text-xl'>
                    Quick Search
                  </span>
                  <p className='text-neutral-clipboard-blue'>
                    Easily search your snippets by content, category, web
                    address, application, and more.
                  </p>
                </div>
                <div>
                  <span className='text-neutral-clipboard-dark-blue font-semibold text-xl'>
                    iCloud Sync
                  </span>
                  <p className='text-neutral-clipboard-blue'>
                    Instantly saves and syncs snippets across all your devices.
                  </p>
                </div>
                <div>
                  <span className='text-neutral-clipboard-dark-blue font-semibold text-xl'>
                    Complete History
                  </span>
                  <p className='text-neutral-clipboard-blue'>
                    Retrieve any snippets from the first moment you started
                    using the app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className='max-w-screen-sm mx-auto mt-10 text-center space-y-4'>
          <h2 className='text-neutral-clipboard-dark-blue text-2xl font-medium'>
            Access Clipboard anywhere
          </h2>
          <p className='text-neutral-clipboard-blue'>
            Whether youre on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>
          <div className='py-16'>
            <Image
              src='/images/clipboard-website/image-devices.png'
              alt='Gadget devices image'
              width={905}
              height={375}
            />
          </div>
        </section>
        <section className='icons'>
          <h2>Supercharge your workflow</h2>
          <p>Weve got the tools to boost your productivity.</p>
          <div>
            <Image src='' alt='' width={40} height={40} />
            <span>Create blacklists</span>
            <p>
              Ensure sensitive information never makes its way to your clipboard
              by excluding certain sources.
            </p>
          </div>
          <div>
            <Image src='' alt='' width={40} height={40} />
            <span>Plain text snippets</span>
            <p>
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </div>
          <div>
            <Image src='' alt='' width={40} height={40} />
            <span>Sneak preview</span>
            <p>
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </div>
        </section>
        <section className='company images'>
          <div>
            <Image src='' alt='' width={40} height={40} />
          </div>
          <div>
            <Image src='' alt='' width={40} height={40} />
          </div>
          <div>
            <Image src='' alt='' width={40} height={40} />
          </div>
          <div>
            <Image src='' alt='' width={40} height={40} />
          </div>
          <div>
            <Image src='' alt='' width={40} height={40} />
          </div>
        </section>
        <section className='clipboard call to action'>
          <h2>Clipboard for iOS and Mac OS</h2>
          <p>
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and youre ready to start adding to your clipboard.
          </p>
          <div>
            <button>Download for iOS</button>
            <button>Download for Mac</button>
          </div>
        </section>
        <footer>
          <Image src='' alt='' width={40} height={40} />
          <div>
            <ul>
              <li>FAQs</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Press Kit</li>
              <li>Install Guide</li>
            </ul>
          </div>
          <div className='social icons'>
            <Image src='' alt='' width={40} height={40} />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ClipboardWebsite;
