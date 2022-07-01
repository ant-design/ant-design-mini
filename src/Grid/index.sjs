function checkNeedVerticalSpace(count, index, columns) {
  return index < count - columns + (count % columns);
}

export default {
  checkNeedVerticalSpace,
};
