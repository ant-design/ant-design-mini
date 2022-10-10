const getWidth = (rightWidth, leftWidth) => {
  const num = (rightWidth || leftWidth) * 2;
  const width = rightWidth > leftWidth ? rightWidth : leftWidth;
  return rightWidth && leftWidth ? `calc(100% + ${width * 2}rpx)` : `calc(100% + ${num}rpx)`;
};

const getMarginLeft = (rightWidth, leftWidth) => {
  const width = rightWidth > leftWidth ? rightWidth : leftWidth;
  return `calc(-${width}rpx)`;
};

const getSlotWidthStyle = (rightWidth, leftWidth, left = [], right = []) => {
  // 只要左滑
  if (right.length > 0 && left.length === 0) {
    return `calc(100% - ${1}rpx)`;
  }
  // 只要右滑
  if (left.length > 0 && right.length === 0) {
    return { width : `calc(100% - ${leftWidth}rpx)`, marginLeft: `${leftWidth}rpx` };
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

const getWidth2 = (rightWidth, leftWidth) => {
  const width = rightWidth > leftWidth ? rightWidth : leftWidth;
  return rightWidth && leftWidth ? `calc(100% - ${2 * width}rpx)` : `calc(100% - ${leftWidth || rightWidth}rpx)`;
};
const getMarginLeft2 = (rightWidth, leftWidth) => {
  return leftWidth && rightWidth ? `${leftWidth}rpx` : `${rightWidth}rpx`;
};
const getMarginLeft3 = (rightWidth, leftWidth) => {
  const width = rightWidth > leftWidth ? rightWidth : leftWidth;
  return leftWidth && rightWidth ? `calc(100% - ${width - 1}rpx)` : `calc(100% - ${rightWidth - 1}rpx)`;
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
