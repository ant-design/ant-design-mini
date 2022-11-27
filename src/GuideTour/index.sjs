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
  checkShowNext,
  checkShowPrev,
  checkShowJump,
  checkShowKnow,
};
