import { effect } from '@preact/signals-core';
import dayjs from 'dayjs';
import equal from 'fast-deep-equal';
import computed from '../../mixins/computed';
import mixinValue from '../../mixins/value';
import { resolveEventValue, resolveEventValues } from '../../_util/platform';
import { ComponentWithSignalStoreImpl, getValueFromProps, triggerEvent, triggerEventOnly, triggerEventValues, } from '../../_util/simply';
import i18nController from '../../_util/store';
import { getDateByValue, getRangeData, getValidValue, getValueByDate, } from '../util';
import { DateRangePickerDefaultProps } from './props';
ComponentWithSignalStoreImpl({
    store: function () { return i18nController; },
    updateHook: effect,
    mapState: {
        locale: function (_a) {
            var store = _a.store;
            return store.currentLocale.value;
        },
    },
}, DateRangePickerDefaultProps, {
    // visible受控判断
    isVisibleControlled: function () {
        return getValueFromProps(this, 'visible') !== null;
    },
    computed: function () {
        var _a = this.data, currentStartDate = _a.currentStartDate, currentEndDate = _a.currentEndDate, pickerType = _a.pickerType;
        var format = getValueFromProps(this, 'format');
        if (pickerType)
            return {
                currentStartValueStr: currentStartDate
                    ? dayjs(currentStartDate).format(format)
                    : '',
                currentEndValueStr: currentEndDate
                    ? dayjs(currentEndDate).format(format)
                    : '',
            };
    },
    getMin: function (min) {
        return min ? dayjs(min) : dayjs().subtract(10, 'year');
    },
    getMax: function (max) {
        return max ? dayjs(max) : dayjs().add(10, 'year');
    },
    // didUpdate、弹窗打开、切换pickerType触发
    setCurrentValue: function (currentProps) {
        var _this = this;
        var pickerVisible = this.pickerVisible; // 隐藏状态下从CValue触发，展开状态使用当前数据
        var precision = currentProps.precision;
        var _a = this.data, pickerType = _a.pickerType, columns = _a.columns;
        var realValue = this.getValue();
        var _b = this.data, currentStartDate = _b.currentStartDate, currentEndDate = _b.currentEndDate;
        var currentStartDateByCValue = (realValue === null || realValue === void 0 ? void 0 : realValue[0]) || null;
        var currentEndDateByCValue = (realValue === null || realValue === void 0 ? void 0 : realValue[1]) || null;
        // 展开状态，说明在切换pickerType
        if (pickerVisible) {
            if (pickerType === 'start') {
                if (!currentStartDate) {
                    currentStartDate = currentEndDate;
                }
            }
            else {
                // pickerType=end start已存在
                // 结束时间默认选中开始
                if (!currentEndDate) {
                    currentEndDate = currentStartDate;
                }
            }
        }
        else {
            // 否则是在从cValue初始化
            currentStartDate = currentStartDateByCValue;
            currentEndDate = currentEndDateByCValue;
            // 开始默认取优先取当前时间，不在时间范围内取开始时间
            if (!currentStartDate) {
                var min = this.getMin(currentProps.min).toDate();
                var max = currentProps.max;
                currentStartDate = new Date();
                if ((min && dayjs(currentStartDate).isBefore(min, precision)) ||
                    (max && dayjs(currentStartDate).isAfter(max, precision)) ||
                    (currentEndDateByCValue &&
                        currentStartDate > currentEndDateByCValue)) {
                    currentStartDate = min;
                }
            }
        }
        var currentValue = getValueByDate(pickerType === 'start' ? currentStartDate : currentEndDate, precision);
        var newColumns = this.generateData(currentValue, currentProps);
        if (!equal(newColumns, columns)) {
            this.setData({ columns: newColumns }, function () {
                _this.setData({
                    currentStartDate: currentStartDate,
                    currentEndDate: currentEndDate,
                    currentValue: currentValue,
                    formattedValueText: _this.onFormat(),
                });
            });
        }
        else {
            this.setData({
                currentStartDate: currentStartDate,
                currentEndDate: currentEndDate,
                currentValue: currentValue,
                formattedValueText: this.onFormat(),
            });
        }
    },
    /**
     * 生成选项数据，didmound、picker change、打开弹窗、切换picker type触发
     */
    generateData: function (currentValue, currentProps) {
        var precision = currentProps.precision, propsMin = currentProps.min, propsMax = currentProps.max;
        var min = this.getMin(propsMin);
        var max = this.getMax(propsMax);
        if (max < min) {
            return [];
        }
        var currentPickerDay = dayjs();
        if (currentValue.length > 0) {
            currentPickerDay = dayjs(getDateByValue(currentValue));
        }
        if (currentPickerDay < min || currentPickerDay > max) {
            currentPickerDay = min;
        }
        var newColumns = getRangeData(precision, min, max, currentPickerDay, this.onFormatLabel.bind(this));
        return newColumns;
    },
    onChange: function (selectedIdx) {
        var _this = this;
        var selectedIndex = resolveEventValues(getValidValue(selectedIdx))[0];
        var _a = getValueFromProps(this, [
            'format',
            'precision',
            'max',
            'min',
        ]), format = _a[0], precision = _a[1], pmax = _a[2], pmin = _a[3];
        var date = getDateByValue(selectedIndex);
        var min = this.getMin(pmin);
        var max = this.getMax(pmax);
        if (dayjs(date).isBefore(min)) {
            date = min.toDate();
            selectedIndex = getValueByDate(date, precision);
        }
        if (dayjs(date).isAfter(max)) {
            date = max.toDate();
            selectedIndex = getValueByDate(date, precision);
        }
        var _b = this.data, pickerType = _b.pickerType, columns = _b.columns, currentEndDate = _b.currentEndDate, currentStartDate = _b.currentStartDate;
        var newData = {
            currentValue: selectedIndex,
            formattedValueText: this.onFormat(),
        };
        if (pickerType === 'start') {
            newData.currentStartDate = date;
            if (currentEndDate && dayjs(date).isAfter(currentEndDate)) {
                newData.currentEndDate = null;
            }
        }
        else {
            newData.currentEndDate = date;
            if (currentStartDate && dayjs(date).isBefore(currentStartDate)) {
                newData.currentStartDate = null;
            }
        }
        var newColumns = this.generateData(selectedIndex, getValueFromProps(this));
        if (!equal(newColumns, columns)) {
            this.setData({
                columns: newColumns,
            }, function () {
                _this.setData(newData);
                triggerEventValues(_this, 'pickerChange', [
                    pickerType,
                    date,
                    dayjs(date).format(format),
                ]);
            });
        }
        else {
            this.setData(newData);
            triggerEventValues(this, 'pickerChange', [
                pickerType,
                date,
                dayjs(date).format(format),
            ]);
        }
    },
    onCancel: function (e) {
        triggerEventOnly(this, 'cancel', e);
    },
    onOk: function () {
        var format = getValueFromProps(this, 'format');
        var _a = this.data, currentStartDate = _a.currentStartDate, currentEndDate = _a.currentEndDate;
        var realValue = [currentStartDate, currentEndDate];
        if (!this.isControlled()) {
            this.update(realValue);
        }
        triggerEventValues(this, 'ok', [
            realValue,
            realValue.map(function (v) { return dayjs(v).format(format); }),
        ]);
    },
    onFormatLabel: function (type, value) {
        var onFormatLabel = getValueFromProps(this, 'onFormatLabel');
        var formatValueByProps = onFormatLabel && onFormatLabel(type, value);
        if (formatValueByProps !== undefined && formatValueByProps !== null) {
            return String(formatValueByProps);
        }
        return this.defaultFormatLabel(type, value);
    },
    defaultFormatLabel: function (type, value) {
        var suffixMap = {
            year: '年',
            month: '月',
            day: '日',
            hour: '时',
            minute: '分',
            second: '秒',
        };
        return "".concat(value).concat(suffixMap[type]);
    },
    defaultFormat: function (date, valueStrs) {
        var _a = getValueFromProps(this, [
            'format',
            'splitCharacter',
        ]), format = _a[0], splitCharacter = _a[1];
        if (format && valueStrs && valueStrs[0] && valueStrs[1]) {
            return valueStrs.join("".concat(splitCharacter));
        }
        return '';
    },
    onFormat: function () {
        var _a = getValueFromProps(this, [
            'onFormat',
            'format',
        ]), onFormat = _a[0], format = _a[1];
        var realValue = this.getValue();
        var formatValueByProps = onFormat &&
            onFormat(realValue, realValue
                ? realValue.map(function (v) { return (v ? dayjs(v).format(format) : null); })
                : null);
        if (formatValueByProps !== undefined && formatValueByProps !== null) {
            return formatValueByProps;
        }
        return this.defaultFormat(realValue, realValue
            ? realValue.map(function (v) { return (v ? dayjs(v).format(format) : null); })
            : null);
    },
    /**
     * 显示/隐藏切换
     * @param visible
     */
    onVisibleChange: function (visible) {
        if (!this.isVisibleControlled() && visible) {
            this.setData({ pickerType: 'start' });
            this.setCurrentValue(getValueFromProps(this));
            this.pickerVisible = visible;
        }
        triggerEvent(this, 'visibleChange', resolveEventValue(visible));
    },
    onChangeCurrentPickerType: function (e) {
        var type = e.currentTarget.dataset.type;
        var pickerType = this.data.pickerType;
        if (type !== pickerType) {
            this.setData({
                pickerType: type,
            });
            this.setCurrentValue(getValueFromProps(this));
        }
    },
}, {
    currentValue: [],
    columns: [],
    pickerType: 'start',
    currentStartDate: null,
    currentEndDate: null,
    forceUpdate: 0,
    formattedValueText: '',
}, [
    mixinValue({
        transformValue: function (value) {
            return {
                value: value && value[0] && value[1]
                    ? [dayjs(value[0]).toDate(), dayjs(value[1]).toDate()]
                    : undefined,
                needUpdate: true,
            };
        },
    }),
    computed(),
], {
    pickerVisible: false,
    created: function () {
        this.pickerVisible = false;
        var _a = getValueFromProps(this, [
            'visible',
            'defaultVisible',
        ]), visible = _a[0], defaultVisible = _a[1];
        this.setData({
            visible: this.isVisibleControlled() ? visible : defaultVisible,
            formattedValueText: this.onFormat(),
        });
    },
    observers: {
        'visible': function (data) {
            var prevVisible = this._prevVisible;
            this._prevVisible = data;
            var currentProps = getValueFromProps(this);
            var visible = getValueFromProps(this, 'visible');
            if (this.isVisibleControlled() && prevVisible !== visible) {
                this.setData({ visible: visible });
                this.setCurrentValue(currentProps);
                this.pickerVisible = visible;
            }
        },
        'mixin.value': function () {
            var currentProps = getValueFromProps(this);
            this.setData({
                forceUpdate: this.data.forceUpdate + 1,
                formattedValueText: this.onFormat(),
            });
            if (this.pickerVisible) {
                // 展开状态才更新picker的数据，否则下次triggerVisible触发
                this.setCurrentValue(currentProps);
            }
        },
    },
});
