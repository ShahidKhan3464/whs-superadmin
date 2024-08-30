'use client';

import { useRouter } from 'next/navigation';
import useDashboard from './use-dashboard.hook';
import CustomTable from '@/common/components/custom-table/custom-table.component';
import { CustomButton } from '@/common/components/custom-button/custom-button.component';

export default function Dashboard() {
  const router = useRouter();
  const { data, loading, columns, cardsData, totalRecords, renderCellContent } =
    useDashboard();

  return (
    <div>
      <div className="flex-between gap-6">
        {cardsData.map((card) => (
          <div
            key={card.title}
            className="px-6 py-4 w-full rounded-xl bg-white border border-solid border-gray200"
          >
            <h3 className="text-2xl text-blue600 font-semibold mb-6">
              {card.title}
            </h3>
            <p className="text-4xl text-gray600 font-semibold">
              {card.counter}
            </p>
          </div>
        ))}
      </div>
      <div className="p-4 mt-6 rounded-xl bg-white">
        <div className="flex-between mb-4">
          <h3 className="text-xl text-[#211C37] font-semibold">
            Company Admins
          </h3>
          <CustomButton
            text="View All Admins"
            className="btn-primary px-[18px]"
            onClick={() => router.push('/users')}
          />
        </div>
        <CustomTable
          data={data}
          columns={columns}
          isLoading={loading}
          showPagination={false}
          totalRecords={totalRecords}
          renderCellContent={renderCellContent}
        />
      </div>
    </div>
  );
}
