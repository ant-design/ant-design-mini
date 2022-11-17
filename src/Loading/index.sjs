export function getLoadingColor(theme, color) {
  if (color && typeof color === 'string' && color[0] === '#' && color !== '#999') {
    return `${color.slice(1)}`;
  }

  if (theme === 'light') {
    return 'FFF';
  }

  return '999';
}