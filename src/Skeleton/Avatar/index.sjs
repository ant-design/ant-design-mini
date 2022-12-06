function getClass(size) {
  const list = ['x-small', 'small', 'medium', 'large'];
  if (list.indexOf(size) >=0) {
    return `amd-skeleton-avatar-${size}`;
  }
  return 'amd-skeleton-avatar-medium';
}

export default { getClass };
