import Image from 'next/image';
import { Icons } from '@/common/assets';
import { ErrorMessage, Field } from 'formik';
import useInput from './use-custom-input.hook';

export const CustomInput = ({
  name,
  label,
  formik,
  type = 'text',
  disabled = false,
  className = 'w-full text-base text-[#182230] px-3 py-2.5 rounded-lg border-[0.66px] border-solid border-gray200 bg-[#FCFCFD] ease-soft appearance-none outline-none transition-all focus:outline-none',
  ...rest
}) => {
  const { showPassword, setShowPassword, borderColor } = useInput({
    name,
    formik
  });

  return (
    <div className="w-full">
      <label htmlFor={name} className="text-gray700 text-sm font-medium">
        {label}
      </label>
      <div className="relative mt-1">
        <Field name={name}>
          {({ field }) => (
            <input
              id={name}
              {...rest}
              {...field}
              autoComplete="off"
              disabled={disabled}
              type={showPassword ? 'text' : type}
              className={`${className} ${borderColor}
                placeholder:text-gray500 ${
                  disabled && 'bg-[#dbdede] cursor-not-allowed'
                }`}
            />
          )}
        </Field>

        {type === 'password' && (
          <Image
            priority
            width={20}
            height={20}
            alt="toggle password visibility"
            onClick={() => setShowPassword(!showPassword)}
            src={!showPassword ? Icons.eyeOn : Icons.eyeOff}
            className="absolute right-3 top-3 cursor-pointer"
          />
        )}
      </div>

      <ErrorMessage name={name}>
        {(msg) => <p className="text-red-500 text-sm">{msg}</p>}
      </ErrorMessage>
    </div>
  );
};
