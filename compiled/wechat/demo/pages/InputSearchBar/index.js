Page({
    onChange(value, e) {
        console.log(value, e);
    },
    onConfirm(value) {
        my.alert({
            content: value,
        });
    }
});
