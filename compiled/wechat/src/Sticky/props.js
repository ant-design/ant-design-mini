export var StickyProps = {
    className: '',
    headerHeight: undefined,
    sticky: true,
    top: '',
    check: false,
    transparentTitle: false,
    onStickyChange: function (status) { return status; },
    onGetHeaderHeight: function (height) { return height; }, // 获取到header高度时顺便抛出去一份
};
