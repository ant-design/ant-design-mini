import { IBaseProps } from '../../_util/base';
/**
 * @description 输入框。
 */

export interface TextareaProps extends IBaseProps {
  value: string;
  defaultValue: string;
  placeholder: string;
  placeholderClassName: string;
  placeholderStyle: string;
  autoHeight: boolean;
  showCount: boolean;
  allowClear: boolean;
  controlled: boolean;
  enableNative: boolean;
  maxLength: number;
  inputClassName: string;
  inputStyle: string;
  onChange: (value: string, e: any) => void;
  onBlur: (value: string, e: any) => void;
  onFocus: (value: string, e: any) => void;
  onConfirm: (value: string, e: any) => void;
}

export const TextareaDefaultProps: Partial<TextareaProps> = {
  enableNative: false,
};
