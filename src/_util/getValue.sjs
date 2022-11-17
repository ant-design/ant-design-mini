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

export default { getValue };
