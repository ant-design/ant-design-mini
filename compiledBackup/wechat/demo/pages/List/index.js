Page({
    data: {
        radius: false,
    },
    handleTap(e) {
        console.log(e);
    },
    catchTap(e) {
        console.log(e);
    },
    handleSetRadius(checked) {
        this.setData({
            radius: checked,
        });
    },
});
