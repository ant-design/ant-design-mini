/// #if ALIPAY
export function checkIcon(icon = '') {
  return getRegExp('^[a-zA-Z]+$').test(icon);
}
/// #endif
/// #if WECHAT
function checkIcon(icon = '') {
  return getRegExp('^[a-zA-Z]+$').test(icon);
}
module.exports = {
  checkIcon
}
/// #endif
