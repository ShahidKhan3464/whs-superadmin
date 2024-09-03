'use client';

import React from 'react';
import Image from 'next/image';
import { Icons } from '@/common/assets';
import useHeader from './use-header.hook';

export default function Header() {
  const { user } = useHeader();

  return (
    <div className="h-24">
      <header className="h-24 px-[60px] z-[1] flex-between fixed inset-0 bg-white border-b border-b-gray200 border-solid">
        <div>
          <Image src={Icons.dashboard} alt="dashboard" />
        </div>
      </header>
    </div>
  );
}
