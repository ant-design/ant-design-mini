/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBaseProps } from '../_base';
/**
 * @description 图标，内置丰富的图标可以选择。
 */

export interface IIconProps<T = any> extends IBaseProps {
  /**
   * @description icon 的大小，x-small(16)、small(32)、medium(48)、large(64)、x-large(128)，
   * @default "medium"
   */
  size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
  /**
   * @description icon 的颜色
   */

  color?: string;

  /**
   * @description icon 图标的类型
   * @default ""
   */
  type: string;
  /**
   * @description 图标的点击事件回调
   * @param event 回调事件
   */

  onTap?: (event: T) => void;
  /**
  * @description 是否阻止事件冒泡
  */
  stopPropagation?: boolean;
}
export declare const IconDefaultProps: Partial<IIconProps>;
