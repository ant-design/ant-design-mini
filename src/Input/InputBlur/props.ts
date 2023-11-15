import { IBaseProps } from '../../_util/base';

export type InputType =
  | 'text'
  | 'number'
  | 'idcard'
  | 'digit'
  | 'numberpad'
  | 'digitpad'
  | 'idcardpad';

/**
 * @description 输入框。
 */

export interface InputBlurProps extends IBaseProps {
  value: string;
  defaultValue: string;
  placeholder: string;
  placeholderClassName: string;
  placeholderStyle: string;
  enableNative: boolean;
  confirmType: string;
  confirmHold: string;
  alwaysSystem: boolean;
  selectionStart: number;
  selectionEnd: number;
  cursor: number;
  controlled: boolean;
  maxLength?: number;
  inputClassName: string;
  inputStyle: string;
  focus?: boolean;
  password: boolean;
  disabled?: boolean;
  /**
   * @description 组件名字，用于表单提交获取数据。
   */
  name?: string;
  type?: InputType;
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

export const InputBlurDefaultProps: Partial<InputBlurProps> = {};
