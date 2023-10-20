const arrowType = {
  right: 'RightOutline',
  up: 'UpOutline',
  down: 'DownOutline',
};

const getArrow = (arrow) => {
  if (arrow === true) {
    return arrowType.right;
  }
  return arrowType[arrow] || '';
};

export default {
  getArrow,
};
