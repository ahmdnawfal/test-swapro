/* eslint-disable react/no-unescaped-entities */
import { Button } from '@/components/ui/button';

const SectionMainCategory = () => {
  return (
    <div className='bg-category min-h-screen flex items-center mb-[100px]'>
      <div className='container m-auto flex flex-col gap-6'>
        <div className='flex flex-col gap-2 md:inline-block md:space-y-3'>
          <h1 className='text-white text-center text-xl leading-5 tracking-[-0.24px] md:text-start md:text-h1 md:leading-[44px] md:tracking-[-0.92px] font-bold'>
            Holiday discount!!
          </h1>
          <h1 className='text-white text-center text-xl leading-5 tracking-[-0.24px] md:text-start md:text-[50px] md:leading-[44px] md:tracking-[-0.92px] font-bold'>
            Save up to 30%
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

        {/* desktop */}
        <div className='hidden md:flex justify-center md:justify-start'>
          <Button className='bg-[#F1F6F6] hover:bg-[#F1F6F6]/90 hover:text-green/90 rounded-[5px] text-green text-xs h-[39px] w-[190px] md:w-max md:h-[54px] md:text-xl'>
            Booking now
          </Button>
        </div>

        {/* mobile */}
        <div className='flex md:hidden justify-center md:justify-start'>
          <Button className='bg-[#F1F6F6] hover:bg-[#F1F6F6]/90 hover:text-green/90 rounded-[5px] text-green text-xs h-[39px] w-[190px] md:w-max md:h-[54px] md:text-xl'>
            Explore facility
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SectionMainCategory;
