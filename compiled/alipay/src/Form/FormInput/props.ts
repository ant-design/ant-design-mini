import { FormItemProps, FormItemFunctionalProps } from '../FormItem/props';
import { InputProps, InputFunctionalProps } from '../../Input/props';

export interface FormInputProps
  extends Omit<InputProps, 'value' | 'defaultValue' | 'name'>,
    FormItemProps {
  inputClassName: string;
  inputClassStyle: string;
}

export const FormInputDefaultProps: Partial<FormInputProps> = {};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { value, defaultValue, name, ...rest } = InputFunctionalProps;
export const FormInputFunctionalProps: FormInputProps = {
  ...FormItemFunctionalProps,
  ...rest,
  inputClassName: '',
  inputClassStyle: ' ',
};
