import { Component, triggerEvent, triggerEventOnly, triggerEventValues, getValueFromProps, } from '../_util/simply';
import { resolveEventValue, resolveEventValues } from '../_util/platform';
import { DatePickerDefaultProps } from './props';
import dayjs from 'dayjs';
import equal from 'fast-deep-equal';
import { getRangeData, getDateByValue, getValueByDate, getValidValue, } from './util';
import mixinValue from '../mixins/value';
Component(DatePickerDefaultProps, {
    // visible受控判断
    isVisibleControlled: function () {
        return getValueFromProps(this, 'visible') !== null;
    },
    // 当前选中的picker值，处理无cValue时的情况，优先取当前时间，不在时间范围内取开始时间
    getCurrentValueWithCValue: function (currentProps) {
        var realValue = this.getValue();
        var min = currentProps.min, max = currentProps.max, precision = currentProps.precision;
        if (realValue) {
            return getValueByDate(realValue, precision);
        }
        else {
            var now = new Date();
            if (!(min && dayjs(now).isBefore(dayjs(min), precision)) &&
                !(max && dayjs(now).isAfter(dayjs(max), precision))) {
                return getValueByDate(now, precision);
            }
            else {
                return getValueByDate(this.getMin(min).toDate(), precision);
            }
        }
    },
    getMin: function (min) {
        return min ? dayjs(min) : dayjs().subtract(10, 'year');
    },
    getMax: function (max) {
        return max ? dayjs(max) : dayjs().add(10, 'year');
    },
    /**
     * didUpdate、弹窗打开触发
     */
    setCurrentValue: function (currentProps) {
        var _this = this;
        var currentValue = this.getCurrentValueWithCValue(currentProps);
        var newColumns = this.generateData(currentValue, currentProps);
        if (!equal(newColumns, this.data.columns)) {
            this.setData({
                columns: newColumns,
            }, function () {
                _this.setData({
                    currentValue: currentValue,
                    formattedValueText: _this.onFormat(),
                });
            });
        }
    },
    // 生成选项数据，didmound、picker change、打开弹窗触发
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
    onChange: function (selectedIdx) {
        var _this = this;
        var _a = getValueFromProps(this, [
            'min',
            'max',
            'format',
            'precision',
        ]), pmin = _a[0], pmax = _a[1], format = _a[2], precision = _a[3];
        var selectedIndex = resolveEventValues(getValidValue(selectedIdx))[0];
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
        var newColumns = this.generateData(selectedIndex, getValueFromProps(this));
        if (!equal(newColumns, this.data.columns)) {
            this.setData({
                columns: newColumns,
            }, function () {
                _this.setData({ currentValue: selectedIndex });
                var date = getDateByValue(selectedIndex);
                triggerEventValues(_this, 'pickerChange', [
                    date,
                    dayjs(date).format(format),
                ]);
            });
        }
        else {
            this.setData({ currentValue: selectedIndex });
            var date_1 = getDateByValue(selectedIndex);
            triggerEventValues(this, 'pickerChange', [
                date_1,
                dayjs(date_1).format(format),
            ]);
        }
    },
    onCancel: function (e) {
        triggerEventOnly(this, 'cancel', e);
    },
    onOk: function () {
        var currentValue = this.data.currentValue;
        var format = getValueFromProps(this, 'format');
        var date = getDateByValue(currentValue);
        if (!this.isControlled()) {
            this.update(date);
        }
        triggerEventValues(this, 'ok', [date, dayjs(date).format(format)]);
    },
    defaultFormat: function (value, valueStr) {
        var format = getValueFromProps(this, 'format');
        if (format && valueStr) {
            return valueStr;
        }
        return '';
    },
    onFormat: function () {
        var _a = getValueFromProps(this, [
            'format',
            'onFormat',
        ]), format = _a[0], onFormat = _a[1];
        var realValue = this.getValue();
        var formatValueByProps = onFormat &&
            onFormat(realValue, realValue ? dayjs(realValue).format(format) : null);
        if (formatValueByProps !== undefined && formatValueByProps !== null) {
            return formatValueByProps;
        }
        return this.defaultFormat(realValue, realValue ? dayjs(realValue).format(format) : null);
    },
    onVisibleChange: function (visible) {
        this.pickerVisible = visible;
        if (!this.isVisibleControlled() && visible) {
            this.setCurrentValue(getValueFromProps(this));
        }
        triggerEvent(this, 'visibleChange', resolveEventValue(visible));
    },
}, {
    currentValue: [],
    formattedValueText: '',
    columns: [],
    forceUpdate: 0,
    visible: null,
}, [
    mixinValue({
        transformValue: function (value) {
            return {
                value: value ? dayjs(value).toDate() : undefined,
                needUpdate: true,
            };
        },
    }),
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
        'mixin.value': function () {
            this.setData({
                forceUpdate: this.data.forceUpdate + 1,
                formattedValueText: this.onFormat(),
            });
            // 展开状态才更新picker的数据，否则下次triggerVisible触发
            if (this.pickerVisible) {
                this.setCurrentValue(getValueFromProps(this));
            }
        },
        'visible': function (data) {
            var prevVisible = this._prevVisible;
            this._prevVisible = data;
            var currentProps = getValueFromProps(this);
            var visible = getValueFromProps(this, 'visible');
            if (this.isVisibleControlled() && prevVisible !== visible) {
                this.pickerVisible = visible;
                this.setData({
                    visible: visible,
                });
                if (this.pickerVisible) {
                    this.setCurrentValue(currentProps);
                }
            }
        },
    },
});
