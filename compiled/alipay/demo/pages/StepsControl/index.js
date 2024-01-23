Page({
    data: {
        current: 0,
        items: [
            {
                title: '步骤一',
                description: '描述信息',
            },
            {
                title: '步骤二',
                description: '描述信息',
            },
            {
                title: '步骤三',
                description: '描述信息',
            }
        ],
        iconList: [
            'SmileFill',
            '',
            'StarFill'
        ],
    },
    onNextTap() {
        if (this.data.current === this.data.items.length - 1) {
            my.alert({
                content: '完成',
            });
            return;
        }
        this.setData({
            current: this.data.current + 1,
        });
    },
    onPrevTap() {
        if (this.data.current === 0) {
            return;
        }
        this.setData({
            current: this.data.current - 1,
        });
    },
    onAddTap() {
        this.setData({
            items: [
                ...this.data.items,
                {
                    title: '步骤' + this.data.items.length
                }
            ]
        });
    }
});
