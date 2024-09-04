import { useEffect, useRef, useState } from 'react';
import makeRequest from '@/common/api/axios.config';
import useFetch from '@/common/hooks/use-fetch.hook';
import { API_ENDPOINTS } from '@/common/api/endpoints';
import { useParams, useRouter } from 'next/navigation';
import { HTTP } from '@/common/constants/http-methods.constant';

function useEditSubscription() {
  const router = useRouter();
  const { id } = useParams();
  const formikRef = useRef(null);
  const featureModalRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [featureObj, setFeatureObj] = useState(null);
  const [planFeatures, setPlanFeatures] = useState(null);
  const [updateLoader, setUpdateLoader] = useState(false);
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

  const handleAddAndEditFeature = ({ feature }) => {
    if (featureObj?._id) {
      setPlanFeatures((prevItems) =>
        prevItems.map((item) =>
          item._id === featureObj._id ? { ...item, text: feature } : item
        )
      );
    } else {
      setPlanFeatures((prevItems) => [...prevItems, { text: feature }]);
    }
    setOpen(!open);
    setFeatureObj(null);
  };

  const handleDeleteFeature = (id) => {
    setPlanFeatures((prevItems) => prevItems.filter((item) => item._id !== id));
  };

  const handleSubmit = async (data) => {
    setUpdateLoader(true);
    data.features = planFeatures;
    try {
      await makeRequest(
        HTTP.PUT,
        API_ENDPOINTS.SUBSCRIPTION_UPDATE,
        data,
        null,
        id
      );
    } finally {
      setUpdateLoader(false);
    }
  };

  useEffect(() => {
    setPlanFeatures(data?.data?.features);
    formikRef.current?.setValues({
      name: data?.data?.name,
      no_of_floors: data?.data?.no_of_floors,
      allow_extra_floors: data?.data?.allow_extra_floors ? 'Yes' : 'No'
    });
  }, [data]);

  return {
    open,
    router,
    setOpen,
    loading,
    options,
    formikRef,
    featureObj,
    planFeatures,
    updateLoader,
    handleSubmit,
    setFeatureObj,
    initialValues,
    featureModalRef,
    handleDeleteFeature,
    handleAddAndEditFeature
  };
}

export default useEditSubscription;
