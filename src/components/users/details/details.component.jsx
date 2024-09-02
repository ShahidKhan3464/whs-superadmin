'use client';

import React from 'react';
import Image from 'next/image';
import { Icons } from '@/common/assets';
import useUserDetails from './use-details.hook';
import CustomModal from '@/common/components/custom-modal/custom-modal';
import { CustomButton } from '@/common/components/custom-button/custom-button.component';
import { CustomLoader } from '@/common/components/custom-loader/custom-loader.component';

export default function UserDetails() {
  const { open, setOpen, loading, data, router, handleCompanyStatus } =
    useUserDetails();

  return (
    <div className="pt-6 px-6 h-full bg-white rounded-xl">
      <CustomModal
        isOpen={open}
        cancelBtnText="No"
        actionBtnText="Yes"
        onClose={() => setOpen(!open)}
        className="w-full max-w-[486px]"
        onSubmit={() => handleCompanyStatus(data?.status)}
      >
        <div className="flex flex-col items-center gap-6">
          <Image src={Icons.alertTriangle} alt="alert-triangle" />
          <p className="text-xl text-gray700 text-center font-semibold">
            Are You Sure You Want to {data?.status ? 'Deactivate' : 'Activate'}{' '}
            this Admin
          </p>
        </div>
      </CustomModal>

      <div className="flex item-center gap-1.5">
        <Image
          width={24}
          height={32}
          alt="arrow-left"
          src={Icons.arrowLeft}
          className="cursor-pointer"
          onClick={() => router.back()}
        />
        <h2 className="text-2xl font-semibold text-lightBlack">Details</h2>
      </div>
      {loading ? (
        <CustomLoader circleColor="#697586" className="h-full" />
      ) : (
        <>
          <div className="py-10">
            <h2 className="text-lg text-lightBlack font-semibold mb-4">
              Company Admin Details
            </h2>
            <div className="flex-between">
              <div className="flex items-center">
                <Image
                  alt="avatar"
                  src={Icons.avatar2}
                  className="w-[94px] h-[94px] rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-lightBlack">
                    {data?.first_name} {data?.last_name}
                  </h3>
                  <p className="text-base font-medium text-lightBlack">
                    Company Admin
                  </p>
                </div>
                <div className="ml-8 mt-6">
                  <p className="text-base font-medium text-[#475467]">
                    <span className="font-semibold">Joined Date :</span>{' '}
                    07/09/2024
                  </p>
                </div>
                <div className="ml-8 mt-6">
                  <p className="text-base text-lightBlack font-semibold">
                    Status{' '}
                    <span
                      className={`ml-2 py-1 px-2.5 rounded-2xl text-sm font-medium ${
                        data?.status
                          ? 'text-green bg-lightGreen'
                          : 'text-fireBrick bg-chablis'
                      }`}
                    >
                      {data?.status ? 'Active' : 'Inactive'}
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <CustomButton
                  onClick={() => setOpen(!open)}
                  text={`${data?.status ? 'Deactivate' : 'Activate'} Admin`}
                  icon={
                    <Image
                      alt="user"
                      src={data?.status ? Icons.userX : Icons.userCheck}
                    />
                  }
                  className={`px-5 py-3 gap-2 flex-center rounded-md text-base font-semibold border border-solid ${
                    data?.status
                      ? 'text-danger border-danger'
                      : 'text-green border-green'
                  }`}
                />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-lg text-lightBlack font-semibold mb-4">
              Company Details
            </h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col gap-[18px]">
                <p className="text-sm text-darkGray font-semibold">Email</p>
                <p className="text-base text-lightBlack font-medium">
                  {data?.email ?? 'N/A'}
                </p>
              </div>
              <div className="flex flex-col gap-[18px]">
                <p className="text-sm text-darkGray font-semibold">Company</p>
                <p className="text-base text-lightBlack font-medium">
                  {data?.profile?.company_name ?? 'N/A'}
                </p>
              </div>
              <div className="flex flex-col gap-[18px]">
                <p className="text-sm text-darkGray font-semibold">
                  Company Type
                </p>
                <p className="text-base text-lightBlack font-medium">
                  {data?.profile?.company_type ?? 'N/A'}
                </p>
              </div>
              <div className="flex flex-col gap-[18px]">
                <p className="text-sm text-darkGray font-semibold">
                  No of Employees
                </p>
                <p className="text-base text-lightBlack font-medium">
                  {data?.profile?.no_of_employees ?? 'N/A'}
                </p>
              </div>
              <div className="flex flex-col gap-[18px]">
                <p className="text-sm text-darkGray font-semibold">
                  Company Address
                </p>
                <p className="text-base text-lightBlack font-medium">
                  {data?.profile?.address ?? 'N/A'}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
