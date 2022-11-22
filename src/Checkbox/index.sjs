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

function getChecked(item, value) {
  return (value || []).indexOf(item.value) > -1;
}

export default { getClassName, getChecked };
