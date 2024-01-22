import { IBaseProps } from '../_util/base';

export interface IPaginationProps extends IBaseProps {
  /**
   * @description 分页符背景色
   * @default '#ddd'
   */
  fillColor: string;
  /**
   * @description 分页符颜色
   * @default '#1677ff'
   */
  frontColor: string;
}

export const PaginationDefaultProps: Partial<IPaginationProps> = {
  fillColor: '',
  frontColor: '',
};
