import { IBaseProps } from '../../_base';
/**
 * @description 复选框组内部子元素，必须配合 CheckboxGroup 使用，有单独使用需求的请使用 Checkbox 。
 */

export interface ICheckboxItemProps extends IBaseProps {
  /**
   * @description checkbox 携带的 value 值, 在原生 form 表单提交的时候有用；在 CheckboxGroup 时亦有用
   */
  value?: string;
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 当页面有多个CheckboxGroup时需传入，`必须全局唯一`，与外部的 CheckboxGroup 组件的 uid 一致
   * @default 'CheckboxGroup'
   */
  uid?: string;
}
export declare const CheckboxItemDefaultProps: Partial<ICheckboxItemProps>;
