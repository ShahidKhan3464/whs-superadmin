import { useState } from 'react';
import makeRequest from '@/common/api/axios.config';
import { API_ENDPOINTS } from '@/common/api/endpoints';
import { HTTP } from '@/common/constants/http-methods.constant';

function useForgetPassword() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      await makeRequest(HTTP.POST, API_ENDPOINTS.FORGET_PASSWORD, data);
    } finally {
      setLoading(false);
    }
  };

  return { loading, handleSubmit };
}

export default useForgetPassword;
