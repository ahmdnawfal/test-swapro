import * as z from 'zod';

export const signInSchema = z.object({
  email: z.string().email('Email not valid'),
  password: z.string().min(3, 'Minimum 3 character'),
});

export const signUpSchema = z.object({
  name: z.string().nonempty('Name is required'),
  phone: z.string().nonempty('Phone Number is required'),
  email: z.string().email('Email not valid'),
  password: z.string().min(3, 'Minimum 3 character'),
});
