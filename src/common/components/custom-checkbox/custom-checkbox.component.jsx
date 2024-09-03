import React from 'react';
import Image from 'next/image';
import { ErrorMessage } from 'formik';
import { Icons } from '@/common/assets';

export const CustomCheckbox = ({
  name,
  label,
  checked,
  onClick,
  className,
  ...rest
}) => {
  return (
    <React.Fragment>
      <div
        onClick={onClick}
        className="flex gap-[6px] items-center cursor-pointer"
      >
        <Image
          width={16}
          height={16}
          alt="checkbox"
          src={checked ? Icons.check : Icons.uncheck}
        />
        <span className={`${className} cursor-pointer`}>{label}</span>
      </div>

      <ErrorMessage name={name}>
        {(msg) => <p className="text-red-500 text-sm mt-1">{msg}</p>}
      </ErrorMessage>
    </React.Fragment>
  );
};
