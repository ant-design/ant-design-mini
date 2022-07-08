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
function checkShowSplitLine(count, index, columns) {
  if (columns == 3) {
    if ((index + 1) % 3 === 0) {
      return false;
    }
    return true;
  }
  return false;
}
export default {
  checkNeedVerticalSpace,
  getTitleSize,
  checkShowSplitLine,
};
