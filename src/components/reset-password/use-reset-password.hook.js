import React, { useState } from 'react';

function useResetPassword() {
  const initialValues = {
    newPassword: '',
    confirmPassword: ''
  };

  return { initialValues };
}

export default useResetPassword;
