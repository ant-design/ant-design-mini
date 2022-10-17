import { BladeViewDefaultProps } from './props';
import equal from 'fast-deep-equal';

Component({
  props: BladeViewDefaultProps,
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
    this.initItemHeight(() => this.initScrollId({}));
  },
  didUpdate(_prop) {
    this.initScrollId(_prop);
    if (!equal(_prop.data, this.props.data)) {
      this.initItemHeight(() => this.initScrollId({}));
    }
  },
  methods: {
    initScrollId(_prop) {
      const { type, scrollToKey, value, data } = this.props;
      if (!value && scrollToKey && _prop.scrollToKey !== scrollToKey && type !== 'only') {
        this.setData({ scrollId: `amd-blade-view-list_${scrollToKey}` });
      }
      if (value && !scrollToKey && _prop.value !== value && type !== 'only') {
        this.setData({ scrollId: `amd-blade-view-item_${value}` });
      }
      if(type === 'only' && scrollToKey !== _prop.scrollToKey) {
        const _index = data.findIndex(u => scrollToKey === u.key);
        this.setData({ currentKey: _index });
      }
    },
    // 初始化每个块的高度，用已计算滑动距离
    initItemHeight(func) {
      my.createSelectorQuery()
        .select(`#i-alphabet-0`)
        .boundingClientRect()
        .exec((ret: any) => {
          if (ret[0] === null) throw new Error('找不到元素');
          const { height } = ret[0];
          this.setData({ itemHeight: height });
        });
      my.createSelectorQuery()
        .selectAll('.list-index-item-s')
        .boundingClientRect()
        .exec((ret: any) => {
          if (ret[0] === null) throw new Error('找不到元素');
          if (ret) {
            const arr = []
            ret[0].forEach((u) => {
              arr.push(u.top - ret[0][0].top);
            });
            this.setData({ topRange: arr }, () => func());
          }
        });
    },
    onChangeGroupItem(u) {
      const { onChange } = this.props;
      const { iarr, item } = u.target.dataset.item;
      onChange && onChange(iarr, item);
    },
    async onAlphabetClick(item: object) {
      const { type, vibrate } = this.props;
      vibrate && await my.vibrateShort();
      type !== 'only' && this.setData({ scrollId: `amd-blade-view-list_${item.key}` });
    },
    onScroll(e) {
      const { currentKey } = this.data;
      const { onChangeSwipeKey, data } = this.props;
      const { scrollTop } = e.detail;
      const _currentKey = this.data.topRange.findIndex((item) => scrollTop < item - 1);
      if (currentKey !== _currentKey - 1 && _currentKey - 1 >= 0) {
        this.setData({ currentKey: _currentKey - 1 });
        onChangeSwipeKey && onChangeSwipeKey(data[_currentKey - 1]);
      }
    },
    onTouchStart(e: any) {
      const { moving } = this.data;
      const { data, type } = this.props;
      if (moving) return;

      const { item, index } = e.target.dataset.item;
      const point = (e && e.touches && e.touches[0]) || {};
      const { clientY } = point;

      this.setData({
        touchClientY: clientY,
        touchKeyIndex: index,
        touchKey: data[index].key,
        moving: true,
        showMask: true,
      });

      type === 'only' && this.setData({ currentKey: index });
      this.onAlphabetClick(item); // 触摸开始
    },
    onTouchEnd() {
      // 没进入moving状态就不处理
      const { onChangeSwipeKey, data, type } = this.props;
      if (!this.data.moving) return;
      this.setData({ 
        touchKeyIndex: -1,
        touchKey: '',
        showMask: false,
        moving: false,
      });
      type === 'only' && onChangeSwipeKey && onChangeSwipeKey(data[this.data.currentKey]);
    },
    onTouchMove(e: any) {
      const point = e.changedTouches[0];
      const movePageY = point.clientY;
      const { touchClientY, touchKeyIndex, itemHeight, touchKey } = this.data;
      const { data, type } = this.props;
      // 滑动距离
      const movingHeight = Math.abs(movePageY - touchClientY);

      // 滑动几个itemHeight的距离即等于滑动了几格，不那么精准，但是几乎可以忽略不计
      const movingNum = parseInt(`${movingHeight / itemHeight}`, 10);
      // 上 or 下
      const isUp = movePageY < touchClientY;
      // 新的触发的索引应该在哪个index
      const newIndex = isUp ? touchKeyIndex - movingNum : touchKeyIndex + movingNum;
      // 超出索引列表范围 or 索引没变化return
      if (!data[newIndex] || touchKey === data[newIndex].key) return;
      // 结算
      this.setData({ touchKey: data[newIndex].key, newIndex });
      type === 'only' && this.setData({ currentKey: newIndex });
      this.onAlphabetClick(data[newIndex]);
    },
  },
});
