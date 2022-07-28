import { IBaseProps } from '../../_base';
/**
 * @description 页脚内部元素，必须配合 Footer 使用。
 */

export interface IFooterTagProps extends IBaseProps {
  /**
   * @description 推荐类标签
   */
  tags: string[];

  /**
   * @description 标签点击回调
   */
  onTap?: (index: number) => void;
}
export declare const FooterTagDefaultProps: Partial<IFooterTagProps>;