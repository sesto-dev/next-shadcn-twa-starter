'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import {
  BadgeCheck,
  Bell,
  ChevronRight,
  ChevronsUpDown,
  CreditCard,
  GalleryVerticalEnd,
  LogOut
} from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import { Button } from '../ui/button';

export default function AuthInfo() {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <Button onClick={() => signOut()} variant="outline">
      <div className="flex px-0">
        <Avatar className="size-8 rounded-lg">
          <AvatarImage
            src={session?.user?.image || ''}
            alt={session?.user?.name || ''}
          />
          <AvatarFallback className="rounded-lg">
            {session?.user?.name?.slice(0, 2)?.toUpperCase() || 'CN'}
          </AvatarFallback>
        </Avatar>
        <div className="ml-2 grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">
            {session?.user?.name || ''}
          </span>
          <span className="truncate text-xs">{session?.user?.email || ''}</span>
        </div>
      </div>
    </Button>
  );
}
