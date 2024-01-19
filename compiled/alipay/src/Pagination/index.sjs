function changeScollDistance(event, ownerComponent) {
  var _event$detail = event.detail,
    scrollLeft = _event$detail.scrollLeft,
    scrollWidth = _event$detail.scrollWidth;
  var viewWidth = ownerComponent.selectComponent('.ant-page-infinite-content').getBoundingClientRect().width;
  var moveDom = ownerComponent.selectComponent('.ant-page-infinite-move');
  var pageDeg = Math.ceil(scrollLeft / (scrollWidth - viewWidth) * 100);
  moveDom.setStyle("transform: translateX(".concat(pageDeg, "%);"));
}
export default {
  changeScollDistance: changeScollDistance
};