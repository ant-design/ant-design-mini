function noop() {
  return null;
}

export let getFieldInfo = noop;

export function cacheFieldInfo(fn) {
  getFieldInfo = fn;
}

export function clearFieldInfo() {
  getFieldInfo = noop;
}

export let getFormInfo =  noop

export function cacheFormInfo(fn)  {
  getFormInfo  = fn
}

export function clearFormInfo() {
  getFormInfo  = noop
}
