import dayjs from 'dayjs';
import { isoWeekday } from '../_util/dayjs/iso-weekday';
export function getMonthListFromRange(start, end) {
    if (start.isAfter(end))
        throw new Error("Start time can't be later than end time.");
    var result = [];
    var current = start.date(1);
    while (!current.isAfter(end)) {
        result.push(current.date(1));
        current = current.add(1, 'month');
    }
    return result;
}
export function defaultMonthRange() {
    var start = dayjs().startOf('date');
    var end = dayjs().startOf('date').add(2, 'month');
    return [start.toDate().getTime(), end.toDate().getTime()];
}
/**
 *
 * @param month 月份的某一天
 * @param weekStartsOn 日历以星期几开始
 * @returns 获取当月日历所有的日子
 */
export function getDate(month, weekStartsOn) {
    var startOfMonth = month.date(1);
    var cells = [];
    var iterator = startOfMonth
        .subtract(isoWeekday(startOfMonth) % 7, 'day')
        .startOf('day');
    if (weekStartsOn === 'Monday') {
        iterator = iterator.add(1, 'day');
        if (iterator.isSame(startOfMonth, 'month') &&
            !iterator.isSame(startOfMonth.startOf('date'), 'date')) {
            iterator = iterator.add(-7, 'days');
        }
    }
    var diffDay = startOfMonth.date(1).add(1, 'month').diff(iterator, 'day');
    var lintCount = Math.ceil(diffDay / 7);
    while (cells.length < lintCount * 7) {
        cells.push(iterator);
        iterator = iterator.add(1, 'day');
    }
    return cells;
}
export function renderCells(cellsMonth, weekStartsOn, value, localeText) {
    var _a;
    var rowBeginDay = 0;
    var rowEndDay = 6;
    if (weekStartsOn === 'Monday') {
        rowBeginDay = 1;
        rowEndDay = 0;
    }
    var dates = getDate(cellsMonth, weekStartsOn);
    if (!value) {
        return dates.map(function (d) {
            var isToday = dayjs().isSame(d, 'day');
            var isRowBegin = d.isSame(cellsMonth.startOf('month'), 'date') ||
                d.day() === rowBeginDay;
            var isRowEnd = d.isSame(cellsMonth.endOf('month'), 'date') || d.day() === rowEndDay;
            var top;
            if (isToday) {
                top = {
                    label: localeText.today,
                };
            }
            return {
                disabled: false,
                time: d.toDate().getTime(),
                date: d.get('date'),
                isSelected: false,
                isSelectedBegin: false,
                top: top,
                isSelectedEnd: false,
                inThisMonth: d.month() === cellsMonth.month(),
                isRowBegin: isRowBegin,
                isRowEnd: isRowEnd,
            };
        });
    }
    var selectBegin;
    var selectEnd;
    if (Array.isArray(value)) {
        selectBegin = dayjs(value[0]);
        selectEnd = dayjs((_a = value[1]) !== null && _a !== void 0 ? _a : value[0]);
    }
    else {
        selectBegin = dayjs(value);
        selectEnd = dayjs(value);
    }
    return dates.map(function (d) {
        var isToday = dayjs().isSame(d, 'day');
        var isRowBegin = d.isSame(cellsMonth.startOf('month'), 'date') || d.day() === rowBeginDay;
        var isRowEnd = d.isSame(cellsMonth.endOf('month'), 'date') || d.day() === rowEndDay;
        var isSelectedBegin = selectBegin.isSame(d, 'day');
        var isSelectedEnd = selectEnd.isSame(d, 'day');
        var isSelected = (!!selectBegin.isBefore(d, 'day') && !!selectEnd.isAfter(d, 'day')) ||
            isSelectedBegin ||
            isSelectedEnd;
        var inThisMonth = d.month() === cellsMonth.month();
        var time = d.toDate().getTime();
        var topLabel = isToday ? localeText.today : '';
        if (Array.isArray(value)) {
            if (isSelectedBegin) {
                if (isSelectedEnd && value.length === 2) {
                    topLabel = localeText.startAndEnd;
                }
                else {
                    topLabel = localeText.start;
                }
            }
            else {
                if (isSelectedEnd) {
                    topLabel = localeText.end;
                }
            }
        }
        return {
            disabled: false,
            time: time,
            date: d.get('date'),
            isSelected: isSelected,
            isSelectedBegin: isSelectedBegin,
            top: { label: topLabel },
            isSelectedEnd: isSelectedEnd,
            inThisMonth: inThisMonth,
            isRowBegin: isRowBegin,
            isRowEnd: isRowEnd,
        };
    });
}
export function getSelectionModeFromValue(value) {
    if (Array.isArray(value)) {
        return 'range';
    }
    if (typeof value === 'number') {
        return 'single';
    }
    return null;
}
// 获取滚动视图的元素id
export function getScrollIntoViewId(value) {
    // 已选中时间滚动到可视区域内（微信不支持id为数字开头）
    return "id_".concat(value &&
        dayjs(Array.isArray(value) ? value[0] : value)
            .startOf('d')
            .subtract(7, 'd') // 需要定位的地方往前推7天，让已选中时间定位到中间位置
            .toDate()
            .getTime());
}
