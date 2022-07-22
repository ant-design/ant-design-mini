
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
   */
  term?: string;
  /**
   * @description 主按钮文本
   * @default '提交'
  */
  mainButtonText?: string;
  /**
   * @description 辅助按钮文本
  */
  addonButtonText?: string;
  /**
   * @description 点击主按钮
   */
  onMainBtnTap?(e: Record<string,any>): void;
  /**
   * @description 点击辅助按钮
   */
  onSubBtnTap?(e: Record<string,any>): void;
}
export declare const TermsDefaultProps: Partial<ITermsProps>;
