import dayjs from 'dayjs';
import { useEvent, useState, useMemo } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useMixState } from '../_util/hooks/useMixState';
import { resolveEventValues } from '../_util/platform';
import { DatePickerFunctionalProps } from './props';
import { getDateByValue, getRangeData, getValidValue, getValueByDate, } from './util';
function getMin(min) {
    return min ? dayjs(min) : dayjs().subtract(10, 'year');
}
function getMax(max) {
    return max ? dayjs(max) : dayjs().add(10, 'year');
}
var DatePicker = function (props) {
    var _a = useMixState(props.defaultValue, {
        value: props.value,
        postState: function (value) {
            if (value) {
                return {
                    valid: true,
                    value: dayjs(value).toDate(),
                };
            }
            return {
                valid: true,
                value: undefined,
            };
        },
    }), realValue = _a[0], _b = _a[1], isControlled = _b.isControlled, update = _b.update;
    function defaultFormat(value, valueStr) {
        if (props.format && valueStr) {
            return valueStr;
        }
        return '';
    }
    var _c = useComponentEvent(props), triggerEvent = _c.triggerEvent, triggerEventValues = _c.triggerEventValues, triggerEventOnly = _c.triggerEventOnly;
    function onFormatLabel(type, value) {
        var onFormatLabel = props.onFormatLabel;
        if (typeof onFormatLabel === 'function') {
            var formatValueByProps = onFormatLabel(type, value);
            if (typeof formatValueByProps !== 'undefined') {
                return String(formatValueByProps);
            }
        }
        return defaultFormatLabel(type, value);
    }
    function defaultFormatLabel(type, value) {
        var suffixMap = {
            year: '年',
            month: '月',
            day: '日',
            hour: '时',
            minute: '分',
            second: '秒',
        };
        return "".concat(value).concat(suffixMap[type]);
    }
    var _d = useState({
        visible: false,
        value: [],
        columns: [],
    }), _e = _d[0], visible = _e.visible, value = _e.value, columns = _e.columns, setState = _d[1];
    function generateData(currentValue, currentProps) {
        var precision = currentProps.precision, propsMin = currentProps.min, propsMax = currentProps.max;
        var min = getMin(propsMin);
        var max = getMax(propsMax);
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
        var newColumns = getRangeData(precision, min, max, currentPickerDay, onFormatLabel);
        return newColumns;
    }
    function getCurrentValueWithCValue(currentProps) {
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
                return getValueByDate(getMin(min).toDate(), precision);
            }
        }
    }
    useEvent('onVisibleChange', function (visible) {
        if (visible) {
            var currentValue = getCurrentValueWithCValue(props);
            var newColumns = generateData(currentValue, props);
            setState({
                value: currentValue,
                columns: newColumns,
                visible: true,
            });
        }
        else {
            setState({
                value: [],
                columns: [],
                visible: false,
            });
        }
        triggerEvent('visibleChange', visible, {});
    });
    useEvent('onChange', function (event) {
        var selectedIndex = resolveEventValues(event)[0];
        selectedIndex = getValidValue(selectedIndex);
        var format = props.format, precision = props.precision;
        var date = getDateByValue(selectedIndex);
        var min = getMin(props.min);
        var max = getMax(props.max);
        if (dayjs(date).isBefore(min)) {
            date = min.toDate();
            selectedIndex = getValueByDate(date, precision);
        }
        if (dayjs(date).isAfter(max)) {
            date = max.toDate();
            selectedIndex = getValueByDate(date, precision);
        }
        var newColumns = generateData(selectedIndex, props);
        setState({
            visible: true,
            columns: newColumns,
            value: selectedIndex,
        });
        var pickDate = getDateByValue(selectedIndex);
        triggerEventValues('pickerChange', [pickDate, dayjs(pickDate).format(format)], {});
    });
    useEvent('onCancel', function (e) {
        triggerEventOnly('cancel', e);
    });
    useEvent('onOk', function () {
        var format = props.format;
        var date = getDateByValue(value);
        if (!isControlled) {
            update(date);
        }
        triggerEventValues('ok', [date, dayjs(date).format(format)], {});
    });
    var formattedValueText = useMemo(function () {
        var onFormat = props.onFormat, format = props.format;
        if (typeof onFormat === 'function') {
            var formatValueByProps = onFormat(realValue, realValue ? dayjs(realValue).format(format) : null);
            if (typeof formatValueByProps !== 'undefined') {
                return formatValueByProps;
            }
        }
        return defaultFormat(realValue, realValue ? dayjs(realValue).format(format) : null);
    }, [realValue]);
    return {
        formattedValueText: formattedValueText,
        currentValue: visible ? value : realValue,
        columns: columns,
    };
};
mountComponent(DatePicker, DatePickerFunctionalProps);
