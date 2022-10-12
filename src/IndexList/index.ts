import { IndexListDefaultProps } from './props';

Component({
  props: IndexListDefaultProps,
  data: {
    touchClientY: 0, // 按下触摸点所处页面的高度
    touchKeyIndex: -1, // 选中的字母
    touchKey: '', // 触发的key
    itemHeight: 16, // 每个字母的高度
    moving: false, // 滑动进行时
    showMask: false, // 打开遮罩，防止和页面的滑动重叠了
    scrollId: '',
    topRange: [],
    currentKey: 0,
  },
  didMount() {
    this.initItemHeight();
    this.initScrollId({});
    this.updateCurrentKey({});
  },
  didUpdate(_prop) {
    this.initScrollId(_prop);
    this.updateCurrentKey(_prop);
  },
  methods: {
    initScrollId(_prop) {
      const { type, scrollToKey } = this.props;
      if (_prop.scrollToKey !== scrollToKey && type !== 'only') {
        this.setData({ scrollId: `base-index-item_index-${scrollToKey}` });
      }
    },
    updateCurrentKey(_prop) {
      const { type, scrollToKey, indexList } = this.props;
      if (_prop.scrollToKey !== scrollToKey && type === 'only') {
        const _index = indexList.findIndex(u => u === scrollToKey)
        this.setData({ currentKey: _index < 0 ? 0 : _index });
      }
    },
    // 初始化每个块的高度，用已计算滑动距离
    initItemHeight() {
      my.createSelectorQuery()
        .select(`#i-alphabet-0`)
        .boundingClientRect()
        .exec((ret: any) => {
          const { height } = ret[0];
          this.setData({ itemHeight: height });
        });
      my.createSelectorQuery()
        .selectAll('.list-index-item-s')
        .boundingClientRect()
        .exec((ret: any) => {
          if (ret) {
            const arr = []
            ret[0].forEach((u) => {
              arr.push(u.top - ret[0][0].top);
            });
            this.setData({ topRange: arr });
          }
        });
    },
    async onAlphabetClick(key: string) {
      const { type, vibrate } = this.props;
      vibrate && await my.vibrateShort();
      this.props.onChange(key);
      type !== 'only' && this.setData({ scrollId: `base-index-item_index-${key}` });
    },
    onScroll(e) {
      const { currentKey } = this.data;
      const { indexList } = this.props;
      const { scrollTop } = e.detail;
      const _currentKey = this.data.topRange.findIndex((item) => scrollTop < item - 1);
      if (currentKey !== _currentKey - 1 && _currentKey - 1 >= 0) {
        this.setData({ currentKey: _currentKey - 1 });
        this.props.onChange(indexList[_currentKey - 1]);
      }
    },
    onTouchStart(e: any) {
      const { moving } = this.data;
      const { indexList, type } = this.props;
      if (moving) return;

      const { item, index } = e.target.dataset.item;
      const point = (e && e.touches && e.touches[0]) || {};
      const { clientY } = point;

      this.setData({
        touchClientY: clientY,
        touchKeyIndex: index,
        touchKey: indexList[index],
        moving: true,
        showMask: true,
      });

      type === 'only' && this.setData({ currentKey: index });
      this.onAlphabetClick(item); // 触摸开始
    },
    onTouchEnd() {
      // 没进入moving状态就不处理
      if (!this.data.moving) return;
      this.setData({ 
        touchKeyIndex: -1,
        touchKey: '',
        showMask: false,
        moving: false,
      });
    },
    onTouchMove(e: any) {
      const point = e.changedTouches[0];
      const movePageY = point.clientY;
      const { touchClientY, touchKeyIndex, itemHeight, touchKey } = this.data;
      const { indexList, type } = this.props;
      // 滑动距离
      const movingHeight = Math.abs(movePageY - touchClientY);

      // 滑动几个itemHeight的距离即等于滑动了几格，不那么精准，但是几乎可以忽略不计
      const movingNum = parseInt(`${movingHeight / itemHeight}`, 10);
      // 上 or 下
      const isUp = movePageY < touchClientY;
      // 新的触发的索引应该在哪个index
      const newIndex = isUp ? touchKeyIndex - movingNum : touchKeyIndex + movingNum;
      // 超出索引列表范围 or 索引没变化return
      if (!indexList[newIndex] || touchKey === indexList[newIndex]) return;
      // 结算
      this.setData({ touchKey: indexList[newIndex], newIndex });
      type === 'only' && this.setData({ currentKey: newIndex });
      this.onAlphabetClick(indexList[newIndex]);
    },
  },
});
