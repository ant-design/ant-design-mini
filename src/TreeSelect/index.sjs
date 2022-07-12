const getItemClassNameByData = (selected, levelIndex, option) => {
  if (option.disabled) {
    return 'amd-tree-select-level-item-disabled';
  }

  if (option.value === selected[levelIndex]) {
    return 'amd-tree-select-level-item-selected';
  }

  return 'amd-tree-select-level-item';
};

export default {
  getItemClassNameByData,
};
