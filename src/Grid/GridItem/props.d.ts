import { IBaseProps } from '../../_base';

export interface IGridItem {
  /**
   * @description 主文案
   */
  title: string;
  /**
   * @description 副文案
   */
  desc?: string;
  /**
   * @description 图标
   */
  icon: string;
  /**
   * @desscription 图标样式
   * @default 'normal'
   */
  iconStyle: 'normal' | 'circle';
}
/**
 * @description Grid内部元素
 */
export interface IGridItemProps extends IBaseProps {
  item: IGridItem;
  onTap(item: IGridItem): void;
  columns: number;
  /**
   * @description 是否有垂直方向间距
   */
  verticalSpace: boolean;
  /**
   * @desscription 图标样式
   * @default 'normal'
   */
  iconStyle?: 'normal' | 'circle';
  iconSize?: string | number;
  /**
   * @description 标题大小，2列时large，3列时middle，其余small
   */
  titleSize: 'large' | 'middle' | 'small';
  showSplitLine: boolean;
  layout?: 'vertical' | 'horizontal';
}
export declare const GridItemDefaultProps: IGridItemProps;
