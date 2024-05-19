'use client';

import Image from 'next/image';
import { toast } from 'sonner';
import { PlusCircle } from 'lucide-react';
import { useMutation } from 'convex/react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/clerk-react';

import { api } from '@/convex/_generated/api';
import { Button } from '@/components/ui/button';

const DocumentsPage = () => {
  const router = useRouter();
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: 'Untitled' }).then((documentId) =>
      router.push(`/documents/${documentId}`)
    );

    toast.promise(promise, {
      loading: 'Creating a new note...',
      success: 'New note created!',
      error: 'Failed to create a new note.'
    });
  };

  return (
    <div className='h-full flex flex-col items-center justify-center space-y-4'>
      <Image
        src='/empty.png'
        height='300'
        width='300'
        alt='Empty'
        className='dark:hidden'
      />
      <Image
        src='/empty-dark.png'
        height='300'
        width='300'
        alt='Empty'
        className='hidden dark:block'
      />
      <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold">
      <i>Plan Your Path.</i>
      </h1>
      <h3 className="text-base sm:text-2xl md:text-2xl font-medium">
        <pre>
          <i>Ashborn is the connected workspace where</i><br />
          <i>      better, faster work happens.</i></pre>
      </h3>

      <Button onClick={onCreate}>
        <PlusCircle className='h-4 w-4 mr-2' />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
