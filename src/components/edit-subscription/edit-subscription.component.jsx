'use client';

import React from 'react';
import Image from 'next/image';
import { Formik } from 'formik';
import { Icons } from '@/common/assets';
import useEditSubscription from './use-edit-subscription.hook';
import { FormControl } from '@/common/utils/form-control.utils';
import { CustomButton } from '@/common/components/custom-button/custom-button.component';
import { CustomLoader } from '@/common/components/custom-loader/custom-loader.component';

export default function EditSubscription() {
  const { formikRef, loading, data, options, initialValues } =
    useEditSubscription();

  return (
    <div className="p-4 mt-6 h-full rounded-xl bg-white">
      <h3 className="text-xl text-[#211C37] font-semibold">
        Edit Subscription Plan
      </h3>
      {loading ? (
        <CustomLoader circleColor="#697586" className="h-full" />
      ) : (
        <Formik
          innerRef={formikRef}
          // onSubmit={handleSubmit}
          initialValues={initialValues}
        >
          {(formik) => {
            return (
              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col gap-5 mt-10 h-[calc(100%_-_56px)]"
              >
                <FormControl
                  name="name"
                  formik={formik}
                  control="input"
                  label="Subscription Name"
                />
                <div className="flex-between gap-4">
                  <FormControl
                    type="number"
                    control="input"
                    formik={formik}
                    name="no_of_floors"
                    label="No of Floors"
                  />
                  <FormControl
                    formik={formik}
                    control="select"
                    options={options}
                    name="allow_extra_floors"
                    label="Allow Extra Floors"
                    value={formik.values.allow_extra_floors}
                    onChange={(name, value) =>
                      formik.setFieldValue(name, value)
                    }
                  />
                </div>
                <div className="mt-8">
                  <div className="flex-between">
                    <h3 className="text-lg text-[#211C37] font-semibold">
                      Subscription Features
                    </h3>
                    <CustomButton
                      text="Add New Feature"
                      className="btn-primary w-[173px]"
                      style={{
                        color: '#4B5565',
                        background: 'transparent',
                        border: '1px solid #D0D5DD'
                      }}
                    />
                  </div>
                  <ul className="primary-scroll h-[400px] overflow-y-auto">
                    {data?.features.map((feature) => (
                      <li key={feature._id} className="pt-6 flex-between">
                        <span className="text-base text-[#475467] font-semibold">
                          {feature.text}
                        </span>
                        <div className="flex-center gap-4">
                          <Image
                            alt="edit"
                            width={20}
                            height={20}
                            src={Icons.edit}
                            className="cursor-pointer"
                          />
                          <Image
                            alt="trash"
                            width={20}
                            height={20}
                            src={Icons.trash}
                            className="cursor-pointer"
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto mb-4 flex-between">
                  <CustomButton
                    text="Cancel"
                    className="btn-primary w-[95px]"
                    style={{
                      color: '#4B5565',
                      background: 'transparent',
                      border: '1px solid #D0D5DD'
                    }}
                  />
                  <CustomButton
                    type="submit"
                    disabled={false}
                    isLoading={false}
                    text="Save Changes"
                    className="btn-primary w-[150px]"
                  />
                </div>
              </form>
            );
          }}
        </Formik>
      )}
    </div>
  );
}
