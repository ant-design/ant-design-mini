/* eslint-disable @typescript-eslint/no-explicit-any */
import { Locale } from '../_locale/index';
import zhCN from '../_locale/zh-CN';
import { IBaseProps } from '../_util/base';
/**
 * @description 全局配置
 */

export interface IConfigProviderProps extends IBaseProps {
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 样式
   */
  style?: string;
  /**
   * @description 主题
   */
  theme?: 'dark' | 'light';
  /**
   * @description 主题定制
   */
  themeVars?: Record<string, string | number>;
  /**
   * @description 国际化文案
   */
  locale?: Locale;
}

export const ConfigProviderDefaultProps: IConfigProviderProps = {
  className: '',
  style: '',
  theme: 'light',
  themeVars: {},
  locale: zhCN,
};
