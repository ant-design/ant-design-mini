
import { IBaseProps } from '../_base';
/**
 * @description 列表，内部配合 ListItem 使用。
 */

export interface IListProps extends IBaseProps {
  /**
   * @description 是否带圆角
   * @default false
   */
  radius?: boolean;
  /**
   * @description 头部说明
   */

  header?: string;
  /**
   * @description 底部说明
   */

  footer?: string;
}
export declare const ListDefaultProps: Partial<IListProps>;
