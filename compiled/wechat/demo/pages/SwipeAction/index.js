Page({
    data: {
        rightBtns: [
            {
                text: '取消关注',
                bgColor: '#CCCCCC',
                color: '#fff',
                width: 200,
            },
            {
                text: '免打扰',
                bgColor: '#1677FF',
                color: '#fff',
                width: 170,
            },
            {
                text: '删除',
                bgColor: '#FF2B00',
                color: '#fff',
                width: 140,
            },
        ],
        swipeIndex: -1,
    },
    onSwipeStart() {
        this.setData({ swipeIndex: '' });
    },
    onSwipeEnd(args1, args2) {
        let e, data;
        e = args1;
        data = args1.detail;
        const { index } = e.target.dataset.item;
        data.swiped && this.setData({ swipeIndex: index });
    },
    onButtonTap(data, e) {
        console.log(data, e);
    },
});
