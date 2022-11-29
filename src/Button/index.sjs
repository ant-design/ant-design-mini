function getClass(size) {
  if (size >= 18) {
    return 'amd-button-padding-large';
  }
  if (size >15) {
    return 'amd-button-padding-medium';
  }
  return 'amd-button-padding-default';
}

function getHoverClass(loading, type, activeClassName) {
  if (loading) {
    return '';
  }
  let className = 'amd-button-active';
  if (type === 'text') {
    className += ' amd-button-text-active';
  }
  if (activeClassName) {
    className += ' ' + activeClassName;
  }
  return className;
}


export default { getClass, getHoverClass };
