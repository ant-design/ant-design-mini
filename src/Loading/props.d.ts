
import { IBaseProps } from '../_base';
/**
 * @description 加载，用于提示局部或页面在加载中。
 */

export interface ILoadingProps extends IBaseProps {
  /**
   * @description 是否加载中
   * @default true
   */
  loading?: boolean;
  /**
   * @description 尺寸
   * @default "medium"
   */
  size?: 'x-large' | 'large' | 'medium' | 'small';
  /**
   * @description 延时显示加载状态，单位 ms
   */
  delay?: number;
  /**
   * @description 加载中文案
   */
  text?: string;
  /**
   * @description 颜色，dark/深色, light/浅色
   * @default "dark"
   */
  theme?: 'dark' | 'light';
}
export declare const LoadingDefaultProps: Partial<ILoadingProps>;
