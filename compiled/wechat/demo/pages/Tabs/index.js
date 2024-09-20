Page({
    data: {
        current: 0,
        items: [
            {
                title: '水果',
                subTitle: '描述文案',
                content: '西瓜',
            },
            {
                title: '蔬菜',
                subTitle: '描述文案',
                badge: true,
                content: '西红柿',
            },
            {
                title: '动物',
                subTitle: '描述文案',
                content: '蚂蚁',
            },
        ],
        items2: [
            {
                title: '水果',
                subTitle: '描述文案',
                content: '西瓜',
            },
            {
                title: '蔬菜',
                subTitle: '描述文案',
                content: '西红柿',
                disabled: true,
            },
            {
                title: '动物',
                subTitle: '描述文案',
                content: '蚂蚁',
            },
        ],
        items3: [
            {
                title: '选项一',
            },
            {
                title: '选项二',
            },
            {
                title: '选项三',
            },
            {
                title: '选项四',
            },
            {
                title: '选项五',
            },
            {
                title: '选项六',
            },
            {
                title: '选项七',
            },
        ],
    },
    onChange(current) {
        current = current.detail;
        this.alert('current ' + current);
    },
    handleChange(current) {
        current = current.detail;
        this.setData({
            current,
        });
    },
    onPlus() {
        this.alert('plus');
    },
    alert(content) {
        //@ts-ignore
        wx.showToast({
            title: content,
        });
    },
});
