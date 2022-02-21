import { IBaseFormItemPropsWithOutFocus } from '../_base';
/**
 * @description 复选框，表单组件。
 */

export interface ICheckboxProps extends IBaseFormItemPropsWithOutFocus<boolean> {
  /**
   * @description checkbox 携带的 value 值, 在原生 form 表单提交的时候有用；在 CheckboxGroup 时亦有用
   */
  value?: string;
  /**
   * @description checkbox 是否选中
   */

  checked?: boolean;
}
export declare const CheckboxDefaultProps: Partial<ICheckboxProps>;
