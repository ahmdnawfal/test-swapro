'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema } from '@/schema/formSchema';
import { useForm } from 'react-hook-form';
import { Form } from '../ui/form';
import FormInput from '../form-input';
import FormPassword from '../form-password';
import { Button } from '../ui/button';
import Image from 'next/image';
import { POST } from '@/config/api';
import { Dispatch, SetStateAction, useState } from 'react';
import { toast } from 'react-toastify';
import FormNumber from '../form-number';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const FormSignUp = ({
  setIsActive,
}: {
  setIsActive: Dispatch<SetStateAction<string>>;
}) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingGoogle, setIsLoadingGoogle] = useState<boolean>(false);

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
    setIsLoading(true);
    const response = await POST('/api/register', values);
    if (response.message === 'SUCCESS') {
      form.reset();
      toast.success('success');
      setIsLoading(false);
      setIsActive('signin');
    } else {
      setIsLoading(false);
      toast.error(response.message);
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
          <FormInput form={form} name='name' label='Name' placeholder='Name' />
          <FormInput
            form={form}
            name='email'
            label='Email'
            placeholder='Email'
          />
          <FormNumber
            form={form}
            name='phone'
            label='Phone Number'
            placeholder='Phone Number'
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
          {isLoading ? 'Loading...' : 'Register'}
        </Button>
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

export default FormSignUp;
