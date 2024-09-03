'use client';

import React from 'react';
import Link from 'next/link';
import { Formik } from 'formik';
import useResetPassword from './use-reset-password.hook';
import { FormControl } from '@/common/utils/form-control.utils';
import { CustomButton } from '@/common/components/custom-button/custom-button.component';
import { resetPasswordValidationSchema } from '@/common/validations/reset-password-validation-schema';

export default function ResetPassword() {
  const { loading, initialValues, handleSubmit } = useResetPassword();

  return (
    <React.Fragment>
      <h1 className="text-gray700 text-4xl text-center font-semibold mb-2.5">
        Reset Password
      </h1>
      <p className="text-base text-gray600 text-center">
        Please set you new password.
      </p>
      <Formik
        validateOnMount={true}
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={resetPasswordValidationSchema}
      >
        {(formik) => {
          return (
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-5 mt-10"
            >
              <FormControl
                control="input"
                type="password"
                formik={formik}
                name="new_password"
                label="New Password"
                placeholder="Enter New Password"
              />
              <FormControl
                control="input"
                type="password"
                formik={formik}
                name="confirm_password"
                label="Confirm New  Password"
                placeholder="Re Enter New Password"
              />
              <CustomButton
                type="submit"
                disabled={loading}
                isLoading={loading}
                text="Update Password"
                className="btn-primary"
              />
              <div className="mt-5 flex-center gap-2 text-base font-medium">
                <Link href={'/login'} className="text-gray600 cursor-pointer">
                  Back to Login
                </Link>
              </div>
            </form>
          );
        }}
      </Formik>
    </React.Fragment>
  );
}
