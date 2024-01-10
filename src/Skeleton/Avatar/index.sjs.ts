function getClass(size) {
  const list = ['x-small', 'small', 'medium', 'large'];
  if (list.indexOf(size) >=0) {
    return `ant-skeleton-avatar-${size}`;
  }
  return 'ant-skeleton-avatar-medium';
}

export default { getClass };
