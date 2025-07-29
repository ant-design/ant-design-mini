export function isNative() {
  if (typeof (globalThis as any)?.ac === 'object') {
    return true;
  }
  return false;
}
