import { useEffect, useState } from 'react';
import { getUserAndToken } from '@/common/utils/user-and-token.utils';

function useHeader() {
  const { user } = getUserAndToken();
  // const [mounted, setMounted] = useState(false);
  // console.log(user);
  // console.log(mounted);

  return { user };
}

export default useHeader;
