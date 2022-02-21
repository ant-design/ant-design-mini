/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBaseProps, IconType } from '../../_base';
/**
 * @description 气泡内部元素，必须配合 PopoverItem 使用。
 */

export interface IPopoverItemProps extends IBaseProps {
  /**
   * @description 图标
   */
  icon?: IconType;

  /**
   * @description 点击回调
   */
  onTap?: (event?: any) => void;
}
export declare const PopoverItemDefaultProps: Partial<IPopoverItemProps>;
