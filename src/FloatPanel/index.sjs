const store = {};

const ARROW_URL = {
  UP: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAAYCAYAAACsnTAAAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAARaADAAQAAAABAAAAGAAAAAC6nCo2AAACkUlEQVRYCe2Y2U7DMBBF2fdNIBA7iEc+gP9/5QeAJ7YCYhO7QOzck8ZVm7ZJHDuukHql2yyOx+Mbe2bSnp4umhTobboT9kafhtsSZ+Nh73U8FL/j644cOiXKgGa7LG6KCFOPX12ciOfiZ31DqPPQogxpYqsigiBMGlgtF+KZ+J72oO+2UKKMyvE1cVFMroysObFyLsWK+Jr1sI/2skWZkJPr4oIPZ2XjVjwVnzzZa2mmLFFmNBpimADacnCHmw/qizh3DjbadvUpCrbmRMSYajui34YXmUOcG5Ft5gU+RCFGsD0QY8yLV/ZG3tSFmEPs+bHv3tjDRZR+mSKLkE2GG81aX33FPbIyUpbhDz1AtiJrGZtZfZrai4hCWl2J6ToJsglv+EoE8yIrbpwLB5DOqXMQCKGsYCPKiCyTVpdEtowLntWZWEA2aRULTGyadhlEfdlKJp2zxXIhjyi8Nd4ecSPP82kDU8YjBsc8QBTGRiRXEIwZmxeSirRJ+nToWl6wTTIdauNt0BeTFIVragveDqK4oNDSzRgwyBauF4UBt0XXGsMpyGWIYpoHdULWI+C7BntqnT2RoB/BiEJ63RFdUquXdFh1K/cvfhP4SQAuvvM1vitGaRyjAMUJpEVAVD8SD0TKb7ZNKJC5+A6iLsEPikdWkS3QgRX+SEez9IrUBaWU2DhVACZ+Ue+YdG4bBvh4jWBEsSlwSKcVsZSPsapbhX9ZOdQ+0PajtKaBEQUjG2Iacuf5NCMB29jKkBVANqVaNjFUp01gfhFMTEEl9lTyUx/lqQj3RfZtTU2d/xfgMxOmVqISJ1QkxTnWPeYZIdk4qbsEXL5vKLQwFvSvQI1XNpgbq4aYQ9ZhjlGA1bGLdgr8AVixhJETQD/CAAAAAElFTkSuQmCC',
  MIDDLE:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAAICAYAAABAiVmlAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAARKADAAQAAAABAAAACAAAAABd2nb3AAAAfklEQVRIDe2VOwqAMBAFjT9shJzBwhN4/xPY2uYAgpAyiIXzWAvvsHkwuyHdDmQTGstEWyDCaFdu6s2kGRKUQJGMDXrwnIfh946ywuzZxDd7Sx9V9ExqzECUkJqfAQnRQqkxA1lCtF21ULxHDpKWqg4n6LsdQHeeom/3ggPKC984EbDo//HDAAAAAElFTkSuQmCC',
  DOWN: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAYCAYAAABHqosDAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAARqADAAQAAAABAAAAGAAAAADpBnGyAAACqElEQVRYCe2XWW/VMBCFS9kEYitL2Tf1CXji//8I3pB4QOxL2SmoCASF76OdyIQbrh0n97aoRzo3uY49GZ+MZ+yFhV1MVGDPhNZjtJ2BB+An+Ap+g/8TnNsyPAqd22u4Bhu0hbnKk+vN082bDS4v4RP4ZbNpx/4ewvPL8BxcbM3iAf8fRVsqzHEab8eDjqvRo0BG0k6CkaEgRsm/cIeHH+2wL+l1OrnvutWwfAcV6D3czljCOQU5memkGvwljOsuF75IGjmP4Rv4E24HuAqc4BVopJSg0WBvMsr1l6tsDDvITUSRuWgdzksgc4a54wa8CPWtFKsMWHNQKoyT0nDaZp8c7KeTX+n8VmdtKdQsYDpQiFvwLNSXPrA63YO//U6Tr8aMmpuwNAQdm+I7f55tcaxSb9griExzJX+LYUq4C5uq2xZGi7adgq5R9zQ1UP0X8ClsXlpjkLF+vEvQ6GyXXJqK4LIxR76Ff6SAScKklk/wR4FKc09qw3tf6iZKJz7DPjjCIH1x8znN72n2rar68qGrY+4LwqnlLkMF7VOdatka6uNo1n1Y1sfJFSZ8NYy7do7RJ/faGcYY0K8hl3Pxzr1UmJi0ic91fgHWJj4rmF/RrymMSpfMYf9UwALwHJrfigtAX2HCX0VRHEVqNkfxsPDqRESt0IqgGIoSNrktQ60w8bZFbtxD+KVdbvOAVc/IW4UbtQ4MJUz4ob2+2/GwUXod5VgytDDppDzAGUFex4AHWCNklIPsmMKEGO6iFcj9xxCI/ZCRMhpmIUw4b+5RIM9jpe91g2jJNUKG2kFjqhulDnZbyn/iqdcqZjWbdmD9QZ8ouV+5nxnmIUxMzrLsAfAabPthhDyEHkR7l1zG9kbbod6GKgZa6ldgJGmT6X1YXXKxsYuhFfgFxaZyhdIRKIEAAAAASUVORK5CYII=',
};

