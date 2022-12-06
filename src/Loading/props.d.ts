
import { IBaseProps } from '../_base';
/**
 * @description 加载，用于提示局部或页面在加载中。
 */

export interface ILoadingProps extends IBaseProps {
  /**
   * @description 加载时的颜色，当 type 为 'spin' 时，只支持十六进制颜色码，如'#fff'
   * @default '#fff'
   */
  color?: string;

  /**
   * @description 加载图标尺寸，当 type 为 'spin' 时生效
   * @default medium
   */
  size?: 'string';

  type?: 'spin' | 'mini';
}

export declare const LoadingDefaultProps: Partial<ILoadingProps>;
