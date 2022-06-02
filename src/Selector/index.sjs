const getFixedValue = (value, multiple) => {
  let fixedValue = [];
  if (value === null) {
    fixedValue = []
  } else if (multiple && value.constructor === 'Array') {
    fixedValue = value
  } else if (!(value.constructor === 'Array')) {
    fixedValue =  [value]
  }
  return fixedValue;
};

const getIsCurItemSelected = (value, multiple, itemValue) => {
  const fixedValue = getFixedValue(value, multiple);

  return fixedValue.indexOf(itemValue) !== -1;
}


export default {
  getIsCurItemSelected,
};
