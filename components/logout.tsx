'use client';
import { signOut } from 'next-auth/react';
import { DropdownMenuItem } from './ui/dropdown-menu';

const Logout = () => {
  const handleLogout = async () => {
    await signOut({
      redirect: true,
      callbackUrl: `${window.location.origin}/auth`,
    });
  };
  return <DropdownMenuItem onClick={handleLogout}>Signout</DropdownMenuItem>;
};

export default Logout;
