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
  const result = options.find(item => item.value === value);
  if (!result && index === 0) {
    return true;
  }
  return false;
}


export default { getClassName, getChecked };
