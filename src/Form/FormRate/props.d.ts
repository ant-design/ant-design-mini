import { FormItemProps } from '../FormItem/props';
import { IRateProps } from '../../Rate/props';


export interface FormRateProps extends Omit<IRateProps, 'defaultValue'>, FormItemProps {
}

export declare const FormRateDefaultProps: Partial<FormRateProps>;
