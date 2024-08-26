import React from 'react';
import Image from 'next/image';
import { ErrorMessage } from 'formik';
import { Icons } from '@/common/assets';

export const Checkbox = ({
  name,
  label,
  formik,
  checked,
  onClick,
  className
}) => {
  return (
    <React.Fragment>
      <div className="flex gap-[6px] items-center" onClick={onClick}>
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
