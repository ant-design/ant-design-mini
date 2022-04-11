import { IBaseProps } from '../_base';
/**
 * @description 向导提示。
 */

export interface ITipsProps extends IBaseProps {
  /**
   * @description 需要使用的图片 url
   */
  image?: string;
  /**
   * @description 提示文字
   */
  title: string;
  /**
   * @description 箭头位置，不传时表示没有箭头
   */
  arrowPosition?: 'top-left' | 'top-center' | 'top-right' | 'left' | 'right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  /**
   * @description 按钮文字
   */
  buttonText?: string;
  /**
   * @description 是否有关闭按钮
   * @default false
   */
  showClose?: boolean;
  /**
   * @description 是否显示 Tips 组件
   * @default true
   */
  visible?: boolean;
  /**
   * @description 关闭按钮位置
   * @default right
   */
  buttonPosition?: 'right' | 'bottom';
  /**
   * @description 点击关闭的回调
   */
  onClose?: () => void;
  /**
   * @description 点击按钮回调
   */
  onButtonTap?: () => void;
}
export declare const TipsDefaultProps: Partial<ITipsProps>;
