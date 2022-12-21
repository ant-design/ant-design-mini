import { FormItemProps } from '../FormItem/props';
import { InputProps } from '../../Input/props';


export interface FormInputProps extends Omit<InputProps, 'value' | 'defaultValue'>, FormItemProps {
}

export declare const FormInputDefaultProps: Partial<FormInputProps>;
