Page({
    data: {
        value: 80,
    },
    onChange: function (value, e) {
        console.log('slider changed:', value, e);
    },
    onAfterChange: function (value, e) {
        console.log('当前值:', value, e);
        my.showToast({
            content: "\u5F53\u524D\u9009\u4E2D\u503C\u4E3A\uFF1A".concat(value)
        });
    },
    handleChange: function (value, e) {
        console.log('slider changed:', value, e);
        this.setData({
            value: value,
        });
    }
});
