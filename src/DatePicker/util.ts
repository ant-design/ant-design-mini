import dayjs, { Dayjs } from 'dayjs';

function getArray(start, end, suffix) {
  const res = [];
  for (let i = 0; i < end - start + 1; i++) {
    res.push({ label: start + i + suffix, value: start + i });
  }
  return res;
}

const precisionLengthRecord = {
  year: 1,
  month: 2,
  day: 3,
  hour: 4,
  minute: 5,
  second: 6,
};

function getYears(min: Dayjs, max: Dayjs) {
  return getArray(min.year(), max.year(), '年');
}

function getMonths(min: Dayjs, max: Dayjs, currentPicker: Dayjs) {
  let start = 1;
  let end = 12;
  if (
    currentPicker
      .clone()
      .set('month', start - 1)
      .isBefore(min)
  ) {
    start = min.month() + 1;
  }
  if (
    currentPicker
      .clone()
      .set('month', end - 1)
      .isAfter(max)
  ) {
    end = max.month() + 1;
  }

  return getArray(start, end, '月');
}

function getDates(min: Dayjs, max: Dayjs, currentPicker: Dayjs) {
  let start = 1;
  let end = currentPicker.daysInMonth();
  if (currentPicker.clone().set('date', start).isBefore(min)) {
    start = min.date();
  }
  if (currentPicker.clone().set('date', end).isAfter(max)) {
    end = max.date();
  }
  return getArray(start, end, '日');
}

function getHours(min: Dayjs, max: Dayjs, currentPicker: Dayjs) {
  let start = 0;
  let end = 23;
  if (currentPicker.clone().set('hour', start).isBefore(min)) {
    start = min.hour();
  }
  if (currentPicker.clone().set('hour', end).isAfter(max)) {
    end = max.hour();
  }
  return getArray(start, end, '时');
}
function getMinutes(min: Dayjs, max: Dayjs, currentPicker: Dayjs) {
  let start = 0;
  let end = 59;
  if (currentPicker.clone().set('minute', start).isBefore(min)) {
    start = min.minute();
  }
  if (currentPicker.clone().set('minute', end).isAfter(max)) {
    end = max.minute();
  }
  return getArray(start, end, '分');
}
function getSeconds(min: Dayjs, max: Dayjs, currentPicker: Dayjs) {
  let start = 0;
  let end = 59;
  if (currentPicker.clone().set('second', start).isBefore(min)) {
    start = min.second();
  }
  if (currentPicker.clone().set('second', end).isAfter(max)) {
    end = max.second();
  }
  return getArray(start, end, '秒');
}
export function getRangeData(
  precision: keyof typeof precisionLengthRecord,
  min: Dayjs,
  max: Dayjs,
  currentPickerDay: Dayjs
) {
  const data = [];
  const len = precisionLengthRecord[precision];
  if (!len) return [];
  for (let i = 0; i < len; i++) {
    switch (i) {
      case 0:
        data.push(getYears(min, max));
        break;
      case 1:
        data.push(getMonths(min, max, currentPickerDay));
        break;
      case 2:
        data.push(getDates(min, max, currentPickerDay));
        break;
      case 3:
        data.push(getHours(min, max, currentPickerDay));
        break;
      case 4:
        data.push(getMinutes(min, max, currentPickerDay));
        break;
      case 5:
        data.push(getSeconds(min, max, currentPickerDay));
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
  return new Date(...value.map((v, i) => String(i === 1 ? v - 1 : v)));
}

/**
 * date转换为value数组
 * @param value
 * @returns
 */
export function getValueByDate(
  date,
  precision: keyof typeof precisionLengthRecord
) {
  const fields = [
    'getFullYear',
    'getMonth',
    'getDate',
    'getHours',
    'getMinutes',
    'getSeconds',
  ];
  const value = [];
  for (let i = 0; i < precisionLengthRecord[precision]; i++) {
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
    const maxDate = new Date(value[0], value[1], 0).getDate();
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
