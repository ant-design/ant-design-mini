function changeScollDistance(event, ownerComponent) {
  const { scrollLeft, scrollWidth } = event.detail;
  const viewWidth = ownerComponent
    .selectComponent('.ant-page-infinite-content')
    .getBoundingClientRect().width;
  const moveDom = ownerComponent.selectComponent('.ant-page-infinite-move');
  const pageDeg = Math.ceil((scrollLeft / (scrollWidth - viewWidth)) * 100);
  moveDom.setStyle(`transform: translateX(${pageDeg}%);`);
}

export default { changeScollDistance };
