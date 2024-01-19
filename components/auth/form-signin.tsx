'use client';

import * as z from 'zod';
import { signInSchema } from '@/schema/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form } from '../ui/form';
import FormInput from '../form-input';
import FormPassword from '../form-password';
import { Button } from '../ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';
import { useState } from 'react';

const FormSignin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingGoogle, setIsLoadingGoogle] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    setIsLoading(true);
    const response = await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (response?.ok) {
      router.refresh();
      setIsLoading(false);
    } else {
      setIsLoading(false);
      toast.error(response?.error);
    }
  };

  const signUpWithGoogle = async () => {
    setIsLoadingGoogle(true);
    try {
      await signIn('google');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingGoogle(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-full flex flex-col gap-6 '
      >
        <div className='flex flex-col gap-4'>
          <FormInput
            form={form}
            name='email'
            label='Email'
            placeholder='Email'
          />
          <FormPassword
            form={form}
            name='password'
            label='Password'
            placeholder='Password'
          />
        </div>
        <Button
          disabled={isLoading}
          variant={'green'}
          type='submit'
          className='disabled:bg-slate-300'
        >
          {isLoading ? 'Loading...' : 'Sign In'}
        </Button>
        <p className='text-center text-neutral-medium text-l'>
          Forgot Password?{' '}
          <span className='text-green font-bold cursor-pointer'>
            Click Here
          </span>
        </p>
        <div className='flex text-center gap-1 items-center'>
          <div className='h-[1px] w-full bg-[#DBE7F0]' />
          <span className='text-neutral-medium'>Or</span>
          <div className='h-[1px] w-full bg-[#DBE7F0]' />
        </div>
        <div>
          <Button
            className='w-full gap-1 disabled:bg-slate-300'
            type='button'
            variant={'outline'}
            onClick={signUpWithGoogle}
            disabled={isLoadingGoogle}
          >
            <Image
              alt='google'
              src={'/icons/Google.svg'}
              width={20}
              height={20}
              className={`${isLoadingGoogle ? 'animate-spin' : ''}`}
            />
            Sign Up with Google
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormSignin;
