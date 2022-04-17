function noopGetFieldInfo() {
  return null;
}
export let getFieldInfo = noopGetFieldInfo;

export function cacheFieldInfo(fn) {
  getFieldInfo = fn;
}

export function clearFieldInfo() {
  getFieldInfo = noopGetFieldInfo;
}
