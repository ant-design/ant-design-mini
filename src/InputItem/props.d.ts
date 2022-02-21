import { IBaseFormItemProps } from '../_base';
/**
 * @description 输入框。
 */

export interface IInputItemProps extends IBaseFormItemProps {
  /**
   * @description 输入框的值
   */
  value?: string;
  /**
   * @description 提示文字
   */

  placeholder?: string;
  /**
   * @description 显示清除图标
   * @default true
   */

  clear?: boolean;
}
export declare const InputItemDefaultProps: Partial<IInputItemProps>;
