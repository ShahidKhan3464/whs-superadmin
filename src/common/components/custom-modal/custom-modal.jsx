import React from 'react';
import Image from 'next/image';
import { Icons } from '@/common/assets';
import { CustomButton } from '../custom-button/custom-button.component';

export const CustomModal = ({
  title,
  isOpen,
  onClose,
  children,
  onSubmit,
  className,
  cancelBtnText,
  actionBtnText,
  showCancelBtn = true
}) => {
  if (!isOpen) return null;

  return (
    <React.Fragment>
      <div
        onClick={() => onClose && onClose()}
        className="fixed inset-0 bg-black opacity-[70%] z-[2]"
      ></div>
      <div className="fixed flex-center inset-0 z-[100]">
        <div
          className={`bg-white rounded-[10px] shadow-[0px_0px_19px_0px_#00000012] ${className}`}
        >
          {title && (
            <div className="sticky bg-white top-0 z-[101] px-6 pt-6">
              <div className="flex justify-between items-center">
                <div className="text-lg font-medium leading-[29.97px] mb-[13px]">
                  {title}
                </div>
                {onClose && (
                  <Image
                    width={24}
                    height={24}
                    alt="cancel"
                    src={Icons.xCross}
                    onClick={() => onClose && onClose()}
                    className="close w-[26px] mb-2 cursor-pointer"
                  />
                )}
              </div>
            </div>
          )}
          <div className="p-6 rounded-[10px] bg-white">
            {children}
            <div className="flex-between gap-8 mt-6">
              {showCancelBtn && (
                <CustomButton
                  text={cancelBtnText}
                  onClick={() => onClose && onClose()}
                  style={{ color: '#4B5565', backgroundColor: 'transparent' }}
                  className="btn-primary w-full border border-solid border-[#D0D5DD]"
                />
              )}
              <CustomButton
                text={actionBtnText}
                onClick={() => onSubmit()}
                className="btn-primary w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
