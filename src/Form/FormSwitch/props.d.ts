import { FormItemProps } from '../FormItem/props';
import { ISwitchProps } from '../../Switch/props';


export interface FormSwitchProps extends Omit<ISwitchProps, 'checked' | 'defaultChecked'>, FormItemProps {
}

export declare const FormSwitchDefaultProps: Partial<FormSwitchProps>;
