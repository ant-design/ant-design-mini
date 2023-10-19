declare function getRegExp(reg: string, mode: string): any;

function keys(obj) {
  /// #if ALIPAY

  if (typeof Object.keys === 'function') {
    return Object.keys(obj);
  }
  /// #endif

  /// #if WECHAT
  return JSON.stringify(obj)
    .replace(getRegExp('{|}|"', 'g'), '')
    .split(',')
    .map(function (item) {
      return item.split(':')[0];
    });
  /// #endif
}

function getClassName(value, index) {
  const {
    isSelected,
    isSelectedBegin,
    isSelectedEnd,
    isRowBegin,
    isRowEnd,
    inThisMonth,
    isToday,
    disabled,
  } = value;

  const classNames = {
    disabled: disabled,
    today: inThisMonth && isToday,
    selected: inThisMonth && isSelected,
    'selected-begin': inThisMonth && isSelectedBegin,
    'selected-end': inThisMonth && isSelectedEnd,
    'selected-row-begin': inThisMonth && isRowBegin && isSelected,
    'selected-row-end': inThisMonth && isRowEnd && isSelected,
    hidden: !inThisMonth,
    'row-end': index % 7 === 6,
  };

  let result = 'ant-calendar-cell';
  keys(classNames).forEach((key) => {
    if (classNames[key]) {
      result += ` ant-calendar-cell-${key}`;
    }
  });
  return result;
}

function getSpaceClassName(index, items) {
  const isNotEnd = index % 7 !== 6;
  const nextItem = items[index + 1];
  const nextSelected = nextItem && nextItem.isSelected && nextItem.inThisMonth;
  const isSelected = items[index].isSelected;

  const classNames = {
    active: isNotEnd && isSelected && nextSelected,
  };
  let result = 'ant-calendar-cell-space';
  keys(classNames).forEach((key) => {
    if (classNames[key]) {
      result += ` ant-calendar-cell-space-${key}`;
    }
  });
  return result;
}

function getMarkCellClassName(index, items) {
  if (items[index].length - 1 === index) {
    return `ant-calendar-mark-cell ant-calendar-mark-cell-last`;
  }
  return 'ant-calendar-mark-cell';
}

export default {
  getSpaceClassName,
  getClassName,
  getMarkCellClassName,
};
