import { useState } from 'react';
import { useRouter } from 'next/navigation';
import makeRequest from '@/common/api/axios.config';
import { API_ENDPOINTS } from '@/common/api/endpoints';
import { HTTP } from '@/common/constants/http-methods.constant';

function useLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const initialValues = {
    email: '',
    password: '',
    rememberMe: false
  };

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await makeRequest(HTTP.POST, API_ENDPOINTS.LOGIN, data);
      if (response.data?.status) {
        router.push(`/two-step-verification?email=${data.email}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, initialValues, handleSubmit };
}

export default useLogin;
