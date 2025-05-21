declare function getRegExp(reg: string, mode: string): any;

function keys(obj) {
  /// #if ALIPAY || ALIPAYNATIVE

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

function getClassName(value, index, showSelectableDatesOnly) {
  const {
    isSelected,
    isSelectedBegin,
    isSelectedEnd,
    isRowBegin,
    isRowEnd,
    inThisMonth,
    isToday,
    disabled,
    className,
    isRange,
  } = value;

  const classNames = {
    disabled: disabled,
    today: inThisMonth && isToday,
    selected: inThisMonth && isSelected,
    'selected-begin': inThisMonth && isSelectedBegin,
    'selected-end': inThisMonth && isSelectedEnd,
    'selected-row-begin': inThisMonth && isRowBegin && isSelected,
    'selected-row-end': inThisMonth && isRowEnd && isSelected,
    hidden: !inThisMonth || (showSelectableDatesOnly && !isRange),
    'row-end': index % 7 === 6,
  };

  let result = `ant-calendar-cell ${className || ''}`;
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

function isDisplay(index, items) {
  // 找到需要当前月需要展示的日期最大最小索引
  const _items_reduce = items.reduce(
    (res, item) => {
      // !item.inThisMonth 被隐藏掉的日期
      // !item.isRange 不在传入范围内的日期
      if (!(!item.inThisMonth || !item.isRange)) {
        if (res.minIndex === null || res.maxIndex === null) {
          res.minIndex = item.index;
          res.maxIndex = item.index;
        }
        res.minIndex = Math.min(res.minIndex, item.index);
        res.maxIndex = Math.max(res.maxIndex, item.index);
      }
      return res;
    },
    { minIndex: null, maxIndex: null }
  );

  if (_items_reduce.maxIndex === null || _items_reduce.maxIndex === null)
    return true;
  return (
    index >= Math.floor(_items_reduce.minIndex / 7) * 7 &&
    index <= Math.ceil(_items_reduce.maxIndex / 7) * 7
  );
}

export default {
  getSpaceClassName,
  getClassName,
  getMarkCellClassName,
  isDisplay,
};
