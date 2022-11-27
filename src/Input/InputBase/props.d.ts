import { IBaseProps } from '../../_base';
/**
 * @description 输入框。
 */

export interface InputBaseProps extends IBaseProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  placeholderClassName?: string;
  placeholderStyle?: string;
  allowClear?: boolean;
  confirmType?: string;
  cursor?: number;
  maxLength?: number;
  password?: boolean;
  onChange?: (value: string, e: any) => void;
  onBlur?: (e: any) => void;
  onFocus?: (e: any) => void;
  onConfirm?: (e: any) => void;
}
export declare const InputBaseDefaultProps: Partial<InputBaseProps>;
