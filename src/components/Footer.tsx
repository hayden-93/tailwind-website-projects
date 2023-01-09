import Link from 'next/link';

import { GitHub, Instagram, Twitter } from 'react-feather';

export default function Footer() {
  return (
    <footer className='flex justify-around items-center py-8'>
      <nav>
        <ul className='flex space-x-6'>
          <li>
            <p>Follow my Socials to keep up to date!</p>
          </li>
          <li>
            <Link href='https://twitter.com/HBSDev'>
              <Twitter className='hover:text-slate-500 hover:scale-110' />
            </Link>
          </li>
          <li>
            <Link href='https://www.instagram.com/hbsdev'>
              <Instagram className='hover:text-slate-500 hover:scale-110' />
            </Link>
          </li>
          <li>
            <Link href='https://github.com/hayden-93/'>
              <GitHub className='hover:text-slate-500 hover:scale-110' />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
