Page({
    data: {
        items: [],
    },
    onLoad: function () {
        var items = new Array(30).fill(null).map(function (_, index) {
            return {
                title: "Tab ".concat(index),
                subTitle: "描述文案",
            };
        });
        this.setData({
            items: items,
        });
    },
});
