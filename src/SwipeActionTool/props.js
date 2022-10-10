export const SwipeActionToolDefaultProps = {
    key: '', // 唯一标识
    className: '',
    right: [],
    left: [],
    itemWidth: 150, // 滑动按钮宽度
    leftSwiped: false, // 左侧滑块设置滑动状态
    rightSwiped: false, // 右侧滑块设置滑动状态
    disable: false, // 禁止滑动
    callbackData: {}, // onRightItemEvent回调数据
    onSwipeEnd: () => {}, // 滑动结束的回调
    onSwipeStart: () => {}, // 滑动开始的回调
    onTouchEnd: () => {}, // 触摸结束
    onRightItemEvent: () => {}, // 左滑出的元素的点击事件
    onLeftItemEvent: () => {}, // 左滑出的元素的点击事件
};
