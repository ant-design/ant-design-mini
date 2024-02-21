function isControlled(controlled, value) {
  const isPropsControlled = hasValue(controlled);
  const hasPropsValue = hasValue(value);
  const isControlledOrHasValue = isPropsControlled
    ? !!controlled
    : hasPropsValue;
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

export default { isControlled, hasValue, getValue };
