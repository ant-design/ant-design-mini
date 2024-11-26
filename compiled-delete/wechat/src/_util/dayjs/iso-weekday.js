/**
 * see https://github.com/iamkun/dayjs/blob/305f54099172ada45d10ba4c9bb5ec95e2a9d441/src/plugin/isoWeek/index.js#L37
 */
export function isoWeekday(day) {
    return day.day() || 7;
}
