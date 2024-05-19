import { Poppins } from 'next/font/google';
import {
  ChevronDown,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Twitter,
  Youtube
} from 'lucide-react';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '600']
});

const Footer = () => {
  return (
    <footer className='flex flex-col md:flex-row w-full max-w-7xl mx-auto py-10 px-14 lg:py-20 lg:px-28 gap-9 lg:gap-24'>
      <div className='grow-0 flex flex-col gap-6'>
        <div className='flex items-center gap-x-2'>
          <Image
            src="/logo.png"
            height={40}
            width={200}
            alt="Logo"
            className="dark:hidden"
          />
          <Image
            src="/logo-dark.png"
            height={40}
            width={200}
            alt="Logo"
            className="hidden dark:block"
          />
        </div>
        <div className='flex flex-col'>
          <div className='flex -ml-2'>
            <Button variant='ghost' size='icon'>
              <Instagram className='text-zinc-700  dark:text-zinc-300 w-5 h-5' />
            </Button>
            <Button variant='ghost' size='icon'>
              <Twitter className='text-zinc-700 dark:text-zinc-300 w-5 h-5' />
            </Button>
            <Button variant='ghost' size='icon'>
              <Linkedin className='text-zinc-700 dark:text-zinc-300 w-5 h-5' />
            </Button>
            <Button variant='ghost' size='icon'>
              <Facebook className='text-zinc-700 dark:text-zinc-300 w-5 h-5' />
            </Button>
            <Button variant='ghost' size='icon'>
              <Youtube className='text-zinc-700 dark:text-zinc-300 w-5 h-5' />
            </Button>
          </div>
        </div>
      </div>
      <div className='grow w-full flex flex-col'>
        <div className='flex flex-col space-y-1 pt-4'>
          <p className='text-sm font-semibold'>
          Your personal information is safe with us.
          </p>
          <pre>
          <p className='text-muted-foreground text-sm'>
            &copy; {new Date().getFullYear()}-
            <a
              className='hover:underline'
              href='https://www.instagram.com/mr_chakraborty1903'
              aria-label='sumit'
              target='_blank'
              rel='noreferrer'
            >
                Sumit Chakarborty
            </a>{' '}
          </p>
          </pre>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
