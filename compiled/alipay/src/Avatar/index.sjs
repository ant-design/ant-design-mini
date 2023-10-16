function getClass(size) {
  const list = ['x-small', 'small', 'medium', 'large'];
  if (list.indexOf(size) >=0) {
    return `ant-avatar-image-${size}`;
  }
  return 'ant-avatar-image-medium';
}

export default { getClass };
