var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { getValueFromProps } from '../_util/simply';
function equal(a, b) {
    if (a === b) {
        return true;
    }
    if (a !== a && b !== b) {
        return true;
    }
    return false;
}
export default (function (_a) {
    var _b, _c;
    var _d = _a === void 0 ? {} : _a, _e = _d.valueKey, valueKey = _e === void 0 ? 'value' : _e, _f = _d.defaultValueKey, defaultValueKey = _f === void 0 ? 'defaultValue' : _f, _g = _d.scopeKey, scopeKey = _g === void 0 ? 'mixin' : _g, _h = _d.transformValue, transformValue = _h === void 0 ? function (value) { return ({
        needUpdate: true,
        value: value,
    }); } : _h;
    var mixin = {
        data: (_b = {},
            _b[scopeKey] = {
                value: undefined,
                updated: false,
                controlled: false,
            },
            _b),
        created: function () {
            this.init();
        },
        observers: (_c = {},
            _c["".concat(valueKey)] = function (value) {
                this.update(value, {
                    nextProps: this.properties,
                });
            },
            _c),
        attached: function () {
            var value = this.properties[valueKey] !== null
                ? this.properties[valueKey]
                : this.properties[defaultValueKey];
            var needUpdate = this.update(value, {
                nextProps: this.properties,
            }).needUpdate;
            if (!needUpdate) {
                this.updateControlled();
            }
        },
        methods: {
            init: function () {
                var value;
                value =
                    getValueFromProps(this, valueKey) !== null
                        ? getValueFromProps(this, valueKey)
                        : getValueFromProps(this, defaultValueKey);
                var needUpdate = this.update(value, {
                    nextProps: getValueFromProps(this),
                }).needUpdate;
                if (!needUpdate) {
                    this.updateControlled();
                }
            },
            getValue: function (prevData) {
                return (prevData || this.data)[scopeKey].value;
            },
            isEqualValue: function (prevData) {
                if (!prevData[scopeKey].updated) {
                    return true;
                }
                return equal(this.getValue(prevData), this.getValue());
            },
            isControlled: function () {
                if ('controlled' in getValueFromProps(this)) {
                    return getValueFromProps(this, 'controlled');
                }
                return getValueFromProps(this, valueKey) !== null;
            },
            updateControlled: function () {
                var _a;
                this.setData((_a = {},
                    _a[scopeKey] = {
                        controlled: this.isControlled(),
                    },
                    _a));
            },
            update: function (val, extra) {
                var _a;
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    args[_i - 2] = arguments[_i];
                }
                var _b = transformValue.call.apply(transformValue, __spreadArray([this, val, extra], args, false)) || {}, needUpdate = _b.needUpdate, value = _b.value;
                if (needUpdate) {
                    this.setData((_a = {},
                        _a[scopeKey] = {
                            value: value,
                            updated: true,
                            controlled: this.isControlled(),
                        },
                        _a));
                }
                return {
                    needUpdate: needUpdate,
                    value: value,
                };
            },
        },
    };
    // @ts-ignore
    mixin = Behavior(mixin);
    return mixin;
});
