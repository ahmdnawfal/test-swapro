'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import FormSignin from './form-signin';
import FormSignUp from './form-signup';

const TabsAuth = () => {
  const [isActive, setIsActive] = useState<string>('signin');

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
            <FormSignUp setIsActive={setIsActive} />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default TabsAuth;
