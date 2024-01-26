var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Page({
    data: {
        current: [0],
        items: [
            {
                title: '第一项',
                content: 'Pariatur dolore commodo commodo elit adipisicing sunt adipisicing ex duis labore nisi sunt. Magna ut minim deserunt. Sunt velit occaecat incididunt aliqua. Dolore officia voluptate aute reprehenderit anim excepteur elit.',
            },
            {
                title: '第二项',
                content: 'Dolor reprehenderit cillum aliqua qui id Lorem elit anim do minim mollit. Commodo id cupidatat est tempor anim. Fugiat ipsum dolor nostrud officia mollit. Aliquip aliqua pariatur tempor excepteur commodo non et adipisicing magna ex nostrud dolore cillum exercitation enim. In sunt velit laboris ullamco et in reprehenderit sit excepteur aute in dolor. Sunt minim incididunt consectetur laborum sint fugiat voluptate sunt culpa fugiat duis. Ad consectetur ad aliquip aute labore magna commodo est cupidatat.',
            },
            {
                title: '第三项',
                content: 'Ad ut ullamco exercitation do excepteur ipsum ipsum consectetur nulla fugiat est et. Occaecat ullamco nulla mollit cupidatat dolore nulla minim cillum proident laboris mollit. Veniam consectetur esse consectetur. Fugiat in laborum anim.',
            },
        ],
    },
    onChange: function (current) {
        current = current.detail;
        this.setData({
            current: current,
        });
    },
    changeContent: function () {
        var items = __spreadArray([], this.data.items, true);
        items[0].content = Math.random() + ' ' + items[0].content;
        this.setData({
            items: items,
        });
    },
    addItems: function () {
        var items = __spreadArray(__spreadArray([], this.data.items, true), [
            {
                title: this.data.items.length,
                content: 'Pariatur dolore commodo commodo elit adipisicing sunt adipisicing ex duis labore nisi sunt. Magna ut minim deserunt. Sunt velit occaecat incididunt aliqua. Dolore officia voluptate aute reprehenderit anim excepteur elit.',
            },
        ], false);
        this.setData({
            items: items,
            current: [this.data.items.length],
        });
    },
    toggle: function () {
        var _this = this;
        this.setData({
            current: this.data.items
                .map(function (item, index) { return index; })
                .filter(function (item) {
                return _this.data.current.indexOf(item) < 0;
            }),
        });
    },
});
