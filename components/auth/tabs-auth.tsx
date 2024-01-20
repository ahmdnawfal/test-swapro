'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import FormSignin from './form-signin';
import FormSignUp from './form-signup';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import Image from 'next/image';

const TabsAuth = () => {
  const [isActive, setIsActive] = useState<string>('signin');
  const [modalVerif, setModalVerif] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  return (
    <>
      <h1 className='text-neutral-darkest font-bold text-2xl'>
        {isActive === 'signin' ? 'Sign In' : 'Sign Up'}
      </h1>
      <div>
        <Tabs
          value={isActive}
          className='w-full sm:w-[400px]'
          onValueChange={(value: string) => setIsActive(value)}
        >
          <TabsList className='w-full h-auto grid grid-cols-2'>
            <TabsTrigger value='signin'>
              <p
                className={`${
                  isActive === 'signin' && 'text-green'
                } font-bold text-sm`}
              >
                Sign In
              </p>
            </TabsTrigger>
            <TabsTrigger value='signup'>
              <p
                className={`${
                  isActive === 'signup' && 'text-green'
                } font-bold text-sm`}
              >
                Sign Up
              </p>
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value='signin'
            className='mt-5 focus-visible:ring-transparent'
          >
            <FormSignin />
          </TabsContent>
          <TabsContent
            value='signup'
            className='mt-5 focus-visible:ring-transparent'
          >
            <FormSignUp
              setIsActive={setIsActive}
              setModalVerif={setModalVerif}
              setEmail={setEmail}
            />
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={modalVerif} onOpenChange={setModalVerif}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className='flex justify-center text-[24px] font-semibold text-black mb-[24px]'>
              Account Created
            </DialogTitle>
            <DialogDescription>
              <div className='flex flex-col gap-6 items-center'>
                <Image
                  alt='message'
                  src={'/images/Message.png'}
                  width={192}
                  height={168}
                />
                <p className='text-center text-[#777]'>
                  Your verification has been sent to{' '}
                  <span className='text-neutral-darkest font-bold'>
                    {email}
                  </span>{' '}
                  make sure to check on registered email
                </p>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className='mt-[24px]'>
            <DialogClose className='w-[100%]'>
              <Button variant={'green'} className='w-[100%]'>
                Done
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TabsAuth;
