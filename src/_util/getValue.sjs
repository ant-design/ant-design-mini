function getValue(propsValue, dataValue, defaultValue, alternativeValue) {
  if (typeof propsValue !== 'undefined') {
    return propsValue;
  }
  if (typeof dataValue !== 'undefined') {
    return dataValue;
  }
  if (typeof defaultValue !== 'undefined') {
    return defaultValue;
  } 
  return alternativeValue;
}

function getPixel(size) {
  size = size + '';
  if (Number(size)) {
    return size + 'px';
  }
  return size;
}

export default { getValue, getPixel };
