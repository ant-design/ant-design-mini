function keys(obj) {
  if (typeof Object.keys === 'function') {
    return Object.keys(obj);
  }
}
function getClassName(value, index, showSelectableDatesOnly) {
  var isSelected = value.isSelected,
    isSelectedBegin = value.isSelectedBegin,
    isSelectedEnd = value.isSelectedEnd,
    isRowBegin = value.isRowBegin,
    isRowEnd = value.isRowEnd,
    inThisMonth = value.inThisMonth,
    isToday = value.isToday,
    disabled = value.disabled,
    className = value.className,
    isRange = value.isRange;
  var classNames = {
    disabled: disabled,
    today: inThisMonth && isToday,
    selected: inThisMonth && isSelected,
    'selected-begin': inThisMonth && isSelectedBegin,
    'selected-end': inThisMonth && isSelectedEnd,
    'selected-row-begin': inThisMonth && isRowBegin && isSelected,
    'selected-row-end': inThisMonth && isRowEnd && isSelected,
    hidden: !inThisMonth || showSelectableDatesOnly && !isRange,
    'row-end': index % 7 === 6
  };
  var result = "ant-calendar-cell ".concat(className || '');
  keys(classNames).forEach(function (key) {
    if (classNames[key]) {
      result += " ant-calendar-cell-".concat(key);
    }
  });
  return result;
}
function getSpaceClassName(index, items) {
  var isNotEnd = index % 7 !== 6;
  var nextItem = items[index + 1];
  var nextSelected = nextItem && nextItem.isSelected && nextItem.inThisMonth;
  var isSelected = items[index].isSelected;
  var classNames = {
    active: isNotEnd && isSelected && nextSelected
  };
  var result = 'ant-calendar-cell-space';
  keys(classNames).forEach(function (key) {
    if (classNames[key]) {
      result += " ant-calendar-cell-space-".concat(key);
    }
  });
  return result;
}
function getMarkCellClassName(index, items) {
  if (items[index].length - 1 === index) {
    return "ant-calendar-mark-cell ant-calendar-mark-cell-last";
  }
  return 'ant-calendar-mark-cell';
}
function isDisplay(index, items) {
  // 找到需要当前月需要展示的日期最大最小索引
  var _items_reduce = items.reduce(function (res, item) {
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
  }, {
    minIndex: null,
    maxIndex: null
  });
  if (_items_reduce.maxIndex === null || _items_reduce.maxIndex === null) return true;
  return index >= Math.floor(_items_reduce.minIndex / 7) * 7 && index < Math.ceil(_items_reduce.maxIndex / 7) * 7;
}
export default {
  getSpaceClassName: getSpaceClassName,
  getClassName: getClassName,
  getMarkCellClassName: getMarkCellClassName,
  isDisplay: isDisplay
};