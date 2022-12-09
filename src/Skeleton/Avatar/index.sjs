function getClass(size) {
  const list = ['x-small', 'small', 'medium', 'large'];
  if (list.indexOf(size) >=0) {
    return `amd-v1-skeleton-avatar-${size}`;
  }
  return 'amd-v1-skeleton-avatar-medium';
}

export default { getClass };
