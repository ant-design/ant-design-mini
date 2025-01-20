function getClass(size) {
  const list = ['small', 'medium', 'large'];
  if (list.indexOf(size) >= 0) {
    return `ant-button-${size}`;
  }
  return 'ant-button-medium';
}

function getHoverClass(loading, type, activeClassName) {
  if (loading) {
    return '';
  }
  let className = 'ant-button-active';
  if (type === 'text') {
    className += ' ant-button-text-active';
  }
  if (activeClassName) {
    className += ' ' + activeClassName;
  }
  return className;
}

function isAide(aide, type) {
  return aide && ['default', 'primary'].indexOf(type) > -1;
}

export default { getClass, getHoverClass, isAide };
