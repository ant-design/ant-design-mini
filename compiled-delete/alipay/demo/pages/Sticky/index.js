Page({
    data: {
        stickyStatus: false,
        stickyStatus1: false,
    },
    handleStickyChange(status) {
        this.setData({ stickyStatus: status });
    },
    handleStickyChange1(status) {
        this.setData({ stickyStatus1: status });
    },
});
