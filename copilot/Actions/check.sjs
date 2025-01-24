/// #if ALIPAY
function checkIcon(icon = '') {
  return getRegExp('^[a-zA-Z]+$').test(icon);
}
export default { checkIcon };
/// #endif
/// #if WECHAT
function checkIcon(icon = '') {
  return getRegExp('^[a-zA-Z]+$').test(icon);
}
module.exports = {
  checkIcon
}
/// #endif
