/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBaseProps, IconType } from '../_base';
/**
 * @description 容器，依据最佳实践统一了元素的间距、圆角，并可根据具体情况选择使用 title 内容。
 */

export interface ICardProps extends IBaseProps {
  /**
   * @description 标题
   */
  title?: string;
  /**
   * @description 缩略图 url
   */
  image?: string;
  /**
   * @description 右侧图标
   */
  icon?: IconType;
  /**
   * @description 右侧图标点击回调
   */
  onIconTap?: (event?: any) => void;
}
export declare const CardDefaultProps: Partial<ICardProps>;
