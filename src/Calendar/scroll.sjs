function rpxToPx(rpx, windowWidth) {
  return rpx * (windowWidth / 750);
}

function handleScroll(event, ownerComponent) {
  let currentScoll = event.detail.scrollTop;
  const {
    windowWidth,
    monthList,
    instance
  } = ownerComponent.getState()

  const monthHeight = 90;
  const paddingHeight = 8;
  const cellHeight = 118;
  const heightList = monthList.map(p => {
    return rpxToPx(monthHeight + cellHeight * p.cells.length / 7, windowWidth)
  })
  for (let i = 0; i < heightList.length; i++) {
    if (currentScoll < heightList[i]) {
      let topHeight = currentScoll - (heightList[i] - rpxToPx(monthHeight - paddingHeight, windowWidth))
      topHeight = Math.max(topHeight, 0)
      instance.setStyle({
        'transform': `translateY(-${topHeight}px)`
      })
      instance.callMethod('setCurrentMonth', topHeight > rpxToPx(60, windowWidth) ? i + 1 : i)
      break
    } else {
      currentScoll = currentScoll - heightList[i]
    }
  }
}


function handleMonthListChange(newValue, oldValue, ownerComponent, instance) {
  ownerComponent.getState().monthList = newValue
  ownerComponent.getState().instance = instance;
}

function handleWidthChange(newValue, oldValue, ownerComponent, instance) {
  ownerComponent.getState().windowWidth = newValue
  ownerComponent.getState().instance = instance;
}

export default {
  handleWidthChange,
  handleScroll,
  handleMonthListChange,
};
