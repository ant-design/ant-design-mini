function getClass(size) {
  const list = ['x-small', 'small', 'medium', 'large'];
  if (list.indexOf(size) >=0) {
    return `amd-v1-button-${size}`;
  }
  return 'amd-v1-button-medium';
}

function getHoverClass(loading, type, activeClassName) {
  if (loading) {
    return '';
  }
  let className = 'amd-v1-button-active';
  if (type === 'text') {
    className += ' amd-v1-button-text-active';
  }
  if (activeClassName) {
    className += ' ' + activeClassName;
  }
  return className;
}


export default { getClass, getHoverClass };
