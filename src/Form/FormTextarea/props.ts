import { FormItemProps } from '../FormItem/props';
import { TextareaProps } from '../../Input/Textarea/props';


export interface FormTextareaProps extends Omit<TextareaProps, 'value' | 'defaultValue'>, FormItemProps {
}

export const FormTextareaDefaultProps: Partial<TextareaProps> = {};

export const FormInputDefaultProps = {
};
