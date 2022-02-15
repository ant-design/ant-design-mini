
import { IBaseFormItemPropsWithOutFocus } from '../_base';
/**
 * @description 协议。
 */

export interface ITermsProps extends IBaseFormItemPropsWithOutFocus<boolean> {
  /**
   * @description 是否固定在底部
   * @default false
   */
  fixed?: boolean;
  /**
   * @description 是否需要勾选框
   * @default true
   */
  hasCheckbox?: boolean;
  /**
   * @description 说明文本
   * @default 同意《用户授权协议》
   */
  term?: string;
  /**
   * @description 主按钮文本
   * @default 提交
  */
  mainButtonText?: string;
  /**
   * @description 辅助按钮文本
  */
  addonButtonText?: string;
}
export declare const TermsDefaultProps: Partial<ITermsProps>;
