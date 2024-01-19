'use client';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Card, CardContent, CardHeader } from '../ui/card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaArrowRightLong, FaArrowLeftLong } from 'react-icons/fa6';
import Image from 'next/image';

const data = [
  {
    id: 1,
    title:
      '“The place is nice with a village atmosphere surrounded by trees, really cool”',
    image: '/images/Avatar1.png',
    name: 'Phillip Press',
    role: 'Traveler',
  },
  {
    id: 2,
    title:
      '“The rooms are okay, the breakfast is okay, new and traditional menus are added”',
    image: '/images/Avatar2.png',
    name: 'Tatiana Levin',
    role: 'Travel Bloger',
  },
  {
    id: 3,
    title:
      '“strategic location, very pleasant at this villa. next time will come back again to spend the night here”',
    image: '/images/Avatar3.png',
    name: 'Kaiya Vaccaro',
    role: 'Digital Nomads',
  },
  {
    id: 4,
    title:
      '“strategic location, very pleasant at this villa. next time will come back again to spend the night here”',
    image: '/images/Avatar3.png',
    name: 'Kaiya Vaccaro',
    role: 'Digital Nomads',
  },
  {
    id: 5,
    title:
      '“The rooms are okay, the breakfast is okay, new and traditional menus are added”',
    image: '/images/Avatar2.png',
    name: 'Tatiana Levin',
    role: 'Travel Bloger',
  },
];

const SectionCustomers = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
    return (
      <div className='flex justify-end items-center gap-4'>
        <FaArrowLeftLong
          onClick={() => previous()}
          className={`cursor-pointer text-neutral-60 text-xl`}
        />
        <FaArrowRightLong
          className={`cursor-pointer text-2xl text-green`}
          onClick={() => next()}
        />
      </div>
    );
  };

  return (
    <div className='container space-y-4 md:space-y-8 my-10'>
      <div className='relative'>
        <div className='relative'>
          <h1 className='text-black text-xl leading-5 tracking-[-0.24px] text-start md:text-h1 md:leading-[44px] md:tracking-[-0.92px] font-bold'>
            What Our <span className='text-green'>Customer</span>
          </h1>
          <h1 className='ttext-black text-xl leading-5 tracking-[-0.24px] text-start md:text-h1 md:leading-[44px] md:tracking-[-0.92px] font-bold'>
            Are Saying
          </h1>
        </div>
        <div className='relative'>
          <Image
            alt='circle-dots'
            src={'/icons/Circle.svg'}
            width={104}
            height={118}
            className='hidden md:block absolute top-[-170px] left-[-20px] z-[-1]'
          />
          <Image
            alt='quote'
            src={'/icons/Quote.svg'}
            width={50}
            height={50}
            className='hidden md:block absolute top-[-145px] z-[-1]'
          />
        </div>
      </div>
      <div className='relative'>
        <Image
          alt='circle-dots'
          src={'/icons/CircleDots.svg'}
          width={104}
          height={118}
          className='hidden absolute bottom-0 md:inline-block'
        />
        <Image
          alt='circle-dots'
          src={'/icons/CircleDots.svg'}
          width={104}
          height={118}
          className='hidden absolute right-0 md:inline-block'
        />
        <Carousel
          responsive={responsive}
          containerClass='container-with-dots'
          renderButtonGroupOutside={true}
          arrows={false}
          infinite={true}
          customButtonGroup={<ButtonGroup />}
        >
          {data.map((values) => (
            <Card
              key={values.id}
              className='py-[32px] shadow-lg border-none hover:scale-105 duration-500 m-4 h-[80%]'
            >
              <CardHeader>
                <p className='text-m'>{values.title}</p>
              </CardHeader>
              <CardContent>
                <div className='flex items-center space-x-4'>
                  <Avatar>
                    <AvatarImage
                      src={values.image}
                      alt={values.name}
                      width={40}
                      height={40}
                    />
                    <AvatarFallback>Avatar</AvatarFallback>
                  </Avatar>
                  <div className='flex flex-col gap-1'>
                    <span className='text-green text-xs font-medium'>
                      {values.name}
                    </span>
                    <span className='text-neutral-60 text-[10px] '>
                      {values.role}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SectionCustomers;
