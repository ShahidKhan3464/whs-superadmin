import React from 'react';
import Image from 'next/image';
import { Icons } from '@/common/assets';
import useSearchField from './use-search-field.hook';

export default function CustomSearchField({ handleSearchQueryChange }) {
  const { inputRef, handleSearch } = useSearchField({
    handleSearchQueryChange
  });

  return (
    <div className="px-3.5 py-2.5 w-full max-w-[361px] rounded-lg bg-gray100 shadow-[0px_1px_2px_0px_#1018280D]">
      <div className="flex items-center gap-2">
        <Image width={20} height={20} src={Icons.search} alt="search" />
        <input
          type="text"
          ref={inputRef}
          placeholder="Search"
          onChange={handleSearch}
          className="w-full h-full text-sm text-gray600 outline-none border-[none] bg-[transparent]"
        />
      </div>
    </div>
  );
}
