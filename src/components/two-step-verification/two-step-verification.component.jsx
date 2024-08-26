'use client';

import React from 'react';
import OtpInput from 'react-otp-input';
import useTwoStepVerification from './use-step-verification.hook';
import { CustomButton } from '@/common/components/custom-button/custom-button.component';

export default function ResetPassword() {
  const { otp, handleChange } = useTwoStepVerification();

  return (
    <React.Fragment>
      <h1 className="text-gray700 text-4xl text-center font-semibold mb-2.5">
        Code Verification
      </h1>
      <p className="text-base text-gray600 text-center">
        A verification code has been sent to email address
      </p>
      <div className="mt-10 mb-5">
        <p className="text-sm text-[#344054] font-medium">Secure code</p>
        <OtpInput
          value={otp}
          numInputs={6}
          //   inputType="number"
          onChange={handleChange}
          containerStyle={{ marginTop: '6px', gap: '5px' }}
          renderInput={(props) => <input {...props} />}
          separator={<span>-</span>}
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
        <div className="flex-between mt-[13px]">
          <p className="text-xs text-[#4C4C4C]">
            The verification code shall expire after 10 minutes.
          </p>
          <CustomButton
            text="Resend Code"
            className="text-base text-gray600 font-medium"
          />
        </div>
      </div>
      <CustomButton text="Verify Code" className="btn-primary w-full" />
    </React.Fragment>
  );
}
