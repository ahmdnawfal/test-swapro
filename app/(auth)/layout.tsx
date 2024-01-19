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
          <div className='bg-auth-1'></div>
          <div className='bg-auth-2'></div>
          <div className='bg-auth-3'></div>
        </Carousel>
      </div>
      <div>{children}</div>
    </main>
  );
}
