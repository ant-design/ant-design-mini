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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { effect } from '@preact/signals-core';
import dayjs from 'dayjs';
import equal from 'fast-deep-equal';
import mixinValue from '../mixins/value';
import { getInstanceBoundingClientRect } from '../_util/jsapi/get-instance-bounding-client-rect';
import { ComponentWithSignalStoreImpl, getValueFromProps, triggerEvent, } from '../_util/simply';
import i18nController from '../_util/store';
import { CalendarDefaultProps } from './props';
import { getMonthListFromRange, getScrollIntoViewId, getSelectionModeFromValue, renderCells, } from './utils';
ComponentWithSignalStoreImpl({
    store: function () { return i18nController; },
    updateHook: effect,
    mapState: {
        locale: function (_a) {
            var store = _a.store;
            return store.currentLocale.value;
        },
    },
}, CalendarDefaultProps, {
    getInstance: function () {
        if (this.$id) {
            return my;
        }
        return this;
    },
    getBoundingClientRect: function (query) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getInstanceBoundingClientRect(this.getInstance(), query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    },
    scrollIntoView: function (value) {
        this.updateScrollIntoViewId(getScrollIntoViewId(value));
    },
    clickCell: function (e) {
        var _a, _b;
        var time = e.currentTarget.dataset.time;
        var clickDate = dayjs(time.time);
        if (time.disabled) {
            return;
        }
        var value = this.getValue();
        var selectionModeFromValue = getSelectionModeFromValue(value);
        var selectionMode = (_b = (_a = getValueFromProps(this, 'selectionMode')) !== null && _a !== void 0 ? _a : selectionModeFromValue) !== null && _b !== void 0 ? _b : 'range';
        if (selectionMode === 'range') {
            if (Array.isArray(value)) {
                if (value.length === 1) {
                    var current = value[0];
                    if (dayjs(clickDate.toDate().getTime()).isBefore(dayjs(current))) {
                        this.updateValue([clickDate.toDate().getTime()]);
                    }
                    else {
                        this.updateValue([value[0], clickDate.toDate().getTime()]);
                    }
                }
                else {
                    this.updateValue([clickDate.toDate().getTime()]);
                }
            }
            else {
                this.updateValue([clickDate.toDate().getTime()]);
            }
        }
        else if (selectionMode === 'single') {
            this.updateValue(clickDate.toDate().getTime());
        }
    },
    setCurrentMonth: function (e) {
        this.setData({ headerState: e.month });
    },
    measurement: function () {
        var elementSize = this.data.elementSize;
        // 组件如果内嵌在 slot 里, 一定会被渲染出来, 但是此时 cellHight 为 0
        // 此时需要重新计算
        if (!elementSize || elementSize.cellHight === 0) {
            this.measurementFn();
        }
    },
    measurementFn: function () {
        var _this = this;
        Promise.all([
            this.getBoundingClientRect('.ant-calendar-body-container'),
            this.getBoundingClientRect('.ant-calendar-cells'),
            this.getBoundingClientRect('.ant-calendar-title-container'),
        ])
            .then(function (_a) {
            var bodyContainer = _a[0], cellContainer = _a[1], Title = _a[2];
            // 滚动的时候 top 和 bottom 等尺寸会变
            // 所以只能依赖 height 来计算
            var paddingHeight = bodyContainer.height - cellContainer.height - Title.height;
            var monthTitleHeight = Title.height + paddingHeight;
            var cellHight = cellContainer.height / (_this.data.monthList[0].cells.length / 7);
            _this.setData({
                elementSize: {
                    monthTitleHeight: monthTitleHeight,
                    cellHight: cellHight,
                    paddingHeight: paddingHeight,
                },
            });
        })
            .catch(function () {
            _this.setData({ elementSize: null });
        });
    },
    // scroll 触发滚动之后需要重置 scrollIntoViewId
    updateScrollIntoViewId: function (id) {
        var _this = this;
        this.setData({ scrollIntoViewId: id });
        var timer = setTimeout(function () {
            _this.setData({ scrollIntoViewId: '' });
            clearTimeout(timer);
        });
    },
    updateValue: function (newValue) {
        triggerEvent(this, 'change', newValue);
        if (!this.isControlled()) {
            this.update(newValue);
        }
    },
    updateData: function () {
        var _a, _b;
        var _c = getValueFromProps(this, [
            'monthRange',
            'weekStartsOn',
            'onFormatter',
            'onMonthFormatter',
        ]), monthRange = _c[0], pweekStartsOn = _c[1], onFormatter = _c[2], onMonthFormatter = _c[3];
        var localeText = Object.assign({}, (_a = this.data.locale) === null || _a === void 0 ? void 0 : _a.calendar);
        var markItems = __spreadArray([], ((_b = localeText.weekdayNames) !== null && _b !== void 0 ? _b : []), true);
        var weekStartsOn = pweekStartsOn;
        if (weekStartsOn === 'Sunday') {
            var item = markItems.pop();
            if (item)
                markItems.unshift(item);
        }
        var value = this.getValue();
        var start = dayjs(monthRange === null || monthRange === void 0 ? void 0 : monthRange[0]).startOf('d');
        var end = dayjs(monthRange === null || monthRange === void 0 ? void 0 : monthRange[1]).startOf('d');
        var monthRangeList = getMonthListFromRange(start, end);
        var monthList = monthRangeList.map(function (p) {
            var cells = renderCells(p, weekStartsOn, value, localeText, 
            // 如果monthRange传入异常，用内置的时间范围
            start.isAfter(end) || start.isSame(end)
                ? [monthRangeList[0], dayjs(monthRangeList[1]).endOf('month')]
                : [start, end]);
            if (onFormatter && typeof onFormatter === 'function') {
                cells = cells.map(function (o) {
                    var _a;
                    var time = o.time, top = o.top, bottom = o.bottom, disabled = o.disabled, isSelectedBegin = o.isSelectedBegin, isSelectedEnd = o.isSelectedEnd, isSelected = o.isSelected, className = o.className, isRange = o.isRange;
                    var newState = (_a = onFormatter({
                        time: time,
                        top: top ? __assign({}, top) : undefined,
                        bottom: bottom ? __assign({}, bottom) : undefined,
                        disabled: disabled,
                        isSelectedBegin: isSelectedBegin,
                        isSelectedEnd: isSelectedEnd,
                        isSelected: isSelected,
                        className: className,
                        isRange: isRange,
                    }, value)) !== null && _a !== void 0 ? _a : {};
                    var result = __assign({}, o);
                    if (typeof newState === 'object') {
                        // 只允许修改的字段字段
                        ['top', 'bottom', 'disabled', 'className'].forEach(function (key) {
                            if (key in newState) {
                                result[key] = newState[key];
                            }
                        });
                    }
                    return result;
                });
            }
            var month = {
                title: p.format(localeText.format),
                className: '',
                cells: cells,
            };
            if (onMonthFormatter && typeof onMonthFormatter === 'function') {
                month = __assign(__assign({}, month), onMonthFormatter(p));
            }
            return month;
        });
        this.setData({ markItems: markItems, monthList: monthList });
    },
}, {
    elementSize: null,
    markItems: [],
    monthList: [],
    headerState: 0,
    scrollIntoViewId: '',
}, [mixinValue()], {
    didMount: function () {
        this.updateData();
        this.measurementFn();
        // 初始化默认值时，滚动到选中位置
        var _a = getValueFromProps(this, [
            'value',
            'defaultValue',
        ]), value = _a[0], defaultValue = _a[1];
        if (this.isControlled()) {
            this.updateScrollIntoViewId(getScrollIntoViewId(value));
        }
        else {
            defaultValue &&
                this.updateScrollIntoViewId(getScrollIntoViewId(defaultValue));
        }
    },
    didUpdate: function (prevProps, prevData) {
        if (!this.isEqualValue(prevData)) {
            // 滚动到已选的位置
            var changedScrollIntoView = getValueFromProps(this, 'changedScrollIntoView');
            changedScrollIntoView &&
                this.updateScrollIntoViewId(getScrollIntoViewId(this.getValue()));
        }
        if (!equal(prevProps, this.props) || !this.isEqualValue(prevData)) {
            this.updateData();
        }
    },
    attached: function () {
        this.updateData();
        this.measurementFn();
        // 初始化默认值时，滚动到选中位置
        var _a = getValueFromProps(this, [
            'value',
            'defaultValue',
        ]), value = _a[0], defaultValue = _a[1];
        if (this.isControlled()) {
            this.updateScrollIntoViewId(getScrollIntoViewId(value));
        }
        else {
            defaultValue &&
                this.updateScrollIntoViewId(getScrollIntoViewId(defaultValue));
        }
        this.triggerEvent('ref', this);
    },
    observers: {
        '**': function (data) {
            var prevData = this._prevData || this.data;
            this._prevData = __assign({}, data);
            if (!equal(prevData, data)) {
                this.updateData();
            }
        },
        'mixin.value': function () {
            // 滚动到已选的位置
            var changedScrollIntoView = getValueFromProps(this, 'changedScrollIntoView');
            changedScrollIntoView &&
                this.updateScrollIntoViewId(getScrollIntoViewId(this.getValue()));
        },
    },
});
