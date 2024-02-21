function isControlled(controlled, value) {
  var isPropsControlled = hasValue(controlled);
  var hasPropsValue = hasValue(value);
  var isControlledOrHasValue = isPropsControlled ? !!controlled : hasPropsValue;
  return isControlledOrHasValue;
}
function hasValue(value) {
  return value !== null && value !== undefined;
}
function getValue(controlled, value, defaultValue, _value, _valueModified) {
  if (!isControlled(controlled, value)) {
    if (_valueModified) {
      return _value;
    }
  }
  if (hasValue(value)) {
    return value;
  } else {
    return defaultValue;
  }
}
export default {
  isControlled: isControlled,
  hasValue: hasValue,
  getValue: getValue
};