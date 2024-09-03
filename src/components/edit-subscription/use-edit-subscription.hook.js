import { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import makeRequest from '@/common/api/axios.config';
import useFetch from '@/common/hooks/use-fetch.hook';
import { API_ENDPOINTS } from '@/common/api/endpoints';

function useEditSubscription() {
  const { id } = useParams();
  const formikRef = useRef(null);
  const { data, loading } = useFetch(API_ENDPOINTS.SUBSCRIPTION_DETAILS, id);
  const options = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' }
  ];

  const initialValues = {
    name: '',
    no_of_floors: '',
    allow_extra_floors: ''
  };

  useEffect(() => {
    formikRef.current?.setValues({
      name: data?.data?.name
      // no_of_floors: data?.hazardType,
      // allow_extra_floors: data?.hazardType
    });
  }, [data]);

  return { formikRef, loading, options, initialValues, data: data?.data };
}

export default useEditSubscription;
