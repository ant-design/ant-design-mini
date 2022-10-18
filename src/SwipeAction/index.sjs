const getWidth = (rightWidth, leftWidth, inertiaWidth) => {
  const num = (rightWidth || leftWidth) * 2 + inertiaWidth;
  const width = rightWidth > leftWidth ? rightWidth : leftWidth;
  return rightWidth && leftWidth ? `calc(100% + ${width * 2 + inertiaWidth * 2}rpx)` : `calc(100% + ${num}rpx)`;
};

const getMarginLeft = (rightWidth, leftWidth, inertiaWidth) => {
  const width = rightWidth > leftWidth ? rightWidth : leftWidth;
  return `calc(-${width + inertiaWidth}rpx)`;
};

const getSlotWidthStyle = (rightWidth, leftWidth, left = [], right = [], inertiaWidth) => {
  // 只要左滑
  if (right.length > 0 && left.length === 0) {
    return `calc(100% - ${1 + inertiaWidth}rpx)`;
  }
  // 只要右滑
  if (left.length > 0 && right.length === 0) {
    return { width : `calc(100% - ${leftWidth + inertiaWidth}rpx)`, marginLeft: `${leftWidth + inertiaWidth}rpx` };
  }
  if (left.length > 0 && right.length > 0) {
    return { width : `100%`, marginLeft: `0` };
  }
};
const getLeft = (tapType, item, idx, right, isLeft) => {
  if (right.length === 1) {
    return tapType && tapType === item.type ? 'text-move-midd' : '';
  }
  if (right.length === 3 && idx === 1) {
    return tapType && tapType === item.type ? 'text-move-midd' : '';
  }
  let cls = '';
  if (idx === 0) {
    cls = isLeft ? 'text-move-left' : 'text-move-right';
  } else {
    cls = isLeft ? 'text-move-right' : 'text-move-left';
  }
  return tapType && tapType === item.type ? cls : '';
}

const getWidth2 = (rightWidth, leftWidth, inertiaWidth) => {
  const width = rightWidth > leftWidth ? rightWidth : leftWidth;
  return rightWidth && leftWidth ? `calc(100% - ${2 * width + inertiaWidth * 2}rpx)` : `calc(100% - ${(leftWidth || rightWidth) + inertiaWidth}rpx)`;
};
const getMarginLeft2 = (rightWidth, leftWidth, inertiaWidth) => {
  const num = rightWidth > 0 ? inertiaWidth : 0;
  return leftWidth && rightWidth ? `${leftWidth + num}rpx` : `${rightWidth + num}rpx`;
};
const getMarginLeft3 = (rightWidth, leftWidth, inertiaWidth) => {
  const width = rightWidth > leftWidth ? rightWidth : leftWidth;
  return leftWidth && rightWidth ? `calc(100% - ${width - 1 + inertiaWidth}rpx)` : `calc(100% - ${rightWidth - 1}rpx)`;
};


export default {
  getWidth2,
  getMarginLeft2,
  getMarginLeft3,
  getLeft,
  getWidth,
  getSlotWidthStyle,
  getMarginLeft,
};
