import { defaultMonthRange } from './utils';
export var CalendarDefaultProps = {
    defaultValue: null,
    value: null,
    selectionMode: 'range',
    monthRange: defaultMonthRange(),
    weekStartsOn: 'Sunday',
    localeText: undefined,
    onFormatter: null,
    onMonthFormatter: null,
    changedScrollIntoView: null,
    showSelectableDatesOnly: false,
};
