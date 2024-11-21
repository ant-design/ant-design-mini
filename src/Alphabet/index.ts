let d = false;

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
    onScrollIntoView: (_item: string) => {
      return _item;
    },
  },

  methods: {
    onTouchStart(e: any) {
      if (this.data.moving) return;

      const point = (e && Array.isArray(e.touches) && e.touches[0]) || {};
      const { item, index } = e.target.dataset.item;
      const { clientY } = point;

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

    onTouchMove(e: any) {
      const point = e.changedTouches[0];
      const movePageY = point.clientY;
      const { touchClientY, touchKeyIndex, touchKey, itemScrollHeight } = this.data;
      const { alphabet } = this.props;
      const movingHeight = Math.abs(movePageY - touchClientY);
      const movingNum = parseInt(`${movingHeight / itemScrollHeight}`, 10);
      const newIndex = movePageY < touchClientY ? touchKeyIndex - movingNum : touchKeyIndex + movingNum;

      if (d || !alphabet[newIndex] || touchKey === alphabet[newIndex]) return;

      d = true;
      this.setData({ touchKey: alphabet[newIndex] }, () => {
        d = false;
      });
      // @ts-ignore jsapi
      my.vibrateShort();
      this.onAlphabetClick(alphabet[newIndex]);
    },

    onTouchEnd() {
      if (!this.data.moving) return;

      setTimeout(() => this.setData({ moving: false }), 200);
      this.setData({ touchKeyIndex: -1, touchKey: '' });
    },

    onAlphabetClick(item: string) {
      const { onScrollIntoView } = this.props;

      onScrollIntoView && onScrollIntoView(item);
    },
  },
});
