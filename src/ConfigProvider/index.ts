import kebabCase from 'lodash.kebabcase';
import { Component } from '../_util/simply';
import { ConfigProviderProps } from './props';

Component(ConfigProviderProps, {
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
});
