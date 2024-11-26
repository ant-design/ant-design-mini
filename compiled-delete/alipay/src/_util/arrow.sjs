var arrowType = {
  right: 'RightOutline',
  up: 'UpOutline',
  down: 'DownOutline'
};
var getArrow = function getArrow(arrow) {
  if (arrow === true) {
    return arrowType.right;
  }
  return arrowType[arrow] || '';
};
export default {
  getArrow: getArrow
};