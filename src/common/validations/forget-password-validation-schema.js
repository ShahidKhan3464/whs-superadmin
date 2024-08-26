import * as yup from 'yup';

export const forgetPasswordValidationSchema = () => {
  return yup.object().shape({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required')
  });
};
