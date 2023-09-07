function handleScroll(event, ownerComponent) {
  let currentScroll = event.detail.scrollTop;
  const { elementSize, monthList, instance } = ownerComponent.getState();
  if (!elementSize) return;
  const monthHeight = elementSize.monthTitleHeight;
  const paddingHeight = elementSize.paddingHeight;
  const cellHeight = elementSize.cellHight;
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
      instance.callMethod(
        'setCurrentMonth',
        topHeight > monthHeight * 0.8 ? i + 1 : i
      );
      break;
    } else {
      currentScroll = currentScroll - heightList[i];
    }
  }
}

function handleMonthListChange(newValue, oldValue, ownerComponent, instance) {
  ownerComponent.getState().monthList = newValue;
  ownerComponent.getState().instance = instance;
}

function handleElementSizeChange(newValue, oldValue, ownerComponent, instance) {
  ownerComponent.getState().elementSize = newValue;
  ownerComponent.getState().instance = instance;
}

export default {
  handleElementSizeChange,
  handleScroll,
  handleMonthListChange,
};
