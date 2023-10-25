Page({
    data: {
        radius: false,
    },
    handleTap: function (e) {
        my.alert({
            title: 'onTap',
            content: e.currentTarget.dataset.info,
        });
        console.log(e);
    },
    handleSetRadius: function (checked) {
        this.setData({
            radius: checked,
        });
    },
});
