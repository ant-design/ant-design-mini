import { ISwitchProps, SwitchDefaultProps } from '../../Switch/props';
import { FormItemDefaultProps, FormItemProps } from '../FormItem/props';

export interface FormSwitchProps
  extends Omit<ISwitchProps, 'checked' | 'defaultChecked'>,
    Omit<FormItemProps, 'readonly'> {
  switchClassName: string;
  switchStyle: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { checked, defaultChecked, ...rest } = SwitchDefaultProps;
export const FormSwitchDefaultProps: Partial<FormSwitchProps> = {
  ...FormItemDefaultProps,
  ...rest,
  switchClassName: '',
  switchStyle: '',
};
