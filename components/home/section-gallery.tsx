import Image from 'next/image';

const SectionGallery = () => {
  return (
    <div className='container space-y-4 md:space-y-[48px] my-10'>
      <div className='flex justify-center text-h1'>
        <h1 className='text-black text-center text-xl leading-5 tracking-[-0.24px] md:text-start md:text-h1 md:leading-[44px] md:tracking-[-0.92px] font-bold'>
          Our{' '}
          <span className='text-green relative'>
            Gallery
            <Image
              alt='vector'
              src={'/icons/Vector2.svg'}
              width={162}
              height={44}
              className='absolute right-0 top-[10%] z-[1]'
            />
          </span>
        </h1>
      </div>
      <div className='grid grid-cols-2 gap-[18px] md:gap-6'>
        <div>
          <Image
            alt='gallery-1'
            src={'/images/Gallery1.png'}
            width={564}
            height={515}
            style={{ width: '100%', height: '100%' }}
            className='hover:scale-90 duration-500'
          />
        </div>
        <div className='flex flex-col gap-2 md:gap-[18px]'>
          <Image
            alt='gallery-2'
            src={'/images/Gallery2.png'}
            width={564}
            height={248}
            style={{ width: '100%' }}
            className='hover:scale-90 duration-500'
          />
          <div className='relative'>
            <Image
              alt='gallery-3'
              src={'/images/Gallery3.png'}
              width={564}
              height={248}
              style={{ width: '100%' }}
              className='hover:scale-90 duration-500'
            />
            <p className='absolute top-[30%] md:top-1/2 left-[30%] md:left-[45%] text-[10px] md:text-l z-10 underline text-white'>
              More photos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionGallery;
