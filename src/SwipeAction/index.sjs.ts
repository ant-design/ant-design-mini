const getWidth = (rightWidth, leftWidth, inertiaWidth) => {
  const num = (rightWidth || leftWidth) * 2 + inertiaWidth;
  const width = rightWidth > leftWidth ? rightWidth : leftWidth;
  return rightWidth && leftWidth
    ? `calc(100% + ${width + inertiaWidth}px)`
    : `calc(100% + ${num / 2}px)`;
};

const getMarginLeft = (rightWidth, leftWidth, inertiaWidth) => {
  const width = rightWidth > leftWidth ? rightWidth : leftWidth;
  return `calc(-${(width + inertiaWidth) / 2}px)`;
};

const getSlotWidthStyle = (
  rightWidth,
  leftWidth,
  left = [],
  right = [],
  inertiaWidth
) => {
  // 右
  if (right.length > 0 && left.length === 0) {
    return `calc(100% - ${(1 + inertiaWidth) / 2}px)`;
  }
  // 左
  if (left.length > 0 && right.length === 0) {
    return `width: calc(100% - ${leftWidth / 2}px); margin-left: ${
      (leftWidth + inertiaWidth) / 2
    }px;`;
  }
  if (left.length > 0 && right.length > 0) {
    return `width: 100%;margin-left: 0;`;
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
};

const getWidth2 = (rightWidth, leftWidth, inertiaWidth) => {
  const width = rightWidth > leftWidth ? rightWidth : leftWidth;
  return rightWidth && leftWidth
    ? `calc(100% - ${width + inertiaWidth}px)`
    : `calc(100% - ${(width + inertiaWidth) / 2}px)`;
};
const getMarginLeft2 = (rightWidth, leftWidth, inertiaWidth) => {
  const num = rightWidth > 0 ? inertiaWidth : 0;
  const width = rightWidth > leftWidth ? rightWidth : leftWidth;
  return leftWidth && rightWidth
    ? `${(width + num) / 2}px`
    : leftWidth > 0
    ? 0
    : `${(width + inertiaWidth) / 2}px`;
};
const getMarginLeft3 = (rightWidth, leftWidth, inertiaWidth) => {
  const width = rightWidth > leftWidth ? rightWidth : leftWidth;
  return leftWidth && rightWidth
    ? `calc(100% - ${(width + inertiaWidth) / 2}px)`
    : `calc(100% - ${rightWidth / 2 - 1}px)`;
};
const getMoveX = (rightButtons, idx) => {
  const arr = rightButtons.slice(idx, rightButtons.length);
  return arr.reduce((tolal, cur) => {
    return parseFloat(tolal) + cur.width;
  }, 0);
};

const getMovableContentRightStyle = (
  item,
  tapTypeR,
  idx,
  rightWidth,
  inTouch,
  inertiaWidth,
  myStyle
) => {
  const isTapTypeR = tapTypeR && tapTypeR === `R-${idx}`;
  const myStyleString = isTapTypeR ? styleObjectToString(myStyle) : '';

  return `
  font-size: ${(item.fontSize || 28) / 2}px;
  color: ${item.color};
  background: ${item.bgColor};
  height: calc(100% + 2px);
  ${
    isTapTypeR
      ? `width: ${
          (rightWidth +
            1 +
            (item.confirmType === 'move' && inTouch ? inertiaWidth : 0)) /
          2
        }px;`
      : `width: ${item.width / 2}px;`
  }
  ${myStyleString}`;
};

const styleKeyMap = {
  'marginRight': 'margin-right',
  'marginLeft': 'margin-left',
  'fontSize': 'font-size',
  zIndex: 'z-index',
};

function styleObjectToString(myStyle) {
  const styleKeys = keys(myStyle);
  let res = '';
  for (let i = 0; i < styleKeys.length; i++) {
    const key = styleKeys[i];
    res = res + `${styleKeyMap[key] || key}: ${myStyle[key]}; `;
  }
  return res;
}

const getMovableContentLeftStyle = (
  itemL,
  tapTypeL,
  idx,
  leftWidth,
  inTouch,
  inertiaWidth,
  myStyle
) => {
  const isTapTypeL = tapTypeL && tapTypeL === `L-${idx}`;
  const myStyleString = isTapTypeL ? styleObjectToString(myStyle) : '';
  return `
  background: ${itemL.bgColor};
  height: calc(100% + 2px);
  font-size: ${(itemL.fontSize || 28) / 2}px;
  color: ${itemL.color};
  ${
    isTapTypeL
      ? `width: ${
          (leftWidth +
            1 +
            (itemL.confirmType === 'move' && inTouch ? inertiaWidth : 0)) /
          2
        }px;`
      : `width: ${itemL.width / 2}px;`
  }
  ${myStyleString}`;
};

const getLeftSlotName = (tapTypeL, idx, itemL) => {
  if (!itemL.slotName) {
    return '';
  }
  return tapTypeL && tapTypeL === `L-${idx}`
    ? `${itemL.slotName}-confirm`
    : itemL.slotName;
};

const getRightSlotName = (tapTypeR, idx, item) => {
  if (!item.slotName) {
    return '';
  }
  return tapTypeR && tapTypeR === `R-${idx}`
    ? `${item.slotName}-confirm`
    : item.slotName;
};

const getLeftText = (tapTypeL, idx, itemL) => {
  return tapTypeL && tapTypeL === `L-${idx}`
    ? itemL.confirmText || itemL.text
    : itemL.text;
};
const getRightText = (tapTypeR, idx, item) => {
  return tapTypeR && tapTypeR === `R-${idx}`
    ? item.confirmText || item.text
    : item.text;
};

const getRightMovableContentStyle = (
  tapTypeR,
  idx,
  rightWidth,
  leftWidth,
  inertiaWidth
) => {
  return styleObjectToString({
    zIndex: tapTypeR === `R-${idx}` ? 1 : 0,
    marginLeft: getMarginLeft3(rightWidth, leftWidth, inertiaWidth),
    width: (rightWidth - 0.1) / 2 + 'px',
  });
};

const getLeftMovableContentStyle = (tapTypeL, idx, leftWidth, inertiaWidth) => {
  return styleObjectToString({
    zIndex: tapTypeL === `L-${idx}` ? 1 : 0,
    marginLeft: `${inertiaWidth / 2}px`,
    width: (leftWidth - 1) / 2 + 'px',
  });
};

const axmlObj = (obj) => {
  return obj;
};

export default {
  axmlObj,
  getWidth2,
  getMarginLeft2,
  getMarginLeft3,
  getRightMovableContentStyle,
  getLeftMovableContentStyle,
  getLeft,
  getWidth,
  getSlotWidthStyle,
  getMarginLeft,
  getMoveX,
  getMovableContentRightStyle,
  getMovableContentLeftStyle,
  getRightText,
  getLeftText,
  getLeftSlotName,
  getRightSlotName,
};

declare function getRegExp(reg: string, mode: string): any;
function keys(obj) {
  /// #if ALIPAY || BUNDLE2H

  if (typeof Object.keys === 'function') {
    return Object.keys(obj);
  }
  /// #endif

  /// #if WECHAT
  return JSON.stringify(obj)
    .replace(getRegExp('{|}|"', 'g'), '')
    .split(',')
    .map(function (item) {
      return item.split(':')[0];
    });
  /// #endif
}
