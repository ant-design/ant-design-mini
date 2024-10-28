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
  },
  {
    locale: {},
  },
  {
    // 初始化读取locale并更新store数据
    onInit() {
      const [locale] = getValueFromProps(this, ['locale']);
      i18nController.switchLocale(locale);
      this.setData({
        locale,
      });
    },
  }
);
