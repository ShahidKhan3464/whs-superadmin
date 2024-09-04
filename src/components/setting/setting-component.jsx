'use client';

import React from 'react';
import Image from 'next/image';
import { Icons } from '@/common/assets';
import useSetting from './use-setting.hook';
import ProfilModal from './profile-modal-component';
import { dateFormatter } from '@/common/utils/date-format.utils';
import { CustomModal } from '@/common/components/custom-modal/custom-modal';
import { CustomLoader } from '@/common/components/custom-loader/custom-loader.component';
import { CustomButton } from '@/common/components/custom-button/custom-button.component';

export default function Setting() {
  const { open, setOpen, typeModal, setTypeModal, profileRef, profile } =
    useSetting();

  return (
    <div className="pt-6 px-6 h-full bg-white rounded-xl">
      <CustomModal
        isOpen={open}
        showCancelBtn={false}
        onClose={() => setOpen(!open)}
        className="w-full max-w-[546px]"
        actionBtnText={
          typeModal === 'changePassword' ? 'Update Password' : 'Save Changes'
        }
        title={
          typeModal === 'changePassword'
            ? 'Change Password'
            : 'Edit Admin Profile'
        }
        onSubmit={() => {
          if (profileRef.current) {
            profileRef.current.submitForm();
          }
        }}
      >
        <ProfilModal innerRef={profileRef} />
      </CustomModal>

      <div className="flex items-center gap-1.5">
        <Image width={24} height={24} alt="setting" src={Icons.setting} />
        <h2 className="text-2xl font-semibold text-lightBlack">
          Profile Settings
        </h2>
      </div>
      {false ? (
        <CustomLoader circleColor="#697586" className="h-full" />
      ) : (
        <>
          <div className="py-6">
            <div className="flex-between">
              <div className="flex items-center">
                <Image
                  alt="avatar"
                  src={Icons.avatar2}
                  className="w-[94px] h-[94px] rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-lightBlack">
                    {profile?.first_name} {profile?.last_name}
                  </h3>
                  <p className="text-base font-medium text-lightBlack">
                    Super Admin
                  </p>
                </div>
                <div className="ml-8 mt-6">
                  <p className="text-base font-medium text-[#475467]">
                    <span className="font-semibold">Joined Date :</span>{' '}
                    {dateFormatter(profile?.createdAt)}
                  </p>
                </div>
              </div>
              <div className="flex-center gap-2">
                <CustomButton
                  text="Change Password"
                  className="btn-primary w-[180px]"
                  onClick={() => {
                    setOpen(!open);
                    setTypeModal('changePassword');
                  }}
                  style={{
                    color: '#4B5565',
                    background: 'transparent',
                    border: '1px solid #D0D5DD'
                  }}
                />
                <CustomButton
                  text="Edit Admin Profile"
                  className="btn-primary w-[176px]"
                  onClick={() => {
                    setOpen(!open);
                    setTypeModal('updateProfile');
                  }}
                  style={{
                    color: '#4B5565',
                    background: 'transparent',
                    border: '1px solid #D0D5DD'
                  }}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
