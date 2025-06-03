function handleScroll(event, ownerComponent) {
  let currentScroll = event.detail.scrollTop;
  const dataset = event.instance.getDataset();
  const { elementsize: elementSize, monthlist: monthList } = dataset;
  if (!elementSize) {
    return;
  }
  // 组件如果内嵌在 slot 里, 一定会被渲染出来, 但是此时 cellHeight 为 0
  if (elementSize.cellHeight === 0) {
    ownerComponent.callMethod('measurement');
    return;
  }
  const instance = ownerComponent.selectComponent('.ant-calendar-sticky-title');
  const sticky = ownerComponent.selectComponent('.ant-calendar-sticky');
  if (sticky) {
    sticky.setStyle({
      display: currentScroll < 0 ? 'none' : 'block',
    });
  }
  const monthHeight = elementSize.monthTitleHeight;
  const paddingHeight = elementSize.paddingHeight;
  const cellHeight = elementSize.cellHeight;
  const heightList = monthList.map((p) => {
    return monthHeight + (cellHeight * p.cells.length) / 7;
  });
  for (let i = 0; i < heightList.length; i++) {
    if (currentScroll < heightList[i]) {
      let topHeight =
        currentScroll - heightList[i] + monthHeight - paddingHeight;
      topHeight = Math.max(topHeight, 0);
      instance.setStyle({
        transform: `translateY(-${topHeight}px)`,
      });
      ownerComponent.callMethod('setCurrentMonth', {
        month: topHeight > monthHeight * 0.8 ? i + 1 : i,
      });
      break;
    } else {
      currentScroll = currentScroll - heightList[i];
    }
  }
}

export default {
  handleScroll,
};
