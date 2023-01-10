import { IBaseProps } from '../_base';

export interface INumberKeyboardProps extends IBaseProps {
  /**
   * @description 样式
   * @default ''
   */
  className?: string;
  /**
   * @description 关闭箭头
   * @default false
   */
  closeable?: boolean;
  /**
   * @description 展示小数点
   * @default true
   */
  point?: boolean;
  /**
   * @description 确认按钮文字
   * @default ''
   */
  confirmText?: string;
  /**
   * @description 是否震动
   * @default true
   */
  vibrate?: boolean;
  /**
   * @description 是否展示
   * @default false
   */
  visible?: boolean;
  /**
   * @description 值
   * @default ''
   */
  value?: string;
  /**
   * @description 安全距离
   * @default true
   */
  safeArea?: boolean;
  /**
   * @description 乱序
   * @default fasle
   */
  random?: boolean;
  /**
   * @description 禁用
   * @default false
   */
  confirmDisabled?: boolean;
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

export declare const NumberKeyboardDefaultProps: Partial<INumberKeyboardProps>;
