Page({
    data: {
        baseVisible: false,
        moreVisible: false,
        swiperVisible: false,
        slotVisible: false,
        controlledVisible: false,
        current: 0,
        list: [
            {
                left: 20,
                top: 80,
                imageUrl: 'https://gw.alipayobjects.com/zos/antfincdn/IV3MGP1qL/bianzu%25252013.png',
                imageMode: 'widthFix',
            },
            {
                left: 20,
                top: 160,
                imageUrl: 'https://gw.alipayobjects.com/zos/antfincdn/%26B6d3lBJn/bianzu%25252020.png',
            },
            {
                left: 20,
                top: 220,
                imageUrl: 'https://gw.alipayobjects.com/zos/antfincdn/lwVOkCcwb/bianzu%25252021.png',
            },
        ],
    },
    onChange: function (index) {
        console.log('index', index);
    },
    onChangeControlled: function (index) {
        this.setData({ current: index });
    },
    openTour: function (e) {
        var _a;
        this.setData((_a = {},
            _a[e.target.dataset.field] = true,
            _a.current = 0,
            _a));
    },
    closeTour: function () {
        this.setData({
            baseVisible: false,
            moreVisible: false,
            swiperVisible: false,
            slotVisible: false,
            controlledVisible: false,
        });
    },
});
