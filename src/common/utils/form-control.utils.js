import { CustomInput } from '@/common/components/custom-input/custom-input.component';
import { CustomSelect } from '@/common/components/custom-select/custom-select.component';
import { CustomCheckbox } from '@/common/components/custom-checkbox/custom-checkbox.component';

export const FormControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <CustomInput {...rest} />;
    case 'select':
      return <CustomSelect {...rest} />;
    case 'checkbox':
      return <CustomCheckbox {...rest} />;
    case 'radio':
    case 'file':
    case 'date':
    case 'time':
    default:
      return null;
  }
};
