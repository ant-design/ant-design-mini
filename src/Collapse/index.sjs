function isActive(current, index, disabled) {
  if (disabled) {
    return false;
  }
  return (current || []).indexOf(index) >= 0;
}

function getStyleHeight(index, contentHeight, disabled) {
  if (disabled) {
    return 'height: 0px';
  }
  const height = contentHeight[index];
  if (height === '') {
    return '';
  }
  if (height) {
    return `height: ${height}`;
  }
  return 'height: 0px';
}

function getValue(value, selfValue, defaultValue) {
  if (typeof value !== 'undefined') {
    return value;
  }
  if (typeof selfValue !== 'undefined') {
    return selfValue;
  }
  return defaultValue || [];
}

export default { isActive, getStyleHeight, getValue };
