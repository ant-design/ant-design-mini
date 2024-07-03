Page({
    data: {
        items2: [
            {
                title: '标题文字',
                icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
            },
            {
                title: '标题文字',
                icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
            },
        ],
        items3: [
            {
                title: '标题文字',
                icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
            },
            {
                title: '标题文字',
                icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
            },
            {
                title: '标题文字',
                icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
            },
        ],
        items4: [
            {
                title: '标题文字',
                icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
            },
            {
                title: '标题文字',
                icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
            },
            {
                title: '标题文字',
                icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
            },
            {
                title: '标题文字',
                icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
            },
        ],
        items5: [
            {
                title: '标题文字',
                icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
            },
            {
                title: '标题文字',
                icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
            },
            {
                title: '标题文字',
                icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
            },
            {
                title: '标题文字',
                icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
            },
            {
                title: '标题文字',
                icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
            },
        ],
        items3withDesc: [
            {
                title: '标题文字',
                icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
                description: '描述信息',
            },
            {
                title: '标题文字',
                icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
                description: '描述信息',
            },
            {
                title: '标题文字',
                icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
                description: '描述信息',
            },
        ],
        items2withDesc: [
            {
                title: '标题文字',
                icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
                description: '描述文字最多一行',
            },
            {
                title: '标题文字',
                icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
                description: '描述文字最多一行',
            },
        ],
        itemsCustom: [
            {
                title: '标题文字',
                icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*MwsuTZI4qA8AAAAAAAAAAAAAARQnAQ',
                tag: '1',
            },
            {
                title: '标题文字',
                icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*xXRcRohQFc0AAAAAAAAAAAAAARQnAQ',
            },
            {
                title: '标题文字',
                icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*UJf2QLxdoa8AAAAAAAAAAAAAARQnAQ',
                tag: '新',
            },
            {
                title: '标题文字',
                icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*now3Q4h5DH8AAAAAAAAAAAAAARQnAQ',
            },
            {
                title: '标题文字',
                icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*I27zQbOu8ScAAAAAAAAAAAAAARQnAQ',
            },
        ],
    },
    onLoad() {
        this.setData({
            scrollItems: this.data.items4.concat(this.data.items4),
        });
    },
    handleTapItem(item) {
        my.alert({ title: '点击了', content: JSON.stringify(item) });
    },
});
