import Image from 'next/image';
import React from 'react';

const SectionAbout = () => {
  return (
    <div className='min-h-screen flex items-center'>
      <div className='container space-y-4 md:space-y-8'>
        <div className='flex justify-start sm:justify-center md:justify-between gap-4'>
          <h1 className='text-black text-center text-xl leading-5 tracking-[-0.24px] md:text-start md:text-h1 md:leading-[44px] md:tracking-[-0.92px] font-bold'>
            About Villa <span className='text-green'>Amadaha</span>
          </h1>
          <Image
            alt='circle-dots'
            src={'/icons/CircleDots.svg'}
            width={104}
            height={118}
            className='hidden md:inline-block'
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 sm:justify-items-center justify-items-start items-center'>
          <div className='relative'>
            <Image
              alt='box'
              src={'/images/BoxAbout.png'}
              width={368}
              height={368}
              className='hidden md:block absolute top-2 left-2 z-[-1px]'
            />
            <Image
              alt='beach'
              src={'/images/BeachAbout.png'}
              width={368}
              height={368}
              className='relative'
            />
          </div>
          <div className='flex flex-col justify-between h-full gap-2'>
            <p className='text-black text-m md:text-xl max-w-[368px]'>
              Villa Amadaha consist of Two Luxury Villas and one Traditional
              Javanese House surrounded by a tranquil rain forest setting,
              traditional Indonesian houses anda a farm overlooking the area.
            </p>
            <div className='flex gap-[29px] md:gap-[46px]'>
              <div className='flex flex-col gap-4'>
                <p className='text-black text-xl md:text-[36px] font-[500px]'>
                  +6{' '}
                  <span className='text-green text-l md:text-[24px]'>
                    / Room
                  </span>
                </p>
                <span className='text-neutral-90 text-l md:text-xl'>
                  Room options
                </span>
              </div>
              <div className='flex flex-col gap-4'>
                <p className='text-black text-xl md:text-[36px]  font-[500px]'>
                  +2{' '}
                  <span className='text-green text-l md:text-[24px]'>
                    / Facilities
                  </span>
                </p>
                <span className='text-neutral-90 text-l md:text-xl'>
                  Facilities available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionAbout;
