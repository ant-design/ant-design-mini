Page({
    data: {
        buttons: [
            {
                text: '主要操作',
                type: 'primary',
            },
            {
                text: '辅助操作',
                type: 'default',
            },
        ],
    },
    handleTabBtn: function (e) {
        my.alert({
            content: "\u5F53\u524D\u70B9\u51FB\u7684\u662F\u7B2C ".concat(e + 1, " \u4E2A\u6309\u94AE\uFF1A").concat(this.data.buttons[e].text),
        });
    },
});
