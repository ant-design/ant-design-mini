export function getLoadingColor(theme, color) {
  if (color && color.startsWith('#') && color !== '#999') {
    return `%23${color.slice(1)}`;
  }

  if (theme === 'light') {
    return '%23FFF';
  }

  return '%23999';
}
