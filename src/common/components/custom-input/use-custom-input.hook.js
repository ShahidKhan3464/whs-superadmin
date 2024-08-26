import { useState } from 'react';

function useInputHook({ formik, name }) {
  const [showPassword, setShowPassword] = useState(false);

  const error = formik.errors[name];
  const touched = formik.touched[name];

  const borderColor = error && touched ? 'border-red-500' : '';

  return {
    borderColor,
    showPassword,
    setShowPassword
  };
}

export default useInputHook;
