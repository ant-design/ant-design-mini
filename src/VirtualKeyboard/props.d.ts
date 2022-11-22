import { IBaseProps } from '../_base';

export interface IVirtualKeyboardProps extends IBaseProps {
  /**
   * @description 验证码长度
   * @default 4
   */
  codeLength?: number;
  /**
   * @description 隐藏箭头
   * @default false
   */
  hideArrow?: boolean;
  /**
   * @description 展示小数点
   * @default true
   */
  point?: boolean;
  /**
   * @description 禁用确认按钮，支持动态修改
   * @default false
   */
  disableSureBtn?: boolean;
  /**
   * @description 确认按钮字
   * @default '确认'
   */
  sureBtnText?: string;
  /**
   * @description 确定按钮是否使用slot 
   * @default false
   */
  isSureBtnSlot?: boolean;
  /**
   * @description 类型
   * @default 'keyboard'
   */
  type?: 'keyboard' | 'amount' | 'code';
  /**
   * @description 是否震动
   * @default true
   */
  vibrate?: boolean;
  /**
   * @description 是否获取焦点
   * @default false
   */
  focus?: boolean;
  /**
   * @description 金额输入的placeholder
   * @default '0.00'
   */
  placeholder?: string;
  /**
   * @description 金额输入的光标样式
   * @default ''
   */
  placeholderClass?: string;
  /**
   * @description 金额输入的光标颜色
   * @default '#1677ff'
   */
  lightColor?: string;
  /**
   * @description 金额输入的光标样式
   * @default ''
   */
  lightClass?: string;
  /**
   * @description 整体样式
   * @default ''
   */
  className?: string;
  /**
   * @description 默认值
   * @default ''
   */
  value: string;
  /**
   * @description 金额输入的值的样式
   * @default ''
   */
  valueClass?: string;
  /**
   * @description 金额字体大小
   * @default 20
   */
  fontSize?: number;
  /**
   * @description 金额输入框最大值,不传或者传0的情况就没有最大值
   * @default 0
   */
  max?: number;
  /**
   * @description 金额输入框最小值
   * @default 0
   */
  min: 0;
  /**
   * @description 确认按钮背景颜色
   * @default '#1677FF'
   */
  sureBtnBg?: string;
  /**
   * @description 确认按钮字体颜色
   * @default '#fff'
   */
  sureColor?: string;
  /**
   * @description 禁用金额输入框
   * @default false
   */
  disable?: boolean;
  /**
   * @description 展示确认字体还是icon
   * @default true
   */
  showBtnText?: boolean;
  /**
   * @description 金额输入时，超过最大值的回调
   */
  onMax?: () => void;
  /**
   * @description 金额输入时，小于最小值的回调
   */
  onMin?: () => void;
  /**
   * @description 收起键盘时的回调
   */
  onBlur?: (val: string) => void;
  /**
   * @description 金额输入框，获取焦点的回调
   */
  onFocus?: (val: string) => void;
  /**
   * @description 数字发生改变时的回调
   */
  onChange?: (val: string) => void;
  /**
   * @description 点击确认时的回调
   */
  onEnter?: (val: string) => void;
  /**
   * @description 点击删除时的回调
   */
  onDelete?: (val: string) => void;
}

export declare const VirtualKeyboardDefaultProps: Partial<IVirtualKeyboardProps>;
