'use client';

import React from 'react';
import useUsers from './use-users.hook';
import { CustomTable } from '@/common/components/custom-table/custom-table.component';
import { CustomSearchField } from '@/common/components/custom-search-field/custom-search-field.component';

export default function Users() {
  const {
    data,
    payload,
    columns,
    loading,
    setPayload,
    totalPages,
    setSearchQuery,
    renderCellContent
  } = useUsers();

  return (
    <div className="p-4 mt-6 rounded-xl bg-white">
      <div className="flex-between mb-4">
        <h3 className="text-xl text-[#211C37] font-semibold">
          All Company Admins
        </h3>
        <CustomSearchField
          handleSearchQueryChange={(value) => setSearchQuery(value)}
        />
      </div>
      <CustomTable
        data={data}
        payload={payload}
        columns={columns}
        isLoading={loading}
        setPayload={setPayload}
        totalRecords={totalPages}
        renderCellContent={renderCellContent}
      />
    </div>
  );
}
