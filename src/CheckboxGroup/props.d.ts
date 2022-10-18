
import { IBaseFormItemPropsWithOutFocus, IBaseProps } from '../_base';

export interface IListProps extends IBaseProps {
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
