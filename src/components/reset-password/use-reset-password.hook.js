import { useState } from 'react';
import makeRequest from '@/common/api/axios.config';
import { API_ENDPOINTS } from '@/common/api/endpoints';
import { useRouter, useSearchParams } from 'next/navigation';
import { HTTP } from '@/common/constants/http-methods.constant';

function useResetPassword() {
  const router = useRouter();
  const params = useSearchParams();
  const token = params.get('token');
  const [loading, setLoading] = useState(false);

  const initialValues = {
    new_password: '',
    confirm_password: ''
  };

  const handleSubmit = async (data) => {
    data.token = token;
    setLoading(true);
    try {
      const response = await makeRequest(
        HTTP.POST,
        API_ENDPOINTS.RESET_PASSWORD,
        data
      );
      if (response.data?.status) {
        router.push('/login');
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, initialValues, handleSubmit };
}

export default useResetPassword;
