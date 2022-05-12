let beginY = 0; // 最近一次触发 start 时触摸的 y 坐标
let MIN_HEIGHT = 0; // 容器初始高度
let currentHeight = MIN_HEIGHT; // 当前容器高度
let MAX_HEIGHT = 0; // 设定的可展示的最大高度
let MIDDLE_HEIGHT = 0;
const CHANGE_UI_DISTANCE = 20; // 最终改变状态需要滑动的距离 
const STATUS_TYPE = { // 当前面板的滑动状态，底部、中部、顶部
  MIDDLE: 'MIDDLE',
  BOTTOM: 'BOTTOM',
  TOP: 'TOP',
}
let status = STATUS_TYPE.BOTTOM;
const DIRECTION = {
    DOWN: 'DOWN',
    UP: 'UP'
}
let scrollViewScrollStarted = false
let scrollViewScrollIng = false
let scrollViewScrollToTop = false

function doInit () {
    scrollViewScrollStarted = false
    scrollViewScrollIng = false
    scrollViewScrollToTop = false
    status = STATUS_TYPE.BOTTOM
}

function handleTouchStart(event, ownerComponent) {
    const { touches, instance } = event;
    const { clientY } = touches[0];
    // 重置
    beginY = clientY;
}

function handleTouchMove(event, ownerComponent) {
    const { touches, instance } = event;
    const { clientY } = touches[0];
    const moveLen = beginY - clientY;
    const direction = moveLen > 0 ? DIRECTION.UP : DIRECTION.DOWN
    if (!getMoveable({ direction, moveLen })) return

    event.instance.setStyle({
        height: currentHeight + moveLen
    })
}

function handleTouchEnd(event, ownerComponent) {
    const { instance, changedTouches } = event;
    const { callMethod } = instance;
    const { clientY } = changedTouches[0];
    const moveLen = beginY - clientY;
    const direction = moveLen > 0 ? DIRECTION.UP : DIRECTION.DOWN

    if (!getMoveable({ direction, moveLen })) return
    if (Math.abs(moveLen) >= CHANGE_UI_DISTANCE) {
        // when MAX => 收起 从上到下滑动
        if(status === STATUS_TYPE.TOP && direction === DIRECTION.DOWN) {
            if (Math.abs(moveLen) > (MAX_HEIGHT - MIDDLE_HEIGHT)) {
                currentHeight = MIN_HEIGHT
            } else {
                currentHeight = MIDDLE_HEIGHT
            }
        }

        // when MIN => 展开 从下到上滑动
        if(status === STATUS_TYPE.BOTTOM && direction === DIRECTION.UP) {
            if (moveLen > (MIDDLE_HEIGHT - MIN_HEIGHT)) {
                currentHeight = MAX_HEIGHT
            } else {
                currentHeight = MIDDLE_HEIGHT
            }
        }

        if (status === STATUS_TYPE.MIDDLE) {
            if (direction === DIRECTION.UP) {
                currentHeight = MAX_HEIGHT
            } else {
                currentHeight = MIN_HEIGHT
            }
        }

        // 滑动到顶部时，允许 scroll-view 滑动
        if (currentHeight === MAX_HEIGHT) {
            callMethod('enableScrollY')
        } else {
            callMethod('disableScrollY')
        }
        status = currentHeight === MAX_HEIGHT 
            ? STATUS_TYPE.TOP
            : currentHeight === MIDDLE_HEIGHT
                ? STATUS_TYPE.MIDDLE 
                : STATUS_TYPE.BOTTOM
        
        event.instance.setStyle({
            'height': `${currentHeight}px`
        })

        instance.callMethod('scrollStatus', status === STATUS_TYPE.TOP ? 'MAX' : status === STATUS_TYPE.MIDDLE ? 'MIDDLE' : 'MIN')

        instance.callMethod('changeArrow', status === STATUS_TYPE.TOP ? 'DOWN' : status === STATUS_TYPE.MIDDLE ? 'MIDDLE' : 'UP')
    } else {
        // 未超出滑动距离则回归当前状态
        event.instance.setStyle({
            'height': `${currentHeight}px`
        })
    }
}

