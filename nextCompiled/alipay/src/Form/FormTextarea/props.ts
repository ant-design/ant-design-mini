import { FormItemDefaultProps } from './../FormItem/props';
import { FormItemProps } from '../FormItem/props';
import {
  TextareaDefaultProps,
  TextareaProps,
} from '../../Input/Textarea/props';

export interface FormTextareaProps
  extends Omit<TextareaProps, 'value' | 'defaultValue' | 'name'>,
    FormItemProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { value, defaultValue, name, ...rest } = TextareaDefaultProps;
export const FormTextareaDefaultProps: Partial<TextareaProps> = {
  ...FormItemDefaultProps,
  ...rest,
};
