Page({
    data: {
        value: '',
        visible: false,
        visible2: false,
        visible3: false,
    },
    onInputChange: function (value) {
        value = value.detail;
        this.setData({ value: value });
    },
    // 默认键盘
    onTap: function () {
        this.setData({ visible: true });
    },
    // 关闭键盘
    onClose: function () {
        this.setData({ visible: false });
    },
    // 不带蒙层
    onTap2: function () {
        this.setData({ visible2: true });
    },
    onClose2: function () {
        this.setData({ visible2: false });
    },
    // 监听各种事件
    onTap3: function () {
        this.setData({ visible3: true });
    },
    onClose3: function () {
        this.setData({ visible3: false });
    },
    onChange: function (value) {
        value = value.detail;
        var curValue = this.data.value;
        this.setData({ value: curValue + value });
    },
    onKeyBoardError: function (err) {
        err = err.detail;
        my.showToast({ content: 'onError ' + err.toString() });
    },
});
