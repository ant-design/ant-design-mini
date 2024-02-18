Page({
    data: {
        items1: [
            { text: '选项一', value: '1' },
            { text: '选项二', value: '2' },
            { text: '选项三', value: '3' },
            { text: '选项四', value: '4' },
            { text: '选项五', value: '5' },
            { text: '选项六', value: '6' },
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
    handleChangeValue() {
        this.setData({
            value: '3',
        });
    },
    handleChange(value, items, e) {
        this.setData({
            value: value.detail[0],
        });
        console.log(value, items, e);
    },
    onSelectMin(value, item) {
        console.log(value, item);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        wx.showModal({
            content: '不允许清空',
        });
    },
    onSelectMax() {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        wx.showModal({
            content: '选择已达上限',
        });
    },
});
