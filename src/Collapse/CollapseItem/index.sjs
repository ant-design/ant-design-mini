
const getConentHeight = (ownerComponent) => {
  const contentIns = ownerComponent.selectComponent('.amd-collapse-item-content');
  const { height } = contentIns.getComputedStyle(['height']);
  return height;
};

const handleEvent = (event, ownerComponent) => {
  if (event.currentTarget.dataset.disabled) return;
  ownerComponent.callMethod('_changeItem', 'onTap');
  const { active } = event.currentTarget.dataset;
  const contentWrapIns = ownerComponent.selectComponent('.amd-collapse-item-content-wrap');
  if (!active) {
    // close -> expand
    const height = getConentHeight(ownerComponent);
    contentWrapIns.setStyle(`height: ${height}`);
  } else {
    // expand -> close
    // eslint-disable-next-line no-lonely-if
    const height = getConentHeight(ownerComponent);
    contentWrapIns.setStyle(`height: ${height}`);
    ownerComponent.requestAnimationFrame(() => {
      contentWrapIns.setStyle('height: 0px');
    });
  }
};


const clearStyle = (event, ownerComponent) => {
  const contentWrapIns = ownerComponent.selectComponent('.amd-collapse-item-content-wrap');
  const style = contentWrapIns.getComputedStyle(['height']);
  if (style.height === '0px' || style.height === '0') return;
  contentWrapIns.setStyle('');
};

const fire = (event, ownerComponent) => {
  const { active, lastAction, first, accordion } = event.currentTarget.dataset;

  if (!accordion && lastAction === 'onTap') return;
  if (first < 0) return;

  const contentWrapIns = ownerComponent.selectComponent('.amd-collapse-item-content-wrap');
  if (active) {
    // close -> expand
    const height = getConentHeight(ownerComponent);
    contentWrapIns.setStyle(`height: ${height}`);
  } else {
    // expand -> close
    // eslint-disable-next-line no-lonely-if
    const height = getConentHeight(ownerComponent);
    contentWrapIns.setStyle(`height: ${height}`);
    ownerComponent.requestAnimationFrame(() => {
      contentWrapIns.setStyle('height: 0px');
    });
  }
};

export default { handleEvent, clearStyle, fire };
