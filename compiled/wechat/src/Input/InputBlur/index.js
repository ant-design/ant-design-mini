import { effect } from '@preact/signals-core';
import mixinValue from '../../mixins/value';
import { ComponentWithSignalStoreImpl, triggerEvent } from '../../_util/simply';
import i18nController from '../../_util/store';
ComponentWithSignalStoreImpl({
    store: function () { return i18nController; },
    updateHook: effect,
    mapState: {
        locale: function (_a) {
            var store = _a.store;
            return store.currentLocale.value;
        },
    },
}, {
    onChange: function (e) {
        var value = e.detail.value;
        if (this.isControlled()) {
            this.update(value, {}, true);
        }
        triggerEvent(this, 'change', value, e);
    },
    onFocus: function (e) {
        var value = e.detail.value;
        this.focus = true;
        triggerEvent(this, 'focus', value, e);
    },
    onBlur: function (e) {
        var value = e.detail.value;
        this.focus = false;
        if (this.isControlled()) {
            this.update(this.props.value);
        }
        triggerEvent(this, 'blur', value, e);
    },
    onConfirm: function (e) {
        var value = e.detail.value;
        triggerEvent(this, 'confirm', value, e);
    },
}, undefined, [
    mixinValue({
        scopeKey: 'state',
        transformValue: function (value, extra, updateWithoutFocusCheck) {
            if (value === null || (!updateWithoutFocusCheck && this.focus)) {
                return {
                    needUpdate: false,
                };
            }
            return {
                needUpdate: true,
                value: value,
            };
        },
    }),
], {
    focus: false,
});
