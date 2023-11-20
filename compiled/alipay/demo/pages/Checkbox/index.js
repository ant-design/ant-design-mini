Page({
    data: {
        checked: false,
    },
    onChange: function (value, e) {
        console.log(value, e);
    },
    handleChange: function (checked) {
        this.setData({
            checked: checked,
        });
    },
    toggleChange: function () {
        this.setData({
            checked: !this.data.checked,
        });
    },
});
