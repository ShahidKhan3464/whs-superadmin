'use client';

import React from 'react';
import OtpInput from 'react-otp-input';
import { ErrorMessage, Field, Formik } from 'formik';
import useTwoStepVerification from './use-step-verification.hook';
import { CustomButton } from '@/common/components/custom-button/custom-button.component';
import { otpVerificationValidationSchema } from '@/common/validations/otp-verification-validation-schem';

export default function TwoStepVerification() {
  const { loading, resendCode, handleSubmit } = useTwoStepVerification();

  return (
    <React.Fragment>
      <h1 className="text-gray700 text-4xl text-center font-semibold mb-2.5">
        Code Verification
      </h1>
      <p className="text-base text-gray600 text-center">
        A verification code has been sent to email address
      </p>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ otpCode: '' }}
        validationSchema={otpVerificationValidationSchema}
      >
        {(formik) => {
          return (
            <form onSubmit={formik.handleSubmit} className="mt-10">
              <p className="text-sm text-lightBlack font-medium">Secure code</p>
              <Field name="otpCode">
                {({ field }) => (
                  <React.Fragment>
                    <OtpInput
                      numInputs={6}
                      field={{ ...field }}
                      //   inputType="number"
                      separator={<span>-</span>}
                      value={formik.values.otpCode}
                      renderInput={(props) => <input {...props} />}
                      containerStyle={{ marginTop: '6px', gap: '5px' }}
                      onChange={(value) =>
                        formik.setFieldValue('otpCode', value)
                      }
                      inputStyle={{
                        width: '4rem',
                        height: '4rem',
                        fontWeight: 600,
                        color: '#364152',
                        fontSize: '48px',
                        fontSize: '3rem',
                        background: '#FCFCFD',
                        borderRadius: '0.375rem',
                        border: '1px solid #E3E8EF',
                        boxShadow: '0px 1px 2px 0px #1018280D'
                      }}
                    />
                    <ErrorMessage name={'otpCode'}>
                      {(msg) => <p className="text-red-500 text-sm">{msg}</p>}
                    </ErrorMessage>
                  </React.Fragment>
                )}
              </Field>
              <div className="flex-between mt-[13px] mb-5">
                <p className="text-xs text-[#4C4C4C]">
                  The verification code shall expire after 10 minutes.
                </p>
                <CustomButton
                  type="button"
                  text="Resend Code"
                  onClick={resendCode}
                  className="text-base text-gray600 font-medium"
                />
              </div>
              <CustomButton
                type="submit"
                text="Verify Code"
                disabled={loading}
                isLoading={loading}
                className="btn-primary w-full"
              />
            </form>
          );
        }}
      </Formik>
    </React.Fragment>
  );
}
