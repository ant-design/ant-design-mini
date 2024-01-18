Page({
    data: {
        typeList: ['default', 'error', 'info', 'primary'],
    },
    handleTapAction() {
        my.showToast({
            content: `点击按钮`,
            duration: 1000,
        });
    },
    handleTapLink() {
        my.showToast({
            content: 'link 类型被点击了',
            duration: 1000,
        });
    },
    handleClose() {
        my.showToast({
            content: `点击关闭`,
            duration: 1000,
        });
    },
});
