import { FormItemDefaultProps, FormItemProps } from '../FormItem/props';
import { ISelectorProps, SelectorDefaultProps } from '../../Selector/props';

export interface FormSelectorProps extends ISelectorProps, FormItemProps {}

export const FormSelectorDefaultProps: Partial<FormSelectorProps> = {
  ...FormItemDefaultProps,
  ...SelectorDefaultProps,
};
