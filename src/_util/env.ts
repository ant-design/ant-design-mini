export function isNative() {
  if (typeof ac === 'object') {
    return true;
  }
  return false;
}
