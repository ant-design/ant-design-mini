function getClass(size) {
  const list = ['small', 'medium', 'large'];
  if (list.indexOf(size) >=0) {
    return `amd-v1-skeleton-button-${size}`;
  }
  return 'amd-v1-skeleton-button-medium';
}

export default { getClass };
