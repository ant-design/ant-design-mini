function disableScrollEvent(event) {
  event.preventDefault();
}
function enableScrollEvent(event) {
  event.stopPropagation();
}
export default {
  disableScrollEvent: disableScrollEvent,
  enableScrollEvent: enableScrollEvent
};