import { effect } from '@preact/signals-core';
import kebabCase from 'lodash.kebabcase';
import { ComponentWithSignalStoreImpl, getValueFromProps, } from '../_util/simply';
import i18nController from '../_util/store';
import { ConfigProviderDefaultProps } from './props';
ComponentWithSignalStoreImpl({
    store: function () { return i18nController; },
    updateHook: effect,
    mapState: {
        locale: function (_a) {
            var store = _a.store;
            return store.currentLocale.value;
        },
    },
}, ConfigProviderDefaultProps, {
    /**
     * 主题生成 css vars
     * @param themeVars
     * @returns
     */
    convertThemeVarsToCSSVars: function (themeVars) {
        var cssVars = {};
        Object.keys(themeVars).forEach(function (key) {
            cssVars["--".concat(kebabCase(key))] = themeVars[key];
        });
        this.setData({
            cssVarStyle: cssVars,
        });
    },
}, {
    cssVarStyle: '',
}, [], {
    onInit: function () {
        var _a = getValueFromProps(this, [
            'themeVars',
            'locale',
        ]), themeVars = _a[0], locale = _a[1];
        // 初始化读取locale并更新store数据
        i18nController.switchLocale(locale);
        this.convertThemeVarsToCSSVars(themeVars);
    },
});
