import Image from 'next/image';
import { Icons } from '@/common/assets';
import { ErrorMessage, Field } from 'formik';
import useInputHook from './use-custom-input.hook';

export const TextInput = ({
  name,
  label,
  formik,
  type = 'text',
  disabled = false,
  onClickDeleteLabel,
  deletelabel = false,
  highlightTouched = true,
  className = 'w-full text-base text-[#182230] px-3 py-2.5 rounded-lg border-[0.66px] border-solid border-[#E3E8EF] bg-[#FCFCFD] ease-soft appearance-none outline-none transition-all focus:outline-none',
  ...others
}) => {
  const { showPassword, setShowPassword, borderColor } = useInputHook({
    name,
    formik
  });

  return (
    <div className="w-full">
      <label className="text-gray700 text-sm font-medium">{label}</label>
      <div className="relative mt-1">
        <Field name={name}>
          {({ field }) => (
            <input
              {...field}
              {...others}
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
            src={showPassword ? Icons.eyeOn : Icons.eyeOff}
            className="absolute right-3 top-3 cursor-pointer"
          />
        )}
        {deletelabel && (
          <div
            onClick={onClickDeleteLabel}
            className="absolute cursor-pointer right-1 bottom-[3rem] text-sm font-semibold leading-5 text-[#F97066]"
          >
            Delete
          </div>
        )}
      </div>

      <ErrorMessage name={name}>
        {(msg) => <p className="text-red-500 text-sm">{msg}</p>}
      </ErrorMessage>
    </div>
  );
};
