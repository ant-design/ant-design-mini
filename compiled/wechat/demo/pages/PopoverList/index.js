Page({
    data: {
        visible: true,
        visible1: true,
        visible2: true,
        list: [{
                text: '扫一扫',
                icon: 'ScanningOutline',
                showBadge: true,
                id: 'scan',
            }, {
                text: '付钱/收钱',
                icon: 'ReceivePaymentOutline',
                showBadge: false,
                id: 'pay',
            }, {
                text: '乘车码',
                icon: 'TransportQRcodeOutline',
                showBadge: false,
                id: 'code',
            }, {
                text: '图片',
                iconImage: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ',
                showBadge: false,
                id: 'image',
            }],
    },
    handleVisibleChange(visible, e) {
        console.log(visible, e);
        this.setData({ visible: visible.detail });
    },
    handleVisibleChange1(visible, e) {
        console.log(visible, e);
        this.setData({ visible1: visible.detail });
    },
    handleVisibleChange2(visible, e) {
        console.log(visible, e);
        this.setData({ visible2: visible.detail });
    },
    handleTapItem(e, item) {
        console.log(e, item);
        this.setData({ visible: false });
    },
    handleTapItem1(e, item) {
        console.log(e, item);
        this.setData({ visible1: false });
    },
    handleTapItem2(e, item) {
        console.log(e, item);
        this.setData({ visible2: false });
    },
});
