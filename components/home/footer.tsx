import Image from 'next/image';
import React from 'react';

const data = [
  {
    title: 'Quick Links',
    description: [
      {
        name: 'About',
      },
      {
        name: 'Facility',
      },
      {
        name: 'Gallery',
      },
    ],
  },
  {
    title: 'Villa category',
    description: [
      {
        name: '4 Bedroom Villa',
      },
      {
        name: '2 Bedroom Villa',
      },
      {
        name: 'Joglo House',
      },
      {
        name: 'Bamboo Studio',
      },
      {
        name: 'Bamboo House',
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className='min-h-[389px] flex items-center bg-[#F3F6F6]'>
      <div className='container'>
        <div className='grid grid-cols-3 gap-4'>
          {data.map((value, index) => (
            <div key={index}>
              <p className='text-l leading-5 tracking-[0.176px] font-medium mb-10 md:text-xl md:leading-9 md:tracking-[-0.588px]'>
                {value.title}
              </p>
              <div className='flex flex-col gap-2 md:gap-6'>
                {value.description.map((description, index) => (
                  <span key={index} className='text-m'>
                    {description.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div>
            <p className='text-l leading-5 tracking-[0.176px] font-medium mb-10 md:text-xl md:leading-9 md:tracking-[-0.588px]'>
              Contact Us
            </p>
            <div className='flex flex-row gap-2 md:flex-col md:gap-6'>
              <div className='flex gap-2 items-start'>
                <Image
                  alt='location'
                  src={'/icons/Location.svg'}
                  width={20}
                  height={20}
                  className='mt-1'
                />
                <span className='hidden md:block'>
                  Jl. Bukit Pelangi, Gunung Geulis, Sukaraja, Kab. Bogor, Jawa
                  Barat
                </span>
              </div>
              <div className='flex gap-2 items-start'>
                <Image
                  alt='call'
                  src={'/icons/Call.svg'}
                  width={20}
                  height={20}
                  className='mt-1'
                />
                <span className='hidden md:block'>+ 62812345678</span>
              </div>
              <div className='flex gap-2 items-start'>
                <Image
                  alt='message'
                  src={'/icons/Message.svg'}
                  width={20}
                  height={20}
                  className='mt-1'
                />
                <span className='hidden md:block'>example@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
