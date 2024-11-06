Page({
    data: {
        loading: true,
        status: 'failed',
        safeArea: 'both',
    },
    onLoad() {
        setTimeout(() => {
            this.setData({
                loading: false,
            });
        }, 1000);
    },
    handleRefresh() {
        my.reLaunch({
            url: 'index',
            fail(e) {
                console.log(e);
            },
        });
    },
    handleSwitchToDisconnected() {
        this.setData({
            status: 'disconnected',
            title: undefined,
            message: undefined,
            image: '',
        });
    },
    handleSwitchToEmpty() {
        this.setData({
            status: 'empty',
            title: undefined,
            message: undefined,
            image: '',
        });
    },
    handleSwitchToBusy() {
        this.setData({
            status: 'busy',
            title: undefined,
            message: undefined,
            image: '',
        });
    },
    handleSwitchToCustom() {
        this.setData({
            loading: false,
            status: '',
            title: '自定义标题',
            message: '自定义详情',
            image: 'https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg',
        });
    },
    handleSwitchToNormal() {
        this.setData({
            status: '',
            title: '',
            message: '',
            image: '',
        });
    },
    handleToggleSafeArea(e) {
        const { position = '' } = e.target.dataset;
        this.setData({
            safeArea: position,
        });
    },
});
