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
import { Component, getValueFromProps } from '../_util/simply';
function createComponent(_a) {
    var _b = _a.props, props = _b === void 0 ? {} : _b, _c = _a.data, data = _c === void 0 ? {} : _c, _d = _a.methods, methods = _d === void 0 ? {} : _d;
    Component(props, __assign(__assign({}, methods), { emit: function (trigger, value) { }, setFormData: function (values) {
            this.setData(__assign(__assign({}, this.data), { formData: __assign(__assign({}, this.data.formData), values) }));
        }, getFormData: function () {
            return this.data.formData;
        }, on: function (callback) {
            this.emit = callback;
        }, getProps: function () {
            return getValueFromProps(this);
        } }), __assign(__assign({}, data), { formData: {
            value: undefined,
            status: 'default',
            required: false,
            errors: [],
        } }), null, {
        attached: function () {
            this.triggerEvent('ref', this);
        },
        detached: function () {
            this.emit('didUnmount');
        },
        observers: {
            '**': function (nextProps) {
                this.emit('deriveDataFromProps', nextProps);
            },
        },
    });
}
export default createComponent;
