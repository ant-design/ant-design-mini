Page({
    data: {
        checked: true,
    },
    onChange(checked, e) {
        console.log(checked);
    },
    handleChange(checked, e) {
        this.setData({
            checked,
        });
    },
    handleChangeByButton() {
        console.log(this.data.checked);
        this.setData({
            checked: !this.data.checked,
        });
    },
});
