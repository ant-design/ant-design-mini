/* eslint-disable @typescript-eslint/no-explicit-any */
import { IBaseProps } from '../_util/base';
/**
 * @description 全局配置
 */

export interface ILocaleProviderProps extends IBaseProps {
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 样式
   */
  style?: string;
  /**
   * @description 类名
   */
  locale?: 'zh_CN' | 'en_US';
}

export const LocaleProviderProps: ILocaleProviderProps = {};
