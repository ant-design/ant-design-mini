Page({
    data: {
        checked: false,
        value: ['banana'],
        options: [
            { value: 'apple', label: '苹果' },
            { value: 'orange', label: '橘子' },
            { value: 'banana', label: '香蕉' },
        ],
        customOptions: [
            {
                title: '分组一',
                list: [
                    {
                        title: '选项一',
                        value: '1',
                    },
                    {
                        title: '选项二',
                        value: '2',
                    },
                    {
                        title: '选项三',
                        value: '3',
                    },
                ],
            },
            {
                title: '分组二',
                list: [
                    {
                        title: '选项四',
                        value: '4',
                    },
                    {
                        title: '选项五',
                        value: '5',
                    },
                    {
                        title: '选项六',
                        value: '6',
                    },
                ],
            },
        ],
        customValue: [],
    },
    onChange(value, e) {
        console.log(value, e);
    },
    handleCheckedChange(checked) {
        this.setData({
            checked: checked.detail,
        });
    },
    handleValueChange(value) {
        this.setData({
            value: value.detail,
        });
    },
    toggleChange() {
        this.setData({
            checked: !this.data.checked,
        });
    },
    handleCustomChange(checked, e) {
        let value = this.data.customValue;
        const event = checked;
        if (event.detail) {
            value = value.concat(event.target.dataset.value);
        }
        else {
            value = value.filter((v) => v !== event.target.dataset.value);
        }
        this.setData({ customValue: value });
        console.log(value);
    },
});
