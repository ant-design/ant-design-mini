const getWidth = (rightWidth, leftWidth, inertiaWidth) => {
  const num = (rightWidth || leftWidth) * 2 + inertiaWidth;
  const width = rightWidth > leftWidth ? rightWidth : leftWidth;
  return rightWidth && leftWidth ? `calc(100% + ${width + inertiaWidth}px)` : `calc(100% + ${num / 2}px)`;
};

const getMarginLeft = (rightWidth, leftWidth, inertiaWidth) => {
  const width = rightWidth > leftWidth ? rightWidth : leftWidth;
  return `calc(-${(width + inertiaWidth) / 2}px)`;
};

const getSlotWidthStyle = (rightWidth, leftWidth, left = [], right = [], inertiaWidth) => {
  // 右
  if (right.length > 0 && left.length === 0) {
    return `calc(100% - ${(1 + inertiaWidth) / 2}px)`;
  }
  // 左
  if (left.length > 0 && right.length === 0) {
    return { width : `calc(100% - ${(leftWidth) / 2}px)`, marginLeft: (leftWidth + inertiaWidth) / 2 + 'px' };
  }
  if (left.length > 0 && right.length > 0) {
    return { width : `100%`, marginLeft: `0` };
  }
};
const getLeft = (tapType, idx, right, isLeft) => {
  const tip = !isLeft ? 'L-' : 'R-';
  if (right.length === 1) {
    return tapType && tapType === `${tip}${idx}` ? 'text-move-midd' : '';
  }
  if (right.length === 3 && idx === 1) {
    return tapType && tapType === `${tip}${idx}` ? 'text-move-midd' : '';
  }
  let cls = '';
  if (idx === 0) {
    cls = isLeft ? 'text-move-left' : 'text-move-right';
  } else {
    cls = isLeft ? 'text-move-right' : 'text-move-left';
  }
  return tapType && tapType === `${tip}${idx}` ? cls : '';
}

const getWidth2 = (rightWidth, leftWidth, inertiaWidth) => {
  const width = rightWidth > leftWidth ? rightWidth : leftWidth;
  return rightWidth && leftWidth ? `calc(100% - ${width + inertiaWidth}px)` : `calc(100% - ${(width + inertiaWidth) / 2}px)`;
};
const getMarginLeft2 = (rightWidth, leftWidth, inertiaWidth) => {
  const num = rightWidth > 0 ? inertiaWidth : 0;
  const width = rightWidth > leftWidth ? rightWidth : leftWidth;
  return leftWidth && rightWidth ? `${(width + num) / 2}px` : (leftWidth > 0 ? 0 : `${(width + inertiaWidth) / 2}px`);
};
const getMarginLeft3 = (rightWidth, leftWidth, inertiaWidth) => {
  const width = rightWidth > leftWidth ? rightWidth : leftWidth;
  return leftWidth && rightWidth ? `calc(100% - ${(width + inertiaWidth) / 2}px)` : `calc(100% - ${(rightWidth) / 2 - 1}px)`;
};
const getMoveX = (rightButtons, idx) => {
  const arr = rightButtons.slice(idx, rightButtons.length);
  return arr.reduce((tolal, cur) => { return parseFloat(tolal) + cur.width }, 0);
};


export default {
  getWidth2,
  getMarginLeft2,
  getMarginLeft3,
  getLeft,
  getWidth,
  getSlotWidthStyle,
  getMarginLeft,
  getMoveX,
};