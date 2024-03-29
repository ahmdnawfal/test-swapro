/* eslint-disable react/no-unescaped-entities */
import { Button } from '@/components/ui/button';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Calendar } from '../ui/calendar';
import Image from 'next/image';

const SectionMain = () => {
  return (
    <div className='bg-main-blur'>
      <div className='bg-main min-h-screen flex items-center relative'>
        <div className='container m-auto flex flex-col gap-6'>
          <div className='flex flex-col gap-2 md:inline-block md:gap-0'>
            <h1 className='text-white text-center text-xl leading-5 tracking-[-0.24px] md:text-start md:text-h1 md:leading-[44px] md:tracking-[-0.92px] font-bold'>
              Make your comfort is
            </h1>
            <div className='relative'>
              <h1 className='text-white text-center text-xl leading-5 tracking-[-0.24px] md:text-start md:text-h1 md:leading-[44px] md:tracking-[-0.92px] font-bold'>
                our happiness
              </h1>
              <Image
                alt='circle'
                src={'/icons/Vector3.svg'}
                width={226}
                height={59}
                className='hidden md:block absolute top-0 left-16'
              />
            </div>
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
        <div className='absolute w-[90%] left-[5%] right-[5%] bottom-[-6%] '>
          {/* mobile */}
          <div className='lg:hidden grid grid-rows-3 bg-white rounded-md shadow-lg py-[10px] px-[39px]'>
            <div className='flex flex-col gap-2'>
              <div className='flex justify-between items-center cursor-pointer'>
                <p className='text-black text-m md:text-xl'>Room</p>
                <IoMdArrowDropdown className='text-xl' />
              </div>
              <div className='bg-[#E0E0E0] w-[100%] h-[1px]' />
            </div>
            <div className='flex justify-between space-x-3'>
              <div>
                <Popover>
                  <PopoverTrigger asChild>
                    <div className='flex gap-4 md:gap-6 items-center cursor-pointer'>
                      <Image
                        alt='calendar'
                        src={'/icons/Calendar.svg'}
                        width={24}
                        height={24}
                      />
                      <p className='text-black text-m md:text-xl'>Check in</p>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0'>
                    <Calendar mode='single' initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
              <div className='w-[1px] h-[34px] bg-neutral-60' />
              <div>
                <Popover>
                  <PopoverTrigger asChild>
                    <div className='flex gap-4 md:gap-6 items-center cursor-pointer'>
                      <Image
                        alt='calendar'
                        src={'/icons/Calendar.svg'}
                        width={24}
                        height={24}
                      />
                      <p className='text-black text-m md:text-xl'>Check out</p>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0'>
                    <Calendar mode='single' initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div>
              <Button
                variant={'green'}
                className='h-[39px] md:h-[52px] w-[100%]'
              >
                Check availability
              </Button>
            </div>
          </div>

          {/* desktop */}
          <div className='hidden lg:flex py-[30px] px-[81px] bg-white rounded-md shadow-lg gap-12 items-center justify-between'>
            <div className='flex gap-4 md:gap-6 items-center cursor-pointer'>
              <p className='text-black text-m md:text-xl'>Room</p>
              <IoMdArrowDropdown className='text-xl' />
            </div>
            <div className='w-[1px] h-[34px] bg-neutral-60' />
            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <div className='flex gap-4 md:gap-6 items-center cursor-pointer'>
                    <Image
                      alt='calendar'
                      src={'/icons/Calendar.svg'}
                      width={24}
                      height={24}
                    />
                    <p className='text-black text-m md:text-xl'>Check in</p>
                  </div>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0'>
                  <Calendar mode='single' initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <div className='w-[1px] h-[34px] bg-neutral-60' />
            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <div className='flex gap-4 md:gap-6 items-center cursor-pointer'>
                    <Image
                      alt='calendar'
                      src={'/icons/Calendar.svg'}
                      width={24}
                      height={24}
                    />
                    <p className='text-black text-m md:text-xl'>Check out</p>
                  </div>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0'>
                  <Calendar mode='single' initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <div className='w-[1px] h-[34px] bg-neutral-60' />
            <div>
              <Button
                variant={'green'}
                className='h-[39px] md:h-[52px] w-[100%]'
              >
                Check availability
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionMain;
