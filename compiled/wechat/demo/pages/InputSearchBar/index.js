Page({
    onChange: function (value, e) {
        console.log(value, e);
    },
    onConfirm: function (value) {
        my.alert({
            content: value,
        });
    }
});
