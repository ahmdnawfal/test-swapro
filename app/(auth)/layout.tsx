'use client';

import { ReactNode } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className='grid min-h-screen grid-cols-1 lg:grid-cols-2 gap-4 items-center'>
      <div className='hidden lg:block'>
        <Carousel
          responsive={responsive}
          arrows={false}
          showDots
          infinite
          autoPlay
        >
          <div className='bg-auth-1'>
            <div className='bg-gradient container w-[100%] min-h-screen flex items-end relative'>
              <div className='absolute bottom-28'>
                <h1 className='text-h1 text-white font-bold'>Villa Amadaha</h1>
                <p className='text-white text-[18px]'>
                  The great place for peace life
                </p>
              </div>
            </div>
          </div>
          <div className='bg-auth-2'>
            <div className='bg-gradient container w-[100%] min-h-screen flex items-end relative'>
              <div className='absolute bottom-28'>
                <h1 className='text-h1 text-white font-bold'>Joglo House</h1>
                <p className='text-white text-[18px]'>
                  The great place for peace life
                </p>
              </div>
            </div>
          </div>
          <div className='bg-auth-3'>
            <div className='bg-gradient container w-[100%] min-h-screen flex items-end relative'>
              <div className='absolute bottom-28'>
                <h1 className='text-h1 text-white font-bold'>Kudus house</h1>
                <p className='text-white text-[18px]'>
                  The great place for peace life
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <div>{children}</div>
    </main>
  );
}
