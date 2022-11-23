function getValue(value, selfValue, defaultValue) {
  if (typeof value !== 'undefined') {
    return value;
  }
  if (typeof selfValue !== 'undefined') {
    return selfValue;
  }
  return defaultValue || 0;
}

function checkShowNext(current, items) {
  return current < items.length - 1;
}
function checkShowPrev(current, items) {
  return current > 0;
}
function checkShowJump(current, items) {
  return current === 0 && items.length > 1;
}
function checkShowKnow(current, items) {
  return current === items.length - 1;
}
export default {
  getValue,
  checkShowNext,
  checkShowPrev,
  checkShowJump,
  checkShowKnow,
};
