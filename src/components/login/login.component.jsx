'use client';

import React from 'react';
import Link from 'next/link';
import { Formik } from 'formik';
import useLogin from './use-login.hook';
import { TextInput } from '@/common/components/custom-input/custom-input.component';
import { loginValidationSchema } from '@/common/validations/login-validation.schema';
import { Checkbox } from '@/common/components/custom-checkbox/custom-checkbox.component';
import { CustomButton } from '@/common/components/custom-button/custom-button.component';

export default function Login() {
  const { initialValues } = useLogin();

  return (
    <React.Fragment>
      <h1 className="text-gray700 text-4xl text-center font-semibold mb-2.5">
        Login
      </h1>
      <p className="text-base text-gray600 text-center">
        Welcome back! Please log in to access your account.
      </p>
      <Formik
        validateOnMount={true}
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
      >
        {(formik) => {
          return (
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-5 mt-10"
            >
              <TextInput
                name="email"
                type="email"
                label="Email"
                formik={formik}
                placeholder="Enter Email Address"
              />
              <TextInput
                formik={formik}
                name="password"
                type="password"
                label="Password"
                placeholder="Enter Password"
              />
              <div className="flex-between">
                <Checkbox
                  formik={formik}
                  name="rememberMe"
                  label="Remember Me"
                  checked={formik.values.rememberMe}
                  className="text-base text-[#4C4C4C]"
                  onClick={() =>
                    formik.setFieldValue(
                      'rememberMe',
                      !formik.values.rememberMe
                    )
                  }
                />
                <Link
                  href={'/forget-password'}
                  className="text-base font-medium text-gray600"
                >
                  Forgot Password
                </Link>
              </div>
              <CustomButton
                text="Login"
                type="submit"
                className="btn-primary"
              />
            </form>
          );
        }}
      </Formik>
    </React.Fragment>
  );
}
