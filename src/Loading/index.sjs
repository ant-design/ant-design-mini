export function getLoadingColor(color) {
  if (typeof color === 'string' && color[0] === '#') {
    return `${color.slice(1)}`;
  }
}

export function getClass(size) {
  const list = ['small', 'medium', 'large', 'x-large'];
  if (list.indexOf(size) >=0) {
    return `amd-loading-${size}`;
  }
  return 'amd-loading-medium';
}
