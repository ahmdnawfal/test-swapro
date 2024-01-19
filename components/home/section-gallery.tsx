import Image from 'next/image';

const SectionGallery = () => {
  return (
    <div className='container space-y-4 md:space-y-[48px] my-10'>
      <div className='flex justify-center text-h1'>
        <h1 className='text-black text-center text-xl leading-5 tracking-[-0.24px] md:text-start md:text-h1 md:leading-[44px] md:tracking-[-0.92px] font-bold'>
          Our <span className='text-green'>Gallery</span>
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
          <Image
            alt='gallery-3'
            src={'/images/Gallery3.png'}
            width={564}
            height={248}
            style={{ width: '100%' }}
            className='hover:scale-90 duration-500'
          />
        </div>
      </div>
    </div>
  );
};

export default SectionGallery;
