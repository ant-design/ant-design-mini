Page({
    data: {
        value: 3,
    },
    onChange: function (value) {
        console.log(value);
    },
    handleChange: function (value) {
        console.log(value);
        this.setData({
            value: value.detail,
        });
    },
});
