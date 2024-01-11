import { FormItemFunctionalProps, FormItemProps } from '../FormItem/props';
import { ISelectorProps, SelectorFunctionalProps } from '../../Selector/props';

export interface FormSelectorProps extends ISelectorProps, FormItemProps {}

export const FormSelectorDefaultProps: Partial<FormSelectorProps> = {
  ...FormItemFunctionalProps,
  ...SelectorFunctionalProps,
};
