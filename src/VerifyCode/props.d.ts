import { IBaseFormItemProps } from '../_base';
/**
 * @description 验证码。
 */

export interface IVerifyCodeProps extends IBaseFormItemProps {
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
export declare const VerifyCodeDefaultProps: Partial<IVerifyCodeProps>;
