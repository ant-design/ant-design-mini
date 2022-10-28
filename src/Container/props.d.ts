/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBaseProps, IconType } from '../_base';
/**
 * @description 容器，依据最佳实践统一了元素的间距、圆角，并可根据具体情况选择使用 title 内容。
 */

export interface IContainerProps extends IBaseProps {
  /**
   * @description 标题
   */
  title?: string;
  /**
   * @description 标题是否在容器内
   * @default true
   */
  headerInBox: boolean;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 样式
   */
  style?: string;
}
export declare const ContainerDefaultProps: Partial<IContainerProps>;
