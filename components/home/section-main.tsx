/* eslint-disable react/no-unescaped-entities */
import { Button } from '@/components/ui/button';

const SectionMain = () => {
  return (
    <div className='bg-main min-h-screen flex items-center'>
      <div className='container m-auto flex flex-col gap-6'>
        <div className='flex flex-col gap-2 md:inline-block md:gap-0'>
          <h1 className='text-white text-center text-xl leading-5 tracking-[-0.24px] md:text-start md:text-h1 md:leading-[44px] md:tracking-[-0.92px] font-bold'>
            Make your comfort is
          </h1>
          <h1 className='text-white text-center text-xl leading-5 tracking-[-0.24px] md:text-start md:text-h1 md:leading-[44px] md:tracking-[-0.92px] font-bold'>
            our happiness
          </h1>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-white text-m text-center md:hidden'>
            Studio villa made of bamboo, located near the top of Mount Geulis
            with a stunning 180 degree bird's eye view.
          </p>
          <p className='hidden text-white md:inline-block md:text-start md:text-xl md:leading-[20px] md:tracking-[-0.24px]'>
            Studio villa made of bamboo, located near the top of Mount Geulis
          </p>
          <p className='hidden text-white md:inline-block md:text-start md:text-xl md:leading-[20px] md:tracking-[-0.24px]'>
            with a stunning 180 degree bird's eye view.
          </p>
        </div>
        <div className='flex justify-center md:hidden'>
          <Button
            variant={'green'}
            className='rounded-[5px] font-normal text-xs h-[39px] w-[190px] md:w-max md:h-[54px] md:text-xl'
          >
            Book Now
          </Button>
        </div>
        <div className='flex justify-center md:justify-start'>
          <Button className='bg-[#F1F6F6] hover:bg-[#F1F6F6]/90 hover:text-green/90 rounded-[5px] text-green text-xs h-[39px] w-[190px] md:w-max md:h-[54px] md:text-xl'>
            Explore Rooms
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SectionMain;
