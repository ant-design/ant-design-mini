import { IBaseFormItemPropsWithOutFocus } from '../_base';
import { IListProps } from '../List/props';

/**
 * @description 复选框组合，内部由多个 CheckboxItem 组成。
 */
export interface ICheckboxGroupProps
  extends Omit<IBaseFormItemPropsWithOutFocus<string[]>, 'id'>,
    IListProps {
  /**
   * @description CheckboxGroup 的值，决定子元素是否勾选
   */
  value?: string[];
  /**
   * @description 当页面有多个CheckboxGroup时需传入，`必须全局唯一`，与内部的 CheckboxItem 组件的 uid 一致
   * @default 'CheckboxGroup'
   */
  uid?: string;
}
export declare const CheckboxGroupDefaultProps: Partial<ICheckboxGroupProps>;
