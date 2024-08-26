import React, { useState } from 'react';

function useLogin() {
  const initialValues = {
    email: '',
    password: '',
    rememberMe: false
  };

  return { initialValues };
}

export default useLogin;
