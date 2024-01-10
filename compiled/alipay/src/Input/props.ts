import { IBaseProps } from '../_util/base';

export type InputType =
  | 'text'
  | 'number'
  | 'idcard'
  | 'digit'
  /**
   * 支付宝
   */
  | 'numberpad'
  | 'digitpad'
  | 'idcardpad'
  /**
   * 只支持微信
   */
  | 'safe-password'
  | 'nickname';

/**
 * @description 输入框。
 */

export interface InputProps extends IBaseProps {
  type?: InputType;
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
  maxLength?: number;
  inputClassName?: string;
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

export const InputFunctionalProps: InputProps = {
  type: null,
  value: null,
  defaultValue: null,
  placeholder: null,
  placeholderClassName: null,
  placeholderStyle: null,
  allowClear: null,
  enableNative: null,
  confirmType: null,
  confirmHold: null,
  controlled: null,
  alwaysSystem: null,
  selectionStart: null,
  selectionEnd: null,
  cursor: null,
  inputClassName: null,
  inputStyle: null,
  password: null,
  prefix: null,
  disabled: null,
  focusClassName: null,
  suffix: null,
  focus: null,
  name: null,
  focusStyle: null,
  randomNumber: null,
};
