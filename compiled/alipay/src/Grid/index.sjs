function checkNeedVerticalSpace(count, index, columns) {
  if (count % columns === 0) {
    return index < count - columns;
  } else {
    return index < columns * Math.floor(count / columns);
  }
}
function checkShowSplitLine(index, count, columns, mode, showDivider) {
  if (!showDivider) {
    return false;
  }
  if (index === count - 1) {
    return false;
  }
  if (mode === 'default') {
    if ((index + 1) % columns === 0) {
      return false;
    }
  }
  return true;
}
export default {
  checkNeedVerticalSpace,
  checkShowSplitLine,
};
