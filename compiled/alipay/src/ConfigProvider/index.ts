import { effect } from '@preact/signals-core';
import kebabCase from 'lodash.kebabcase';
import {
  ComponentWithSignalStoreImpl,
  getValueFromProps,
} from '../_util/simply';
import i18nController from '../_util/store';
import { ConfigProviderDefaultProps } from './props';

ComponentWithSignalStoreImpl(
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
      const [theme, themeVars, locale] = getValueFromProps(this, [
        'theme',
        'themeVars',
        'locale',
      ]);
      console.log(theme, '小蒜苗可爱');
      // 初始化读取locale并更新store数据
      i18nController.switchLocale(locale);
      this.convertThemeVarsToCSSVars(themeVars);
    },
  }
);
