
import { IBaseFormItemPropsWithOutFocus, IBaseProps } from '../_base';

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
/**
 * @description 复选框组合，内部由多个 CheckboxItem 组成。
 */

export interface ICheckboxGroupProps extends Omit<IBaseFormItemPropsWithOutFocus<string[]>, 'id'>, IListProps {
  /**
   * @description CheckboxGroup 的值，决定子元素是否勾选
   */
  value?: string[];
}
export declare const CheckboxGroupDefaultProps: Partial<ICheckboxGroupProps>;
