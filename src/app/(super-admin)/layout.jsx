import React from 'react';
import Header from '@/common/layout/header/header.component';
import Sidebar from '@/common/layout/sidebar/sidebar.component';

export default function DashboardLayout({ children }) {
  return (
    <React.Fragment>
      <main className="grid grid-cols-[246px,1fr]">
        <div className="h-screen">
          <Sidebar />
        </div>
        <div className="p-6 bg-[#F9F9F9]">{children}</div>
      </main>
    </React.Fragment>
  );
}
