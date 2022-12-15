import { IBaseProps } from '../../_base';
/**
 * @description 列表内部元素，必须配合 ListItem 使用。
 */

export interface IListItemProps extends IBaseProps {
  /**
   * @description 左侧图片
   */
  image: string;
  /**
   * @description 标题信息
   */
  title: string;
  /**
   * @description 描述信息
   */
  brief: string;
  /**
   * @description 箭头方向，不传表示没有箭头
   */
  arrow: boolean | 'right' | 'up' | 'down';
  /**
   * @description 右侧额外内容，即，辅助信息
   */
  extra: string;
  /**
   * @description 右侧额外内容，即，次要辅助信息
   */
  extraBrief: string;
  /**
   * @description 右侧额外内容，即，次要辅助信息
   * @default false
   */
  disabled: boolean;
  /**
   * @description 是否显示下划线
   * @default true
   */
  showDivider: boolean;
  /**
   * @description 点击整行回调
   */
  onTap?: (event?: any) => void;
  /**
   * @description 点击整行回调
   */
  catchTap?: (event?: any) => void;
}
export declare const ListItemDefaultProps: Partial<IListItemProps>;
