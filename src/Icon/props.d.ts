/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBaseProps } from '../_base';
/**
 * @description 图标，内置丰富的图标可以选择。
 */

export interface IIconProps<T = any> extends IBaseProps {
  /**
   * @description icon 图标的类型
   * @default ""
   */
  type: string;

  /**
   * 点击图标
   */
  onTap?: (e: any) => void;

  /**
   * 点击图标
   */
   catchTap?: (e: any) => void;
}
export declare const IconDefaultProps: Partial<IIconProps>;
