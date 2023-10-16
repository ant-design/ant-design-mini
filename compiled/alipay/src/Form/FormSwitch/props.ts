import { FormItemProps } from '../FormItem/props';
import { ISwitchProps } from '../../Switch/props';


export interface FormSwitchProps extends Omit<ISwitchProps, 'checked' | 'defaultChecked'>, FormItemProps {
  switchClassName: string;
  switchStyle: string;
}

export const FormSwitchDefaultProps: Partial<FormSwitchProps> = {
};
