function getClassName(current, index, status) {
  current = current || 0;
  if (index < current) {
    return 'active';
  }
  if (index === current) {
    if (status === 'error') {
      return 'error';
    }
    return 'active';
  }
  return 'non-active';
}

export default { getClassName };
