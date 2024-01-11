import { FormItemFunctionalProps } from './../FormItem/props';
import { FormItemProps } from '../FormItem/props';
import {
  TextareaFunctionalProps,
  TextareaProps,
} from '../../Input/Textarea/props';

export interface FormTextareaProps
  extends Omit<TextareaProps, 'value' | 'defaultValue' | 'name'>,
    FormItemProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { value, defaultValue, name, ...rest } = TextareaFunctionalProps;
export const FormTextareaDefaultProps: Partial<TextareaProps> = {
  ...FormItemFunctionalProps,
  ...rest,
};
