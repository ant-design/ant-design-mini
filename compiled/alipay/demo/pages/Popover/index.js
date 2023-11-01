Page({
    data: {
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
    onVisibleChange: function (visible, e) {
        console.log('onVisibleChange', visible, e);
    },
    handleVisibleChange: function () {
        this.setData({
            visible: !this.data.visible,
        });
    },
});
