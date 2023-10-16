import { FormItemProps } from '../FormItem/props';
import { ISelectorProps } from '../../Selector/props';

export interface FormSelectorProps extends ISelectorProps, FormItemProps {}

export const FormSelectorDefaultProps: Partial<FormSelectorProps> = {
};
