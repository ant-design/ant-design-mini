const arrowType = {
  right: 'RightOutline',
  up: 'UpOutline',
  down: 'DownOutline',
};

const getArrow = (arrow) => {
  return arrow ? arrowType[arrow] : '';
};

export default { 
  getArrow 
};
