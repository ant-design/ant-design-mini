import { IBaseProps, IconType } from '../_base';
/**
 * @description 标签，突出利益点、以及属性说明。
 */

export interface ITagProps extends IBaseProps {
  /**
   * @description 类型
   * @default "fill"
   */
  type?: 'outline' | 'fill' | 'fill-light';
  /**
   * @description 标签颜色, 内建 primary(蓝), success(绿), warn(黄), danger(红)
   * @default "primary"
   */

  color?: 'image' | 'primary' | 'success' | 'warn' | 'danger';
  /**
   * @description 图标
   */

  icon?: IconType;
}
export declare const TagDefaultProps: Partial<ITagProps>;
