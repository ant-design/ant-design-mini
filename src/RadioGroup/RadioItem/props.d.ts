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
}
export declare const RadioItemDefaultProps: Partial<IRadioItemProps>;
