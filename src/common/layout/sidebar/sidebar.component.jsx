'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useSidebar from './use-sidebar.hook';

export default function Sidebar() {
  const { menuItems } = useSidebar();

  return (
    <aside className="p-4 w-[246px] h-full fixed border-r-[#EAECF0] border-r border-solid">
      <ul>
        {menuItems.map((item) => (
          <li key={item.text} className="mb-4">
            <Link
              href={item.path}
              className={`p-3 gap-3 rounded-md flex items-center ${
                item.isActive ? 'text-white bg-blue600' : 'text-gray600'
              }`}
            >
              <Image
                alt="icon"
                src={item.isActive ? item.activeIcon : item.icon}
              />
              <span className="text-lg font-medium">{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
