Page({
    data: {
        radius: false,
    },
    handleTap: function (e) {
        console.log(e);
    },
    handleSetRadius: function (checked) {
        this.setData({
            radius: checked,
        });
    },
});
