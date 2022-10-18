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
}
export declare const IconDefaultProps: Partial<IIconProps>;
