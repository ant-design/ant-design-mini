import { FormItemDefaultProps, FormItemProps } from '../FormItem/props';
import {
  IRadioGroupProps,
  RadioGroupDefaultProps,
} from '../../Radio/RadioGroup/props';

export interface FormRadioGroupProps
  extends Omit<
      IRadioGroupProps,
      'value' | 'defaultValue' | 'position' | 'name'
    >,
    FormItemProps {
  radioPosition: IRadioGroupProps['position'];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { value, defaultValue, position, name, ...rest } =
RadioGroupDefaultProps;

export const FormRadioGroupDefaultProps: Partial<FormRadioGroupProps> = {
  ...FormItemDefaultProps,
  ...rest,
  radioPosition: 'horizontal',
};
