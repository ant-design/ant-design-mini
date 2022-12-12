function getClass(size) {
  const list = ['x-small', 'small', 'medium', 'large'];
  if (list.indexOf(size) >=0) {
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


export default { getClass, getHoverClass };
