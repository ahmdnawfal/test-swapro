'use client';

import { signOut } from 'next-auth/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const Logout = ({ session }: { session: { user: { name: string } } }) => {
  const handleLogout = async () => {
    await signOut({
      redirect: true,
      callbackUrl: `${window.location.origin}/auth`,
    });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <p className='text-l text-white font-bold'>
          Welcome {session.user.name}
        </p>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div onClick={handleLogout}>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Logout;
