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
import dayjs from 'dayjs';
import { useState } from 'functional-mini/component';
import { useMinAndMax } from './hooks';
export function useDateState(props) {
    var getMin = useMinAndMax().getMin;
    var _a = useState({
        pickerType: 'start',
        start: null,
        end: null,
    }), dateState = _a[0], setDateState = _a[1];
    var init = function (realValue) {
        var currentStartDate = realValue === null || realValue === void 0 ? void 0 : realValue[0];
        var currentEndDate = realValue === null || realValue === void 0 ? void 0 : realValue[1];
        if (!currentStartDate) {
            var min = getMin(props.min).toDate();
            var max = props.max;
            currentStartDate = new Date();
            if ((min && dayjs(currentStartDate).isBefore(min, props.precision)) ||
                (max && dayjs(currentStartDate).isAfter(max, props.precision)) ||
                (currentEndDate && currentStartDate > currentEndDate)) {
                currentStartDate = min;
            }
        }
        var newState = {
            pickerType: 'start',
            start: currentStartDate,
            end: currentEndDate,
        };
        setDateState(newState);
        return newState;
    };
    var changeType = function (newType) {
        var currentStartDate = dateState.start;
        var currentEndDate = dateState.end;
        if (newType === 'start') {
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
        var newState = {
            pickerType: newType,
            start: currentStartDate,
            end: currentEndDate,
        };
        setDateState(newState);
        return newState;
    };
    function updateValue(newValue) {
        setDateState(function (old) {
            if (old.pickerType === 'start') {
                var newEnd = old.end;
                if (old.end && dayjs(newValue).isAfter(old.end)) {
                    newEnd = null;
                }
                return __assign(__assign({}, old), { start: newValue, end: newEnd });
            }
            var newStart = old.start;
            if (old.start && dayjs(newValue).isBefore(old.start)) {
                newStart = null;
            }
            return __assign(__assign({}, old), { end: newValue, start: newStart });
        });
    }
    return {
        updateValue: updateValue,
        dateState: dateState,
        init: init,
        changeType: changeType,
    };
}
