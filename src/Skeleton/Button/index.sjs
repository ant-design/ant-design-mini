function getClass(size) {
  const list = ['small', 'medium', 'large'];
  if (list.indexOf(size) >=0) {
    return `amd-skeleton-button-${size}`;
  }
  return 'amd-skeleton-button-medium';
}

export default { getClass };
