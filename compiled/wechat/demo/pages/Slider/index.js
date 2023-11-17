Page({
    data: {
        value: 80,
    },
    onChange: function (value, e) {
        console.log('slider changed:', value, e);
    },
    onAfterChange: function (value, e) {
        console.log('当前值:', value, e);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        wx.showToast({
            title: "value: ".concat(value.detail),
        });
    },
    handleChange: function (value, e) {
        console.log('slider changed:', value, e);
        this.setData({
            value: value.detail,
        });
    },
});
