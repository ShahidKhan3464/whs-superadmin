import React from 'react';
import Image from 'next/image';
import { ErrorMessage } from 'formik';
import { Icons } from '@/common/assets';
import useSelect from './use-custom-select.hook';

export const CustomSelect = ({
  name,
  label,
  value,
  formik,
  options,
  onChange,
  placeholder = '',
  disabled = false,
  className = 'w-full capitalize text-base text-[#182230] p-3 rounded-lg border-[0.66px] border-solid border-gray200 bg-[#FCFCFD] ease-soft appearance-none outline-none transition-all focus:outline-none',
  ...rest
}) => {
  const { isOpen, borderColor, setIsOpen, dropdownRef, dropdownPosition } =
    useSelect({
      name,
      formik
    });

  return (
    <div className="w-full" ref={dropdownRef}>
      {label && (
        <label htmlFor={name} className="text-gray700 text-sm font-medium">
          {label}
        </label>
      )}
      <div className="relative mt-1">
        <button
          id={name}
          type="button"
          disabled={disabled}
          onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
          className={`flex-between gap-2 ${className} ${borderColor} ${
            disabled && 'bg-[#dbdede] cursor-not-allowed'
          }`}
        >
          <span className={placeholder ? 'text-gray500' : ''}>
            {value || placeholder}
          </span>
          <div>
            <Image
              priority
              width={20}
              height={20}
              alt="Dropdown Arrow"
              src={Icons.arrowDown}
            />
          </div>
        </button>
        {isOpen && (
          <ul
            role="listbox"
            aria-activedescendant={value}
            className={`mt-2 z-20 w-full rounded-lg overflow-y-auto max-h-[175px] absolute shadow-lg bg-white ring-1 ring-black ring-opacity-5  ${
              dropdownPosition === 'top' ? 'bottom-13' : 'top-13'
            }`}
          >
            {options?.map((option, index) => (
              <li
                key={index}
                tabIndex={0}
                role="option"
                aria-selected={value === option.value}
                className={`px-4 py-2 text-sm text-gray600 font-medium cursor-pointer hover:bg-[#f9f9f8] ${
                  value === option.value ? 'bg-gray-200' : ''
                }`}
                onClick={() => {
                  onChange(name, option.value);
                  setIsOpen((prevIsOpen) => !prevIsOpen);
                }}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
      <ErrorMessage name={name}>
        {(msg) => <p className="text-red-500 text-sm">{msg}</p>}
      </ErrorMessage>
    </div>
  );
};
