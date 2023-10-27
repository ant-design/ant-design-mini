function getClass(size) {
  var list = ['x-small', 'small', 'medium', 'large'];
  if (list.indexOf(size) >= 0) {
    return "ant-avatar-image-".concat(size);
  }
  return 'ant-avatar-image-medium';
}
export default {
  getClass: getClass
};