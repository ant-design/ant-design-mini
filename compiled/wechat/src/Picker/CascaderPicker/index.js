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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Component, getValueFromProps, triggerEvent, triggerEventOnly, triggerEventValues, } from '../../_util/simply';
import { resolveEventValue, resolveEventValues } from '../../_util/platform';
import { CascaderDefaultProps } from './props';
import equal from 'fast-deep-equal';
import mixinValue from '../../mixins/value';
Component(CascaderDefaultProps, {
    // visible受控判断
    isVisibleControlled: function () {
        return getValueFromProps(this, 'visible') !== null;
    },
    initColumns: function () {
        var _a = getValueFromProps(this, [
            'options',
            'visible',
            'defaultVisible',
            'value',
            'defaultValue',
        ]), options = _a[0], visible = _a[1], defaultVisible = _a[2], value = _a[3], defaultValue = _a[4];
        var realValue = value || defaultValue || [];
        var columns = this.getterColumns(realValue, options);
        // 首次无需校验value有效性，onOk时会校验
        this.setData({
            columns: columns,
            visible: this.isVisibleControlled() ? visible : defaultVisible,
            currentValue: realValue,
            formattedValueText: this.onFormat(),
        });
    },
    getterColumns: function (value, options) {
        var getColumns = function (options, value, columns) {
            var _a;
            if (columns === void 0) { columns = []; }
            columns.push(options.map(function (v) { return ({ value: v.value, label: v.label }); }));
            var currentOption = options.find(function (v) { return v.value === (value === null || value === void 0 ? void 0 : value[columns.length - 1]); }) ||
                options[0];
            if (((_a = currentOption === null || currentOption === void 0 ? void 0 : currentOption.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                return getColumns(currentOption.children, value, columns);
            }
            return columns;
        };
        return getColumns(options, value);
    },
    // 获取有效value，若从x项开始在columns里找不到，则从此项开始都选第一条
    getValidValue: function (value, columns) {
        var result = [];
        var _loop_1 = function (i) {
            if (!columns[i].some(function (v) { return (v === null || v === void 0 ? void 0 : v.value) === (value === null || value === void 0 ? void 0 : value[i]); })) {
                result.push.apply(result, columns.slice(i).map(function (v) { var _a; return (_a = v === null || v === void 0 ? void 0 : v[0]) === null || _a === void 0 ? void 0 : _a.value; }));
                return "break";
            }
            else {
                result[i] = value[i];
            }
        };
        for (var i = 0; i < columns.length; i++) {
            var state_1 = _loop_1(i);
            if (state_1 === "break")
                break;
        }
        return result;
    },
    getOptionByValue: function (value) {
        var _a;
        var options = getValueFromProps(this, 'options');
        if (!((value === null || value === void 0 ? void 0 : value.length) > 0))
            return null;
        var result = [];
        var item = options.find(function (v) { return v.value === value[0]; });
        var _loop_2 = function (i) {
            if (!item) {
                return { value: null };
            }
            result.push({
                value: item.value,
                label: item.label,
            });
            item = (_a = item.children) === null || _a === void 0 ? void 0 : _a.find(function (v) { return v.value === value[i + 1]; });
        };
        for (var i = 0; i < value.length; i++) {
            var state_2 = _loop_2(i);
            if (typeof state_2 === "object")
                return state_2.value;
        }
        return result;
    },
    onChange: function (selectedVal) {
        var selectedValue = resolveEventValues(selectedVal)[0];
        var options = getValueFromProps(this, 'options');
        var columns = this.data.columns;
        var newColumns = this.getterColumns(selectedValue, options);
        // columns没变化说明selectedValue在范围内，无需重置
        var newData = {};
        if (!equal(columns, newColumns)) {
            selectedValue = this.getValidValue(selectedValue, newColumns);
            newData.columns = newColumns;
        }
        newData.currentValue = selectedValue;
        this.setData(newData);
        triggerEventValues(this, 'change', [
            selectedValue,
            this.getOptionByValue(selectedValue),
        ]);
    },
    onOk: function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentValue, options, newColumns, validValue;
            return __generator(this, function (_a) {
                currentValue = this.data.currentValue;
                options = getValueFromProps(this, 'options');
                newColumns = this.getterColumns(currentValue, options);
                validValue = this.getValidValue(currentValue, newColumns);
                if (!this.isControlled()) {
                    this.update(validValue);
                }
                triggerEventValues(this, 'ok', [
                    validValue,
                    this.getOptionByValue(validValue),
                ]);
                return [2 /*return*/];
            });
        });
    },
    onVisibleChange: function (visible) {
        var _this = this;
        var options = getValueFromProps(this, 'options');
        var columns = this.data.columns;
        var realValue = this.getValue();
        if (!this.isVisibleControlled() && visible) {
            var newColumns_1 = this.getterColumns(realValue, options);
            if (!equal(columns, newColumns_1)) {
                this.setData({ columns: newColumns_1 }, function () {
                    _this.setData({
                        currentValue: _this.getValidValue(realValue, newColumns_1),
                        formattedValueText: _this.onFormat(),
                    });
                });
            }
        }
        triggerEvent(this, 'visibleChange', resolveEventValue(visible));
    },
    defaultFormat: function (value, options) {
        if (options) {
            return options.map(function (v) { return v.label; }).join('');
        }
        return '';
    },
    onFormat: function () {
        var realValue = this.getValue();
        var onFormat = getValueFromProps(this, 'onFormat');
        var formatValueByProps = onFormat && onFormat(realValue, this.getOptionByValue(realValue));
        if (formatValueByProps !== undefined && formatValueByProps !== null) {
            return formatValueByProps;
        }
        return this.defaultFormat(realValue, this.getOptionByValue(realValue));
    },
    onCancel: function (e) {
        triggerEventOnly(this, 'cancel', e);
    },
}, {
    currentValue: [],
    columns: [],
    formattedValueText: '',
    visible: false,
}, [mixinValue()], {
    created: function () {
        this.initColumns();
    },
    observers: {
        '**': function (data) {
            var prevData = this._prevData || this.data;
            this._prevData = __assign({}, data);
            var options = getValueFromProps(this, 'options');
            if (!equal(options, prevData.options)) {
                var currentValue = this.data.currentValue;
                var newColumns = this.getterColumns(currentValue, options);
                this.setData({
                    columns: newColumns,
                });
            }
            if (!this.isEqualValue(prevData)) {
                var realValue = this.getValue();
                var newColumns = this.getterColumns(realValue, options);
                var currentValue = this.getValidValue(realValue, newColumns);
                this.setData({ currentValue: currentValue, formattedValueText: this.onFormat() });
            }
        },
        'visible': function (data) {
            var prevVisible = this._prevVisible;
            this._prevVisible = data;
            var visible = getValueFromProps(this, 'visible');
            if (this.isVisibleControlled() && !equal(prevVisible, visible)) {
                this.setData({ visible: visible });
            }
        },
    },
});
