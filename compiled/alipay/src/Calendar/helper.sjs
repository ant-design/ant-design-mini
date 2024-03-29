function keys(obj) {
  if (typeof Object.keys === 'function') {
    return Object.keys(obj);
  }
}
function getClassName(value, index) {
  var isSelected = value.isSelected,
    isSelectedBegin = value.isSelectedBegin,
    isSelectedEnd = value.isSelectedEnd,
    isRowBegin = value.isRowBegin,
    isRowEnd = value.isRowEnd,
    inThisMonth = value.inThisMonth,
    isToday = value.isToday,
    disabled = value.disabled;
  var classNames = {
    disabled: disabled,
    today: inThisMonth && isToday,
    selected: inThisMonth && isSelected,
    'selected-begin': inThisMonth && isSelectedBegin,
    'selected-end': inThisMonth && isSelectedEnd,
    'selected-row-begin': inThisMonth && isRowBegin && isSelected,
    'selected-row-end': inThisMonth && isRowEnd && isSelected,
    hidden: !inThisMonth,
    'row-end': index % 7 === 6
  };
  var result = 'ant-calendar-cell';
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
export default {
  getSpaceClassName: getSpaceClassName,
  getClassName: getClassName,
  getMarkCellClassName: getMarkCellClassName
};