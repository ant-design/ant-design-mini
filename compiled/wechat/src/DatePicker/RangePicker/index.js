import { useState, useEvent, useMemo } from 'functional-mini/component';
import { DateRangePickerFunctionalProps } from './props';
import dayjs from 'dayjs';
import { getRangeData, getDateByValue, getValueByDate, getValidValue, } from '../util';
import { useMixState } from '../../_util/hooks/useMixState';
import { useFormatValue, useMinAndMax, useFormatLabel } from './hooks';
import { useDateState } from './useDateState';
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { resolveEventValues } from '../../_util/platform';
var RangePicker = function (props) {
    var _a = useMixState(props.defaultValue, {
        value: props.value,
        postState: function (value) {
            return {
                valid: true,
                value: value && value[0] && value[1]
                    ? [
                        dayjs(value[0]).toDate(),
                        dayjs(value[1]).toDate(),
                    ]
                    : undefined,
            };
        },
    }), realValue = _a[0], _b = _a[1], isControlled = _b.isControlled, update = _b.update;
    var _c = useDateState(props), dateState = _c.dateState, init = _c.init, changeType = _c.changeType, updateValue = _c.updateValue;
    var _d = useComponentEvent(props), triggerEvent = _d.triggerEvent, triggerEventValues = _d.triggerEventValues, triggerEventOnly = _d.triggerEventOnly;
    var _e = useState({
        currentValue: [],
        columns: [],
    }), _f = _e[0], columns = _f.columns, currentValue = _f.currentValue, doUpdateColumns = _e[1];
    var onFormat = useFormatValue(props);
    var _g = useMemo(function () {
        return {
            currentStartValueStr: dateState.start
                ? dayjs(dateState.start).format(props.format)
                : '',
            currentEndValueStr: dateState.end
                ? dayjs(dateState.end).format(props.format)
                : '',
        };
    }, [props.format, dateState.start, dateState.end]), currentStartValueStr = _g.currentStartValueStr, currentEndValueStr = _g.currentEndValueStr;
    var onFormatLabel = useFormatLabel(props.onFormatLabel);
    function updateColumns(currentValue, currentProps) {
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
        doUpdateColumns({ columns: newColumns, currentValue: currentValue });
    }
    var formattedValueText = onFormat(realValue);
    useEvent('onVisibleChange', function (visible) {
        if (visible) {
            var state = init(realValue);
            var currentValue_1 = getValueByDate(state.pickerType === 'start' ? state.start : state.end, props.precision);
            updateColumns(currentValue_1, props);
        }
        triggerEvent('visibleChange', visible);
    });
    useEvent('onChangeCurrentPickerType', function (e) {
        var type = e.currentTarget.dataset.type;
        var state = changeType(type);
        var currentValue = getValueByDate(state.pickerType === 'start' ? state.start : state.end, props.precision);
        updateColumns(currentValue, props);
    });
    var _h = useMinAndMax(), getMin = _h.getMin, getMax = _h.getMax;
    useEvent('onCancel', function (e) {
        triggerEventOnly('cancel', e);
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
        updateColumns(selectedIndex, props);
        updateValue(date);
        triggerEventValues('pickerChange', [
            dateState.pickerType,
            date,
            dayjs(date).format(format),
        ]);
    });
    useEvent('onOk', function () {
        var format = props.format;
        var start = dateState.start, end = dateState.end;
        var realValue = [start, end];
        if (!isControlled) {
            update(realValue);
        }
        triggerEventValues('ok', [
            realValue,
            realValue.map(function (v) { return dayjs(v).format(format); }),
        ]);
    });
    return {
        formattedValueText: formattedValueText,
        realValue: realValue,
        columns: columns,
        currentValue: currentValue,
        currentStartDate: dateState.start,
        currentEndDate: dateState.end,
        currentEndValueStr: currentEndValueStr,
        currentStartValueStr: currentStartValueStr,
        pickerType: dateState.pickerType,
    };
};
mountComponent(RangePicker, DateRangePickerFunctionalProps);