const CHANGE_UI_DISTANCE = 20; // 最终改变状态需要滑动的距离
const STATUS_TYPE = {
  // 当前面板的滑动状态，底部、中部、顶部
  MIDDLE: 'MIDDLE',
  BOTTOM: 'BOTTOM',
  TOP: 'TOP',
};
// let status = STATUS_TYPE.BOTTOM;
const DIRECTION = {
  DOWN: 'DOWN',
  UP: 'UP',
};

function doInit(newVal, oldVal, ownerComponent, instance) {
  const dataset = instance.getDataset()
  const { id } = dataset

  store[`scrollViewScrollStarted_${id}`] = false
  store[`scrollViewScrollIng_${id}`] = false
  store[`scrollViewScrollToTop_${id}`] = false
  store[`status_${id}`] = STATUS_TYPE.BOTTOM
}

function handleTouchStart(event, ownerComponent) {
  const { touches, instance } = event;
  const { clientY } = touches[0];
  // 重置
  const dataset = instance.getDataset()
  const { id } = dataset
  store[`beginY_${id}`] = clientY
}

function handleTouchMove(event, ownerComponent) {
  const { touches, instance } = event;
  const dataset = instance.getDataset()
  const { id } = dataset
  const { clientY } = touches[0];

  const moveLen = store[`beginY_${id}`] - clientY;
  const direction = moveLen > 0 ? DIRECTION.UP : DIRECTION.DOWN;
  if (!getMoveable({ direction, moveLen, id })) return;

  event.instance.setStyle({
    height: store[`currentHeight_${id}`] + moveLen,
  });
}

