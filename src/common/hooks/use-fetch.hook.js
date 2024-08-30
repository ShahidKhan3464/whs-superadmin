import { useState, useEffect } from 'react';
import makeRequest from '../api/axios.config';
import { HTTP } from '@/common/constants/http-methods.constant';

const useFetch = (url, id = null, params = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await makeRequest(HTTP.GET, url, null, { params }, id);
        setData(response?.data?.result);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params]);

  return { data, loading, error };
};

export default useFetch;
