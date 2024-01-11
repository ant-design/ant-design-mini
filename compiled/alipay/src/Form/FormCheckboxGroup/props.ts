import { FormItemFunctionalProps, FormItemProps } from '../FormItem/props';
import {
  CheckboxGroupFunctionalProps,
  ICheckboxGroupProps,
} from '../../Checkbox/CheckboxGroup/props';

export interface FormCheckboxGroupProps
  extends Omit<ICheckboxGroupProps, 'position'>,
    FormItemProps {
  checkboxPosition?: ICheckboxGroupProps['position'];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { position, ...rest } = CheckboxGroupFunctionalProps;
export const FormCheckboxGroupDefaultProps: Partial<FormCheckboxGroupProps> = {
  ...FormItemFunctionalProps,
  ...rest,
  checkboxPosition: 'horizontal',
};
