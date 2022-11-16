import { IBaseProps } from '../_base';
/**
 * @description 输入框。
 */

export interface InputProps extends IBaseProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  placeholderClassName?: string;
  placeholderStyle?: string;
  allowClear?: boolean;
  defaultFocus?: boolean;
  confirmType?: string;
  cursor?: number;
  inputClassName?: string;
  inputStyle?: string;
  maxLength?: number;
  password?: boolean;
  onChange?: (value: string, e: any) => void;
  onBlur?: (value: string, e: any) => void;
  onFocus?: (value: string, e: any) => void;
  onConfirm?: (value: string, e: any) => void;
  onClear?: (value: string, e: any) => void;
}
export declare const InputDefaultProps: Partial<InputProps>;
