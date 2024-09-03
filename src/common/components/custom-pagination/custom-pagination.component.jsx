import React from 'react';
import Image from 'next/image';
import { Icons } from '@/common/assets';
import usePagination from './use-pagination.hook';
import { CustomButton } from '../custom-button/custom-button.component';

export const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
  const { handleClick } = usePagination({ currentPage, onPageChange });

  const renderPagination = () => {
    const pages = [];

    pages.push(
      <CustomButton
        key={1}
        onClick={() => handleClick(1)}
        className={`px-2.5 py-1 rounded text-sm font-medium ${
          currentPage === 1
            ? 'bg-blue600 text-white'
            : 'bg-gray100 text-gray600'
        }`}
      >
        1
      </CustomButton>
    );

    if (currentPage > 2) {
      pages.push(
        <span key="dots-start" className="px-2 py-1 bg-gray100">
          ...
        </span>
      );
    }

    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <CustomButton
          key={i}
          onClick={() => handleClick(i)}
          className={`px-2.5 py-1 rounded text-sm font-medium ${
            currentPage === i
              ? 'bg-blue600 text-white'
              : 'bg-gray100 text-gray600'
          }`}
        >
          {i}
        </CustomButton>
      );
    }

    if (currentPage < totalPages - 2) {
      pages.push(
        <span key="dots-end" className="px-2 py-1 bg-gray100">
          ...
        </span>
      );
    }

    if (totalPages > 1) {
      pages.push(
        <CustomButton
          key={totalPages}
          onClick={() => handleClick(totalPages)}
          className={`px-2.5 py-1 rounded text-sm font-medium ${
            currentPage === totalPages
              ? 'bg-blue600 text-white'
              : 'bg-gray100 text-gray600'
          }`}
        >
          {totalPages}
        </CustomButton>
      );
    }

    return pages;
  };

  return (
    <div className="flex-center space-x-2 my-8">
      <CustomButton
        disabled={currentPage === 1}
        onClick={() => handleClick(currentPage - 1)}
        className="px-2.5 py-1 rounded bg-gray100 text-gray600"
      >
        <Image width={24} height={24} alt="previous" src={Icons.arrowLeft} />
      </CustomButton>
      {renderPagination()}
      <CustomButton
        disabled={currentPage === totalPages}
        onClick={() => handleClick(currentPage + 1)}
        className="px-2.5 py-1 rounded bg-gray100 text-gray600"
      >
        <Image alt="next" width={24} height={24} src={Icons.arrowRight} />
      </CustomButton>
    </div>
  );
};
