export function checkIcon(icon = '') {
  return getRegExp('^[a-zA-Z]+$').test(icon);
}
