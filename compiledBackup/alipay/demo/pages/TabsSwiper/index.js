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
                content: '西红柿',
            },
            {
                title: '动物',
                subTitle: '描述文案',
                content: '蚂蚁',
            },
        ],
    },
    onSwipeChange(e) {
        this.setData({
            current: e.detail.current,
        });
    },
    onChange(current) {
        this.setData({
            current,
        });
    },
});
