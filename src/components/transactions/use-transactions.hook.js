import Image from 'next/image';
import { useState } from 'react';
import { Icons } from '@/common/assets';
import { useRouter } from 'next/navigation';
import { payloadData } from '@/common/constants/payload-data.constant';

function useTransactions() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [payload, setPayload] = useState(payloadData);
  //   const { data, loading } = useFetch(
  //     API_ENDPOINTS.COMPANY_LISTING,
  //     null,
  //     payload.page
  //   );

  const data = [
    {
      transactionId: '#10920A',
      email: 'youremail@email.com',
      company: 'Company Name',
      subscription: 'Basic Monthly',
      status: 'Paid',
      date: '08/18/2024'
    },
    {
      transactionId: '#10920A',
      email: 'youremail@email.com',
      company: 'Company Name',
      subscription: 'Basic Monthly',
      status: 'Paid',
      date: '08/18/2024'
    },
    {
      transactionId: '#10920A',
      email: 'youremail@email.com',
      company: 'Company Name',
      subscription: 'Basic Monthly',
      status: 'Paid',
      date: '08/18/2024'
    }
  ];

  const columns = [
    {
      label: 'Transaction Id',
      accessor: 'transactionId'
    },
    { label: 'Admin Email', accessor: 'email' },
    {
      label: 'Company',
      accessor: 'company'
    },
    {
      label: 'Subscription',
      accessor: 'subscription'
    },
    {
      label: 'Status',
      accessor: 'status',
      render: (item) => (
        <span
          className={`px-2.5 py-[3px] rounded-2xl text-sm font-medium ${
            item.status
              ? 'text-green bg-lightGreen'
              : 'text-fireBrick bg-chablis'
          }`}
        >
          {item.status ? 'Paid' : 'Inactive'}
        </span>
      )
    },
    {
      label: 'Date',
      accessor: 'date'
    },
    {
      label: 'Action',
      accessor: 'action',
      render: (item) => (
        <Image
          alt="download"
          src={Icons.download}
          className="cursor-pointer"
          //   onClick={() => router.push(`/users/${item._id}`)}
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
    setPayload,
    setSearchQuery,
    renderCellContent,
    data: data,
    totalPages: data.length
  };
}

export default useTransactions;
