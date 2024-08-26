import { useState } from 'react';

function useTwoStepVerification() {
  const [otp, setOtp] = useState('');

  const handleChange = (otp) => {
    setOtp(otp);
  };

  return { otp, handleChange };
}

export default useTwoStepVerification;
