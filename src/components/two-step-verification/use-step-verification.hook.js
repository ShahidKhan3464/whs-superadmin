import { useState } from 'react';
import makeRequest from '@/common/api/axios.config';
import { API_ENDPOINTS } from '@/common/api/endpoints';
import { useRouter, useSearchParams } from 'next/navigation';
import { HTTP } from '@/common/constants/http-methods.constant';
import { setUserAndToken } from '@/common/utils/set-user-and-token';

function useTwoStepVerification() {
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get('email');
  const [loading, setLoading] = useState(false);

  const resendCode = async () => {
    await makeRequest(HTTP.POST, API_ENDPOINTS.RESEND_CODE, { email });
  };

  const handleSubmit = async ({ otpCode }) => {
    setLoading(true);
    try {
      const { data } = await makeRequest(HTTP.POST, API_ENDPOINTS.VERIFY_CODE, {
        token: otpCode
      });
      if (data.status) {
        const { result } = data;
        setUserAndToken(result.data.token, result.data.admin);
        setLoading(false);
        router.push('/dashboard');
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, resendCode, handleSubmit };
}

export default useTwoStepVerification;
