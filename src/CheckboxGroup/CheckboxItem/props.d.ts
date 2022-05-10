import { ICheckboxProps } from '../../Checkbox/props';
/**
 * @description 复选框组内部子元素，必须配合 CheckboxGroup 使用，有单独使用需求的请使用 Checkbox 。
 */

export interface ICheckboxItemProps extends ICheckboxProps {
  /**
   * @description 当搭配CheckboxGroup使用且页面有多个CheckboxGroup时需传入，`必须全局唯一`，与外部的 CheckboxGroup 组件的 uid 一致
   * @default 'CheckboxGroup'
   */
  uid?: string;
}
export declare const CheckboxItemDefaultProps: Partial<ICheckboxItemProps>;
