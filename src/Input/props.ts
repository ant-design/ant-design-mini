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
  value?: string;
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
  /**
   * @description 最大值，仅在 type 为 number、digit、numberpad、digitpad 时，且输入有效数字后生效
   */
  max?: number;
  /**
   * @description 最小值，仅在 type 为 number、digit、numberpad、digitpad 时，且输入有效数字后生效
   */
  min?: number;
  /**
   * @description 计算精度，保留几位小数，输入有效数字后生效
   * @default -1
   */
  precision?: number;

  /// #if WECHAT
  /**
   * @default 指定光标与键盘的距离，取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离
   */
  cursorSpacing?: number;

  /**
   * @default 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)
   */
  alwaysEmbed?: boolean;

  /**
   * @description 光标颜色。iOS 下的格式为十六进制颜色值 #000000，安卓下的只支持 default 和 green，Skyline 下无限制
   */
  cursorColor?: number;

  /**
   * @default true
   * @description 键盘弹起时，是否自动上推页面
   */
  adjustPosition?: boolean;
  /**
   * @default false
   * @description focus时，点击页面的时候不收起键盘
   */
  holdKeyboard?: boolean;
  /// #endif

  onChange?: (value: string, e: any) => void;
  onBlur?: (value: string, e: any) => void;
  onFocus?: (value: string, e: any) => void;
  onConfirm?: (value: string, e: any) => void;
}

export const InputDefaultProps: InputProps = {
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
  /// #if WECHAT
  maxLength: -1,
  alwaysEmbed: false,
  cursorSpacing: 0,
  cursorColor: null,
  adjustPosition: true,
  holdKeyboard: false,
  /// #endif
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
  min: null,
  max: null,
  precision: -1,
};
