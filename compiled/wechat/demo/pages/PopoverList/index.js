Page({
    data: {
        visible: true,
        url: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ',
    },
    handleVisibleChange: function (visible, e) {
        console.log(visible, e);
        this.setData({ visible: visible.detail });
    },
    handleTapItem: function (e) {
        console.log(e);
        this.setData({ visible: false });
    },
});
