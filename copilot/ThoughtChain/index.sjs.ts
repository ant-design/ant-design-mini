function isExpand(foldStatus, listLength, index, firstLevelItem) {
  const expand =
    foldStatus === 'expand' || (!foldStatus && index === listLength - 1);
  const hasContent =
    (firstLevelItem.content && firstLevelItem.contentType) ||
    (firstLevelItem.list && firstLevelItem.list.length);
  return expand && hasContent;
}

function hasExpandArrow(firstLevelItem){
  const hasContent =
    (firstLevelItem.content && firstLevelItem.contentType) ||
    (firstLevelItem.list && firstLevelItem.list.length);
  return hasContent;
}

export default { isExpand, hasExpandArrow };
