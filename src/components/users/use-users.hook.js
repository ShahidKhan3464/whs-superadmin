import Image from 'next/image';
import { useState } from 'react';
import { Icons } from '@/common/assets';
import { useRouter } from 'next/navigation';
import useFetch from '@/common/hooks/use-fetch.hook';
import { API_ENDPOINTS } from '@/common/api/endpoints';
import { capitalizeFirstLetter } from '@/common/utils/string.utils';
import { payloadData } from '@/common/constants/payload-data.constant';

function useUsers() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [payload, setPayload] = useState(payloadData);
  const { data, loading } = useFetch(
    API_ENDPOINTS.COMPANY_LISTING,
    null,
    payload.page
  );

  const columns = [
    {
      label: 'Admin Name',
      accessor: 'name',
      render: (item) => {
        const fullName = `${item.first_name} ${item.last_name}`;
        return capitalizeFirstLetter(fullName);
      }
    },
    { label: 'Admin Email', accessor: 'email' },
    {
      label: 'Company',
      accessor: 'company',
      render: (item) =>
        capitalizeFirstLetter(item?.profile?.company_name ?? 'N/A')
    },
    {
      label: 'Admin Status',
      accessor: 'status',
      render: (item) => (
        <span
          className={`px-2.5 py-[3px] rounded-2xl text-sm font-medium ${
            item.status
              ? 'text-green bg-lightGreen'
              : 'text-fireBrick bg-chablis'
          }`}
        >
          {item.status ? 'Active' : 'Inactive'}
        </span>
      )
    },
    {
      label: 'Action',
      accessor: 'action',
      render: (item) => (
        <Image
          alt="eye"
          src={Icons.eye}
          className="cursor-pointer"
          onClick={() => router.push(`/users/${item._id}`)}
        />
      )
    }
  ];

  const renderCellContent = (item, column) => {
    const value = item[column.accessor];
    return column.render ? column.render(item) : value;
  };

  return {
    payload,
    columns,
    loading,
    setPayload,
    setSearchQuery,
    renderCellContent,
    data: data?.data?.companies,
    totalPages: data?.data?.totalPages
  };
}

export default useUsers;
