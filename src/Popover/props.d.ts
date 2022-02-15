
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
  onVisibleChange?: (visible: boolean) => void;
  /**
   * @description 方向
   * @default "bottom-right"
   */
  placement?: 'top' | 'top-right' | 'top-left' | 'bottom' | 'bottom-left' | 'bottom-right' | 'left' | 'left-top' | 'left-bottom' | 'right' | 'right-top' | 'right-bottom';
  /**
   * @description 组件显示模式
   * @default dark
   */
  mode?: 'dark' | 'light'
}
export declare const PopoverDefaultProps: Partial<IPopoverProps>;
