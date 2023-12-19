Page({
    data: {
        items1: [
            { text: '选项一', value: '1' },
            { text: '选项二', value: '2' },
            { text: '选项三', value: '3' },
        ],
        items2: [
            { text: '选项一', subText: '描述文案一', value: '1' },
            { text: '选项二', subText: '描述文案二', value: '2' },
            { text: '选项三', subText: '描述文案三', value: '3' },
        ],
        items3: [
            { text: '选项一', subText: '描述文案一', value: '1' },
            { text: '选项二', subText: '描述文案二', value: '2', disabled: true },
            { text: '选项三', subText: '描述文案三', value: '3' },
        ],
        value: '1',
    },
    handleChangeValue: function () {
        this.setData({
            value: '3',
        });
    },
    handleChange: function (value, items, e) {
        this.setData({
            value: value.detail[0],
        });
        console.log(value, items, e);
    },
    onSelectMin: function (value, item) {
        console.log(value, item);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        wx.showModal({
            content: '不允许清空',
        });
    },
});
