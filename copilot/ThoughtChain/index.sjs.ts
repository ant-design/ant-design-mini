function isExpand(collapsible, key, foldStatusMap) {
  if (collapsible) {
    if (collapsible.expandedKeys) {
      return collapsible.expandedKeys.includes(key);
    }
    return !foldStatusMap[key];
  }
  return true;
}

function hasExpandArrow(collapsible) {
  if (collapsible) return true;
}

export default { isExpand, hasExpandArrow };
