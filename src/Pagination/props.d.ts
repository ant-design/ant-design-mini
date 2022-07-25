import { IBaseProps } from '../_base';

export interface IPaginationProps extends IBaseProps {
  /**
   * @description 分页符背景色
   * @default '#ddd'
   */
  fillColor?: string;
  /**
   * @description 分页符颜色
   * @default '#1677ff'
   */
  frontColor?: string;
}
export declare const PaginationDefaultProps: IPaginationProps;
