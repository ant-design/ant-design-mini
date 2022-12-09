function getClass(size) {
  const list = ['x-small', 'small', 'medium', 'large'];
  if (list.indexOf(size) >=0) {
    return `amd-v1-avatar-image-${size}`;
  }
  return 'amd-v1-avatar-image-medium';
}

export default { getClass };
