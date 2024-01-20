'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import Image from 'next/image';

type PropsCardVillaStudio = {
  image: string;
  title: string;
  mainFacilities: string;
  bed: number;
  person: number;
  price: string | number;
  isHidden?: boolean;
};

const CardVillaStudio = ({
  image,
  title,
  mainFacilities,
  bed,
  person,
  price,
  isHidden,
}: PropsCardVillaStudio) => {
  const [isActive, setIsActive] = useState(false);

  const onMouseEnter = () => {
    setIsActive(true);
  };
  const onMouseLeave = () => {
    setIsActive(false);
  };

  return (
    <Card
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`${isActive ? 'bg-green scale-105' : ''}  ${
        isHidden ? 'hidden md:block' : 'block'
      } duration-500 cursor-pointer shadow-lg border-none `}
    >
      <CardHeader className='items-center'>
        <Image
          alt={title}
          src={image}
          width={320}
          height={322}
          className='w-[100%] md:w-[320px] md:h-[322px] md:object-cover '
        />
      </CardHeader>
      <CardContent>
        <div className='flex flex-col gap-4'>
          <p
            className={`${
              isActive ? 'text-white' : 'md:text-green'
            } text-xs text-black md:text-l font-medium md:leading-5 md:tracking-[-0.176px] duration-300`}
          >
            {title}
          </p>
          <div className='hidden md:grid md:grid-cols-2 gap-4'>
            <div>
              <span
                className={`${
                  isActive ? 'text-white' : 'text-neutral-950'
                } text-neutral-950 text-xs leading-4 duration-300`}
              >
                Main Facilities
              </span>
            </div>
            <div>
              <span
                className={`${
                  isActive ? 'text-white' : 'text-neutral-950'
                } text-neutral-950 text-xs leading-4 duration-300`}
              >
                {mainFacilities}
              </span>
            </div>
            <div className='flex gap-2'>
              <Image
                alt='bed'
                src={isActive ? '/icons/BedWhite.svg' : '/icons/Bed.svg'}
                width={16}
                height={16}
              />
              <span
                className={`${
                  isActive ? 'text-white' : 'text-neutral-950'
                } text-neutral-950 text-xs leading-4 duration-300`}
              >
                {bed} Bed
              </span>
            </div>
            <div className='flex gap-2'>
              <Image
                alt='users'
                src={isActive ? '/icons/UsersWhite.svg' : '/icons/Users.svg'}
                width={16}
                height={16}
              />
              <span
                className={`${
                  isActive ? 'text-white' : 'text-neutral-950'
                } text-neutral-950 text-xs leading-4 duration-300`}
              >
                {person} Persons
              </span>
            </div>
          </div>
          <div>
            <p
              className={`${
                isActive ? 'text-white' : 'text-green'
              } text-m md:text-xl md:leading-7 font-medium duration-300`}
            >
              {price.toLocaleString()}{' '}
              <span
                className={`${
                  isActive ? 'text-white' : 'text-neutral-80'
                } hidden md:block text-m duration-300`}
              >
                /night
              </span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardVillaStudio;
