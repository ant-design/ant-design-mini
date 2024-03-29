function getClass(size) {
  var list = ['small', 'medium', 'large'];
  if (list.indexOf(size) >= 0) {
    return "ant-button-".concat(size);
  }
  return 'ant-button-medium';
}
function getHoverClass(loading, type, activeClassName) {
  if (loading) {
    return '';
  }
  var className = 'ant-button-active';
  if (type === 'text') {
    className += ' ant-button-text-active';
  }
  if (activeClassName) {
    className += ' ' + activeClassName;
  }
  return className;
}
export default {
  getClass: getClass,
  getHoverClass: getHoverClass
};