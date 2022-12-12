import { IndexbarDefaultProps } from './props';

Component({
  props: IndexbarDefaultProps,
  data: {
    touchClientY: 0, // 按下触摸点所处页面的高度
    touchKeyIndex: -1, // 选中的字母
    touchKey: '', // 触发的key
    itemHeight: 16, // 每个字母的高度
    moving: false, // 滑动进行时
    showMask: false, // 打开遮罩，防止和页面的滑动重叠了
    currentKey: 0,
  },
  didMount() {
    const { defaultCurrent, items } = this.props;    
    this.initItemHeight();
    const _index = items.findIndex(u => defaultCurrent === u.label);
    this.setData({ currentKey: _index });
  },
  didUpdate(_prop) {
    const { current, items } = this.props;
    if (_prop.current !== current) {
      const _index = items.findIndex(u => current === u.label);
      this.setData({ currentKey: _index });
    }
  },
  methods: {
    // 初始化每个块的高度，用已计算滑动距离
    initItemHeight() {
      my.createSelectorQuery()
        .select(`amd-alphabet-0`)
        .boundingClientRect()
        .exec((ret: any) => {
          if (ret[0] === null) throw new Error('找不到Indexbar元素');
          const { height } = ret[0];
          this.setData({ itemHeight: height });
        });
    },
    onTouchStart(e: any) {
      const { moving } = this.data;
      const { items } = this.props;
      if (moving) return;

      const { item, index } = e.target.dataset.item;
      const point = (e && e.touches && e.touches[0]) || {};
      const { clientY } = point;

      this.setData({
        touchClientY: clientY,
        touchKeyIndex: index,
        touchKey: items[index].label,
        moving: true,
        showMask: true,
        currentKey: index,
      });

      this.onAlphabetClick(item); // 触摸开始
    },
    async onAlphabetClick(item) {
      const { vibrate, onChange } = this.props;
      vibrate && await my.vibrateShort();
      onChange(item);
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
      const { touchClientY, touchKeyIndex, itemHeight, touchKey } = this.data;
      const { items } = this.props;
      const point = e.changedTouches[0];
      const movePageY = point.clientY;
      // 滑动距离
      const movingHeight = Math.abs(movePageY - touchClientY);

      // 滑动几个itemHeight的距离即等于滑动了几格，不那么精准，但是几乎可以忽略不计
      const movingNum = parseInt(`${movingHeight / itemHeight}`, 10);
      // 上 or 下
      const isUp = movePageY < touchClientY;
      // 新的触发的索引应该在哪个index
      const newIndex = isUp ? touchKeyIndex - movingNum : touchKeyIndex + movingNum;
      
      // 超出索引列表范围 or 索引没变化return
      if (!items[newIndex] || touchKey === items[newIndex].label) return;
      // 结算
      this.setData({ touchKey: items[newIndex].label, newIndex, currentKey: newIndex });
      this.onAlphabetClick(items[newIndex]);
    },
  },
});