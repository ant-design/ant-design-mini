import { effect } from '@preact/signals-core';
import kebabCase from 'lodash.kebabcase';
import { ComponentWithAnyStoreImpl, getValueFromProps } from '../_util/simply';
import i18nController from '../_util/store';
import { ConfigProviderDefaultProps } from './props';

ComponentWithAnyStoreImpl(
  {
    store: () => i18nController,
    updateHook: effect,
    mapState: {
      locale: ({ store }) => store.currentLocale.value,
    },
  },
  ConfigProviderDefaultProps,
  {
    /**
     * 主题生成 css vars
     * @param themeVars
     * @returns
     */
    convertThemeVarsToCSSVars(themeVars: Record<string, string | number>) {
      const cssVars: Record<string, string | number> = {};
      Object.keys(themeVars).forEach((key) => {
        cssVars[`--${kebabCase(key)}`] = themeVars[key];
      });
      this.setData({
        cssVarStyle: cssVars,
      });
    },
  },
  {
    cssVarStyle: '',
  },
  [],
  {
    onInit() {
      const [themeVars, locale] = getValueFromProps(this, [
        'themeVars',
        'locale',
      ]);
      // 初始化读取locale并更新store数据
      i18nController.switchLocale(locale);
      this.convertThemeVarsToCSSVars(themeVars);
    },
  }
);
