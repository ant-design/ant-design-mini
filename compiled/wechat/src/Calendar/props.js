import { defaultMonthRange } from './utils';
export var CalendarDefaultProps = {
    defaultValue: null,
    value: null,
    selectionMode: 'range',
    monthRange: defaultMonthRange(),
    weekStartsOn: 'Sunday',
    onFormatter: null,
    onMonthFormatter: null,
    changedScrollIntoView: null,
    showSelectableDatesOnly: false,
    onChange: function () { },
};
