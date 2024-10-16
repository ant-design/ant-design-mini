import { defaultMonthRange } from './utils';
export var defaultLocaleText = {
    weekdayNames: ['一', '二', '三', '四', '五', '六', '日'],
    title: 'YYYY年MM月',
    today: '今日',
    start: '开始',
    end: '结束',
    startAndEnd: '开始/结束',
};
export var CalendarDefaultProps = {
    defaultValue: null,
    value: null,
    selectionMode: 'range',
    monthRange: defaultMonthRange(),
    weekStartsOn: 'Sunday',
    localeText: defaultLocaleText,
    onFormatter: null,
    onMonthFormatter: null,
    changedScrollIntoView: null,
    showSelectableDatesOnly: false,
};
