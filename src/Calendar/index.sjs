function getClassName(value) {
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
  };

  let result = 'ant-calendar-cell';
  Object.keys(classNames).forEach((key) => {
    if (classNames[key]) {
      result += ` ant-calendar-cell-${key}`;
    }
  });
  return result;
}

export default {
  getClassName,
};
