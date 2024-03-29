function handleScroll(event, ownerComponent) {
  var currentScroll = event.detail.scrollTop;
  var dataset = event.instance.getDataset();
  var elementSize = dataset.elementsize,
    monthList = dataset.monthlist;
  if (!elementSize) {
    return;
  }
  // 组件如果内嵌在 slot 里, 一定会被渲染出来, 但是此时 cellHight 为 0
  if (elementSize.cellHight === 0) {
    ownerComponent.callMethod('measurement');
    return;
  }
  var instance = ownerComponent.selectComponent('.ant-calendar-sticky-title');
  var sticky = ownerComponent.selectComponent('.ant-calendar-sticky');
  if (sticky) {
    sticky.setStyle({
      display: currentScroll < 0 ? 'none' : 'block'
    });
  }
  var monthHeight = elementSize.monthTitleHeight;
  var paddingHeight = elementSize.paddingHeight;
  var cellHeight = elementSize.cellHight;
  var heightList = monthList.map(function (p) {
    return monthHeight + cellHeight * p.cells.length / 7;
  });
  for (var i = 0; i < heightList.length; i++) {
    if (currentScroll < heightList[i]) {
      var topHeight = currentScroll - heightList[i] + monthHeight - paddingHeight;
      topHeight = Math.max(topHeight, 0);
      instance.setStyle({
        transform: "translateY(-".concat(topHeight, "px)")
      });
      ownerComponent.callMethod('setCurrentMonth', {
        month: topHeight > monthHeight * 0.8 ? i + 1 : i
      });
      break;
    } else {
      currentScroll = currentScroll - heightList[i];
    }
  }
}
export default {
  handleScroll: handleScroll
};