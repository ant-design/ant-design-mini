import { IBaseProps } from '../../_base';
/**
 * @description 页脚内部元素，必须配合 Footer 使用。
 */

export interface IFooterImageProps extends IBaseProps {
  /**
   * @description 图片地址
   */
  src: string;
}
export declare const FooterImageDefaultProps: Partial<IFooterImageProps>;