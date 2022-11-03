function isActive(current, index) {
  return toArray(current).indexOf(index) >= 0;
}

function toArray(current) {
  if (typeof current === 'number') {
    return [current];
  }
  return current || [];
}

export default { isActive };