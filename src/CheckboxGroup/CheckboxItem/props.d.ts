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
   * @description 唯一id，用以与 CheckboxGroup 建立父子关系
   * @default "CheckboxGroup"
   */
  uid?: string;

  /**
   * @description 是否隐藏当前 checkboxItem
   * @default false
   */
  hidden?: boolean;
}
export declare const CheckboxItemDefaultProps: Partial<ICheckboxItemProps>;