function handleHeightInfoChange(newVal, oldVal, ownerComponent, instance) {
    if(!newVal) return; 
    const dataset = instance.getDataset()
    MAX_HEIGHT = dataset.maxHeight
    MIDDLE_HEIGHT = dataset.middleHeight
    MIN_HEIGHT = dataset.minHeight

    resetPanel(instance)
}

function resetPanel (instance) {
    // instance.setStyle({
    //     height: MIN_HEIGHT
    // })
    // 之前内容没有能将面板撑到最大高度，现在内容足够多可以将面板撑开了
    if (status === STATUS_TYPE.TOP && currentHeight !== MAX_HEIGHT) {
        status = STATUS_TYPE.MIDDLE
    }
    currentHeight = status === STATUS_TYPE.TOP ? MAX_HEIGHT : status === STATUS_TYPE.MIDDLE ? MIDDLE_HEIGHT : MIN_HEIGHT
    instance.callMethod('disableScrollY')
    instance.callMethod('changeArrow', status === STATUS_TYPE.TOP ? 'DOWN' : status === STATUS_TYPE.MIDDLE ? 'MIDDLE' : 'UP')
}

function handleMaskTap (e, ownerComponent) {
    ownerComponent.selectComponent('.amd-swiper-box').setStyle({
        height: MIN_HEIGHT
    })
    currentHeight = MIN_HEIGHT
    status = STATUS_TYPE.BOTTOM
    e.instance.callMethod('disableScrollY')
    e.instance.callMethod('changeArrow', 'UP')
}

function onScrollViewScrollToLower (e) {
    e.instance.callMethod('onScrollViewToBottom')
}

function onScrollViewScrollToUpper(e) {
    if (!getScrollViewMoveable()) return
    scrollViewScrollIng = false
    scrollViewScrollToTop = true
    e.instance.callMethod('console', 'scrollingToUpper')
}

function onScrollViewScrollStart(e) {
    if (!getScrollViewMoveable()) return
    scrollViewScrollStarted = true
    scrollViewScrollIng = true
    e.instance.callMethod('console', 'scrollstart')
}

function onScrollViewScroll (e) {
    if (!getScrollViewMoveable()) return
    const { detail } = e
    const { scrollTop } = detail

    // 忽略惯性滚动
    if (!scrollViewScrollStarted) {
        return
    }    

    if(scrollTop > 10) {
        scrollViewScrollIng = true
        scrollViewScrollToTop = false
    }
    e.instance.callMethod('console', 'scrolling')
}

function onScrollViewScrollEnd (e) {
    if (!getScrollViewMoveable()) return
    if (!scrollViewScrollToTop) {
        e.stopPropagation()
    }
    scrollViewScrollIng = false
    scrollViewScrollStarted = false
    e.instance.callMethod('console', 'scrollingEnd')
}

function onScrollViewScrollCancel (e) {
    if (!getScrollViewMoveable()) return
    if (!scrollViewScrollToTop) {
        e.stopPropagation()
    }
    scrollViewScrollIng = false
    scrollViewScrollStarted = false
    e.instance.callMethod('console', 'scrollingCancel')
}

function getMoveable ({ direction, moveLen }) {
    if (scrollViewScrollIng && !scrollViewScrollToTop) return false

    if (status === STATUS_TYPE.UP) {
        if (direction === DIRECTION.UP) return false
    } else if (status === STATUS_TYPE.BOTTOM) {
        if (direction === DIRECTION.DOWN) return false
    }

    if (currentHeight + moveLen < MIN_HEIGHT || currentHeight + moveLen > MAX_HEIGHT) {
        return false
    }

    return true
}

function getScrollViewMoveable () {
    if (status === STATUS_TYPE.TOP) {
        return true
    }
    return false
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
  doInit
}