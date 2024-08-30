import useFetch from '@/common/hooks/use-fetch.hook';
import { useParams, useRouter } from 'next/navigation';
import { API_ENDPOINTS } from '@/common/api/endpoints';

function useUserDetails() {
  const { id } = useParams();
  const router = useRouter();
  const { data, loading } = useFetch(API_ENDPOINTS.COMPANY_DETAILS, id);
  // console.log(data);

  return { router };
}

export default useUserDetails;
