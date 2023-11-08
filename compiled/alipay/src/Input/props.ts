import { IBaseProps } from '../_util/base';
/**
 * @description 输入框。
 */

export interface InputProps extends IBaseProps {
  type?:
    | 'text'
    | 'number'
    | 'idcard'
    | 'digit'
    | 'numberpad'
    | 'digitpad'
    | 'idcardpad';
  value: string;
  defaultValue: string;
  placeholder: string;
  placeholderClassName: string;
  placeholderStyle: string;
  allowClear: boolean;
  enableNative: boolean;
  confirmType: string;
  confirmHold: string;
  controlled: boolean;
  alwaysSystem: boolean;
  selectionStart: number;
  selectionEnd: number;
  cursor: number;
  maxLength: number;
  inputClassName: string;
  inputStyle: string;
  password?: boolean;
  prefix?: string;
  disabled?: boolean;
  focusClassName?: string;
  suffix?: string;
  focus?: boolean;
  /**
   * @description 组件名字，用于表单提交获取数据。
   */
  name?: string;
  focusStyle?: string;
  /**
   * @description 当 type 为 number, digit, idcard 数字键盘是否随机排列。
   * @default false
   */
  randomNumber?: boolean;
  onChange?: (value: string, e: any) => void;
  onBlur?: (value: string, e: any) => void;
  onFocus?: (value: string, e: any) => void;
  onConfirm?: (value: string, e: any) => void;
}

export const InputDefaultProps: Partial<InputProps> = {};
