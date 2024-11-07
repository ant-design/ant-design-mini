Page({
    data: {
        checked: false,
        value: ['banana'],
        options: [
            { value: 'apple', label: 'Apple' },
            { value: 'orange', label: 'Orange' },
            { value: 'banana', label: 'Banana' },
        ],
        customOptions: [
            {
                title: 'Group one',
                list: [
                    {
                        title: 'Option one',
                        value: '1',
                    },
                    {
                        title: 'Option two',
                        value: '2',
                    },
                    {
                        title: 'Option three',
                        value: '3',
                    },
                ],
            },
            {
                title: 'Group two',
                list: [
                    {
                        title: 'Option four',
                        value: '4',
                    },
                    {
                        title: 'Option five',
                        value: '5',
                    },
                    {
                        title: 'Option six',
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
