import { IBaseProps, IconType } from '../_util/base';
/**
 * @description 标签，突出利益点、以及属性说明。
 */

type EnumToastType = 'success' | 'warning' | 'error' | 'loading';

export interface IToastProps extends IBaseProps {
  /**
   * @description Toast 完全关闭后的回调
   */
  onClose: (e) => void;
  /**
   * @description Toast 文本内容
   */
  content: string;
  /**
   * @description Toast 图标
   */
  icon: IconType;
  /**
   * @description Toast 图片，与 icon 互斥，优先展示 icon
   */
  image: string;
  /**
   * @description Toast 持续时间
   * @default 2000
   */
  duration: number;
  /**
   * @description 是否展示 Toast
   */
  visible: boolean;
  /**
   * @description 是否展示蒙层
   */
  showMask: boolean;
  /**
   * @description 点击蒙层是否隐藏 Toast
   */
  maskCloseable: boolean;
  maskStyle: string;
  /**
   * @description 点击蒙层是否隐藏 Toast
   */
  type: EnumToastType;
}

export const ToastDefaultProps: Partial<IToastProps> = {
  duration: 2000,
  showMask: false,
  maskCloseable: false,
  type: null,
  maskStyle: '',
  style: '',
};

export const ToastFunctionalProps: Partial<IToastProps> = {
  content: null,
  icon: null,
  image: null,
  duration: 2000,
  visible: false,
  showMask: false,
  maskCloseable: false,
  maskStyle: '',
  type: null,
};
