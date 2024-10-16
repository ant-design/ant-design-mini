Page({
    data: {
        checked: false,
    },
    onChange(value, e) {
        console.log(value, e);
    },
    handleChange(checked) {
        this.setData({
            checked: checked.detail,
        });
    },
});
