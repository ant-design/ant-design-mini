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
}
export declare const RadioItemDefaultProps: Partial<IRadioItemProps>;
