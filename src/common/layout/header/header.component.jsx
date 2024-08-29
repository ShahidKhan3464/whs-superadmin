'use client';

import React from 'react';
import Image from 'next/image';
import { Icons } from '@/common/assets';
import useHeader from './use-header.hook';

export default function Header() {
  const { user } = useHeader();

  return (
    <div className="h-24">
      <header className="h-24 px-[60px] z-[1] flex-between fixed inset-0 bg-white border-b border-b-[#E3E8EF] border-solid">
        <div>
          <Image src={Icons.dashboard} alt="dashboard" />
        </div>
      </header>
      {user && (
        <div className="flex items-center">
          <Image width={46} height={46} src={Icons.avatar} alt="avatar" />
          <div className="ml-2">
            <p className="text-base text-gray700 leading-none font-semibold">
              {user.first_name} {user.last_name}
            </p>
            <span className="text-sm text-gray400">{user.email}</span>
          </div>
        </div>
      )}
    </div>
  );
}
