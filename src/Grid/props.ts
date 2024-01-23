import { IBaseProps } from '../_util/base';

export interface IGridItem {
  /**
   * @description 主文案
   */
  title: string;
  /**
   * @description 副文案
   */
  description?: string;
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
 * @description 宫格
 */
export interface IGridProps extends IBaseProps {
  /**
   * @desscription 图标样式
   * @default 'normal'
   */
  iconStyle: 'normal' | 'circle';
  /**
   * @description 图标尺寸，单位px
   */
  iconSize: number;
  /**
   * @description item布局。垂直/水平，水平仅columns=2生效
   * @default 'vertical'
   */
  gridItemLayout: 'vertical' | 'horizontal';
  /**
   * @description 组合形式
   * @default 'default'
   */
  mode: 'default' | 'scroll';
  /**
   * @description 每行展示的元素个数
   * @default 5
   */
  columns: number;
  /**
   * @description 元素列表
   */
  items: IGridItem[];
  /**
   * @description 是否展示分割线
   */
  showDivider: boolean;
  /**
   * @description 分页符背景色
   * @default '#ddd'
   */
  paginationFillColor: string;
  /**
   * @description 分页符颜色
   * @default '#1677ff'
   */
  paginationFrontColor: string;
  /**
   * @description 点击事件
   * @param item
   */
  onTap?(item: IGridItem): void;
  /**
   * @description 当前元素首次可见面积达到50%时触发
   * @param item
   */
  onFirstAppear?(item: IGridItem): void;
}

export const GridDefaultProps: Partial<IGridProps> = {
  iconStyle: 'normal',
  mode: 'default',
  columns: 5,
  gridItemLayout: 'vertical',
  showDivider: false,
};

export const GridFunctionalProps: IGridProps = {
  iconStyle: 'normal',
  iconSize: null,
  gridItemLayout: 'vertical',
  mode: 'default',
  columns: 5,
  items: [],
  showDivider: false,
  paginationFrontColor: '',
  paginationFillColor: '',
};
