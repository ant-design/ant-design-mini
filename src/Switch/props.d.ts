import { IBaseFormItemPropsWithOutFocus } from '../_base';
/**
 * @description 开关。
 */

export interface ISwitchProps extends IBaseFormItemPropsWithOutFocus<boolean> {
  /**
   * @description 是否勾选
   */
  checked?: boolean;
  /**
   * @description 是否加载状态
   */
  loading?: boolean;
  /**
   * @description 是否受控模式
   * @default false
   */
  controlled?: boolean;
  /**
   * @description 选中时的颜色
   */
  color?: string;
  /**
   * @description 选中时的内容
   */
  checkedText?: string;
  /**
   * @description 非选中时的内容
   */
  uncheckedText?: string;
   /**
   * @description 尺寸
   */
  size?: 'medium'  |  'small'   | 'x-small'
}
export declare const SwitchDefaultProps: Partial<ISwitchProps>;
