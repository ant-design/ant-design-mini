Page({
    data: {
        visible: true,
        placements: [
            'top',
            'bottom',
            'left',
            'right',
            'top-left',
            'top-right',
            'bottom-left',
            'bottom-right',
            'left-top',
            'left-bottom',
            'right-top',
            'right-bottom',
        ],
    },
    onVisibleChange(visible, e) {
        console.log('onVisibleChange', visible, e);
    },
    handleVisibleChange() {
        this.setData({
            visible: !this.data.visible,
        });
    },
});
