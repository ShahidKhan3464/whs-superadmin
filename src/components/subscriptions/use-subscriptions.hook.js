import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import makeRequest from '@/common/api/axios.config';
import useFetch from '@/common/hooks/use-fetch.hook';
import { API_ENDPOINTS } from '@/common/api/endpoints';
import { HTTP } from '@/common/constants/http-methods.constant';

function useSubscriptions() {
  const router = useRouter();
  const [plans, setPlans] = useState([]);
  const [open, setOpen] = useState(false);
  const [planObj, setPlanObj] = useState();
  const [activeTab, setActiveTab] = useState('');
  const subscriptionTabs = [{ title: 'monthly' }, { title: 'yearly' }];
  const { data, loading, refetch } = useFetch(
    API_ENDPOINTS.SUBSCRIPTION_LISTING
  );
  const extractedData = data?.data?.plans;

  const handlePlanStatus = async () => {
    try {
      await makeRequest(
        HTTP.PUT,
        API_ENDPOINTS.SUBSCRIPTION_STATUS,
        { status: planObj.status ? 'false' : 'true' },
        null,
        planObj?.id
      );
      refetch();
    } finally {
      setOpen(!open);
    }
  };

  useEffect(() => {
    setPlans(
      extractedData?.filter((plan) => `${plan.duration_unit}ly` === activeTab)
    );
  }, [extractedData, activeTab]);

  return {
    open,
    plans,
    router,
    planObj,
    loading,
    setOpen,
    activeTab,
    setPlanObj,
    setActiveTab,
    subscriptionTabs,
    handlePlanStatus
  };
}

export default useSubscriptions;
