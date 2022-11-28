function getClassName(checked, disabled) {
  if (!checked && !disabled) {
    return 'icon';
  }
  if (checked && !disabled) {
    return 'checkedIcon';
  }
  if (!checked && disabled) {
    return 'disbaledIcon';
  }
  if (checked && disabled) {
    return 'disabledCheckedIcon';
  }
}

function getChecked(index, options, value) {
  if (options[index].value === value) {
    return true;
  };
  return false;
}

export default { getClassName, getChecked };
