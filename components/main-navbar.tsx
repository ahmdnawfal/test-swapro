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

const MainNavbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className='absolute w-[100%] top-0 z-50'>
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
                  <DropdownMenuItem>About</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Villa categorys</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Gallery</DropdownMenuItem>
                  <DropdownMenuSeparator />
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
                  <DropdownMenuItem>About</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      Villa categorys
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>4 Bedroom villa</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>2 Bedroom villa</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Joglo house</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Kudus house</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Bamboo house</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Bamboo studio</DropdownMenuItem>
                        <DropdownMenuSeparator />
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Gallery</DropdownMenuItem>
                  <DropdownMenuSeparator />
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
                  <DropdownMenuItem>4 Bedroom villa</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>2 Bedroom villa</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Joglo house</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Kudus house</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Bamboo house</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Bamboo studio</DropdownMenuItem>
                  <DropdownMenuSeparator />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className='hidden md:flex gap-[48px] items-center'>
            <p className='text-l text-white'>contact us</p>
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
