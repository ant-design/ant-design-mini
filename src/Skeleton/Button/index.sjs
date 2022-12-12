function getClass(size) {
  const list = ['small', 'medium', 'large'];
  if (list.indexOf(size) >=0) {
    return `ant-skeleton-button-${size}`;
  }
  return 'ant-skeleton-button-medium';
}

export default { getClass };
