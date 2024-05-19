'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useConvexAuth } from 'convex/react';

import { Spinner } from '@/components/spinner';
import { Button } from '@/components/ui/button';
import { SignInButton } from '@clerk/clerk-react';
import Image from 'next/image';

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className='max-w-3xl space-y-4'>
      <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold">
      Your All-in-One Hub for Collaboration.
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        <pre>
        <i>    Ashborn represents the connected workspace</i><br />
        <i>    where better, faster work happens.</i>
        </pre>
      </h3>
      {isLoading && (
        <div className='w-full flex items-center justify-center'>
          <Spinner size='lg' />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href='/documents'>
          Colaborate
            <ArrowRight className='h-4 w-4 ml-2' />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode='modal'>
          <Button>
            Get Ashborn free
            <ArrowRight className='h-4 w-4 ml-2' />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Heading;
