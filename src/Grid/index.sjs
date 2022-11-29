function checkNeedVerticalSpace(count, index, columns) {
  if (count % columns === 0) {
    return index < count - columns;
  } else {
    return index < columns * Math.floor(count / columns);
  }
}

function getTitleSize(columns) {
  if (columns === 2) {
    return 'large';
  }
  if (columns === 3) {
    return 'middle';
  }
  return 'small';
}
function checkShowSplitLine(index, count, columns, mode, showSplitLine) {
  if (!showSplitLine) {
    return false;
  }
  if (index === count - 1) {
    return false;
  }
  if (mode === 'tile') {
    if ((index + 1) % columns === 0) {
      return false;
    }
  }
  return true;
}
export default {
  checkNeedVerticalSpace,
  getTitleSize,
  checkShowSplitLine,
};
