import React from 'react';
import { CustomLoader } from '../custom-loader/custom-loader.component';

export const CustomButton = ({
  icon,
  onClick,
  children,
  text = '',
  className = '',
  type = 'button',
  disabled = false,
  isLoading = false,
  iconPosition = 'before',
  ...others
}) => {
  const renderContent = () => (
    <>
      {iconPosition === 'before' && icon}
      {isLoading ? <CustomLoader /> : text}
      {iconPosition === 'after' && icon}
    </>
  );

  return (
    <button
      {...others}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${className} ${disabled && 'btn-primary-disabled'}`}
    >
      {renderContent()}
      {children}
    </button>
  );
};
