Page({
    data: {
        basicVisible: false,
        withTitleVisible: false,
        basicTwoVisible: false,
        basicThreeVisible: false,
        focusOneVisible: false,
        focusTwoVisible: false,
        focusThreeVisible: false,
        customBodyVisible: false,
        footer1: {
            buttons: [{ text: '我知道了' }],
        },
        footer2: {
            buttons: [{ text: '取消', type: 'default' }, { text: '确定', type: 'primary' }],
            layout: 'horizontal',
        },
        footer3: {
            buttons: [{ text: '主按钮', type: 'primary' }, { text: '更多', type: 'default' }, { text: '取消', type: 'text' }],
        },
    },
    onButtonTap(buttonItem) {
        console.log('点击的按钮: ', buttonItem);
        this.showToast(`点击了${buttonItem.text}`);
        this.handleClose();
    },
    handleOpen(e) {
        const { field } = e.target.dataset;
        this.setData({ [field]: true });
    },
    handleClose() {
        this.setData({
            basicVisible: false,
            withTitleVisible: false,
            basicTwoVisible: false,
            basicThreeVisible: false,
            focusOneVisible: false,
            focusTwoVisible: false,
            focusThreeVisible: false,
            customBodyVisible: false,
        });
    },
    showToast(content) {
        my.showToast({ content, duration: 1000 });
    },
});
