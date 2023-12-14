var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import dayjs from 'dayjs';
function getArray(start, end, format) {
    var res = [];
    for (var i = 0; i < end - start + 1; i++) {
        res.push({ label: format(start + i), value: start + i });
    }
    return res;
}
var precisionLengthRecord = {
    year: 1,
    month: 2,
    day: 3,
    hour: 4,
    minute: 5,
    second: 6,
};
function getYears(min, max, format) {
    return getArray(min.year(), max.year(), format.bind(null, 'year'));
}
function getMonths(min, max, currentPicker, format) {
    var start = 1;
    var end = 12;
    if (currentPicker
        .clone()
        .set('month', start - 1)
        .isBefore(min)) {
        start = min.month() + 1;
    }
    if (currentPicker
        .clone()
        .set('month', end - 1)
        .isAfter(max)) {
        end = max.month() + 1;
    }
    return getArray(start, end, format.bind(null, 'month'));
}
function getDates(min, max, currentPicker, format) {
    var start = 1;
    var end = currentPicker.daysInMonth();
    if (currentPicker.clone().set('date', start).isBefore(min)) {
        start = min.date();
    }
    if (currentPicker.clone().set('date', end).isAfter(max)) {
        end = max.date();
    }
    return getArray(start, end, format.bind(null, 'day'));
}
function getHours(min, max, currentPicker, format) {
    var start = 0;
    var end = 23;
    if (currentPicker.clone().set('hour', start).isBefore(min)) {
        start = min.hour();
    }
    if (currentPicker.clone().set('hour', end).isAfter(max)) {
        end = max.hour();
    }
    return getArray(start, end, format.bind(null, 'hour'));
}
function getMinutes(min, max, currentPicker, format) {
    var start = 0;
    var end = 59;
    if (currentPicker.clone().set('minute', start).isBefore(min)) {
        start = min.minute();
    }
    if (currentPicker.clone().set('minute', end).isAfter(max)) {
        end = max.minute();
    }
    return getArray(start, end, format.bind(null, 'minute'));
}
function getSeconds(min, max, currentPicker, format) {
    var start = 0;
    var end = 59;
    if (currentPicker.clone().set('second', start).isBefore(min)) {
        start = min.second();
    }
    if (currentPicker.clone().set('second', end).isAfter(max)) {
        end = max.second();
    }
    return getArray(start, end, format.bind(null, 'second'));
}
export function getRangeData(precision, min, max, currentPickerDay, format) {
    var data = [];
    var len = precisionLengthRecord[precision];
    if (!len)
        return [];
    for (var i = 0; i < len; i++) {
        switch (i) {
            case 0:
                data.push(getYears(min, max, format));
                break;
            case 1:
                data.push(getMonths(min, max, currentPickerDay, format));
                break;
            case 2:
                data.push(getDates(min, max, currentPickerDay, format));
                break;
            case 3:
                data.push(getHours(min, max, currentPickerDay, format));
                break;
            case 4:
                data.push(getMinutes(min, max, currentPickerDay, format));
                break;
            case 5:
                data.push(getSeconds(min, max, currentPickerDay, format));
                break;
        }
    }
    return data;
}
/**
 * 选中的值转换为时间类型，主要处理month从0开始的情况
 * @param value
 * @returns
 */
export function getDateByValue(value) {
    //@ts-ignore
    return new (Date.bind.apply(Date, __spreadArray([void 0], value.map(function (v, i) { return String(i === 1 ? v - 1 : v); }), false)))();
}
/**
 * date转换为value数组
 * @param value
 * @returns
 */
export function getValueByDate(date, precision) {
    var fields = [
        'getFullYear',
        'getMonth',
        'getDate',
        'getHours',
        'getMinutes',
        'getSeconds',
    ];
    var value = [];
    for (var i = 0; i < precisionLengthRecord[precision]; i++) {
        value.push(date[fields[i]]());
        if (i === 1) {
            value[1] = value[1] + 1;
        }
    }
    return value;
}
/**
 * 是否有效日期，主要处理月份对应可选日期，避免当前时间日期超出当月最后一天
 * @param value
 */
export function getValidValue(value) {
    if (value.length > 2) {
        var maxDate = new Date(value[0], value[1], 0).getDate();
        if (value[2] > maxDate) {
            value = value.slice();
            value[2] = maxDate;
        }
    }
    return value;
}
/**
 * 比较两个date是否是同一时间
 * @param date1
 * @param date2
 */
export function isEqualDate(date1, date2) {
    if (date1 instanceof Date && date2 instanceof Date) {
        return dayjs(date1).isSame(date2);
    }
    return date1 === date2;
}
