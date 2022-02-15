
import { IBaseProps, IconType } from '../../_base';
/**
 * @description 列表内部元素，必须配合 ListItem 使用。
 */

export interface IListItemProps extends IBaseProps {
  /**
   * @description 左侧图片
   */
  image: IconType;
  /**
   * @description 左侧图片
   */
  imageSize: 'small' | 'medium' | 'large';
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
  arrow: 'right' | 'up' | 'down';
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
   * @description 点击整行回调
   */
  onTap?: (event?: T) => void;
}
export declare const ListItemDefaultProps: Partial<IListItemProps>;
