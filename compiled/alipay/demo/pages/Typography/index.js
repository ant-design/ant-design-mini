Page({
    data: {},
    handleTap(e) {
        const { type } = e.currentTarget.dataset;
        my.alert({ content: `点击${type}` });
    },
    handleDisabledTap(e) {
        const { type } = e.currentTarget.dataset;
        my.alert({ content: `禁用状态下点击${type}` });
    },
});
