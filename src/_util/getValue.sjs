function getValue(controlled, hasChange, propsValue, dataValue, defaultPropsValue) {
  if (controlled) {
    if (hasChange) {
      return propsValue;
    }
    if (typeof propsValue === 'undefined') {
      return defaultPropsValue;
    }
    return propsValue;
  }
  if (hasChange) {
    return dataValue;
  }
  if (typeof dataValue === 'undefined') {
    return defaultPropsValue;
  }
  return dataValue;
}

function getPixel(size) {
  size = size + '';
  if (Number(size)) {
    return size + 'px';
  }
  return size;
}

export default { getValue, getPixel };
