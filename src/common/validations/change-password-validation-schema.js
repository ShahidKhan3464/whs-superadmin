import * as Yup from 'yup';

export const changePasswordValidationSchema = Yup.object().shape({
  current_password: Yup.string().required('Current password is required'),
  new_password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password cannot exceed 20 characters')
    .matches(/[A-Z]/, 'Password must have at least one uppercase letter')
    .matches(/[a-z]/, 'Password must have at least one lowercase letter')
    .matches(/\d/, 'Password must have at least one digit')
    .matches(/[@$!%*?&#]/, 'Password must have at least one special character')
    .required('New password is required'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('new_password'), ''], 'Passwords must match')
    .required('Confirm password is required')
});
