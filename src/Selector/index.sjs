const getFixedValue = (value, multiple) => {
  let fixedValue;
  if (multiple) {
    fixedValue = value;
  } else {
    fixedValue = value && value.slice(0, 1);
  }

  if (fixedValue) {
    return fixedValue;
  }

  // 如果不是数组， 返回数组兜底
  return [];
};

const getIsCurItemSelected = (value, multiple, itemValue) => {
  const fixedValue = getFixedValue(value, multiple);

  return fixedValue.indexOf(itemValue) !== -1;
}


export default {
  getIsCurItemSelected,
};
