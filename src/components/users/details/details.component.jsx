'use client';

import React from 'react';
import Image from 'next/image';
import { Icons } from '@/common/assets';
import useUserDetails from './use-details.hook';
import { CustomButton } from '@/common/components/custom-button/custom-button.component';

export default function UserDetails() {
  const { router } = useUserDetails();

  return (
    <div className="pt-6 px-6 h-full bg-white rounded-xl">
      <div className="flex item-center gap-1.5">
        <Image
          alt="arrow-left"
          src={Icons.arrowLeft}
          className="cursor-pointer"
          onClick={() => router.back()}
        />
        <h2 className="text-2xl font-semibold text-[#344054]">Details</h2>
      </div>

      {/* Company Admin Details */}
      <div className="py-10">
        <h2 className="text-lg text-[#344054] font-semibold mb-4">
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
              <h3 className="text-xl font-semibold text-[#344054]">John Doe</h3>
              <p className="text-base font-medium text-[#344054]">
                Company Admin
              </p>
            </div>
            <div className="ml-8 mt-6">
              <p className="text-base font-medium text-[#475467]">
                <span className="font-semibold">Joined Date :</span> 07/09/2024
              </p>
            </div>
            <div className="ml-8 mt-6">
              <p className="text-base text-[#344054] font-semibold">
                Status{' '}
                <span className="ml-2 py-1 px-2.5 text-sm text-[#027A48] bg-[#ECFDF3] font-medium rounded-2xl">
                  Active
                </span>
              </p>
            </div>
          </div>
          <div>
            <CustomButton
              text="Inactivate Admin"
              icon={<Image src={Icons.userX} alt="userX" />}
              className="px-5 py-3 gap-2 flex-center rounded-md text-base text-[#D81919] font-semibold border border-solid border-[#D81919]"
            />
          </div>
        </div>
      </div>

      {/* Company Details */}
      <div className="mt-10">
        <h2 className="text-lg text-[#344054] font-semibold mb-4">
          Company Details
        </h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col gap-[18px]">
            <p className="text-sm text-[#667085] font-semibold">Email</p>
            <p className="text-base text-[#344054] font-medium">
              johndoe@mail.com
            </p>
          </div>
          <div className="flex flex-col gap-[18px]">
            <p className="text-sm text-[#667085] font-semibold">Company</p>
            <p className="text-base text-[#344054] font-medium">Company Name</p>
          </div>
          <div className="flex flex-col gap-[18px]">
            <p className="text-sm text-[#667085] font-semibold">Company Type</p>
            <p className="text-base text-[#344054] font-medium">Type here</p>
          </div>
          <div className="flex flex-col gap-[18px]">
            <p className="text-sm text-[#667085] font-semibold">
              No of Employees
            </p>
            <p className="text-base text-[#344054] font-medium">300</p>
          </div>
          <div className="flex flex-col gap-[18px]">
            <p className="text-sm text-[#667085] font-semibold">
              Company Address
            </p>
            <p className="text-base text-[#344054] font-medium">
              Company Address Here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
