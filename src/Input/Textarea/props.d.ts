import { IBaseProps } from '../../_base';
/**
 * @description 输入框。
 */

export interface TextareaProps extends IBaseProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  placeholderClassName?: string;
  placeholderStyle?: string;
  autoHeight?: boolean;
  showCount?: boolean;
  allowClear?: boolean;
  enableNative?: boolean;
  maxLength?: number;
  inputClassName?: string;
  inputStyle?: string;
  onChange?: (value: string, e: any) => void;
  onBlur?: (value: string, e: any) => void;
  onFocus?: (value: string, e: any) => void;
  onConfirm?: (value: string, e: any) => void;
}
export declare const TextareaDefaultProps: Partial<TextareaProps>;
