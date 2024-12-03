var d = false;
Component({
    data: {
        /** 按下触摸点的高度 */
        touchClientY: 0,
        /** 选中字母的下标 */
        touchKeyIndex: -1,
        /** 选中的字母 */
        touchKey: '',
        /** 每个字母的高度 */
        itemScrollHeight: 16,
        /** 是否正在滚动 */
        moving: false,
    },
    props: {
        /** 字母表 */
        alphabet: [],
        /** 滚动到子元素，值应为某子元素的 id。当滚动到该元素时，元素顶部对齐滚动区域顶部 */
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onScrollIntoView: function (_item) {
            return _item;
        },
    },
    methods: {
        onTouchStart: function (e) {
            if (this.data.moving)
                return;
            var point = (e && Array.isArray(e.touches) && e.touches[0]) || {};
            var _a = e.target.dataset.item, item = _a.item, index = _a.index;
            var clientY = point.clientY;
            this.setData({
                touchClientY: clientY,
                touchKeyIndex: index,
                moving: true,
                touchKey: this.props.alphabet[index],
            });
            this.onAlphabetClick(item);
            // @ts-ignore jsapi
            my.vibrateShort();
        },
        onTouchMove: function (e) {
            var point = e.changedTouches[0];
            var movePageY = point.clientY;
            var _a = this.data, touchClientY = _a.touchClientY, touchKeyIndex = _a.touchKeyIndex, touchKey = _a.touchKey, itemScrollHeight = _a.itemScrollHeight;
            var alphabet = this.props.alphabet;
            var movingHeight = Math.abs(movePageY - touchClientY);
            var movingNum = parseInt("".concat(movingHeight / itemScrollHeight), 10);
            var newIndex = movePageY < touchClientY ? touchKeyIndex - movingNum : touchKeyIndex + movingNum;
            if (d || !alphabet[newIndex] || touchKey === alphabet[newIndex])
                return;
            d = true;
            this.setData({ touchKey: alphabet[newIndex] }, function () {
                d = false;
            });
            // @ts-ignore jsapi
            my.vibrateShort();
            this.onAlphabetClick(alphabet[newIndex]);
        },
        onTouchEnd: function () {
            var _this = this;
            if (!this.data.moving)
                return;
            setTimeout(function () { return _this.setData({ moving: false }); }, 200);
            this.setData({ touchKeyIndex: -1, touchKey: '' });
        },
        onAlphabetClick: function (item) {
            var onScrollIntoView = this.props.onScrollIntoView;
            onScrollIntoView && onScrollIntoView(item);
        },
    },
});
