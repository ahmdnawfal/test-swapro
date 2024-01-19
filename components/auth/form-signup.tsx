import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema } from '@/schema/formSchema';
import { useForm } from 'react-hook-form';
import { Form } from '../ui/form';
import FormInput from '../form-input';
import FormPassword from '../form-password';
import { Button } from '../ui/button';
import Image from 'next/image';

const FormSignUp = () => {
  const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
    console.log(values);
  };

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      password: '',
    },
  });

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
          <FormInput
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
        <Button variant={'green'} type='submit'>
          Register
        </Button>
        <div className='flex text-center gap-1 items-center'>
          <div className='h-[1px] w-full bg-[#DBE7F0]' />
          <span className='text-neutral-medium'>Or</span>
          <div className='h-[1px] w-full bg-[#DBE7F0]' />
        </div>
        <div>
          <Button className='w-full gap-1' type='button' variant={'outline'}>
            <Image
              alt='google'
              src={'/icons/Google.svg'}
              width={20}
              height={20}
            />
            Sign Up with Google
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormSignUp;
