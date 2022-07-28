import { IBaseProps } from '../../_base';
/**
 * @description 页脚内部元素，必须配合 Footer 使用。
 */

export interface IFooterLinkProps extends IBaseProps {
  /**
   * @description 链接类
   */
  links: string[];

  /**
   * @description 链接点击回调
   */
  onTap?: (index: number) => void;
}
export declare const FooterLinkDefaultProps: Partial<IFooterLinkProps>;