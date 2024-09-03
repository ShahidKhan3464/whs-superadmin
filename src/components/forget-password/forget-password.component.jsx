'use client';

import React from 'react';
import Link from 'next/link';
import { Formik } from 'formik';
import useForgetPassword from './use-forget-password.hook';
import { FormControl } from '@/common/utils/form-control.utils';
import { CustomButton } from '@/common/components/custom-button/custom-button.component';
import { forgetPasswordValidationSchema } from '@/common/validations/forget-password-validation-schema';

export default function ForgetPassword() {
  const { loading, handleSubmit } = useForgetPassword();

  return (
    <React.Fragment>
      <h1 className="text-gray700 text-4xl text-center font-semibold mb-2.5">
        Forgot Password
      </h1>
      <p className="text-base text-gray600 text-center">
        Please enter your registered email to receive reset password link.
      </p>
      <Formik
        validateOnMount={true}
        onSubmit={handleSubmit}
        initialValues={{ email: '' }}
        validationSchema={forgetPasswordValidationSchema}
      >
        {(formik) => {
          return (
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-5 mt-10"
            >
              <FormControl
                type="email"
                name="email"
                label="Email"
                control="input"
                formik={formik}
                placeholder="Enter Email Address"
              />
              <CustomButton
                type="submit"
                disabled={loading}
                isLoading={loading}
                className="btn-primary"
                text="Send Verification Link"
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
