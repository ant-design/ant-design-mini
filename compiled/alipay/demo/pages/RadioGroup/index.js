Page({
    data: {
        value: 'banana',
        options: [
            { value: 'apple', label: '苹果' },
            { value: 'orange', label: '橘子' },
            { value: 'banana', label: '香蕉' },
        ],
        optionsWithDisabled: [
            { value: 'apple', label: '苹果' },
            { value: 'orange', label: '橘子' },
            { value: 'watermelon', label: '西瓜', disabled: true },
            { value: 'banana', label: '香蕉' },
        ],
        optionsWithDescription: [
            { value: 'apple', label: '苹果', description: '每天一苹果，医生远离我' },
            { value: 'orange', label: '橘子', description: '橘子不是唯一的水果' },
            { value: 'banana', label: '香蕉', description: '香蕉香蕉 banana' },
        ]
    },
    onChange(value, e) {
        console.log(value, e);
    },
    handleChange(value) {
        this.setData({
            value,
        });
    },
});
