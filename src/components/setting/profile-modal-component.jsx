import React from 'react';
import { Formik } from 'formik';
import useSetting from './use-setting.hook';
import { FormControl } from '@/common/utils/form-control.utils';
import { changePasswordValidationSchema } from '@/common/validations/change-password-validation-schema';

export default function ProfilModal({ innerRef }) {
  const { updateProfileValues, changPasswordValues, typeModal, handleSubmit } =
    useSetting();

  return (
    <Formik
      innerRef={innerRef}
      onSubmit={handleSubmit}
      initialValues={
        typeModal === 'changePassword'
          ? changPasswordValues
          : updateProfileValues
      }
      validationSchema={changePasswordValidationSchema}
    >
      {(formik) => (
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-5 mt-10"
        >
          {typeModal === 'changePassword' ? (
            <>
              <FormControl
                type="password"
                control="input"
                formik={formik}
                name="current_password"
                label="Current Password"
                placeholder="Enter Current Password"
              />
              <FormControl
                type="password"
                control="input"
                formik={formik}
                name="new_password"
                label="New Password"
                placeholder="Enter New Password"
              />
              <FormControl
                type="password"
                control="input"
                formik={formik}
                name="confirm_password"
                label="Confirm New Password"
                placeholder="Re Enter New Password"
              />
            </>
          ) : (
            'dkdl'
          )}
        </form>
      )}
    </Formik>
  );
}
