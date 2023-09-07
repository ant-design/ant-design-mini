function getClassName(value) {
  const {
    isSelect,
    isBegin,
    isEnd,
    isRowBegin,
    isRowEnd,
    inThisMonth,
    isToday,
    disabled,
  } = value;

  const classNames = {
    disabled: disabled,
    today: inThisMonth && isToday,
    selected: inThisMonth && isSelect,
    'selected-begin': inThisMonth && isBegin,
    'selected-end': inThisMonth && isEnd,
    'selected-row-begin': inThisMonth && isRowBegin && isSelect,
    'selected-row-end': inThisMonth && isRowEnd && isSelect,
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
