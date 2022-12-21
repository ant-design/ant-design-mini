import { FormItemProps } from '../FormItem/props';
import { TextareaProps } from '../../Input/Textarea/props';


export interface FormTextareaProps extends Omit<TextareaProps, 'value' | 'defaultValue'>, FormItemProps {
}

export declare const FormTextareaDefaultProps: Partial<TextareaProps>;
