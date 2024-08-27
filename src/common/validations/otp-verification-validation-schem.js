import * as Yup from 'yup';

export const otpVerificationValidationSchema = Yup.object().shape({
  otpCode: Yup.string().required('Otpcode is required')
});
