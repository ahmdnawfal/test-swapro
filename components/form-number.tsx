'use client';

import { ChangeEvent, useState } from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { UseFormReturn } from 'react-hook-form';

type PropsFormNumber = {
  form: UseFormReturn<any, undefined>;
  name: string;
  label: string;
  placeholder: string;
};

export default function FormNumber({
  form,
  label,
  name,
  placeholder,
}: PropsFormNumber) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input placeholder={placeholder} type={'number'} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
