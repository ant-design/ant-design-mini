import { FormItemProps } from '../FormItem/props';


export interface FormInputProps extends FormItemProps {
  allowClear?: boolean;
  validatorTrigger?: string;
  required?: boolean;
  onBlur?: (e: any) => void;
  onConfirm?: (e: any) => void;
  onFocus?: (e: any) => void;
  onInput?: (e:any) => void;
}

export declare const FormInputDefaultProps: Partial<FormInputProps>;
