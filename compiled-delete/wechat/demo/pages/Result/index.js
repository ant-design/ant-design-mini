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
    handleTabBtn(e) {
        my.alert({
            content: `当前点击的是第 ${e + 1} 个按钮：${this.data.buttons[e].text}`,
        });
    },
});
