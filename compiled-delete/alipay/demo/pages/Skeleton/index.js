Page({
    data: {
        showLoading: true,
        paragraph: {
            rows: 4,
        },
    },
    handleToggleShowLoading() {
        this.setData({ showLoading: !this.data.showLoading });
    },
});
