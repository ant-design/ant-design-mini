import { FormItemDefaultProps, FormItemProps } from '../FormItem/props';
import {
  CheckboxGroupDefaultProps,
  ICheckboxGroupProps,
} from '../../Checkbox/CheckboxGroup/props';

export interface FormCheckboxGroupProps
  extends Omit<ICheckboxGroupProps, 'position'>,
    FormItemProps {
  checkboxPosition?: ICheckboxGroupProps['position'];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { position, ...rest } = CheckboxGroupDefaultProps;
export const FormCheckboxGroupDefaultProps: Partial<FormCheckboxGroupProps> = {
  ...FormItemDefaultProps,
  ...rest,
  checkboxPosition: 'horizontal',
};
