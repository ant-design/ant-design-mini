function getLoadingColor(color) {
  if (typeof color === 'string' && color[0] === '#') {
    return `${color.slice(1)}`;
  }
}

function getClass(size) {
  const list = ['small', 'medium', 'large', 'x-large'];
  if (list.indexOf(size) >=0) {
    return `ant-loading-${size}`;
  }
  return 'ant-loading-medium';
}

export default {
  getLoadingColor,
  getClass,
}