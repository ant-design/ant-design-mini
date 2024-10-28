import { effect } from '@preact/signals-core';
import kebabCase from 'lodash.kebabcase';
import {
  ComponentWithAnyStoreImpl,
  getValueFromProps,
} from '../_util/newSimply';
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
  {},
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
    // 初始化读取locale并更新store数据,如果有主题则处理主题数据
    onInit() {
      const [locale, themeVars] = getValueFromProps(this, [
        'locale',
        'themeVars',
      ]);
      i18nController.switchLocale(locale);
      this.convertThemeVarsToCSSVars(themeVars);
    },
  }
);
