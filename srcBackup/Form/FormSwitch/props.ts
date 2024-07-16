import { FormItemDefaultProps, FormItemProps } from '../FormItem/props';
import { ISwitchProps, SwitchDefaultProps } from '../../Switch/props';

export interface FormSwitchProps
  extends Omit<ISwitchProps, 'checked' | 'defaultChecked'>,
    FormItemProps {
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
