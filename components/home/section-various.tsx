import Image from 'next/image';
import { Button } from '../ui/button';

const SectionVarious = () => {
  return (
    <div className='container space-y-4 md:space-y-[48px] my-10 mb-[100px] md:mb-[150px]'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-[47px] relative'>
        <Image
          alt='circle-dots'
          src={'/icons/CircleDots.svg'}
          width={104}
          height={118}
          className='md:block absolute right-[-12%] top-[12%] md:left-[-2%] md:top-[-10%] z-[-10px]'
        />
        <div className='flex flex-col gap-6 relative'>
          <h1 className='text-neutral-90 text-xl leading-5 tracking-[-0.24px] text-center md:text-start md:text-h1 md:leading-[44px] md:tracking-[-0.92px] font-bold'>
            Various <span className='text-green'>facilities</span> that you can
            enjoy
          </h1>
          <p className='text-m text-center md:text-start md:text-xl text-neutral-60'>
            We bring you together with your dream holiday
          </p>
          <Button
            variant={'green'}
            type='button'
            className='hidden md:block h-[52px] w-[191px]'
          >
            Explore
          </Button>
        </div>
        <div className='grid grid-cols-2 gap-[21px] relative'>
          <div className='relative'>
            <Image
              alt='circle-dots'
              src={'/icons/CircleDots.svg'}
              width={104}
              height={118}
              className='hidden md:block absolute bottom-[-10%] left-[-10%] z-[-10px]'
            />
            <Image
              alt='image-1'
              src={'/images/VariousImage1.png'}
              width={319}
              height={319}
              style={{ width: '100%' }}
              className='hover:scale-105 duration-500 relative'
            />
          </div>
          <div className='relative'>
            <Image
              alt='circle-dots'
              src={'/images/BgRightVarious.png'}
              width={576}
              height={324}
              className='hidden md:block absolute bottom-[-10%] right-[-20%] z-[-10px]'
            />
            <Image
              alt='image-2'
              src={'/images/VariousImage2.png'}
              width={319}
              height={319}
              style={{ width: '100%' }}
              className='hover:scale-105 duration-500 relative'
            />
          </div>
        </div>
        <div className='flex md:hidden justify-center'>
          <Button
            variant={'green'}
            type='button'
            className=' h-[39px] w-[144px]'
          >
            Explore
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SectionVarious;
