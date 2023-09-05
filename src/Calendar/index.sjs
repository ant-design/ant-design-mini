function getClassName(value) {
  const {
    isSelect,
    isBegin,
    isEnd,
    isSelectRowBegin,
    isSelectRowEnd,
    inThisMonth,
    isToday,
    disabled,
  } = value;

  const classNames = {
    ['disabled']: disabled,
    ['today']: inThisMonth && isToday,
    ['selected']: inThisMonth && isSelect,
    ['selected-begin']: inThisMonth && isBegin,
    ['selected-end']: inThisMonth && isEnd,
    ['selected-row-begin']: inThisMonth && isSelectRowBegin,
    ['selected-row-end']: inThisMonth && isSelectRowEnd,
    ['hidden']: !inThisMonth
  };

  let result = 'ant-calendar-cell';
  Object.keys(classNames).forEach((key) => {
    if (classNames[key]) {
      result += ` ant-calendar-cell-${key}`;
    }
  });
  return result;
}




function handleScroll(v) {

}

export default {
  getClassName,
  handleScroll
};
