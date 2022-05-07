import { IBaseFormItemPropsWithOutFocus } from '../_base';
import { IListProps } from '../List/props';

/**
 * @description 单选，内部配合 RadioItem 使用。
 */
export interface IRadioGroupProps
  extends Omit<IBaseFormItemPropsWithOutFocus<string>, 'id'>,
    IListProps {
  /**
   * @description RadioGroup 的值，决定子元素是否勾选
   */
  value?: string;
  /**
   * @description 当页面有多个RadioGroup时需传入，`必须全局唯一`，与内部的 RadioItem 组件的 uid 一致
   * @default 'RadioGroup'
   */
  uid?: string;
  /**
   * @description 布局
   * @default 'vertical'
   */
  position?: 'vertical' | 'horizontal';
}
export declare const RadioGroupDefaultProps: Partial<IRadioGroupProps>;
