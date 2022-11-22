export function getLoadingColor(color) {
  if (typeof color === 'string' && color[0] === '#') {
    return `${color.slice(1)}`;
  }
}
