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
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { effect } from '@preact/signals-core';
import { ComponentWithAnyStoreImpl } from '../_util/newSimply';
import i18nController from '../_util/store';
import { ButtonDefaultProps } from './props';
ComponentWithAnyStoreImpl({
    store: function () { return i18nController; },
    updateHook: effect,
    mapState: {
        locale: function (_a) {
            var store = _a.store;
            return store.currentLocale.value;
        },
    },
}, {}, ButtonDefaultProps, __assign({
    onGetUserInfo: function (event) {
        this.triggerEvent('getuserinfo', event.detail);
    },
    onContact: function (event) {
        this.triggerEvent('contact', event.detail);
    },
    onGetPhoneNumber: function (event) {
        this.triggerEvent('getphonenumber', event.detail);
    },
    onGetRealTimePhoneNumber: function (event) {
        this.triggerEvent('getrealtimephonenumber', event.detail);
    },
    onError: function (event) {
        this.triggerEvent('error', event.detail);
    },
    onLaunchApp: function (event) {
        this.triggerEvent('launchapp', event.detail);
    },
    onOpenSetting: function (event) {
        this.triggerEvent('opensetting', event.detail);
    },
    onAgreePrivacyAuthorization: function (event) {
        this.triggerEvent('agreeprivacyauthorization', event.detail);
    },
    onChooseAvatar: function (event) {
        this.triggerEvent('chooseavatar', event.detail);
    },
}), {}, [], {
// 初始化读取locale并更新store数据,如果有主题则处理主题数据
});
