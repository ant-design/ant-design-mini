import { IBaseProps, IconType } from '../_base';
/**
 * @description 标签，突出利益点、以及属性说明。
 */

enum EnumToastType {
  success = "success",
  warn = "warn",
  fail = "fail",
  loading = "loading"
}

export interface IToastProps extends IBaseProps {
  /**
   * @description Toast 完全关闭后的回调
   */
  onClose?: (e) => void;
  /**
   * @description Toast 文本内容
   */
  content?: string;
  /**
   * @description Toast 图标
   */
  icon?: IconType;
  /**
   * @description Toast 图片，与 icon 互斥，优先展示 icon
   */
  image?: string;
  /**
   * @description Toast 持续时间
   * @default 2000
   */
  duration: number;
  /**
   * @description 类名
   */
  className: string;
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
  /**
   * @description 点击蒙层是否隐藏 Toast
   */
  type: EnumToastType;
}
export declare const ToastDefaultProps: Partial<IToastProps>;
