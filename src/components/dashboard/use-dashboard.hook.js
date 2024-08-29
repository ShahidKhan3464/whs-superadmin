import Image from 'next/image';
import { Icons } from '@/common/assets';
import { useRouter } from 'next/navigation';
import useFetch from '@/common/hooks/use-fetch.hook';
import { API_ENDPOINTS } from '@/common/api/endpoints';
import { capitalizeFirstLetter } from '@/common/utils/string.utils';

function useDashboard() {
  const router = useRouter();
  const { data, loading } = useFetch(API_ENDPOINTS.GET_DASHBOARD_DATA);

  const cardsData = [
    {
      title: 'Total Admins',
      counter: data?.data?.totalCompanies ?? ''
    },
    {
      title: 'Active Admins',
      counter: data?.data?.activeCompanies ?? ''
    },
    {
      title: 'Inactive Admins',
      counter: data?.data?.inactiveCompanies ?? ''
    }
  ];

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
      render: (item) => capitalizeFirstLetter(item.email)
    },
    {
      label: 'Admin Status',
      accessor: 'status',
      render: (item) => (
        <span
          className={`px-2.5 py-[3px] rounded-2xl text-sm font-medium ${
            item.status
              ? 'text-[#027A48] bg-[#ECFDF3]'
              : 'text-[#B42318] bg-[#FEF3F2]'
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
    loading,
    columns,
    cardsData,
    renderCellContent,
    data: data?.data?.companies,
    totalRecords: data?.data?.companies?.length
  };
}

export default useDashboard;
