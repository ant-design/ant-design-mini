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
import equal from 'fast-deep-equal';
import { ComponentWithSignalStoreImpl, getValueFromProps, triggerEventOnly, } from '../_util/simply';
import i18nController from '../_util/store';
import { BuiltinStatus, PageDefaultProps } from './props';
ComponentWithSignalStoreImpl({
    store: function () { return i18nController; },
    updateHook: effect,
    mapState: {
        locale: function (_a) {
            var store = _a.store;
            return store.currentLocale.value;
        },
    },
}, PageDefaultProps, {
    handleActionTap: function (e) {
        triggerEventOnly(this, 'actionTap', e);
    },
    handleSecondaryActionTap: function (e) {
        triggerEventOnly(this, 'secondaryActionTap', e);
    },
    updatePageStatus: function (prevProps, nextProps) {
        var _a, _b, _c, _d, _e;
        if (!equal(prevProps, nextProps)) {
            var _f = getValueFromProps(this, [
                'status',
                'image',
                'title',
                'message',
            ]), status_1 = _f[0], image = _f[1], title = _f[2], message = _f[3];
            var updateData = __assign(__assign({}, nextProps), { 
                // 自定义内容优先 status
                image: image || ((_a = BuiltinStatus[status_1]) === null || _a === void 0 ? void 0 : _a.image) || '', title: title ||
                    ((_b = BuiltinStatus[status_1]) === null || _b === void 0 ? void 0 : _b.title) ||
                    ((_c = this.data.locale.pageContainer[status_1]) === null || _c === void 0 ? void 0 : _c.title) ||
                    '', message: message ||
                    ((_d = BuiltinStatus[status_1]) === null || _d === void 0 ? void 0 : _d.message) ||
                    ((_e = this.data.locale.pageContainer[status_1]) === null || _e === void 0 ? void 0 : _e.message) ||
                    '' });
            this.setData(updateData);
        }
    },
}, {}, undefined, {
    attached: function () {
        var props = getValueFromProps(this);
        this.updatePageStatus({}, props);
    },
    observers: {
        '**': function (data) {
            var prevData = this._prevData || this.data;
            this._prevData = __assign({}, data);
            this.updatePageStatus(prevData, data);
        },
    },
});
