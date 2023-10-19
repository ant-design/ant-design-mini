import dayjs from 'dayjs';
var localeText = {
    weekdayNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    title: 'YYYY/MM',
    today: 'Today',
    start: 'Start',
    end: 'End',
    startAndEnd: 'Start/End',
};
function demo8Formatter(cell) {
    var isOdd = dayjs(cell.time).date() % 2 === 1;
    var isNotBeginEnd = !cell.isSelectedBegin && !cell.isSelectedEnd;
    var isWeekend = dayjs(cell.time).day() > 4;
    var topClassName;
    if (isNotBeginEnd) {
        topClassName = isOdd ? 'odd' : 'even';
    }
    return {
        top: {
            className: topClassName,
            label: isOdd ? '奇数' : '偶数',
        },
        bottom: {
            label: isWeekend ? '周末' : '',
        },
    };
}
function demoFormatter(cell, value) {
    if (Array.isArray(value) && value.length == 1) {
        var current = value[0];
        return {
            disabled: dayjs(cell.time).diff(dayjs(current), 'days') > 3,
            bottom: dayjs(cell.time).diff(dayjs(current), 'days') > 3
                ? {
                    label: '不可选',
                }
                : undefined,
        };
    }
    return {};
}
Page({
    data: {
        demo1: {
            defaultValue: [Date.now(), Date.now()],
            visible: true,
        },
        demo2: {
            defaultValue: Date.now(),
            visible: true,
        },
        demo3: {
            title: dayjs(new Date().getTime()).format('YYYY年MM月'),
            monthRange: [new Date().getTime(), new Date().getTime()],
            visible: true,
        },
        demo4: {
            visible: true,
        },
        demo5: {
            visible: true,
        },
        demo6: {
            monthRange: [new Date().getTime(), new Date().getTime()],
            visible: true,
        },
        demo7: {
            localeText: localeText,
            visible: true,
            monthRange: [new Date().getTime(), new Date().getTime()],
        },
        demo8: {
            visible: true,
            monthRange: [new Date().getTime(), new Date().getTime()],
        },
        demoFormatter: demoFormatter,
        demo8Formatter: demo8Formatter,
        demo9: {
            visible: true,
            value: Date.now(),
            monthRange: [new Date().getTime(), new Date().getTime()],
        },
    },
    demo3NextMonth: function () {
        var current = this.data.demo3.monthRange[0];
        var newMonth = dayjs(current).add(1, 'month').toDate().getTime();
        this.setData({
            'demo3.title': dayjs(newMonth).format('YYYY年MM月'),
            'demo3.monthRange': [newMonth, newMonth],
        });
    },
    demo3PreviousMonth: function () {
        var current = this.data.demo3.monthRange[0];
        var newMonth = dayjs(current).add(-1, 'month').toDate().getTime();
        this.setData({
            'demo3.title': dayjs(newMonth).format('YYYY年MM月'),
            'demo3.monthRange': [newMonth, newMonth],
        });
    },
    demoFormatter: demoFormatter,
    demo8Formatter: demo8Formatter,
    demo9HandleChange: function (value) {
        this.setData({
            'demo9.value': value.detail,
        });
    },
    demo9HandlePreviousDay: function () {
        this.setData({
            'demo9.value': this.data.demo9.value - 1000 * 24 * 3600,
        });
    },
    demo9HandleNextDay: function () {
        this.setData({
            'demo9.value': this.data.demo9.value + 1000 * 24 * 3600,
        });
    },
});
