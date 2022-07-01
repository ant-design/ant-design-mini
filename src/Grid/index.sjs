function checkNeedVerticalSpace(count, index, columns) {
  if (count % columns === 0) {
    return index < count - columns;
  } else {
    return index < columns * Math.floor(count / columns);
  }
}

export default {
  checkNeedVerticalSpace,
};
