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
    onChange(current) {
        this.setData({
            current,
        });
    },
    changeContent() {
        const items = [...this.data.items];
        items[0].content = Math.random() + ' ' + items[0].content;
        this.setData({
            items,
        });
    },
    addItems() {
        const items = [
            ...this.data.items,
            {
                title: this.data.items.length,
                content: 'Pariatur dolore commodo commodo elit adipisicing sunt adipisicing ex duis labore nisi sunt. Magna ut minim deserunt. Sunt velit occaecat incididunt aliqua. Dolore officia voluptate aute reprehenderit anim excepteur elit.',
            },
        ];
        this.setData({
            items,
            current: [this.data.items.length],
        });
    },
    toggle() {
        this.setData({
            current: this.data.items
                .map((item, index) => index)
                .filter((item) => {
                return this.data.current.indexOf(item) < 0;
            }),
        });
    },
});
