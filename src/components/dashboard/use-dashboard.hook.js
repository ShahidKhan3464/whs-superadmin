import Image from 'next/image';
import { useState } from 'react';
import { Icons } from '@/common/assets';
import { capitalizeFirstLetter } from '@/common/utils/string.utils';
import { payloadData } from '@/common/constants/payload-data.constant';

function useDashboard() {
  const [payload, setPayload] = useState(payloadData);

  const data = [
    {
      name: 'name',
      email: 'youremail@gmail.com',
      company: 'company Name',
      status: 'active'
    },
    {
      name: 'name',
      email: 'youremail@gmail.com',
      company: 'company Name',
      status: 'Inactive'
    },
    {
      name: 'name',
      email: 'youremail@gmail.com',
      company: 'company Name',
      status: 'active'
    }
  ];

  const cardsData = [
    {
      title: 'To Admins',
      counter: 77
    },
    {
      title: 'Active Admins',
      counter: 50
    },
    {
      title: 'Inactive Admins',
      counter: 27
    }
  ];

  const columns = [
    {
      label: 'Admin Name',
      accessor: 'name',
      render: (item) => capitalizeFirstLetter(item.name)
    },
    { label: 'Admin Email', accessor: 'email' },
    {
      label: 'Company',
      accessor: 'company',
      render: (item) => capitalizeFirstLetter(item.company)
    },
    {
      label: 'Admin Status',
      accessor: 'status',
      render: (item) => (
        <span
          className={`px-2.5 py-[3px] rounded-2xl text-sm font-medium ${
            item.status.toLowerCase() === 'active'
              ? 'text-[#027A48] bg-[#ECFDF3]'
              : 'text-[#B42318] bg-[#FEF3F2]'
          }`}
        >
          {capitalizeFirstLetter(item.status)}
        </span>
      )
    },
    {
      label: 'Action',
      accessor: 'action',
      render: () => (
        <Image src={Icons.eye} alt="eye" className="cursor-pointer" />
      )
    }
  ];

  const renderCellContent = (item, column) => {
    const value = item[column.accessor];
    return column.render ? column.render(item) : value;
  };

  return {
    data,
    payload,
    columns,
    cardsData,
    setPayload,
    renderCellContent,
    totalRecords: data.length
  };
}

export default useDashboard;
