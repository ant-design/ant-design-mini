Page({
    data: {
        visible3: true,
        visible2: false,
        visible1: false,
        visible4: false,
        selectorOption: [
            { text: '选项一', value: '1' },
            { text: '选项二', value: '2' },
            { text: '选项三', value: '3' },
            { text: '选项四', value: '4' },
            { text: '选项五', value: '5' },
            { text: '选项六', value: '6' },
        ],
        feedList: [
            {
                icon: 'HeartOutline',
                text: '喜欢推荐内容',
                id: '1'
            },
            {
                icon: 'FrownOutline',
                text: '我不感兴趣',
                id: '2',
            },
            {
                image: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ',
                text: '看过类似内容',
                id: '3',
            },
            {
                icon: 'ExclamationCircleOutline',
                text: '夸张博眼球',
                id: '4',
            },
        ],
    },
    onVisibleChange1(visible) {
        this.updateVisible('visible1', visible);
    },
    onVisibleChange3(visible) {
        this.updateVisible('visible3', visible);
    },
    onVisibleChange2(visible) {
        this.updateVisible('visible2', visible);
    },
    onVisibleChange4(visible) {
        this.updateVisible('visible4', visible);
    },
    updateVisible(field, visible) {
        this.setData({
            [field]: visible,
        });
    },
    onShowFeedback(e) {
        const filed = e.target.dataset.filed;
        this.setData({
            [filed]: true,
        });
    },
    onFeedClick2(feedItem) {
        my.showToast({
            content: `点击了反馈项${feedItem.text}`,
        });
        this.updateVisible('visible2', false);
    },
    onFeedClick4(feedItem) {
        my.showToast({
            content: `点击了反馈项${feedItem.text}`,
        });
        this.updateVisible('visible4', false);
    },
    onFeedClick3(feedItem) {
        my.showToast({
            content: `点击了反馈项${feedItem.text}`,
        });
        this.updateVisible('visible3', false);
    },
    handleTapItem() {
        my.showToast({
            content: `已反馈`,
        });
        this.updateVisible('visible1', false);
    }
});