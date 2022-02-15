import { IBaseFormItemPropsWithOutFocus, IBaseProps } from '../_base';

export interface IListProps extends IBaseProps {
  /**
   * @description 是否带圆角
   * @default false
   */
  radius?: boolean;
  /**
   * @description 头部说明
   */
  header?: string
  /**
   * @description 底部说明
   */
  footer?: string
}
/**
 * @description 单选，内部配合 RadioItem 使用。
 */

export interface IRadioGroupProps extends Omit<IBaseFormItemPropsWithOutFocus<string>, 'id'>, IListProps {
  /**
   * @description RadioGroup 的值，决定子元素是否勾选
   */
  value?: string;
}
export declare const RadioGroupDefaultProps: Partial<IRadioGroupProps>;
