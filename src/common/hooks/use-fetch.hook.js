import { useState, useEffect, useCallback } from 'react';
import makeRequest from '../api/axios.config';
import { HTTP } from '@/common/constants/http-methods.constant';

const useFetch = (url, id = null, params = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await makeRequest(
        HTTP.GET,
        url,
        null,
        { page: params },
        id
      );
      setData(response?.data?.result);
    } finally {
      setLoading(false);
    }
  }, [params]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};

export default useFetch;
