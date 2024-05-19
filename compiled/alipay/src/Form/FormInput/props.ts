import { FormItemProps, FormItemDefaultProps } from '../FormItem/props';
import { InputProps, InputDefaultProps } from '../../Input/props';

export interface FormInputProps
  extends Omit<InputProps, 'value' | 'defaultValue' | 'name'>,
    FormItemProps {
  inputClassName: string;
  inputClassStyle: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { value, defaultValue, name, ...rest } = InputDefaultProps;
export const FormInputDefaultProps: FormInputProps = {
  ...FormItemDefaultProps,
  ...rest,
  inputClassName: '',
  inputClassStyle: ' ',
};
