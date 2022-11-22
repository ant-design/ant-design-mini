import { FormItemProps } from '../FormItem/props';
import { ICheckboxGroupProps } from '../../Checkbox/CheckboxGroup/props';

export interface FormCheckboxGroupProps
  extends ICheckboxGroupProps,
    FormItemProps {
  checkboxPosition?: ICheckboxGroupProps['position'];
}

export declare const FormCheckboxGroupDefaultProps: Partial<FormCheckboxGroupProps>;
