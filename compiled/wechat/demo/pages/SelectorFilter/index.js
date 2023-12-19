Page({
    data: {
        currentOpen: -1,
        items: [
            {
                title: '筛选项一',
                options: [
                    {
                        text: '选项一',
                        value: '1',
                    },
                    {
                        text: '选项二',
                        value: '2',
                    },
                    {
                        text: '选项三',
                        value: '3',
                    },
                    {
                        text: '选项四',
                        value: '4',
                    },
                    {
                        text: '选项五',
                        value: '5',
                    },
                ],
            },
            {
                title: '筛选项二',
                options: [
                    {
                        text: '选项一',
                        value: '1',
                    },
                    {
                        text: '选项二',
                        value: '2',
                    },
                    {
                        text: '选项三',
                        value: '3',
                    },
                ],
            },
        ],
    },
    handleChange: function (value, items, e) {
        console.log(value, items, e);
    },
    onTapItem: function (e) {
        console.log(e);
        var index = e.currentTarget.dataset.index;
        var currentOpen = this.data.currentOpen;
        var value = index;
        if (currentOpen === index) {
            value = -1;
        }
        this.setData({ currentOpen: value });
    },
});
