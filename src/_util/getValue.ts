export function getValue(controlled, hasChange, propsValue, dataValue, defaultPropsValue) {
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
