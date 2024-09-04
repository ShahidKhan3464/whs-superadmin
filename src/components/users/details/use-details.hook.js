import { useState } from 'react';
import makeRequest from '@/common/api/axios.config';
import useFetch from '@/common/hooks/use-fetch.hook';
import { useParams, useRouter } from 'next/navigation';
import { API_ENDPOINTS } from '@/common/api/endpoints';
import { HTTP } from '@/common/constants/http-methods.constant';

function useUserDetails() {
  const { id } = useParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { data, loading, refetch } = useFetch(
    API_ENDPOINTS.COMPANY_DETAILS,
    id
  );

  const handleCompanyStatus = async (status) => {
    try {
      await makeRequest(
        HTTP.POST,
        API_ENDPOINTS.COMPANY_STATUS,
        { status: status ? 'false' : 'true' },
        null,
        id
      );
      refetch();
    } finally {
      setOpen(!open);
    }
  };

  return {
    open,
    router,
    setOpen,
    loading,
    data: data?.data,
    handleCompanyStatus
  };
}

export default useUserDetails;
