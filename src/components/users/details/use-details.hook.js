import { useState } from 'react';
import { useRouter } from 'next/navigation';

function useUserDetails() {
  const router = useRouter();

  return { router };
}

export default useUserDetails;
