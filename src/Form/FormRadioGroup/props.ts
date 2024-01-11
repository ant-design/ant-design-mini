import { FormItemFunctionalProps, FormItemProps } from '../FormItem/props';
import {
  IRadioGroupProps,
  RadioGroupFunctionalProps,
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
  RadioGroupFunctionalProps;

export const FormRadioGroupDefaultProps: Partial<FormRadioGroupProps> = {
  ...FormItemFunctionalProps,
  ...rest,
  radioPosition: 'horizontal',
};
