import { IBaseProps } from '../../_base';
/**
 * @description 单选内部元素，必须配合 RadioGroup 使用。
 */

export interface IRadioItemProps extends IBaseProps {
  /**
   * @description Radio 携带的 value 值, 在原生 form 表单提交的时候有用；在 RadioGroup 时亦有用
   */
  value?: any;
  /**
   * @description 是否禁用
   * @default false
   */

  disabled?: boolean;
  /**
   * @description 当页面有多个RadioGroup时需传入，`必须全局唯一`，与内部的 RadioItem 组件的 uid 一致
   * @default 'RadioGroup'
   */
  uid?: string;
  /**
   * @description checkbox 的颜色，同 CSS 色值
   */
  color?: string;
  /**
   * @description 自定义图标
   */
  icon?: string;
  /**
   * @description 自定义选中图标
   */
  checkedIcon?: string;
  /**
   * @description 禁用状态自定义图标
   */
  disabledIcon?: string;
  /**
   * @description 禁用状态选中自定义图标
   */
  disabledCheckedIcon?: string;
  /**
   * @description 是否隐藏当前 checkboxItem
   * @default false
   */
   hidden?: boolean;
}
export declare const RadioItemDefaultProps: Partial<IRadioItemProps>;
