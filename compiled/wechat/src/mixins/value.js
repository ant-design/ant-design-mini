var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function equal(a, b) {
    if (a === b) {
        return true;
    }
    if (a !== a && b !== b) {
        return true;
    }
    return false;
}
var component2 = my.canIUse('component2');
export default (function (_a) {
    var _b;
    var _c = _a === void 0 ? {} : _a, _d = _c.valueKey, valueKey = _d === void 0 ? 'value' : _d, _e = _c.defaultValueKey, defaultValueKey = _e === void 0 ? 'defaultValue' : _e, _f = _c.scopeKey, scopeKey = _f === void 0 ? 'mixin' : _f, _g = _c.transformValue, transformValue = _g === void 0 ? function (value) { return ({
        needUpdate: true,
        value: value,
    }); } : _g;
    return {
        data: (_b = {},
            _b[scopeKey] = {
                value: undefined,
                updated: false,
                controlled: false,
            },
            _b),
        onInit: function () {
            var value = typeof this.props[valueKey] !== 'undefined' ? this.props[valueKey] : this.props[defaultValueKey];
            var needUpdate = this.update(value, {
                nextProps: this.props,
            }).needUpdate;
            if (!needUpdate) {
                this.updateControlled();
            }
        },
        deriveDataFromProps: function (nextProps) {
            if (!equal(nextProps[valueKey], this.props[valueKey])) {
                this.update(nextProps[valueKey], {
                    nextProps: nextProps,
                });
            }
        },
        didUpdate: function (prevProps) {
            if (component2) {
                return;
            }
            if (!equal(prevProps[valueKey], this.props[valueKey])) {
                this.update(this.props[valueKey], {
                    nextProps: this.props,
                });
            }
        },
        didMount: function () {
            if (component2) {
                return;
            }
            var value = typeof this.props[valueKey] !== 'undefined' ? this.props[valueKey] : this.props[defaultValueKey];
            var needUpdate = this.update(value, {
                nextProps: this.props,
            }).needUpdate;
            if (!needUpdate) {
                this.updateControlled();
            }
        },
        methods: {
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
                if ('controlled' in this.props) {
                    return this.props.controlled;
                }
                return valueKey in this.props;
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
});
