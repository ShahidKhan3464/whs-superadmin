import { getUserAndToken } from '@/common/utils/user-and-token.utils';

function useHeader() {
  const { user } = getUserAndToken();

  return { user };
}

export default useHeader;
