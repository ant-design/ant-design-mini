function getValue(propsValue, dataValue, defaultValue) {
  if (typeof propsValue !== 'undefined') {
    return propsValue;
  }
  if (typeof dataValue !== 'undefined') {
    return dataValue;
  }
  return defaultValue;
}

export default { getValue };
