import React from 'react';
import CardVillaStudio from './card-villa-studio';
import { Button } from '../ui/button';
import Image from 'next/image';

const data = [
  {
    id: 1,
    image: '/images/CardImage1.png',
    title: '4 Bedroom villa',
    mainFacilities: 'Wifi provide, TV & Karaoke, Kitchen, Swimming pool',
    bed: 4,
    person: 8,
    price: 'Rp 3.749.000',
  },
  {
    id: 2,
    image: '/images/CardImage2.png',
    title: 'Joglo house',
    mainFacilities: 'Wifi provide, TV & Karaoke, Kitchen, Swimming pool',
    bed: 4,
    person: 4,
    price: 'Rp 3.749.000',
  },
  {
    id: 3,
    image: '/images/CardImage3.png',
    title: 'Kudus house',
    mainFacilities: 'Wifi provide, TV & Karaoke, Kitchen, Swimming pool',
    bed: 4,
    person: 4,
    price: 'Rp 3.999.000',
    isHidden: true,
  },
];

const SectionVillaStudio = () => {
  return (
    <div className='mb-[100px]'>
      <div className='container space-y-6 md:space-y-[48px]'>
        <div className='flex md:justify-center text-h1 relative'>
          <Image
            alt='circle-dots'
            src={'/icons/CircleDots.svg'}
            width={104}
            height={118}
            className='hidden md:block absolute left-[-2%] top-5 z-[-10px]'
          />
          <h1 className='text-neutral-90 text-xl leading-5 tracking-[-0.24px] md:text-start md:text-h1 md:leading-[44px] md:tracking-[-0.92px] font-bold'>
            Our choise of <span className='text-green'> Villa Studios</span>
          </h1>
        </div>
        <div className='grid relative grid-cols-2 md:grid-cols-3 gap-[21px] md:gap-[26px] mb-2'>
          {data.map((value) => (
            <CardVillaStudio
              key={value.id}
              title={value.title}
              image={value.image}
              bed={value.bed}
              mainFacilities={value.mainFacilities}
              person={value.person}
              price={value.price}
              isHidden={value.isHidden}
            />
          ))}
        </div>
        <div className='flex justify-center mt-[50px]'>
          <Button className='bg-[#F1F6F6] hover:bg-[#F1F6F6]/60 hover:text-green/60 rounded-[5px] text-green text-xs h-[39px] w-[190px] md:w-max md:h-[54px] md:text-xl'>
            See More villas
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SectionVillaStudio;
