
import { IBaseProps } from '../_base';
/**
 * @description 加载，用于提示局部或页面在加载中。
 */

export interface ILoadingProps extends IBaseProps {
  /**
   * @description 加载时的颜色，当 type 为 'spin' 时，只支持十六进制颜色码，如'#fff'
   * @default '#999'
   */
  color?: string;

  /**
  * @description 延时显示加载状态，单位 ms, 注意，delay 的变更不能实时生效，当 type 为 'spin' 时生效
  */
  delay?: number;

  /**
   * @description 加载图标高度，不传则默认与 size 大小一致，当 type 为 'mini' 时生效
   * @default '200rpx'
   */
  height?: string;

  /**
   * @description 是否加载中，当 type 为 'spin' 时生效
   * @default true
   */
  loading?: boolean;

  /**
   * @description 加载图标宽度，当 type 为 'mini' 时生效
   * @default '200rpx'
   */
  miniSize?: string;

  /**
   * @description 加载图标尺寸，当 type 为 'spin' 时生效
   * @default "medium"
   */
  size?: 'x-large' | 'large' | 'medium' | 'small';

  /**
   * @description 加载中文案，当 type 为 'spin' 时生效
   */
  text?: string;

  /**
   * @description 颜色，dark/深色, light/浅色，当 type 为 'spin' 时生效
   * @default "dark"
   */
  theme?: 'dark' | 'light';

  /**
   * @description 加载样式类型
   * @default 'spin'
   */
  type?: 'spin' | 'mini';
}

export declare const LoadingDefaultProps: Partial<ILoadingProps>;