function handleTouchEnd(event, ownerComponent) {
  const { instance, changedTouches } = event;
  const { callMethod } = instance;
  const dataset = instance.getDataset()
  const { id } = dataset
  const { clientY } = changedTouches[0];

  const moveLen = store[`beginY_${id}`] - clientY;
  const direction = moveLen > 0 ? DIRECTION.UP : DIRECTION.DOWN;

  if (!getMoveable({ direction, moveLen, id })) return;
  if (Math.abs(moveLen) >= CHANGE_UI_DISTANCE) {
    // when MAX => 收起 从上到下滑动
    if (store[`status_${id}`] === STATUS_TYPE.TOP && direction === DIRECTION.DOWN) {
      if (Math.abs(moveLen) > store[`MAX_HEIGHT_${id}`] - store[`MIDDLE_HEIGHT_${id}`]) {
        store[`currentHeight_${id}`] = store[`MIN_HEIGHT_${id}`];
      } else {
        store[`currentHeight_${id}`] = store[`MIDDLE_HEIGHT_${id}`];
      }
    }

    // when MIN => 展开 从下到上滑动
    if (store[`status_${id}`] === STATUS_TYPE.BOTTOM && direction === DIRECTION.UP) {
      if (moveLen > store[`MIDDLE_HEIGHT_${id}`] - store[`MIN_HEIGHT_${id}`]) {
        store[`currentHeight_${id}`] = store[`MAX_HEIGHT_${id}`];
      } else {
        store[`currentHeight_${id}`] = store[`MIDDLE_HEIGHT_${id}`];
      }
    }

    if (store[`status_${id}`] === STATUS_TYPE.MIDDLE) {
      if (direction === DIRECTION.UP) {
        store[`currentHeight_${id}`] = store[`MAX_HEIGHT_${id}`];
      } else {
        store[`currentHeight_${id}`] = store[`MIN_HEIGHT_${id}`];
      }
    }

    // 滑动到顶部时，允许 scroll-view 滑动
    if (store[`currentHeight_${id}`] === store[`MAX_HEIGHT_${id}`]) {
      callMethod('enableScrollY');
    } else {
      callMethod('disableScrollY');
    }
    store[`status_${id}`] =
      store[`currentHeight_${id}`] === store[`MAX_HEIGHT_${id}`]
        ? STATUS_TYPE.TOP
        : store[`currentHeight_${id}`] === store[`MIDDLE_HEIGHT_${id}`]
        ? STATUS_TYPE.MIDDLE
        : STATUS_TYPE.BOTTOM;

    event.instance.setStyle({
      height: `${store[`currentHeight_${id}`]}px`,
    });

    instance.callMethod(
      'scrollStatus',
      store[`status_${id}`] === STATUS_TYPE.TOP
        ? 'MAX'
        : store[`status_${id}`] === STATUS_TYPE.MIDDLE
        ? 'MIDDLE'
        : 'MIN'
    );

    instance.callMethod(
      'changeArrow',
      store[`status_${id}`] === STATUS_TYPE.TOP
        ? 'DOWN'
        : store[`status_${id}`] === STATUS_TYPE.MIDDLE
        ? 'MIDDLE'
        : 'UP'
    );
  } else {
    // 未超出滑动距离则回归当前状态
    event.instance.setStyle({
      height: `${store[`currentHeight_${id}`]}px`,
    });
  }
}

function handleHeightInfoChange(newVal, oldVal, ownerComponent, instance) {
  if (!newVal) return;
  const dataset = instance.getDataset();
  const { id } = dataset

  store[`MAX_HEIGHT_${id}`] = dataset.maxHeight;
  store[`MIDDLE_HEIGHT_${id}`] = dataset.middleHeight;
  store[`MIN_HEIGHT_${id}`] = dataset.minHeight;

  resetPanel(instance, id);
}

function resetPanel(instance, id) {
  // 之前内容没有能将面板撑到最大高度，现在内容足够多可以将面板撑开了
  if (store[`status_${id}`] === STATUS_TYPE.TOP && store[`currentHeight_${id}`] !== store[`MAX_HEIGHT_${id}`]) {
    store[`status_${id}`] = STATUS_TYPE.MIDDLE;
  }
  store[`currentHeight_${id}`] =
    store[`status_${id}`] === STATUS_TYPE.TOP
      ? store[`MAX_HEIGHT_${id}`]
      : store[`status_${id}`] === STATUS_TYPE.MIDDLE
      ? store[`MIDDLE_HEIGHT_${id}`]
      : store[`MIN_HEIGHT_${id}`];
  instance.callMethod('disableScrollY');
  instance.callMethod(
    'changeArrow',
    store[`status_${id}`] === STATUS_TYPE.TOP
      ? 'DOWN'
      : store[`status_${id}`] === STATUS_TYPE.MIDDLE
      ? 'MIDDLE'
      : 'UP'
  );
}

