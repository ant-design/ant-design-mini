export function getLoadingColor(color) {
  if (color && typeof color === 'string' && color[0] === '#' && color !== '#999') {
    return `${color.slice(1)}`;
  }

  return '999';
}