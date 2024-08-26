import { ModalProps } from "@/interfaces/modal.interface";
import Image from "next/image";
import React from "react";
import ReactDOM from "react-dom";

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  onClose,
  children,
  className,
}) => {
  const handleClose = () => {
    onClose && onClose();
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      {/* Semi-transparent black overlay */}
      <div
        className="fixed inset-0 bg-black opacity-[70%]"
        onClick={handleClose}
      ></div>
      {/* Modal */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center">
        <div
          className={`primary-scroll bg-white overflow-x-auto rounded-[10px] shadow-2xl shadow-black/100 max-h-[70vh] ${className}`}
        >
          {title && (
            <div className="sticky bg-white top-0 z-[101] px-6 pt-6">
              <div className="flex justify-between items-center">
                <div className="text-lg font-medium leading-[29.97px] mb-[13px]">
                  {title}
                </div>
                {onClose && (
                  <Image
                    src="/assets/cross.svg"
                    alt="cancel"
                    className="close w-[26px] mb-2 h-[26px] cursor-pointer"
                    onClick={handleClose}
                    width={26}
                    height={26}
                  />
                )}
              </div>
            </div>
          )}
          {/* Content area */}
          <div className="mt-2 overflow-hidde px-6 pb-6 bg-white">
            {children}
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