function handleMaskTap(e, ownerComponent) {
  const dataset = e.instance.getDataset();
  const { id } = dataset
  ownerComponent.selectComponent('.amd-floatpanel-box').setStyle({
    height: store[`MIN_HEIGHT_${id}`],
  });
  store[`currentHeight_${id}`] = store[`MIN_HEIGHT_${id}`];
  store[`status_${id}`] = STATUS_TYPE.BOTTOM;
  e.instance.callMethod('disableScrollY');
  e.instance.callMethod('changeArrow', 'UP');
}

function onScrollViewScrollToLower(e) {
  e.instance.callMethod('onScrollViewToBottom');
}

function onScrollViewScrollToUpper(e) {
  const dataset = e.instance.getDataset();
  const { id } = dataset
  if (!getScrollViewMoveable(id)) return;
  store[`scrollViewScrollIng_${id}`] = false
  store[`scrollViewScrollToTop_${id}`] = true

  e.instance.callMethod('console', 'scrollingToUpper');
}

function onScrollViewScrollStart(e) {
  const dataset = e.instance.getDataset();
  const { id } = dataset
  if (!getScrollViewMoveable(id)) return;

  store[`scrollViewScrollStarted_${id}`] = true
  store[`scrollViewScrollIng_${id}`] = true
  e.instance.callMethod('console', 'scrollstart');
}

function onScrollViewScroll(e) {
  const dataset = e.instance.getDataset();
  const { id } = dataset
  if (!getScrollViewMoveable(id)) return;
  const { detail } = e;
  const { scrollTop } = detail;

  // 忽略惯性滚动
  if (!store[`scrollViewScrollStarted_${id}`]) {
    return;
  }

  if (scrollTop > 10) {
    store[`scrollViewScrollIng_${id}`] = true;
    store[`scrollViewScrollToTop_${id}`] = false;
  }
  e.instance.callMethod('console', 'scrolling');
}

function onScrollViewScrollEnd(e) {
  const dataset = e.instance.getDataset();
  const { id } = dataset
  if (!getScrollViewMoveable(id)) return;
  e.instance.callMethod('console', store[`scrollViewScrollToTop_${id}`]);
  if (!store[`scrollViewScrollToTop_${id}`]) {
    e.stopPropagation();
  }
  store[`scrollViewScrollIng_${id}`] = false;
  store[`scrollViewScrollStarted_${id}`] = false;
  e.instance.callMethod('console', 'scrollingEnd');
}

function onScrollViewScrollCancel(e) {
  const dataset = e.instance.getDataset();
  const { id } = dataset
  if (!getScrollViewMoveable(id)) return;
  if (!store[`scrollViewScrollToTop_${id}`]) {
    e.stopPropagation();
  }
  store[`scrollViewScrollIng_${id}`] = false;
  store[`scrollViewScrollStarted_${id}`] = false;
  e.instance.callMethod('console', 'scrollingCancel');
}

function getMoveable({ direction, moveLen, id }) {
  if (store[`scrollViewScrollIng_${id}`] && !store[`scrollViewScrollToTop_${id}`]) return false;

  if (store[`status_${id}`] === STATUS_TYPE.UP) {
    if (direction === DIRECTION.UP) return false;
  } else if (store[`status_${id}`] === STATUS_TYPE.BOTTOM) {
    if (direction === DIRECTION.DOWN) return false;
  }

  if (
    store[`currentHeight_${id}`] + moveLen < store[`MIN_HEIGHT_${id}`] ||
    store[`currentHeight_${id}`] + moveLen > store[`MAX_HEIGHT_${id}`]
  ) {
    return false;
  }

  return true;
}

function getScrollViewMoveable(id) {
  if (store[`status_${id}`] === STATUS_TYPE.TOP) {
    return true;
  }
  return false;
}

export default {
  handleTouchMove,
  handleTouchStart,
  handleTouchEnd,
  handleHeightInfoChange,
  onScrollViewScrollToUpper,
  onScrollViewScrollToLower,
  onScrollViewScroll,
  onScrollViewScrollEnd,
  onScrollViewScrollCancel,
  onScrollViewScrollStart,
  handleMaskTap,
  doInit,
  ARROW_URL
};
