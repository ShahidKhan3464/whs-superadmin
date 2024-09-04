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
  type = 'button',
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
          className={`p-6 bg-white rounded-[10px] shadow-[0px_0px_19px_0px_#00000012] ${className}`}
        >
          {title && (
            <div className="sticky top-0">
              <div className="flex-between">
                <h2 className="text-xl text-gray700 font-semibold">{title}</h2>
                {onClose && (
                  <Image
                    width={24}
                    height={24}
                    alt="cancel"
                    src={Icons.xCross}
                    className="cursor-pointer"
                    onClick={() => onClose && onClose()}
                  />
                )}
              </div>
            </div>
          )}
          <div>{children}</div>
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
              type={type}
              text={actionBtnText}
              onClick={() => onSubmit()}
              className="btn-primary w-full"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
