import React from 'react';
import { Button } from './ui/button';
import { GiHamburgerMenu } from 'react-icons/gi';
import { getServerSession } from 'next-auth';
import authOptions from '@/lib/authOptions';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { IoMdArrowDropdown } from 'react-icons/io';
import { GET } from '@/config/api';

const getCategory = async () => {
  const response = await GET('http://localhost:3000/api/category');
  if (response.message === 'SUCCESS') {
    return response;
  } else {
    throw new Error(`Error: ${response.message}`);
  }
};

const MainNavbar = async () => {
  const session = await getServerSession(authOptions);
  const category = await getCategory();

  return (
    <div className='fixed w-[100%] top-0 z-50 bg-gray-900/10'>
      <div className='container py-[18px]'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-[48px] items-center'>
            {/* desktop */}
            <div className='hidden md:block'>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <GiHamburgerMenu className='text-white text-[24px] md:text-[38px] cursor-pointer' />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <Link href={'#about'}>
                    <DropdownMenuItem>About</DropdownMenuItem>
                    <DropdownMenuSeparator />
                  </Link>
                  <Link href={'#villa'}>
                    <DropdownMenuItem>Villa categorys</DropdownMenuItem>
                    <DropdownMenuSeparator />
                  </Link>
                  <Link href={'#gallery'}>
                    <DropdownMenuItem>Gallery</DropdownMenuItem>
                    <DropdownMenuSeparator />
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* mobile */}
            <div className='block md:hidden'>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <GiHamburgerMenu className='text-white text-[24px] md:text-[38px] cursor-pointer' />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <Link href={'#about'}>
                    <DropdownMenuItem>About</DropdownMenuItem>
                    <DropdownMenuSeparator />
                  </Link>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      Villa categorys
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        {category?.data?.map(
                          (value: { id: string; name: string }) => (
                            <Link key={value.id} href={`/category/${value.id}`}>
                              <DropdownMenuItem>{value.name}</DropdownMenuItem>
                              <DropdownMenuSeparator />
                            </Link>
                          )
                        )}
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuSeparator />
                  <Link href={'#gallery'}>
                    <DropdownMenuItem>Gallery</DropdownMenuItem>
                    <DropdownMenuSeparator />
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className='hidden md:block text-white'>
              <DropdownMenu>
                <DropdownMenuTrigger className='flex gap-1 items-center'>
                  <p className='text-l text-white'>Villa categorys</p>
                  <IoMdArrowDropdown className='text-xl' />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {category?.data?.map(
                    (value: { id: string; name: string }) => (
                      <Link key={value.id} href={`/category/${value.id}`}>
                        <DropdownMenuItem>{value.name}</DropdownMenuItem>
                        <DropdownMenuSeparator />
                      </Link>
                    )
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className='hidden md:flex gap-[48px] items-center'>
            <Link href={'#contact'}>
              <p className='text-l text-white'>contact us</p>
            </Link>
            {session?.user ? (
              <p className='text-l text-white font-bold'>
                Welcome {session.user.name}
              </p>
            ) : (
              <Link href={'/auth'}>
                <Button
                  variant={'green'}
                  type='button'
                  className='h-[36px] font-normal w-[106px]'
                >
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
