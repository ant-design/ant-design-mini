import { IBaseProps } from '../_util/base';

export interface INumberKeyboardProps extends IBaseProps {
  /**
   * @description 关闭箭头
   * @default false
   */
  closeable: boolean;
  /**
   * @description 展示小数点
   * @default true
   */
  point: boolean;
  /**
   * @description 确认按钮文字
   * @default ''
   */
  confirmText: string;
  /**
   * @description 是否震动
   * @default true
   */
  vibrate: boolean;
  /**
   * @description 是否展示
   * @default false
   */
  visible: boolean;
  /**
   * @description 值
   * @default ''
   */
  value: string;
  /**
   * @description 安全距离
   * @default true
   */
  safeArea: boolean;
  /**
   * @description 乱序
   * @default fasle
   */
  random: boolean;
  /**
   * @description 禁用
   * @default false
   */
  confirmDisabled: boolean;
  /**
   * @description 输入值变化时的回调
   */
  onChange?: (val: string) => void;
  /**
   * @description 点击确认时的回调
   */
  onConfirm?: () => void;
  /**
   * @description 隐藏键盘时的回调
   */
  onClose?: () => void;
}

export const NumberKeyboardDefaultProps: Partial<INumberKeyboardProps> = {
  closeable: false, // 关闭箭头
  point: true, // 展示小数点
  confirmText: '', // 确认按钮文字
  vibrate: false, // 震动反馈
  visible: false, // 是否展示
  value: '', // 值
  safeArea: true, // 安全区域
  random: false, // 乱序
  confirmDisabled: false, // 禁用确认按钮
  onChange: () => {},
  onConfirm: () => {},
  onClose: () => {},
};
