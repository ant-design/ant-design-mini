function getClass(size) {
  const list = ['x-small', 'small', 'medium', 'large'];
  if (list.indexOf(size) >=0) {
    return `amd-avatar-image-${size}`;
  }
  return 'amd-avatar-image-medium';
}

export default { getClass };
