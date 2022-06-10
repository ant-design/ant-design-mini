
import { IBaseProps } from '../_base';
/**
 * @description 气泡，内部配合 PopoverItem 使用。
 */

export interface IPopoverProps extends IBaseProps {
  /**
   * @description 是否可见
   * @default false
   */
  visible?: boolean;
  /**
   * @description visible 变更时回调
   */
  onVisibleChange?: (visible: boolean, from: 'component' | 'mask') => void;
  /**
   * @description 方向
   * @default "bottom-right"
   */
  placement?: 'top' | 'top-right' | 'top-left' | 'bottom' | 'bottom-left' | 'bottom-right' | 'left' | 'left-top' | 'left-bottom' | 'right' | 'right-top' | 'right-bottom';
  /**
   * @description 组件显示模式
   * @default dark
   */
  mode?: 'dark' | 'light',
  /**
   * @description 是否展示蒙层
   * @default false
   */
  mask?: boolean;
  /**
   * @description 是否可点击蒙层关闭
   * @default true
   */
  maskClosable?: boolean;
  /**
   * @description 用以解决遮罩层受到 transform 影响而显示不全的问题
   * @default false
   */
  fixMaskFull?: boolean;
  /**
   * @description 蒙层是否透明
   * @default false
   */
  transparentMask?: boolean;
}
export declare const PopoverDefaultProps: Partial<IPopoverProps>;
