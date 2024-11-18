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
import { effect } from '@preact/signals-core';
import mixinValue from '../mixins/value';
import { ComponentWithSignalStoreImpl, getValueFromProps, triggerEvent, triggerEventOnly, triggerEventValues, } from '../_util/simply';
import i18nController from '../_util/store';
import { PickerDefaultProps } from './props';
import { getMatchedItemByIndex, getMatchedItemByValue, getStrictMatchedItemByValue, } from './utils';
ComponentWithSignalStoreImpl({
    store: function () { return i18nController; },
    updateHook: effect,
    mapState: {
        locale: function (_a) {
            var store = _a.store;
            return store.currentLocale.value;
        },
    },
}, PickerDefaultProps, {
    // visible受控判断
    isVisibleControlled: function () {
        return getValueFromProps(this, 'visible') !== null;
    },
    initData: function () {
        var _this = this;
        var _a = getValueFromProps(this, [
            'options',
            'visible',
            'defaultVisible',
        ]), options = _a[0], visible = _a[1], defaultVisible = _a[2];
        var columns = this.getterColumns(options);
        this.setData({
            columns: columns,
        }, function () {
            var formatValue = _this.getterFormatText();
            var selectedIndex = _this.getterSelectedIndex();
            _this.setData({
                formatValue: formatValue,
                selectedIndex: selectedIndex,
                visible: _this.isVisibleControlled() ? visible : defaultVisible,
            });
        });
    },
    getterColumns: function (options) {
        var columns = [];
        if (options.length > 0) {
            if (options.every(function (item) { return Array.isArray(item); })) {
                this.single = false;
                columns = options.slice();
            }
            else {
                this.single = true;
                columns = [options];
            }
        }
        return columns;
    },
    defaultFormat: function (value, column) {
        if (Array.isArray(column)) {
            return column
                .filter(function (c) { return c !== undefined; })
                .map(function (c) {
                if (typeof c === 'object') {
                    return c.label;
                }
                return c;
            })
                .join('-');
        }
        return (column && column.label) || column || '';
    },
    getterFormatText: function () {
        var _a = getValueFromProps(this, [
            'onFormat',
            'formattedValueText',
        ]), onFormat = _a[0], formattedValueText = _a[1];
        if (typeof formattedValueText === 'string') {
            return formattedValueText;
        }
        var columns = this.data.columns;
        var realValue = this.getValue();
        var matchedColumn = getStrictMatchedItemByValue(columns, realValue, this.single).matchedColumn;
        var formatValueByProps = onFormat && onFormat(realValue, matchedColumn);
        if (formatValueByProps !== undefined && formatValueByProps !== null) {
            return formatValueByProps;
        }
        return this.defaultFormat(realValue, matchedColumn);
    },
    getterSelectedIndex: function () {
        var selectedIndex = [];
        var columns = this.data.columns;
        var realValue = this.getValue();
        var value = realValue || [];
        if (this.single) {
            value = [realValue];
        }
        var _loop_1 = function (i) {
            var column = columns[i];
            var compareValue = value[i];
            if (compareValue === undefined || compareValue === null) {
                selectedIndex[i] = 0;
            }
            var index = column.findIndex(function (c) {
                return c === compareValue || c.value === compareValue;
            });
            if (index === -1) {
                index = 0;
            }
            selectedIndex[i] = index;
        };
        for (var i = 0; i < columns.length; i++) {
            _loop_1(i);
        }
        return selectedIndex;
    },
    onOpen: function () {
        var disabled = getValueFromProps(this, 'disabled');
        if (!disabled) {
            this.tempSelectedIndex = null;
            var selectedIndex = this.getterSelectedIndex();
            this.setData({
                selectedIndex: selectedIndex,
            });
            this.triggerPicker(true);
        }
    },
    triggerPicker: function (visible) {
        this.setData({
            visible: visible,
        });
        triggerEvent(this, 'visibleChange', visible);
    },
    onMaskDismiss: function () {
        var maskClosable = getValueFromProps(this, 'maskClosable');
        if (!maskClosable) {
            return;
        }
        this.triggerPicker(false);
        triggerEventOnly(this, 'cancel', { detail: { type: 'mask' } });
    },
    onCancel: function () {
        this.triggerPicker(false);
        triggerEventOnly(this, 'cancel', { detail: { type: 'cancel' } });
    },
    onChange: function (e) {
        var selectedIndex = e.detail.value;
        this.tempSelectedIndex = selectedIndex;
        this.isChangingPickerView = true;
        var _a = getMatchedItemByIndex(this.data.columns, this.tempSelectedIndex, this.single), matchedColumn = _a.matchedColumn, matchedValues = _a.matchedValues;
        this.setData({
            selectedIndex: selectedIndex,
        });
        triggerEventValues(this, 'change', [matchedValues, matchedColumn], e);
    },
    onOk: function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, matchedColumn, matchedValues;
            return __generator(this, function (_a) {
                if (this.tempSelectedIndex) {
                    result = getMatchedItemByIndex(this.data.columns, this.tempSelectedIndex, this.single);
                }
                else {
                    result = getMatchedItemByValue(this.data.columns, this.getValue(), this.single);
                }
                matchedColumn = result.matchedColumn, matchedValues = result.matchedValues;
                this.triggerPicker(false);
                if (!this.isControlled()) {
                    this.update(matchedValues);
                }
                triggerEventValues(this, 'ok', [matchedValues, matchedColumn]);
                return [2 /*return*/];
            });
        });
    },
}, {
    formatValue: '',
    columns: [],
    visible: false,
    selectedIndex: [],
    locale: {
        locale: '23123',
        global: {},
    },
}, [
    mixinValue({
        transformValue: function (value) {
            return {
                needUpdate: true,
                value: value === undefined ? [] : value,
            };
        },
    }),
], {
    tempSelectedIndex: null,
    single: false,
    isChangingPickerView: false,
    created: function () {
        this.initData();
    },
    observers: {
        'options': function () {
            var _this = this;
            var options = getValueFromProps(this, 'options');
            var newColums = this.getterColumns(options);
            this.setData({
                columns: newColums,
            }, function () {
                // 如果是在滚动过程中columns发生变化，以onChange里抛出的selectedIndex为准
                if (!_this.isChangingPickerView) {
                    _this.tempSelectedIndex = null;
                    var selectedIndex = _this.getterSelectedIndex();
                    _this.setData({
                        selectedIndex: selectedIndex,
                    });
                }
                _this.isChangingPickerView = false;
            });
        },
        'value': function () {
            var selectedIndex = this.getterSelectedIndex();
            this.tempSelectedIndex = null;
            this.setData({
                selectedIndex: selectedIndex,
            });
        },
        'visible': function () {
            var visible = getValueFromProps(this, 'visible');
            if (this.data.visible !== visible) {
                this.setData({
                    visible: visible,
                });
            }
        },
        'formattedValueText': function () {
            var formattedValueText = getValueFromProps(this, 'formattedValueText');
            this.setData({
                formatValue: formattedValueText,
            });
        },
        '**': function () {
            var formatValue = this.getterFormatText();
            if (formatValue !== this.data.formatValue) {
                this.setData({
                    formatValue: formatValue,
                });
            }
        },
    },
});
