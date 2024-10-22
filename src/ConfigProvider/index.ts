import kebabCase from 'lodash.kebabcase';
import { Component } from '../_util/simply';
import { ConfigProviderDefaultProps } from './props';

Component(ConfigProviderDefaultProps, {
  /**
   * 主题生成 css vars
   * TODO 这里需要增加一个临时data来管理cssVarStyle,需要第一优先级是传入的themeVars生成的cssstyle，然后再拼接style
   * @param themeVars
   * @returns
   */
  convertThemeVarsToCSSVars(themeVars: Record<string, string | number>) {
    const cssVars: Record<string, string | number> = {};
    Object.keys(themeVars).forEach((key) => {
      cssVars[`--${kebabCase(key)}`] = themeVars[key];
    });
    return cssVars;
  },
  /**
   * 这里需要把locale的语言数据放进store里，让子组件可以获取到
   * @returns
   */
  setLocales() {
    return true;
  },
});
