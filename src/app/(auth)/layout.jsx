import React from 'react';
import Header from '@/common/layout/header/header.component';

export default function AuthLayout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <div className="flex-center min-h-[calc(100vh_-_96px)]">
        <div className="p-10 w-full max-w-[492px] rounded-xl border border-solid border-gray200">
          {children}
        </div>
      </div>
    </React.Fragment>
  );
}
