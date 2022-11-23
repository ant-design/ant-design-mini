import { FormItemProps } from '../FormItem/props';
import { IRadioGroupProps } from '../../Radio/RadioGroup/props';

export interface FormRadioGroupProps extends Omit<IRadioGroupProps, 'value' | 'defaultValue' | 'position' | 'name'>, FormItemProps {
  radioPosition?: IRadioGroupProps['position'];
}

export declare const FormRadioGroupDefaultProps: Partial<FormRadioGroupProps>;
