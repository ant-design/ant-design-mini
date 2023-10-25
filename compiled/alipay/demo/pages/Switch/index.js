Page({
    data: {
        checked: true,
    },
    onChange: function (checked, e) {
        console.log(checked);
    },
    handleChange: function (checked, e) {
        this.setData({
            checked: checked,
        });
    },
    handleChangeByButton: function () {
        console.log(this.data.checked);
        this.setData({
            checked: !this.data.checked,
        });
    },
});
