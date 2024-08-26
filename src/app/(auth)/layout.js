import React from 'react';
import Image from 'next/image';
import { Icons } from '@/common/assets';

export default function AuthLayout({ children }) {
  return (
    <React.Fragment>
      <header className="flex items-center h-24 px-[60px] border-b border-b-[#E3E8EF] border-solid">
        <Image src={Icons.dashboard} alt="dashboard" />
      </header>
      <div className="flex-center min-h-[calc(100vh_-_96px)]">
        <div className="p-10 w-full max-w-[492px] rounded-xl border border-solid border-[#E3E8EF]">
          {children}
        </div>
      </div>
    </React.Fragment>
  );
}
