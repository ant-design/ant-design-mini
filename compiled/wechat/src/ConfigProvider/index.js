var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { effect } from '@preact/signals-core';
import kebabCase from 'lodash.kebabcase';
import { ComponentWithSignalStoreImpl, getValueFromProps, } from '../_util/simply';
import i18nController from '../_util/store';
import { cssVariables } from './darkTheme';
import { ConfigProviderDefaultProps } from './props';
ComponentWithSignalStoreImpl({
    store: function () { return i18nController; },
    updateHook: effect,
    mapState: {
        localeState: function (_a) {
            var store = _a.store;
            return store.currentLocale.value;
        },
        themeState: function (_a) {
            var store = _a.store;
            return store.currentTheme.value;
        },
    },
}, ConfigProviderDefaultProps, {
    update: function () {
        var _a = getValueFromProps(this, [
            'theme',
            'themeVars',
            'locale',
        ]), theme = _a[0], themeVars = _a[1], locale = _a[2];
        // 初始化读取locale并更新store数据
        i18nController.switchLocale(locale);
        // 如果设置了主题，则切换主题，覆写themeVars
        if (theme) {
            i18nController.switchTheme(theme);
        }
        this.convertThemeVarsToCSSVars(themeVars);
    },
    /**
     * 主题生成 css vars
     * 如果写死深色主题，则覆盖掉原来的颜色
     * @param themeVars
     * @returns
     */
    convertThemeVarsToCSSVars: function (themeVars) {
        var cssVars = '';
        var copyThemeVars = {};
        if (this.data.themeState === 'dark') {
            copyThemeVars = __assign(__assign({}, cssVariables), themeVars);
        }
        if (this.data.themeState === 'light') {
            copyThemeVars = __assign({}, themeVars);
        }
        Object.keys(copyThemeVars).forEach(function (key) {
            cssVars = "".concat(cssVars, "--").concat(kebabCase(key), ": ").concat(copyThemeVars[key], ";");
        });
        this.setData({
            cssVarStyle: cssVars,
        });
    },
}, {
    cssVarStyle: '',
}, [], {
    attached: function () {
        this.update();
    },
});
