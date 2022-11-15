import { IBaseProps } from '../../_base';


export interface FormInputProps extends IBaseProps {
  name: string;
  label: string;
  position?: 'horizontal';
  allowClear?: boolean;
  validatorTrigger?: string;
  required?: boolean;
  onBlur?: (e: any) => void;
  onConfirm?: (e: any) => void;
  onFocus?: (e: any) => void;
  onInput?: (e:any) => void;
}

export declare const FormInputDefaultProps: Partial<FormInputProps>;
