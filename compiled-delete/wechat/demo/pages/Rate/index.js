Page({
    data: {
        value: 3,
    },
    onChange(value) {
        console.log(value);
    },
    handleChange(value) {
        console.log(value);
        this.setData({
            value: value.detail,
        });
    },
});
