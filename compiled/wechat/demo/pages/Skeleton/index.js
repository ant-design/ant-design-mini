Page({
    data: {
        showLoading: true,
        paragraph: {
            rows: 4,
        },
    },
    handleToggleShowLoading: function () {
        this.setData({ showLoading: !this.data.showLoading });
    },
});
