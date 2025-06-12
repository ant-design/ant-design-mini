import equal from 'fast-deep-equal';
import {
  getAllInstanceBoundingClientRect,
  getInstanceBoundingClientRect,
} from '../_util/jsapi/get-instance-bounding-client-rect';
import {
  Component,
  getValueFromProps,
  triggerEventValues,
} from '../_util/simply';
import { IndexBarDefaultProps } from './props';

Component({
  props: IndexBarDefaultProps,
  data: {
    touchClientY: 0, // 按下触摸点所处页面的高度
    touchKeyIndex: -1, // 选中的字母
    touchKey: '', // 触发的key
    itemHeight: 16, // 每个字母的高度
    moving: false, // 滑动进行时
    showMask: false, // 打开遮罩，防止和页面的滑动重叠了
    currentKey: 0,
    topRange: [],
    hasDefaultSlot: true,
  },
  methods: {
    getInstance() {
      if (this.$id) {
        return my;
      }
      return this;
    },
    init(nextProps) {
      const { defaultCurrent, current, items } = nextProps;
      this.initItemHeight();
      /// #if ALIPAY || ALIPAYNATIVE
      this.initTopRange();
      /// #endif
      const initCurrent = this.isControlled(nextProps)
        ? current
        : defaultCurrent;
      const _index = items?.findIndex((u) => initCurrent === u.label);
      this.setData(
        {
          currentKey: _index,
          touchKeyIndex: _index,
          touchKey: initCurrent,
        },
        () => {
          this.setData({
            touchKeyIndex: -1,
            touchKey: '',
          });
        }
      );
    },
    isControlled(nextProps, valueKey = 'current') {
      if ('controlled' in nextProps) {
        return nextProps.controlled;
      }
      return valueKey in nextProps;
    },
    // 初始化每个块的高度，用已计算滑动距离
    async initItemHeight() {
      const ret = await getInstanceBoundingClientRect(
        this.getInstance(),
        `#ant-alphabet-0`
      );
      if (ret === null) return;
      const { height } = ret;
      this.setData({ itemHeight: height });
    },
    onTouchStart(e: any) {
      const { moving } = this.data;
      const items = getValueFromProps(this, 'items');
      if (moving) return;

      const { item, index } = e.currentTarget.dataset.item;
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

      this.onAlphabetClick(item, index); // 触摸开始
    },
    async onAlphabetClick(item, index) {
      const vibrate = getValueFromProps(this, 'vibrate');
      /// #if ALIPAY || ALIPAYNATIVE
      vibrate && (await my.vibrateShort());
      /// #endif
      /// #if WECHAT
      // @ts-ignore
      vibrate && (await wx.vibrateShort());
      /// #endif
      triggerEventValues(this, 'change', [item, index]);
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
      const items = getValueFromProps(this, 'items');
      const point = e.changedTouches[0];
      const movePageY = point.clientY;
      // 滑动距离
      const movingHeight = Math.abs(movePageY - touchClientY);

      // 滑动几个itemHeight的距离即等于滑动了几格，不那么精准，但是几乎可以忽略不计
      const movingNum = parseInt(`${movingHeight / itemHeight}`, 10);
      // 上 or 下
      const isUp = movePageY < touchClientY;
      // 新的触发的索引应该在哪个index
      const newIndex = isUp
        ? touchKeyIndex - movingNum
        : touchKeyIndex + movingNum;

      // 超出索引列表范围 or 索引没变化return
      if (!items[newIndex] || touchKey === items[newIndex].label) return;
      // 结算
      this.setData({ touchKey: items[newIndex].label, currentKey: newIndex });
      this.onAlphabetClick(items[newIndex], newIndex);
    },
    onScroll(e) {
      const { topRange, currentKey, moving } = this.data;
      const items = getValueFromProps(this, 'items');
      const { scrollTop } = e.detail;
      let newIndex = 0;
      if (scrollTop + 1 > topRange[topRange.length - 1]) {
        newIndex = topRange.length;
      } else {
        newIndex = topRange?.findIndex((h) => scrollTop + 1 < h);
      }
      if (currentKey !== newIndex - 1 && newIndex - 1 >= 0 && !moving) {
        this.setData({
          currentKey: newIndex - 1,
        });
        this.onAlphabetClick(items[newIndex - 1], newIndex - 1);
      }
    },
    async initTopRange() {
      const ret = await getAllInstanceBoundingClientRect(
        this.getInstance(),
        '.ant-indexbar-side-list'
      );
      if (ret.length === 0) return;
      const arr = [];
      ret.forEach((u) => {
        arr.push(u.top - ret[0].top);
      });
      this.setData({ topRange: arr, hasDefaultSlot: !!ret[0].height });
    },
  },

  /// #if ALIPAY || ALIPAYNATIVE
  didMount() {
    this.init(getValueFromProps(this));
  },
  deriveDataFromProps(nextProps) {
    const _prop = getValueFromProps(this);
    const { current, items } = nextProps;
    if (!equal(_prop.items, nextProps.items)) {
      this.init(nextProps);
    }
    if (_prop.current !== current) {
      const _index = items?.findIndex((u) => current === u.label);
      this.setData({
        currentKey: _index,
      });
      if (!this.isControlled(nextProps)) {
        this.setData({
          touchKeyIndex: _index,
          touchKey: current,
        });
      }
    }
  },
  /// #endif
  /// #if WECHAT
  attached() {
    this.init(getValueFromProps(this));
  },
  observers: {
    '**': function (data) {
      const prevData = this._prevData || this.data;
      this._prevData = { ...data };
      if (!equal(prevData.items, data.items)) {
        this.init(data.items);
      }
      if (!equal(prevData.current, data.current)) {
        const _index = data.items.findIndex((u) => data.current === u.label);
        this.setData({
          currentKey: _index,
        });
        if (!this.isControlled(data)) {
          this.setData({
            touchKeyIndex: _index,
            touchKey: data.current,
          });
        }
      }
    },
  },
  /// #endif
});
