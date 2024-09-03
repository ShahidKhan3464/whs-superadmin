'use client';

import React from 'react';
import useTransactions from './use-transactions.hook';
import { CustomTable } from '@/common/components/custom-table/custom-table.component';
import { CustomSearchField } from '@/common/components/custom-search-field/custom-search-field.component';

export default function Transactions() {
  const {
    data,
    payload,
    columns,
    loading,
    setPayload,
    totalPages,
    setSearchQuery,
    renderCellContent
  } = useTransactions();
  return (
    <div className="p-4 mt-6 rounded-xl bg-white">
      <div className="flex-between mb-4">
        <h3 className="text-xl text-[#211C37] font-semibold">
          All Transactions
        </h3>
        <CustomSearchField
          handleSearchQueryChange={(value) => setSearchQuery(value)}
        />
      </div>
      <CustomTable
        data={data}
        payload={payload}
        columns={columns}
        isLoading={false}
        setPayload={setPayload}
        totalRecords={totalPages}
        renderCellContent={renderCellContent}
      />
    </div>
  );
}
