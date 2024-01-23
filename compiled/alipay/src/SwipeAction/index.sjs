var getWidth = function getWidth(rightWidth, leftWidth, inertiaWidth) {
  var num = (rightWidth || leftWidth) * 2 + inertiaWidth;
  var width = rightWidth > leftWidth ? rightWidth : leftWidth;
  return rightWidth && leftWidth ? "calc(100% + ".concat(width + inertiaWidth, "px)") : "calc(100% + ".concat(num / 2, "px)");
};
var getMarginLeft = function getMarginLeft(rightWidth, leftWidth, inertiaWidth) {
  var width = rightWidth > leftWidth ? rightWidth : leftWidth;
  return "calc(-".concat((width + inertiaWidth) / 2, "px)");
};
var getSlotWidthStyle = function getSlotWidthStyle(rightWidth, leftWidth) {
  var left = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var right = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var inertiaWidth = arguments.length > 4 ? arguments[4] : undefined;
  // 右
  if (right.length > 0 && left.length === 0) {
    return "calc(100% - ".concat((1 + inertiaWidth) / 2, "px)");
  }
  // 左
  if (left.length > 0 && right.length === 0) {
    return {
      width: "calc(100% - ".concat(leftWidth / 2, "px)"),
      marginLeft: (leftWidth + inertiaWidth) / 2 + 'px'
    };
  }
  if (left.length > 0 && right.length > 0) {
    return {
      width: "100%",
      marginLeft: "0"
    };
  }
};
var getLeft = function getLeft(tapType, idx, right, isLeft) {
  var tip = !isLeft ? 'L-' : 'R-';
  if (right.length === 1) {
    return tapType && tapType === "".concat(tip).concat(idx) ? 'text-move-midd' : '';
  }
  if (right.length === 3 && idx === 1) {
    return tapType && tapType === "".concat(tip).concat(idx) ? 'text-move-midd' : '';
  }
  var cls = '';
  if (idx === 0) {
    cls = isLeft ? 'text-move-left' : 'text-move-right';
  } else {
    cls = isLeft ? 'text-move-right' : 'text-move-left';
  }
  return tapType && tapType === "".concat(tip).concat(idx) ? cls : '';
};
var getWidth2 = function getWidth2(rightWidth, leftWidth, inertiaWidth) {
  var width = rightWidth > leftWidth ? rightWidth : leftWidth;
  return rightWidth && leftWidth ? "calc(100% - ".concat(width + inertiaWidth, "px)") : "calc(100% - ".concat((width + inertiaWidth) / 2, "px)");
};
var getMarginLeft2 = function getMarginLeft2(rightWidth, leftWidth, inertiaWidth) {
  var num = rightWidth > 0 ? inertiaWidth : 0;
  var width = rightWidth > leftWidth ? rightWidth : leftWidth;
  return leftWidth && rightWidth ? "".concat((width + num) / 2, "px") : leftWidth > 0 ? 0 : "".concat((width + inertiaWidth) / 2, "px");
};
var getMarginLeft3 = function getMarginLeft3(rightWidth, leftWidth, inertiaWidth) {
  var width = rightWidth > leftWidth ? rightWidth : leftWidth;
  return leftWidth && rightWidth ? "calc(100% - ".concat((width + inertiaWidth) / 2, "px)") : "calc(100% - ".concat(rightWidth / 2 - 1, "px)");
};
var getMoveX = function getMoveX(rightButtons, idx) {
  var arr = rightButtons.slice(idx, rightButtons.length);
  return arr.reduce(function (tolal, cur) {
    return parseFloat(tolal) + cur.width;
  }, 0);
};
export default {
  getWidth2: getWidth2,
  getMarginLeft2: getMarginLeft2,
  getMarginLeft3: getMarginLeft3,
  getLeft: getLeft,
  getWidth: getWidth,
  getSlotWidthStyle: getSlotWidthStyle,
  getMarginLeft: getMarginLeft,
  getMoveX: getMoveX
};